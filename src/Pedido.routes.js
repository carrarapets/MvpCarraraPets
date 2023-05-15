const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const rota = express.Router();
const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();





app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


rota.post('/localizacoes', async (req, res) => {
    const { lat, lng } = req.body;
  
    try {
      const localizacao = await prisma.localizacao.create({
        data: {
          latitude,
          longitude
        }
      });
  
      res.json(localizacao);
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro ao criar a localização');
    }
  });
  
  // Rota para criar um novo pedido
  rota.post('/pedidos', async (req, res) => {
    const { preco, final, inicio, cancelpass, cancelmoto, destino_lat, destino_lng,
         localizacao_atual_lat, localizacao_atual_lng, userId, motoristaId } = req.body;
  

if (cancelpass || cancelmoto) {
    return res.status(400).json({ message: 'Pedido cancelado.' });
  }

    try {
      // Cria uma nova localização atual
      const localizacaoAtual = await prisma.localizacao.create({
        data: {
          latitude: localizacao_atual_lat,
          longitude: localizacao_atual_lng
        }
      });
  
      // Cria uma nova localização de destino
      const localizacaoDestino = await prisma.localizacao.create({
        data: {
          latitude_destino: destino_lat,
          longiutude_destino: destino_lng
        }
      });
  
      // Cria o novo pedido
      const pedido = await prisma.pedido.create({
        data: {
          preco,
          final,
          inicio,
          cancelpass,
          cancelmoto,
          destino: localizacaoDestino.id,
          localizacao_atual: localizacaoAtual.id,
          userId,
          motoristaId
        }
      });
  
      res.json(pedido);
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro ao criar o pedido');
    }
  });

module.exports = rota;