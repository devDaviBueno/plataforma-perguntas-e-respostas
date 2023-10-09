const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const connection = require("./database/database")
const pergunta = require("./database/pergunta")
const resposta = require("./database/resposta")
const feedback = require("./database/feedback")

const porta = 5050

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

connection
    .authenticate()
    .then(() => {
        console.log("conexao com o BD feita com sucesso")
    })
    .catch((msgErro) => {
        console.log(msgErro)
    })

app.set('view engine','ejs')
app.use(express.static('public'))

app.post("/receberfeedback",(req,res)=>{
    var feedback_enviado = req.body.feedback
    feedback.create({
        feedback: feedback_enviado
    }).then(()=>{
        res.redirect("/feedback")
    })
})

app.get("/",(req,res)=>{
    pergunta.findAll({
        raw:false,
        order: [
            ['id','DESC']
        ]
    }).then((table_perguntas)=>{
        res.render("index",{
            table_perguntas: table_perguntas
        })
    })
   
})

app.post("/receberresposta",(req,res)=>{
    var resposta_pergunta = req.body.resposta
    var resposta_id = req.body.resposta_id
    resposta.create({
        resposta: resposta_pergunta,
        respostaId: resposta_id
    }).then(()=>{
        res.redirect("/pergunta/"+resposta_id)
    })
})  

app.get("/perguntar",(req,res)=>{
    res.render("perguntar")
})

app.get("/feedback",(req,res)=>{
    feedback.findAll({
        raw:false,
        order: [['id','DESC']]
    }).then((feedback_database)=>{
        res.render("feedback",{
        feedback_database: feedback_database
        })
    })
})

app.get("/sobre",(req,res)=>{
    res.render("sobre")
})

app.post("/receberpergunta",(req,res)=>{
    var titulo = req.body.titulo
    var descricao = req.body.descricao
    pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(()=>{
        res.redirect("/")
    })
})  

.get("/pergunta/:id",(req,res)=>{
    var pergunta_id = req.params.id
    pergunta.findOne({
        where: {id: pergunta_id}
    }).then((table_pergunta)=>{
        resposta.findAll({
            where: {respostaId: pergunta_id}
        }).then((resposta_enviada)=>{
            res.render("verpergunta",{
                table_pergunta: table_pergunta,
                resposta_enviada: resposta_enviada
              })
        })
    
    })
})


app.listen(porta,()=>{
    console.log("servidor aberto na pora",porta)
})