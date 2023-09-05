const db = require('./../models');
const {sequelize} = require('./../models')
const {createJWT} = require('./../lib/jwt');
const transporter = require('../helper/transporter')

module.exports = {
    register: async(req, res, next) => {
        try {
            const {username, email, password} = req.body

            const createUser = await db.users.create({username, email, password})
            
            await transporter.sendMail({
                from: 'Purwaloka', 
                to: 'defryan@purwadhika.com', 
                subject: 'Register Success!', 
                html: '<h1>Register Success</h1>'
            })

            res.status(200).send({
                isError: false, 
                message: 'Register Success', 
                data: null
            })
        } catch (error) {
            console.log(error)
        }
    },

    login: async(req, res) => {
        try {
            const {username, password} = req.query

            const findUser = await db.users.findOne({
                where: {
                    username, password
                }
            })

            const token = await createJWT({id: findUser.dataValues.id})
            
            res.status(200).send({
                isError: false, 
                message: 'Login Success', 
                data: token
            })
        } catch (error) {
            
        }
    }
}