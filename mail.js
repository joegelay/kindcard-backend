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

const sendMail = (email, card, location, story) => {
    const mailOptions = {
        from: email,
        to: 'kindcardmap@gmail.com',
        subject: 'New Story Submission',
        text: `
            Card #: ${card} 
            Location: ${location}
            Story: ${story}
        `
    }
    
    transporter.sendMail(mailOptions)
}

module.exports = sendMail;