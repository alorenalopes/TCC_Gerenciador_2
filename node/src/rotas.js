const express = require('express');
const rotas = express.Router();

const PessoaController = require('./controller/PessoaController');
rotas.get('/Pessoa', PessoaController.index);
rotas.get('/Pessoa/:id', PessoaController.exibir);
rotas.post('/Pessoa',PessoaController.membros);
rotas.put('/Pessoa/:id', PessoaController.update);
rotas.delete('/Pessoa/:id', PessoaController.delete);

module.exports = rotas;