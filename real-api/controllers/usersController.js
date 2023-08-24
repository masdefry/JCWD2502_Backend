const conn = require('./../connection/conn');
const util = require('util');
const query = util.promisify(conn.query).bind(conn)

module.exports = {
    register: async(req, res) => {
        try {
            await query('START TRANSACTION')
            // Step-01. Ambil data users from body
            const {username, email, adress, city, province} = req.body

            // Step-02. Validasi email dan username unregistered
            const findEmailOrUsername = await query('SELECT * FROM users WHERE email = ? OR username = ?', [email, username])
            

            // Step-03. If email or username registered, send response
            if(findEmailOrUsername.length) return res.status(200).send({
                isError: true, 
                message: 'Email or Username Already Register', 
                data: null
            })

            // Step-04. If email or username available, insert
            const insertUser = await query('INSERT INTO users SET ?', {username, email})
            await query('INSERT INTO users_adress SET ?', {adress, city, province, users_id: insertUser.insertId})
            
            await query('COMMIT')

            // Step-05. Send response success
            res.status(201).send({
                isError: false, 
                message: 'Account Successfully Register', 
                data: null
            })
        } catch (error) {
            await query('ROLLBACK')
            console.log(error)
        }
    }
}