const Sequelize = require("sequelize")
const db = {}
const sequelize = new Sequelize("nodejs_login1", "root", "toor", {
    host: "localhost",
    dialect: "mysql",
    operatorsAliases: false,

    pol: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

db.sequelize = sequelize
db.sequelize = Sequelize

module.exports = db