const fs = require('fs');

module.exports = {
    getUsers: (req, res) => {
        const {users} = JSON.parse(fs.readFileSync('./db/db.json'))
    
        res.send(users)
    },

    postUsers: (req, res) => {
        // ...
    }
}