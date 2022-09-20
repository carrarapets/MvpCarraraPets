
const { response } = require("express");
const express = require("express")

const todosRoutes = express.Router();
const {PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient();



todosRoutes.post("/createuser", async(request, response) =>{
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
            

        }
    });
    return response.status(200).json(criaUsuario);
});
todosRoutes.get("/loginuser", async(request, response)=>{
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
   /* const comparaSenha =  compare(password, user.password);
    if (!comparaSenha) {
        throw new Error("Usuário/Senha incorreto")
        
    }*/
    return response.status(200).json("login efetuado com sucesso")
})


todosRoutes.get("/getuser/:id", async(request, response)=>{
    const {id} = request.params;
    const lerUsuario = await prisma.user.findUnique({
        where:{
            id: Number(id)
        },

    })
    return response.status(200).json(lerUsuario);
});
todosRoutes.get("/", (req, res) =>{
    res.json({
       message: "hello word"
    });
    
});

todosRoutes.post("/updateuser/:id", async(request, response)=>{
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
});

todosRoutes.delete("/deleteuser/:id", async(request, response)=>{
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
});




module.exports = todosRoutes;