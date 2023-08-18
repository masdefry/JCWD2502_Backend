const express = require('express')
const Router = express.Router()

// Import Controller
const {usersController} = require('./../controllers') // Akan otomatis membaca index.js nya

// Import Middleware
const {apiKey} = require('./../middleware/apiKey')

Router.get('/', apiKey, usersController.getUsers)
Router.post('/', apiKey, usersController.postUsers)

module.exports = Router