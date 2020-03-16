const express = require('express');
const rotas = express.Router();

const PessoaController = require('./controller/PessoaController');
rotas.get('/Pessoa', PessoaController.index);
rotas.get('/Pessoa/:id', PessoaController.exibir);
rotas.post('/Pessoa', PessoaController.membros);
rotas.put('/Pessoa/:id', PessoaController.update);
rotas.delete('/Pessoa/:id', PessoaController.delete);

const AtividadesController = require('./controller/AtividadesController');
rotas.get('/Atividades', AtividadesController.index);
rotas.get('/Atividades/:id', AtividadesController.exibir);
rotas.post('/Atividades', AtividadesController.membros);
rotas.put('/Atividades/:id', AtividadesController.update);
rotas.delete('/Atividades/:id', AtividadesController.delete);

const ProfessorController = require('./controller/ProfessorController');
rotas.get('/Professor', ProfessorController.index);
rotas.get('/Professor/:id', ProfessorController.exibir);
rotas.post('/Professor', ProfessorController.membros);
rotas.put('/Professor/:id', ProfessorController.update);
rotas.delete('/Professor/:id', ProfessorController.delete);

const TccController = require('./controller/TccController');
rotas.get('/Tcc', TccController.index);
rotas.get('/Tcc/:id', TccController.exibir);
rotas.post('/Tcc', TccController.membros);
rotas.put('/Tcc/:id', TccController.update);
rotas.delete('/Tcc/:id', TccController.delete);

module.exports = rotas;