const express = require("express")
const RuleValidation = require('./RuleValidation')
const jwt = require('jsonwebtoken');
const todosRoutes = express.Router();
const {PrismaClient} = require("@prisma/client");
const { equal, ok } = require("assert");
const authToken = require("./authToken");
const ConfigServerEmail = require("./serverEmail");
const SendEmails = require("./serverEmail");
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();
const sendMail = new SendEmails();
const secret = process.env.SECRET;       

todosRoutes.post('/createuser', async (req, res) => {
   // const { nome, sobrenome, cpf, celular, email, password, rg, foto } = req.body;
    try {
    const { nome, sobrenome, cpf, celular, email, password, rg, foto } = req.body;    
    const hashedPassword = await bcrypt.hash(password, 10);
    const emailValidate = RuleValidation.validationEmail(email);
    const emailAlready = RuleValidation.emailAlreadyExist(email);
    const celularValidate = RuleValidation.validationPhone(celular);
    const celularAlready = RuleValidation.phoneAlreadyExist(celular);
    const documentCpfValidate = RuleValidation.validationCpfDocument(cpf);
    const CpfAlreadyExist = RuleValidation.CpfAlreadyExist(cpf);
    const documentRgValidate = RuleValidation.validationRgDocument(rg); 
    const documentRgAlready = RuleValidation.RgAlreadyExist(rg); 
    if (emailValidate === false) {
        throw new Error("Email Inválido!")
    } else if (emailAlready === true) {
        throw new Error("Email já cadastrado!")
    } else if (celularValidate === false) {
        throw new Error("Celular Inválido!")
    } else if (celularAlready === true) {
        throw new Error("Celular já cadastrado!")
    } else if (documentCpfValidate === false) {
        throw new Error("CPF Inválido!")
    } else if (CpfAlreadyExist === true) {
        throw new Error("CPF já cadastrado!")
    } else if (documentRgValidate === false) {
        throw new Error("RG Inválido!")
    } else if (documentRgAlready === true) {
        throw new Error("RG já cadastrado!")
    } else {
    const criaUsuario = await prisma.user.create({
        
        data:{
            nome,
            sobrenome,
            cpf,
            celular,
            email,
            password: hashedPassword,
            rg, 
            foto,
            valido: false
        },   
    }
    );
        
        sendMail.enviarEmailVerificacao(criaUsuario.email,"123456");
     return res.status(201).json(criaUsuario); }}

     catch (error) {
        return res.status(500).json({  message: error.message });
    }
  });
        
    
    



todosRoutes.post("/loginuser", async(request, response)=>{
    try {
        const {email, password}= request.body;

        const loginUser =  await prisma.user.findFirst({
            where:{
                email: String(email),
               

            }
           
            
        })

       
    if(!loginUser){
        throw new Error("Usuário/Senha incorreto")

    }
    const passwordMatch = await bcrypt.compare(password, loginUser.password);
    if(!passwordMatch){
      return response.status(401).json({error: 'Credenciais inválidas'});

    }

    const token = jwt.sign({email: loginUser.email}, secret);
    return response.status(200).json({auth: true, token} );

    } catch (error) {
        return response.status(500).json({message: error.message});
    }

});
   
        

    


todosRoutes.get("/logout", async(request, reponse) =>{
response.end();
});

todosRoutes.get("/getuser/:id",authToken, async(request, response)=>{
    const {id} = request.params;
    try {
        
    const lerUsuario = await prisma.user.findUnique({
        where:{
            id: Number(id)
        },

    })
   
    return response.status(200).json(lerUsuario);
    } catch (error) {
        return response.status(200).json({message: error.message});
    }
    
});
todosRoutes.get("/", (req, res) =>{
    
    res.json({
       message: "hello word"
    });
    
});

todosRoutes.post("/updateuser/:id", authToken, async(request, response)=>{
    try {
        const { id } = request.params;
            const atualizaUsuario = await prisma.user.update({
                where: {
                    id: Number(id)
                },
                data: {
                    nome,
                    sobrenome,
                    cpf,
                    celular,
                    email,
                    password,
                    valido: true,
                    rg,
                    foto
            
                }
            });

            return response.status(200).json(atualizaUsuario);
    } catch (error) {
        return response.status(200).json({message: error.message});
    }
    
});

todosRoutes.delete("/deleteuser/:id",authToken, async(request, response)=>{
    try {
        const{id}= request.params;
    const deletaUsuario = await prisma.user.delete({
        where:{
            id: Number(id)
        },
        data:{
            nome,
            sobrenome,
            cpf,
            celular,
            email,
            password,
            valido: true,
            rg, 
            foto
            
        }

        
    });
    return response.status(200).json("usuario excluido com sucesso");
    } catch (error) {
        return response.status(500).json({message: error.message});
    }
    
});
// ROTAS USUARIO COM PET
todosRoutes.post("/createpet/:userId", authToken, async(request, response)=>{
    try {
        const { nome, peso, comportamento, foto, sexo, raca, especia}= request.body;
        const{userId}= request.params;
const criaPet = await prisma.pet.create({
    data:{
  nome,          
  peso,          
  comportamento, 
  foto,          
  sexo,          
  raca,          
  especia, 
  user: {
    connect: {
      id : Number(userId)
    },
  },

    
}});
return response.status(200).json(criaPet);
    } catch (error) {
        return response.status(200).json({message: error.message});
    }

});
todosRoutes.get("/getpets/:userId", authToken, async (request, response) => {
    try {
      const { userId } = request.params;
      const pets = await prisma.pet.findMany({
        where: {
          userId: Number(userId)
        }
      });
      return response.status(200).json(pets);
    } catch (error) {
      return response.status(500).json({ message: error.message });
    }
  });
todosRoutes.post("/updatepet/:userId", authToken,  async(request, response)=>{
    try {
        const {userId}= request.params;
const criaPet = await prisma.pet.create({
    where:{
        id: Number(userId)

    },
    data:{
  nome,          
  peso,          
  comportamento, 
  foto,          
  sexo,          
  raca,          
  especia,      
    }

    
});
return response.status(200).json("Dados Atualizados com sucesso");
    } catch (error) {
        return response.status(200).json({message: error.message});
    }

});
//ROTAS COM PEDIDO SELECIONANDO O PET 

module.exports = todosRoutes;
