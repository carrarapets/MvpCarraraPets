
const { response } = require("express");

const express = require("express")
const RuleValidation = require('./RuleValidation')

const todosRoutes = express.Router();
const {PrismaClient} = require("@prisma/client");
const { equal } = require("assert");

const prisma = new PrismaClient();



todosRoutes.post("/createuser", async(request, response) =>{
    try {

    const emailValidate = RuleValidation.validationEmail(email);
//  const emailAlready = RuleValidation.emailAlreadyExist(email);
    const celularValidate = RuleValidation.validationPhone(celular);
//  const celularAlready = RuleValidation.phoneAlreadyExist(celular);
    const documentCpfValidate = RuleValidation.validationCpfDocument(cpf);      
//  const documentCpfAlready = RuleValidation.CpfAlreadyExist(cpf);    
    const documentRgValidate = RuleValidation.validationRgDocument(rg);      
//  const documentRgAlready = RuleValidation.RgAlreadyExist(rg);   
        
        if (emailValidate === false) {
            throw new Error("Email Inválido!")
            //        }
            //        else if (emailAlready == false) {
            //          throw new Error("Email já cadastrado!")
        } else if (celularValidate === false) {
            throw new Error("Celular Inválido!")
            //            } else if (celularAlready == false) {
            //                  throw new Error("Celular já cadastrado!")
        } else if (documentCpfValidate === false) {
            throw new Error("CPF Inválido!")
            //                                } else if (documentCpfAlready == false) {
            //                                throw new Error("CPF já cadastrado!")
        } else if (documentRgValidate === false) {
            throw new Error("RG Inválido!")
            //                                } else if (documentRgAlready == false) {
            //                                throw new Error("CPF já cadastrado!")
        } else {

        
        const{nome, sobrenome, cpf, celular, email, password, rg, foto}=request.body;
    const criaUsuario = await prisma.user.create({
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
        },   
    });
        
     return response.status(201).json(criaUsuario); }

    } catch (error) {
        return response.status(500).json({message: error.message});
    }
    
});
todosRoutes.get("/loginuser", async(request, response)=>{
    try {
        const {email, password}= request.body;
    
        const loginUser =  await prisma.user.findFirst({
            where:{
                email: email,
                password: password

            }
        })
        
    if(!loginUser){
        throw new Error("Usuário/Senha incorreto")

    }
    const comparaSenha =  equal(user.password, password);
    if (!comparaSenha) {
        throw new Error("Usuário/Senha incorreto")
        
    }
    return response.status(200).json("login efetuado com sucesso");
        
    } catch (error) {
        return response.status(500).json({message: error.message});
    }
    
});


todosRoutes.get("/getuser/:id", async(request, response)=>{
    try {
        const {id} = request.params;
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

todosRoutes.post("/updateuser/:id", async(request, response)=>{
    try {
        const{id} = request.params;
    const atualizaUsuario = await prisma.user.update({
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

    const emailValidate = RuleValidation.validationEmail(email);
    if(emailValidate == false){
        throw new Error("Email Inválido!")
        }
        
    const emailAlready = RuleValidation.emailAlreadyExist(email);
        if (emailAlready == false) {
        throw new Error("Email já cadastrado!")
        }
        
    const celularValidate = RuleValidation.validationPhone(celular);
    if(celularValidate == false){
        throw new Error("Celular Inválido!")
        }

    const celularAlready = RuleValidation.phoneAlreadyExist(celular);
        if (celularAlready == false) {
        throw new Error("Celular já cadastrado!")
        }

    const documentCpfValidate = RuleValidation.validationPhone(cpf);
    if(documentCpfValidate == false){
        throw new Error("CPF Inválido!")
        }

    const documentAlready = RuleValidation.phoneAlreadyExist(celular);
        if (documentAlready == false) {
        throw new Error("CPF já cadastrado!")
        }

    return response.status(200).json(atualizaUsuario);
    } catch (error) {
        return response.status(200).json({message: error.message});
    }
    
});

todosRoutes.delete("/deleteuser/:id", async(request, response)=>{
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
todosRoutes.post("/createpet/", async(request, response)=>{
    try {
        const {userId, nome, peso, comportamento, foto, sexo, raca, especia}= request.params;
const criaPet = await prisma.pet.create({
    data:{
  nome,          
  peso,          
  comportamento, 
  foto,          
  sexo,          
  raca,          
  especia, 
  userId     
    }

    
});
return response.status(200).json(criaPet);
    } catch (error) {
        return response.status(200).json({message: error.message});
    }

});
todosRoutes.get("/getpet/:id", async (request, response) =>{

    try {
        const {userId} = request.body;
 const mostraPet =  await prisma.user.findMany({
    where:{
        Id: userId
    }

 });
  return reponse.status(200).json(mostraPet);
    } catch (error) {
        return reponse.status(200).json({message: error.message});
    }
});

todosRoutes.post("/updatepet/:id", async(request, response)=>{
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