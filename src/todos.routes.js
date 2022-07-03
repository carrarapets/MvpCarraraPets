
const { response } = require("express");
const express = require("express")
const allTodos = [{nome: "aaaa", status: false}];
const todosRoutes = express.Router();
const {PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient();



todosRoutes.post("/CreateUser", async (request, response)=>{
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

app.get("/", (req, res) => {
    return res.json("hello word");

});
todosRoutes.get("/GetUser",  async (request, response)=>{
    const lerUser = await prisma.user.findMany({})
    if(response.status= 503){
        return("entro aqui");
    }
    return response.status(200).json(lerUser);
});




module.exports = todosRoutes;