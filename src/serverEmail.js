
require('dotenv').config();
const nodemailer = require('nodemailer');





class SendEmails {
  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: "carrarapets@gmail.com",
        pass: "absfbfjzngnldxkm"
      }
    });
  }

  async enviarEmailVerificacao(destinatario, codigoVerificacao) {
    try {
      const info = await this.transporter.sendMail({
        from: "carrarapets@gmail.com",
        to: destinatario,
        subject: 'Verificação de e-mail',
        text: `Seu código de verificação: ${codigoVerificacao}`
      });
      console.log('E-mail enviado:', info.messageId);
    } catch (error) {
      console.error('Erro ao enviar o e-mail:', error);
    }
  }

  async enviarEmailPedido(destinatario, corpo) {
    try {
      const info = await this.transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: destinatario,
        subject: 'Verificação de e-mail',
        text:  `${corpo}`
      });
      console.log('E-mail enviado:', info.messageId);
    } catch (error) {
      console.error('Erro ao enviar o e-mail:', error);
    }
  }
}

module.exports = SendEmails;

