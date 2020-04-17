import React, {Fragment} from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Home from './View/Home'
import Login from './View/Login'
import Perfil_Aluno from './View/Perfil_Aluno'
import Perfil_Inicial_Aluno from './View/Perfil_Inicial_Aluno'
import Perfil_Professor from './View/Perfil_Professor'
import Perfil_Inicial_Prof from './View/Perfil_Inicial_Prof'
import Propostas_Cadastro from './View/Propostas_Cadastro'
import Propostas_Home from './View/Propostas_Home'
import Tccs_Orientados_Cadastro from './View/Tccs_Orientados_Cadastro';
import Tccs_Orientados_Home from './View/Tccs_Orientados_Home';
import Atividades from './View/Atividades'

import Copyright from './componentes/Copyright'

function App() {
  return (
    <Fragment>
   <Router>
     <Routes>
       <Route path= "/" element={<Home/>} />
       <Route path = "/login" element = {<Login/>} />
       
       <Route path = "/perfil_Inicial_Aluno" element = {<Perfil_Inicial_Aluno/>} />
       <Route path = "/perfil_Inicial_Aluno/perfil" element = {<Perfil_Aluno/>} />

       <Route path = "/perfil_Inicial_Professor" element = {<Perfil_Inicial_Prof/>}/>
       <Route path = "/perfil_Inicial_Professorr/atividades/:id" element = {<Atividades/>} />
       <Route path = "/perfil_Inicial_Professor/perfil" element = {<Perfil_Professor/>} />
       <Route path = "/perfil_Inicial_Professor/propostas" element = {<Propostas_Cadastro/>} />
       <Route path = "/perfil_Inicial_Professor/tccs" element = {<Tccs_Orientados_Cadastro/>} />

       <Route path = "/home/tccs_Orientados/:matricula_prof" element = {<Tccs_Orientados_Home/>} />
       <Route path = "/home/propostas/:matricula_prof" element = {<Propostas_Home/>} />

       <Route path = "*" element ={<h1>Não encontrado!!</h1>}/>
       </Routes>
   </Router>
   <Copyright/>
   </Fragment>
  );
}

export default App;
