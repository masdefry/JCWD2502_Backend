const jwt = require('jsonwebtoken')

module.exports = {
    createJWT: (payload) => {
        try {
            return jwt.sign(payload, 'abc123', {
                expiresIn: '1h'
            })
        } catch (error) {
            return error
        }
    }
}