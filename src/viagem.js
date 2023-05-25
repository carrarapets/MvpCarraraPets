const express = require('express');
const { PrismaClient } = require('@prisma/client');
const authToken = require('./authToken');

const prisma = new PrismaClient();
const app = express();
const viagem = express.Router();
app.use(express.json());


