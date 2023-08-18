const express = require('express')
const Router = express.Router()

// Import Controller
const {moviesController} = require('./../controllers') // Akan otomatis membaca index.js nya

// Import Middleware
const {apiKey} = require('./../middleware/apiKey')

Router.get('/', apiKey, moviesController.filter)

module.exports = Router
