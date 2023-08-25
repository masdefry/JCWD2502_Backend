const express = require('express')
const Router = express.Router()

// Import All Controller
const {userController} = require('../controllers')

Router.get('/', userController.findUsers)

module.exports = Router