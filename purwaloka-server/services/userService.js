const db = require('./../models');

module.exports = {
    findUser: async(username) => {
        try {
            return await db.users.findOne({
                where: {
                    username
                }
            })
        } catch (error) {
            return error
        }
    }
}