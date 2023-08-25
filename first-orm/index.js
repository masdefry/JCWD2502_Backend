const express = require('express')
const app = express()
app.use(express.json()) // Body Parser: Mengambil data yang dikirimkan oleh client melalui body

const PORT = 5000

app.get('/', (req, res) => {
    res.status(201).send('<h1>Welcome to JCWD-2502 API</h1>')
})

// Import Router
const {userRouter} = require('./routers')
app.use('/user', userRouter)

app.listen(PORT, () =>  console.log(`API Running on Port ${PORT}`))