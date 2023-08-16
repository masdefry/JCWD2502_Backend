const express = require('express')
const app = express()
app.use(express.json()) // Untuk Mengambil Data dari Request

const PORT = 5000

const fs = require('fs')

app.get('/', (req, res) => {
    res.send('<h1> Welcome to My First API </h1>')
})

app.get('/users', (req, res) => {
    const {users} = JSON.parse(fs.readFileSync('./db/db.json'))
    
    res.send(users)
})

app.post('/register', (req, res) => {
    // 1. Ambil data dari req.body
    const dataUsers = req.body 

    // 2. Ambil data db.json
    const data = JSON.parse(fs.readFileSync('./db/db.json')) // [{}]

    // 3. Manipulasi (add new data)
    for (const value of data.users) {
        if(value.username === dataUsers.username) return res.send('Account Already Registered!')
    }

    // 4. Simpan data db.json
    data.users.push({...dataUsers, id: data.users[data.users.length-1].id + 1})
    fs.writeFileSync('./db/db.json', JSON.stringify(data))
    res.send('Register Success')
    
})

app.get('/login', (req, res) => {
    const dataUsers = req.query 

    const data = JSON.parse(fs.readFileSync('./db/db.json')) // [{}]

    for (const value of data.users) {
        if(value.username === dataUsers.username && value.password === dataUsers.password) return res.send({message: 'Login Success', data: {id: 1}})
    }

    res.send('Login Failed')
})

app.listen(PORT, () =>  console.log(`API Running on Port ${PORT}`))



// Buatlah endpoint backend untuk fitur multiple filter yg ada di Erigo