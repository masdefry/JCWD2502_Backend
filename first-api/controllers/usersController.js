const fs = require('fs');

module.exports = {
    getUsers: (req, res) => {
        const {users} = JSON.parse(fs.readFileSync('./db/db.json'))
    
        res.send(users)
    },

    register: (req, res) => {
        try {
            console.log('>>>')
            // 1. Ambil data dari req.body
            const dataUsers = req.body 

            // 2. Ambil data db.json
            const data = JSON.parse(fs.readFileSync('./db/db.json')) // [{}]

            // 3. Manipulasi (add new data)
            for (const value of data.users) {
                if(value.username === dataUsers.username) return res.status(200).send({
                    isError: true, 
                    message: 'Account Already Exist'
                })
            }

            // 4. Simpan data db.json
            data.users.push({...dataUsers, role: 'User', id: data.users[data.users.length-1].id + 1})
            fs.writeFileSync('./db/db.json', JSON.stringify(data))
            res.status(200).send({
                isError: false, 
                message: 'Register Success'
            })
        } catch (error) {
            res.status(500). send({
                isError: true, 
                message: 'Register Failed!'
            })
        }
    }
}