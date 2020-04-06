const express = require('express');
const rotas = express.Router();

const PessoaController = require('./controller/PessoaController');
rotas.get('/Pessoa', PessoaController.exibir);
rotas.post('/Pessoa', PessoaController.create);
rotas.delete('/Pessoa/:matricula', PessoaController.delete);

const AtvController = require('./controller/AtvController');
rotas.get('/Atv', AtvController.exibir);
rotas.post('/Atv', AtvController.create);
// rotas.put('/Atv/:id', AtvController.update);
rotas.delete('/Atv/:id', AtvController.delete);

const ProfessorController = require('./controller/ProfessorController');
rotas.get('/Professor', ProfessorController.exibir);
rotas.post('/Professor', ProfessorController.create);
rotas.delete('/Professor/:matricula_prof', ProfessorController.delete);
// rotas.put('/Professor/:id', ProfessorController.update);

const TccController = require('./controller/TccController');
rotas.get('/Tcc', TccController.exibir);
rotas.post('/Tcc', TccController.create);
// rotas.put('/Tcc/:id', TccController.update);
rotas.delete('/Tcc/:id', TccController.delete);

const TccOrientadoController = require('./controller/TccOrientadoController');
// rotas.get('/Tcc', TccOrientadoController.index);
rotas.get('/TccOrientado', TccOrientadoController.exibir);
rotas.post('/TccOrientado', TccOrientadoController.create);
// rotas.put('/Tcc/:id', TccOrientadoController.update);
// rotas.delete('/Tcc/:id', TccOrientadoController.delete);

const PropostasController = require('./controller/PropostasController');
rotas.get('/Proposta', PropostasController.exibir);
rotas.post('/Proposta', PropostasController.create);
// rotas.put('/Tcc/:id', PropostasController.update);
// rotas.delete('/Tcc/:id', PropostasController.delete);

const PesquisarController = require('./Controller/PesquisarController');
rotas.get('/Pesquisar/:nome', PesquisarController.exibir);

const LoginController = require('./Controller/LoginController');
rotas.get('/Login', LoginController.login);

const AtvAlunoController = require('./Controller/AtvAlunoController');
rotas.get('/AtvAluno/:id', AtvAlunoController.atvAluno);

const NomeController = require('./Controller/NomeController');
rotas.get('/Nome/:matricula', NomeController.exibir);

const AlunosController = require('./Controller/AlunosController');
rotas.get('/Alunos/:matricula', AlunosController.exibir);

module.exports = rotas;