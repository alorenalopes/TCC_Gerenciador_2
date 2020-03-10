const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o app
const app = express();
 
// Iniciando o DB
mongoose.connect('mongodb://localhost:27017/db',
 {useNewUrlParser:true, useUnifiedTopology: true});

requireDir('./src/models');

const Person = mongoose.model('Person');

// Primeira rota
app.get('/', (req,res) => {

Person.create({matricula: 1518309, tipo: 1, cpf: 10721060609, 
    senha: '12345', email: 'brunosouza1@aluno.ufop.edu.br', nome: 'Bruno'});
return res.send('Hello');
});

app.listen(8000);