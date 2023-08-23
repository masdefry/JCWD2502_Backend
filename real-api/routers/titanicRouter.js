const express = require('express')
const Router = express.Router()

// Import All Controller
const {titanicController} = require('../controllers')

Router.get('/', titanicController.findPassengers)
Router.get('/name', titanicController.findPassenger)

module.exports = Router