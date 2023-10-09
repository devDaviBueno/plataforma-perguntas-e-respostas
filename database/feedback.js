const Sequelize = require("sequelize")
const connection = require("./database")

const feedback = connection.define('feedback',{
    feedback:{
        type:Sequelize.TEXT,
        allowNull: false
    }
})

feedback.sync({force:false})

module.exports = feedback