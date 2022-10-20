
const { response, request } = require("express");

const express = require("express")
const jwt = require('jsonwebtoken');
const todosRoutes = express.Router();
const {PrismaClient} = require("@prisma/client");
const { equal } = require("assert");
const ConfigServerEmail = require("./serverEmail");


const prisma = new PrismaClient();

const secret = process.env.SECRET;

function verifyJwt (request, response, next){
    const token =  req.headers['x-access-token'];
    jwt.verify(token, secret, async(err, decoded) =>{
        if(err) return response.status(401).end();

        request.id = decoded.id;
        next();
    })
}
todosRoutes.post("/createuser", async(request, response) =>{
    try {
        
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
     
    },
    ConfigServerEmail.sendMail({
        from:'Carrara Pets <carrarapets@gmail.com>',
        to: 'ronaldo.junior@aluno.ifsp.edu.br',
        subject: 'Testando email',
        html:' <h1>oi,'+ nome+' '+sobrenome+ ' tudo bem?</h1> <p> estou testando o envio de email',
        text:'oi, tudo bem? Estou testando o envio de email'
    
    })
    .then((reponse)=> console.log('Email enviado com sucesso') )
    .catch((err) => console.log('Erro ao enviar email', err))
    
    );
    
    return response.status(201).json(criaUsuario, token);
        
    } catch (error) {
        return response.status(500).json({message: error.message});
    }
    
});
todosRoutes.post("/LoginUser", async(request, response)=>{
    try {
        const {email, password}= request.body;
    
        const loginUser =  await prisma.user.findFirst({
            where:{
                email: email,
                password: password,
                

            }
           
            
        })
        const id =  await prisma.user.id;
        
    if(!loginUser){
        throw new Error("Usuário/Senha incorreto")

    }
   
        const token = jwt.sign(loginUser,process.env.SECRET);
        if(!loginUser){
           response.status(401).end();
    
        }
        return response.status(200).json({auth: true, token});
    
        
    } catch (error) {
        return response.status(500).json({message: error.message});
    }
   
    
});
   
        

    


todosRoutes.get("/logout", async(request, reponse) =>{
response.end();
});

todosRoutes.get("/getuser/:id", verifyJwt, async(request, response)=>{
    try {
        const {id} = request.params;
    const lerUsuario = await prisma.user.findUnique({
        where:{
            id: Number(id)
        },

    })
    const token = jwt.sign({id},process.env.SECRET);
    return response.status(200).json(lerUsuario, token);
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