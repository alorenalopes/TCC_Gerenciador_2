const express = require('express');
const rotas = express.Router();

const PessoaController = require('./controller/PessoaController');
rotas.get('/Pessoa', PessoaController.exibir);
rotas.post('/Pessoa', PessoaController.create);
rotas.delete('/Pessoa/:matricula', PessoaController.delete);

const AtvController = require('./controller/AtvController');
rotas.get('/Atv/:codigo_tcc', AtvController.exibir);
rotas.post('/Atv/:codigo_tcc', AtvController.create);
rotas.delete('/Atv/:id', AtvController.delete);

const ProfessorController = require('./controller/ProfessorController');
rotas.get('/Professor', ProfessorController.exibir);
rotas.get('/Professor/:matricula_prof', ProfessorController.exibirProf);
rotas.post('/Professor', ProfessorController.create);
rotas.delete('/Professor/:matricula_prof', ProfessorController.delete);
rotas.put('/Professor', ProfessorController.update);

const TccController = require('./controller/TccController');
rotas.get('/Tcc', TccController.exibir);
rotas.post('/Tcc', TccController.create);
rotas.delete('/Tcc/:id', TccController.delete);

const TccOrientadoController = require('./controller/TccOrientadoController');
rotas.get('/TccOrientado/:matricula_prof', TccOrientadoController.exibir);
rotas.post('/TccOrientado/:matricula_prof', TccOrientadoController.create);
rotas.delete('/TccOrientado/:id', TccOrientadoController.delete);

const PropostasController = require('./controller/PropostasController');
rotas.get('/Proposta/:matricula_prof', PropostasController.exibir);
rotas.post('/Proposta/:matricula_prof', PropostasController.create);
rotas.delete('/Proposta/:id', PropostasController.delete);

const PesquisarController = require('./Controller/PesquisarController');
rotas.get('/Pesquisar/:nome', PesquisarController.exibir);

const LoginController = require('./Controller/LoginController');
rotas.get('/Login', LoginController.login);

const NomeController = require('./Controller/NomeController');
rotas.get('/Nome/:matricula', NomeController.exibir);

const AlunosController = require('./Controller/AlunosController');
rotas.get('/Alunos/:matricula', AlunosController.exibir);

module.exports = rotas;