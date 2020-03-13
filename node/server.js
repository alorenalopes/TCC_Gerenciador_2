const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o app
const app = express();
app.use(express.json());
app.use(cors()); //Liberando o acesso de vários domínios

// Iniciando o DB
mongoose.connect('mongodb://localhost:27017/db',
    { useNewUrlParser: true, useUnifiedTopology: true });

requireDir('./src/models');

//Rotas
app.use('/api', require('./src/rotas'));

app.listen(8000);