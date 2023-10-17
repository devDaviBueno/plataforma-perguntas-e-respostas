const Sequelize = require("sequelize")

const NomeDatabase = 'plataforma'
const usuarioDatabase = 'root'
const senhaDatabase = 'T3r2d1e0'

const connection = new Sequelize(NomeDatabase,usuarioDatabase,senhaDatabase,{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection