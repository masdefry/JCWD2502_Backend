const db = require('./../models');
const {sequelize} = require('./../models');
const {createJWT} = require('./../lib/jwt');
const transporter = require('../helper/transporter');
const fs = require('fs').promises;
const handlebars = require('handlebars');
const {hash, match} = require('./../helper/hashing');

// Import Services
const {findUsersss} = require('./../services/userService');

module.exports = {
    register: async(req, res, next) => {
        try {
            const {username, email, password} = req.body

            if(!username || !email || !password) throw {message: 'Data Not Completed!'}

            const checkUser = await db.users.findAll({where: {email, username}})

            if(checkUser.length > 0) throw {message: 'Email or Username Already Register'}
            
            const code = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
            const hashPassword = await hash(password)
            
            const createUser = await db.users.create({username, email, password: hashPassword, code})

            const tkn = await createJWT({id: createUser.dataValues.id}, '1h')
            const tkn1 = await createJWT({id: createUser.dataValues.id}, '365d')

            const readTemplate = await fs.readFile('./public/template.html', 'utf-8')
            const compiledTemplate = await handlebars.compile(readTemplate)
            const newTemplate = compiledTemplate({username, email, tkn, code, tkn1})
            
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
            next(error)
        }
    },

    login: async(req, res, next) => {
        try {
            const {username, password} = req.query

            const findUser = await findUsersss(username)

            if(!findUser) throw {message: 'User Not Found!'}
            const hashMatch = await match(password, findUser.dataValues.password)
            
            if(!hashMatch) throw {message: 'Wrong Password!'}
            const token = await createJWT({id: findUser.dataValues.id})
            
            res.status(200).send({
                isError: false, 
                message: 'Login Success', 
                data: token
            })
        } catch (error) {
            next(error)
        }
    },

    verifyUser: async(req, res) => {
        try {
            const {id} = req.dataToken
            const {code} = req.body 

            if(code){
                const checkCode = await db.users.findOne({
                    where: {
                        id, code
                    }
                })
                if(!checkCode) throw {message: 'Code Not Valid!'}
            }

            await db.users.update(
                {
                    is_verified: 'Verified'
                },
                {
                    where: {id}
                }
            )

            res.status(201).send({
                isError: false, 
                message: 'Account Already Verified', 
                data: null
            })
        } catch (error) {
            next(error)
        }
    }
}