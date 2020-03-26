const express = require('express');
const rotas = require('./rotas');
const cors = require('cors');

const app = express(); //Instanciando a aplicação

app.use(cors());
app.use(express.json());
app.use(rotas);

app.listen(8001);