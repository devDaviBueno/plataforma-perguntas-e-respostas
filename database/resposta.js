const Seqquelize = require("sequelize")
const connection = require("./database")

const resposta = connection.define('respostas',{
    resposta:{
        type: Seqquelize.STRING,
        allowNull: false
    },
    respostaId:{
        type: Seqquelize.INTEGER,
        allowNull: false
    }
})

resposta.sync({force:false})

module.exports = resposta

