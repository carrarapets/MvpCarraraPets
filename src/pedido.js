const express = require('express');
const { PrismaClient } = require('@prisma/client');
const authToken = require('./authToken');

const prisma = new PrismaClient();
const app = express();
const pedido = express.Router();
app.use(express.json());





pedido.post('/pedido/:userId',authToken, async (req, res) => {
  try {
    const {userId}= request.params;
    const { preco, final, inicio, cancelpass, cancelmoto, destino, destino_lat, localizacao_atual, localizacao_atual_lat, motoristaId, petId } = req.body;

    const userPets = await prisma.user.findUnique({
      where:{id: Number(userId)},
      include:{pets:true}
    });
    if (!userPets) {
      return res.status(404).json({ success: false, message: 'Usuário não encontrado ou não possui pets.' });
    }

    // Verificar se o pet selecionado pertence ao usuário
    const selectedPet = userPets.pets.find(pet => pet.id === petId);
    if (!selectedPet) {
      return res.status(404).json({ success: false, message: 'Pet não encontrado ou não pertence ao usuário.' });
    }

    if (cancelpass || cancelmoto) {
      return res.status(400).json({ message: 'Pedido cancelado.' });
    }
    const pedido = await prisma.pedido.create({
      data: {
        preco,
        final,
        inicio,
        cancelpass,
        cancelmoto,
        destino,
        destino_lat,
        localizacao_atual,
        localizacao_atual_lat,
        user: {
            connect: {
              id : Number(userId)
              
            }
          },
            
          motorista: {
            connect: {
              id: Number(motoristaId)
            },
      },
      pets:{
        connect:{
          id: Number(petId)
        }
      }
    
    },
    include:{
      user:{
        include:{pets: true}
      },

      motorista:{
        include:{carro: true}}
    }
  }
    );
    
    res.json(pedido);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar um novo pedido.' });
  }
});

pedido.post('/localizacao/:userId', authToken, async (req, res) => {
  
  try {

    const {userId} = req.params;
  const { lat, lng } = req.body;
    const user = await prisma.pedido.update({
      where: { 
        id: Number(userId) 
      },
      data: { 
        localizacao_atual: lat,
        localizacao_atual_lat: lng

      },
      select:{
        localizacao_atual: true,
        localizacao_atual_lat: true
      }
    });
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar a localização do usuário.' });
  }
});


module.exports = pedido;