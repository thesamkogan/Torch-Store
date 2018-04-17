const Sequelize = require('sequelize')
const db = require('../db')

const CartItem = db.define('cart-item', {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  }
})

module.exports = CartItem

