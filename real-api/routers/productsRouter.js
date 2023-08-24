const express = require('express')
const Router = express.Router()

// Import All Controller
const {productsController} = require('../controllers')

Router.get('/filter', productsController.filterProducts)
Router.get('/detail/:id', productsController.detail)

module.exports = Router