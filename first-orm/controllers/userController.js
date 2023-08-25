const db = require('./../models');

module.exports = {
    findUsers: async(req, res) => {
        try {
            const findUsers = await db.user.findAll()
            console.log(findUsers)
        } catch (error) {
            console.log(error)
        }
    }
}