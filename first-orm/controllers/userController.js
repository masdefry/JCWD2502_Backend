const db = require('./../models');

module.exports = {
    findUsers: async(req, res) => {
        try {
            const findUsers = await db.user.findAll()
            console.log(findUsers)
        } catch (error) {
            console.log(error)
        }
    },

    createUser: async(req, res) => {
        try {
            // Step-01. Ambil data dari client
            const {username, email, password, consignee, address, phone_number} = req.body

            // Step-02. Validasi

            // Step-03. Insert
            const createUser = await db.user.create({username, email, password})
            const createAddress = await db.useraddress.create({
                consignee, 
                address, 
                phone_number, 
                user_id: createUser.dataValues.id
            })
            
            // Step-04. Kirim response
            res.status(201).send({
                isError: false, 
                message: 'Create Success', 
                data: null
            })
        } catch (error) {
            console.log(error)
        }
    },

    updateAddress: async(req, res) => {
        try {
            const {consignee, address, phone_number} = req.body 
            const {addressId} = req.params

            const findIsExist = await db.useraddress.findOne({where: {id: addressId}})
       
            if(!findIsExist.dataValues) return res.status(400).send({
                isError: true, 
                message: 'Address Not Found', 
                data: null 
            })

            await db.useraddress.update({
                consignee, address, phone_number
            }, {
                where: {id: addressId}
            })

            res.status(201).send({
                isError: false, 
                message: 'Update Success', 
                data: null
            })
        } catch (error) {
            
        }
    },

    deleteAccount: async(req, res) => {
        try {
            const {userId} = req.params 

            await db.useraddress.destroy({where: {user_id: userId}})
            await db.user.destroy({where: {id: userId}})

            res.status(200).send({
                isError: false, 
                message: 'Delete Success', 
                data: null
            })
        } catch (error) {
            
        }
    }
}