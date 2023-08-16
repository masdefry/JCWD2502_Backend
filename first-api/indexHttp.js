const http = require('http');

const PORT = 5000

const fs = require('fs')

const server = http.createServer(async (req, res) => {
    if(req.url === '/' && req.method === 'GET'){
        res.writeHead(200, 'Ok')
        res.write('<h1>Hello, World!</h1>')
        res.end()
    }else if(req.url === '/users'){
        if(req.method === 'GET'){
            const {users} = JSON.parse(fs.readFileSync('./db/db.json'))
            
            res.writeHead(200, 'Ok')
            res.write(JSON.stringify(users))
            res.end()
        }else if(req.method === 'POST'){
            
        }
    }
})

server.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`)
})