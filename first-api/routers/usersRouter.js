const express = require('express')
const Router = express.Router()

// Import Controller
const {usersController} = require('./../controllers') // Akan otomatis membaca index.js nya

Router.get('/', usersController.getUsers)
Router.post('/', usersController.postUsers)

module.exports = Router
