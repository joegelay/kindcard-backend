require("dotenv").config()

const nodemailer = require('nodemailer')
const mailGun = require('nodemailer-mailgun-transport')

const auth = {
    auth: {
        api_key: process.env.EMAIL_KEY,
        domain: 'sandbox995f7ef610e34ea29393c19b15bf0fa6.mailgun.org'
    }
}

const transporter = nodemailer.createTransport(mailGun(auth))

const sendMail = (email, text) => {
    const mailOptions = {
        from: 'kindcardmap@gmail.com',
        to: 'kindcardmap@gmail.com',
        subject: 'New Story Submission',
        text: 'Testing nodemailer!'
    }
    
    transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
            console.log('Mailer error')
        } else {
            console.log('Message sent!!!')
        }
    })
}
