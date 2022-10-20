
const nodemailer = require('nodemailer');


const ConfigServerEmail = nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:465,
    secure: true,
    auth:{
        user: 'carrarapets@gmail.com',
        pass: 'absfbfjzngnldxkm'

    }
});



module.exports = ConfigServerEmail;
