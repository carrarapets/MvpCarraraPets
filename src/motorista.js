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
        const emailValidate = RuleValidation.validationEmail(email);
        const emailAlready = await RuleValidation.emailAlreadyExistMotorista(email);
        const celularValidate = RuleValidation.validationPhone(celular);
        const cnhValidate = RuleValidation.validateCNH(CNH);
        const CNHAlreadyExist = await RuleValidation.CNHAlreadyExistMotorista(CNH);
        if (emailValidate === false) {
            throw new Error("Email Inválido!")
        } else if (emailAlready === true) {
            throw new Error("Email já cadastrado!")
        } else if (celularValidate === false) {
            throw new Error("Celular Inválido!")
        } else if (cnhValidate === false) {
            throw new Error("CNH Inválido!")
        } else if (CNHAlreadyExist === true) {
            throw new Error("CNH já cadastrada!")
        } else {
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
    }
         catch (error) {
            return res.status(500).json({  message: error.message });
        }
      });


      motorista.post("/loginmotorista", async(request, response)=>{
        try {
            const {email, password}= request.body;
    
            const loginMotorista =  await prisma.motorista.findFirst({
                where:{
                    email: String(email),
                   
    
                }
               
                
            })
    
           
        if(!loginMotorista){
            throw new Error("Usuário/Senha incorreto")
    
        }
        const passwordMatch = await bcrypt.compare(password, loginMotorista.password);
        if(!passwordMatch){
          return response.status(401).json({error: 'Credenciais inválidas'});
    
        }
    
        const token = jwt.sign({email:loginMotorista.email}, secret);
        return response.status(200).json({auth: true, token} );
    
        } catch (error) {
            return response.status(500).json({message: error.message});
        }
    
    });

    motorista.get("/getMotorista/:id" ,authToken, async(request, response)=>{
        try {

             const {id} = request.params;
        const lerUsuario = await prisma.motorista.findUnique({
            where:{
                id: Number(id)
            },
    
        })
        return response.status(200).json(lerUsuario);
        } catch (error) {
            return response.status(200).json({message: error.message});
        }
        
        
    });

   motorista.post("/updatemotorista/:id",authToken, async(request, response)=>{
        try {
            const{id} = request.params;
        const atualizaMotorista = await prisma.motorista.update({
            where:{
                id: Number(id)
            },
            data:{
                nome,
                sobrenome,
                CNH,
                celular,
                email,
                password,
                valido: true,
                validade_cnh,
                ant_criminal, 
                foto
                
            }
        });
        return response.status(200).json(atualizaMotorista);
        } catch (error) {
            return response.status(200).json({message: error.message});
        }
        
    });


    // ROTAS MOTORISTA COM CARRO
motorista.post("/createcar/:motoristaId",authToken, async(request, response)=>{
    try {

        const {placa, modelo, marca, renavam, cor}= request.body;
        const{motoristaId}= request.params;
const criaCarro = await prisma.carro.create({
    data:{
  placa,
  modelo,
  marca,
  renavam,
  cor,
  motorista :{
    connect:{
        id: Number(motoristaId)
   
    },
  },
    


    
    }});
return response.status(200).json(criaCarro);
    } catch (error) {
        return response.status(200).json({message: error.message});
    }

});
motorista.get("/getcar/:motoristaId",authToken, async (request, response) =>{

    try {
        const {motoristaId} = request.params;
 const mostraCarro =  await prisma.carro.findUnique({
    where:{
        id: Number(motoristaId)
    }

 });
  return response.status(200).json(mostraCarro);
    } catch (error) {
        return response.status(200).json({message: error.message});
    }
});

motorista.post("/updatecar/:motoristaId",authToken, async(request, response)=>{
    try {
        const {motoristaId}= request.params;
        const { placa, modelo, marca, renavam, cor } = request.body;
    const carroAtualizado = await prisma.carro.create({
    where:{
        id: Number(motoristaId)

    },
    data:{
        placa,
        modelo,
        marca,
        renavam,
        cor
    }

    
});
return response.status(200).json(carroAtualizadoDados);
    } catch (error) {
        return response.status(200).json({message: error.message});
    }

});

module.exports = motorista