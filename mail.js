"use strict";
const nodemailer = require("nodemailer");

require('dotenv').config();



let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_ID,
        pass: process.env.GMAIL_PWD
    }
});
module.exports = {
    mailing: function(receipent, name) {
        let mailDetails = {
            from: 'sohamshah.ict18@gmail.com',
            to: receipent,
            subject: 'Thank you - from PAINTROBS Team',
            html: "Dear <b>" + name + "</b>,<br/>Really happy to connect with you. Our team will respond to you shortly.<br/> Regards, <br/> Team PAINTROBS.<span>"
        };

        mailTransporter.sendMail(mailDetails, function(err, data) {
            if (err) {
                console.log('Error Occurs');
            } else {
                console.log('Email sent successfully');
            }
        });
    }
}