const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'masdefry20@gmail.com', // Email Sender
        pass: 'kkzgdmhnsnswygpj' // Key Generate
    },
    tls: {
        rejectUnauthorized: false
    }
})
module.exports = transporter