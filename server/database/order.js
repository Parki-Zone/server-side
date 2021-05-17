const Sequelize = require('sequelize')
const order = require('../models/order')

const config = require('./config')


const sequelize = new Sequelize( config.DATABASE_NAME, config.USERNAME, config.PASSWORD, {
    host: config.HOST,
    dialect: config.DIALECT,
    dialectOptions: {connectTimeout: 1000}
})


const Order = order(sequelize, Sequelize)
console.log("hello from orders",Order);

sequelize.sync({ force: false}).then(() => {
    console.log('your table orders is there');
})

module.exports = {Order, sequelize}