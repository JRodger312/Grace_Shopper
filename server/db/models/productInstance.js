const Sequelize = require('sequelize')
const db = require('../db')

const ProductInstance = db.define('productInstance', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: {args: 1, msg: 'name must be provided'}
    }
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: {args: 1, msg: 'product must have a category'}
    }
  },
  price: {
    type: Sequelize.INTEGER,
    validate: {
      min: {args: 1, msg: 'price of at least one dollar is required'}
    }
  },
  color: {
    type: Sequelize.STRING,
    allowNull: false
  },
  size: {
    type: Sequelize.STRING,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  }
})

module.exports = ProductInstance