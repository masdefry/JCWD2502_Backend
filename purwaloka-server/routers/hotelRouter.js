const express = require('express')
const Router = express.Router()

// Import All Controller
const {hotelController} = require('../controllers')

Router.get('/', hotelController.search)

module.exports = Router