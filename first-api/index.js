const express = require('express')
const app = express()
app.use(express.json()) // Untuk Mengambil Data dari Request

const PORT = 5000

app.get('/', (req, res) => {
    res.send('<h1> Welcome to My First API </h1>')
})

// Import Routers
const {usersRouter, moviesRouter} = require('./routers')
app.use('/users', usersRouter)
app.use('/movies', moviesRouter)

app.listen(PORT, () =>  console.log(`API Running on Port ${PORT}`))



// Buatlah endpoint backend untuk fitur multiple filter yg ada di Erigo