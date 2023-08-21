const express = require('express')
const Router = express.Router()

// Import Controller
const {expensesController} = require('./../controllers') // Akan otomatis membaca index.js nya

// Import Middleware
const {apiKey} = require('./../middleware/apiKey')

Router.patch('/:id', expensesController.updateExpense)

module.exports = Router
