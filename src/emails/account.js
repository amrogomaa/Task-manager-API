const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeMail = (email, name)=>{
    sgMail.send({
        to: email,
        from: 'amroabdulbassetgomaa@gmail.com',
        subject: 'Thanks for joining in',
        text: `Hello ${name}, Welcome to our site, let us know how you get along with our app! `
    })
}

const sendCancelationMail = (email, name)=>{
    sgMail.send({
        to: email,
        from: 'amroabdulbassetgomaa@gmail.com',
        subject: 'goodbye, Hope we see you soon !',
        text: `Hi ${name}, We are sorry That you are leaving, tell us if we can improve our site experience !`
    })
}

module.exports = {
    sendWelcomeMail,
    sendCancelationMail
}