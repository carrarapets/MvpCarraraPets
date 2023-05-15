const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();
const teste = express.Router();
app.use(express.json());





teste.post('/pedido', async (req, res) => {
  try {
    const { preco, final, inicio, cancelpass, cancelmoto, destino, destino_lat, localizacao_atual, localizacao_atual_lat, userId, motoristaId } = req.body;
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
              id : userId
            }
          },
          motorista: {
            connect: {
              id: motoristaId
            }
      }
    }
    });
    res.json(pedido);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar um novo pedido.' });
  }
});

teste.post('/localizacao/:id', async (req, res) => {
  
  try {

    const {id} = req.params;
  const { lat, lng } = req.body;
    const user = await prisma.pedido.update({
      where: { 
        id: Number(id) 
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


module.exports = teste;