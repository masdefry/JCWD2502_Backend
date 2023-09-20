const db = require('./../models');

module.exports = {
    findUsersss: async(username) => {
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