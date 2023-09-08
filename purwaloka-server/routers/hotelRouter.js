const express = require('express')
const Router = express.Router()

// Import All Controller
const {hotelController} = require('../controllers')

// Import Upload
const upload = require('./../middleware/upload');

Router.get('/', hotelController.search)
Router.post('/', upload, hotelController.create)
Router.patch('/:idImage', upload, hotelController.update)

module.exports = Router