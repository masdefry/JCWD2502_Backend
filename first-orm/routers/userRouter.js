const express = require('express')
const Router = express.Router()

// Import All Controller
const {userController} = require('../controllers')

Router.get('/', userController.findUsers)
Router.post('/', userController.createUser)
Router.patch('/:addressId', userController.updateAddress)
Router.delete('/:userId', userController.updateAddress)

module.exports = Router