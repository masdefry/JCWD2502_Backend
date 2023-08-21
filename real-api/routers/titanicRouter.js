const express = require('express')
const Router = express.Router()

// Import All Controller
const {titanicController} = require('../controllers')

Router.get('/', titanicController.findPassengers)

module.exports = Router