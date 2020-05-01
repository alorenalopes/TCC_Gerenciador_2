const express = require('express');
const rotas = require('./src/rotas');
const cors = require('cors');
const path = require('path')

const app = express(); //Instanciando a aplicação

app.use(cors({
    exposedHeaders: ['X-Porcentagem', 'X-Total-Page', 'X-Total-Count','matricula_prof'],
  }));
app.use(express.json());
/* app.use('/AlunoAtividades/upload/:id', express.static(path.resolve(__dirname, '..', 'files')));
 */
app.use('/files', express.static(path.resolve(__dirname, 'tmp')));
app.use(rotas);

app.listen(3333);