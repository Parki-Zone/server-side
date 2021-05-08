const Sequelize = require('sequelize')
const Cards =require('../models/CardUser')

const config = require('./config')


const sequelize = new Sequelize( config.DATABASE_NAME, config.USERNAME, config.PASSWORD, {
    host: config.HOST,
    dialect: config.DIALECT,
    dialectOptions: {connectTimeout: 1000}
})


const card = Cards(sequelize, Sequelize)
console.log("hello from cArds",card)

sequelize.sync({ force: false}).then(() => {
    console.log('your table users is there');
})
module.exports = card
