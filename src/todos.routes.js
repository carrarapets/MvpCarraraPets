
const { response } = require("express");
const express = require("express")

const todosRoutes = express.Router();
const {PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient();



todosRoutes.post("/createuser", async (request, response)=>{
    const{name}= request.body;
  const todo = await  prisma.user.create({
        data:{
            name,
            status: false
        },

    });
    //allTodos.push({name, status: false})
    return response.status(201).json(todo);

});


todosRoutes.get("/getuser",  async (request, response)=>{
    const lerUser = await prisma.user.findMany({})
    
    return response.status(200).json(lerUser);
});
todosRoutes.get("/user/:id",  async (request, response)=>{
const  {id} = request.params;
    const lerUser = await prisma.user.findOne({
        where:{
            id: Number(id),
            
        },
    })
    
    return response.status(200).json(lerUser);
});




module.exports = todosRoutes;