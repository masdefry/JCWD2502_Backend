const express = require('express')
const Router = express.Router()

// Import All Controller
const {userController} = require('../controllers')

Router.post('/', userController.register)
Router.get('/', userController.login)

module.exports = Router