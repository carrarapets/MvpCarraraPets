const express = require("express")
const RuleValidation = require('./RuleValidation')
const jwt = require('jsonwebtoken');
const motorista = express.Router();
const {PrismaClient} = require("@prisma/client");
const { equal, ok } = require("assert");
const authToken = require("./authToken");
const ConfigServerEmail = require("./serverEmail");
const SendEmails = require("./serverEmail");
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();
const sendMail = new SendEmails();
const secret = process.env.SECRET;   

motorista.post("/createmotorista" ,async (req, res)=>{
    try {

        const{nome, sobrenome, CNH, celular, email, password,validade_cnh, ant_criminal, foto, }=req.body;    
        const hashedPassword = await bcrypt.hash(password, 10);
        const criaMotorista= await prisma.motorista.create({
            data:{
                 nome,
                sobrenome,
                CNH,
                celular,
                email,
                password: hashedPassword,
                valido: true,
                validade_cnh,
                ant_criminal, 
                foto
            },
        }
        );
            
            sendMail.enviarEmailVerificacao(criaMotorista.email,"123456");
         return res.status(201).json(criaMotorista); }
    
         catch (error) {
            return res.status(500).json({  message: error.message });
        }
      });

module.exports = motorista