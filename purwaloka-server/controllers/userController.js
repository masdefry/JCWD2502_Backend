const db = require('./../models');
const {sequelize} = require('./../models')
const {createJWT} = require('./../lib/jwt');
const transporter = require('../helper/transporter')
const fs = require('fs').promises;
const handlebars = require('handlebars')

module.exports = {
    register: async(req, res, next) => {
        try {
            const {username, email, password} = req.body

            const createUser = await db.users.create({username, email, password})

            const readTemplate = await fs.readFile('./public/template.html', 'utf-8')
            const compiledTemplate = await handlebars.compile(readTemplate)
            const newTemplate = compiledTemplate({username, email})
            
            await transporter.sendMail({
                from: 'Purwaloka', 
                to: 'defryan@purwadhika.com', 
                subject: 'Register Success!', 
                html: newTemplate
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