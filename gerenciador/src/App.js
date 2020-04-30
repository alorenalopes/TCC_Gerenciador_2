import React, { Fragment } from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Home from './View/Home'
import Login from './View/Login'
import PerfilAluno from './View/PerfilAluno'
import PerfilInicialAluno from './View/PerfilInicialAluno'
import PerfilProfessor from './View/PerfilProfessor'
import PerfilInicialProf from './View/PerfilInicialProf'
import PropostasCadastro from './View/PropostasCadastro'
import PropostasHome from './View/PropostasHome'
import TccsOrientadosCadastro from './View/TccsOrientadosCadastro'
import TccsOrientadosHome from './View/TccsOrientadosHome'
import Atividades from './View/Atividades'
import PesquisarHome from './View/PesquisarHome'
import UploadArquivos from './View/UploadArquivos'

import Copyright from './componentes/Copyright'

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route path="/perfil_Inicial_Aluno" element={<PerfilInicialAluno />} />
          <Route path="/perfil_Inicial_Aluno/perfil" element={<PerfilAluno />} />
          <Route path="/perfil_Inicial_Aluno/upload/:idArquivo" element={<UploadArquivos />} />

          <Route path="/perfil_Inicial_Professor" element={<PerfilInicialProf />} />
          <Route path="/perfil_Inicial_Professor/atividades/:id" element={<Atividades />} />
          <Route path="/perfil_Inicial_Professor/perfil" element={<PerfilProfessor />} />
          <Route path="/perfil_Inicial_Professor/propostas" element={<PropostasCadastro />} />
          <Route path="/perfil_Inicial_Professor/tccs" element={<TccsOrientadosCadastro />} />

          <Route path="/home/tccs_Orientados/:matricula_prof" element={<TccsOrientadosHome />} />
          <Route path="/home/propostas/:matricula_prof" element={<PropostasHome />} />
          <Route path="/home/pesquisa/:nome" element={<PesquisarHome />} />

          <Route path="*" element={<h1>Não encontrado!!</h1>} />
        </Routes>
      </Router>
      <Copyright />
    </Fragment>
  );
}

export default App;
