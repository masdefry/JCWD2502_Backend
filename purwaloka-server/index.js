const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json()) // Body Parser: Mengambil data yang dikirimkan oleh client melalui body

const PORT = 5000

app.get('/', (req, res) => {
    res.status(201).send('<h1>Welcome to JCWD-2502 API</h1>')
})

// Import Router
const {hotelRouter, userRouter} = require('./routers')
app.use('/user', userRouter)
app.use('/hotel', hotelRouter)

app.listen(PORT, () =>  console.log(`API Running on Port ${PORT}`))