const express = require('express')
const rotas = express.Router()
const multer = require('multer')
const multerConfig = require('./config/multer')
const {celebrate, Segments, Joi} = require('celebrate');

const PessoaController = require('./controller/PessoaController');
rotas.get('/Pessoa/:matricula_aluno', PessoaController.exibir);
rotas.post('/Pessoa', celebrate({
    [Segments.BODY]: Joi.object().keys({
        matricula: Joi.string().required(),
        cpf: Joi.string().min(14).max(14).required(),
        nome: Joi.string().required(),
        email: Joi.string().email().required(),
        senha: Joi.string().min(5).max(10).required(),
        tipo: Joi.string().max(1).required(),
    })
}), PessoaController.create);
rotas.delete('/Pessoa/:matricula', PessoaController.delete);

const AtvController = require('./controller/AtvController');
rotas.get('/Atv/:codigo_tcc', AtvController.exibir);
rotas.post('/Atv/:codigo_tcc', celebrate({
    [Segments.BODY]: Joi.object().keys({
        nome: Joi.string().required(),
        descricao: Joi.string().required(),
        dataEntrega: Joi.string().required(),
    }),
    [Segments.PARAMS]: Joi.object().keys({
        codigo_tcc: Joi.string().required()
    })
}), AtvController.create);
rotas.put('/Atv/feedback/:id', celebrate({
    [Segments.BODY]: Joi.object().keys({
        feedback: Joi.string().required(),
    }),
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.string().required()
    })
}), AtvController.feedback);
rotas.delete('/Atv/:id', AtvController.delete);
rotas.put('/Atv/:id', AtvController.update);

const ProfessorController = require('./controller/ProfessorController');
rotas.get('/Professor', ProfessorController.exibir);
rotas.get('/Professor/:matricula_prof', ProfessorController.exibirProf);
rotas.post('/Professor', celebrate({
    [Segments.BODY]: Joi.object().keys({
        matricula_prof: Joi.string().required(),
    }),
}), ProfessorController.create);
rotas.delete('/Professor/:matricula_prof', ProfessorController.delete);
rotas.put('/Professor',  celebrate({
    [Segments.BODY]: Joi.object().keys({
        area: Joi.string(),
        disponibilidade: Joi.string().min(1).max(1),
    }),
    [Segments.HEADERS]: Joi.object().keys({
        matricula_prof: Joi.string().required(),
    }).unknown(),
}), ProfessorController.update);

const TccController = require('./controller/TccController');
rotas.get('/Tcc', TccController.exibir);
rotas.post('/Tcc', celebrate({
    [Segments.BODY]: Joi.object().keys({
        nome_tcc: Joi.string().required(),
        matricula_prof: Joi.string().required(),
        matricula_aluno: Joi.string().required(),
    }),
}), TccController.create);
rotas.delete('/Tcc/:id', TccController.delete);

const TccOrientadoController = require('./controller/TccOrientadoController');
rotas.get('/TccOrientado/:matricula_prof', TccOrientadoController.exibir);
rotas.post('/TccOrientado/:matricula_prof', celebrate({
    [Segments.BODY]: Joi.object().keys({
        nome: Joi.string().required(),
        nome_aluno: Joi.string().required(),
        link: Joi.string().required(),
    }),
    [Segments.PARAMS]: Joi.object().keys({
        matricula_prof: Joi.string().required()
    })
}), TccOrientadoController.create);
rotas.delete('/TccOrientado/:id', TccOrientadoController.delete);

const PropostasController = require('./controller/PropostasController');
rotas.get('/Proposta/:matricula_prof', PropostasController.exibir);
rotas.post('/Proposta/:matricula_prof',  celebrate({
    [Segments.BODY]: Joi.object().keys({
        nome: Joi.string().required(),
        descricao: Joi.string().required(),
    }),
    [Segments.PARAMS]: Joi.object().keys({
        matricula_prof: Joi.string().required()
    })
}), PropostasController.create);
rotas.delete('/Proposta/:id', PropostasController.delete);

const PesquisarController = require('./Controller/PesquisarController');
rotas.get('/Pesquisar/:nome', PesquisarController.exibir);

const LoginController = require('./Controller/LoginController');
rotas.get('/Login', LoginController.login);

const NomeController = require('./Controller/NomeController');
rotas.get('/Nome/:matricula', NomeController.exibir);

const AlunoAtvController = require('./Controller/AlunoAtvController');
rotas.get('/AlunoAtividades/:matricula_aluno', AlunoAtvController.exibir);
rotas.post('/AlunoAtividades/upload/:id', multer(multerConfig).single('file'), AlunoAtvController.update);
rotas.get('/AlunoAtividades/listar/:id', AlunoAtvController.listar);
rotas.delete('/AlunoAtividades/delete/:id', AlunoAtvController.delete);

const AlunosController = require('./Controller/AlunosController');
rotas.get('/Alunos/:matricula_aluno', AlunosController.exibir);

module.exports = rotas;