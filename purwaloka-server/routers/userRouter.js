const express = require('express')
const Router = express.Router()

// Import All Controller
const {userController} = require('../controllers')

const {verify} = require('./../lib/jwt')

Router.post('/', userController.register)
Router.get('/', userController.login)
Router.patch('/', verify, userController.verifyUser)

module.exports = Router