const express = require('express');
const rotas = require('./src/rotas');
const cors = require('cors');

const app = express(); //Instanciando a aplicação

app.use(cors({
    exposedHeaders: ['X-Total-Count'],
    exposedHeaders: ['X-Total-Page'],
    exposedHeaders: ['matricula_prof'],
    exposedHeaders: ['X-Porcentagem']
  }));
app.use(express.json());
app.use(rotas);

app.listen(3333);