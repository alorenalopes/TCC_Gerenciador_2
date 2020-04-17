import React, {Fragment} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './View/Home'
import Login from './View/Login'
import ProfileAluno from './View/ProfileAluno'
import './global.css'
import ProfileProf from './View/ProfileProf'
import Professor from './View/Professor'
import Aluno from './View/Aluno'
import PropostasProf from './View/PropostasProf'
import TccsOrientados from './View/TccsOrientados'
import Atividades from './View/Atividades'
import Copyright from './componentes/Copyright'


function App() {
  return (
    <Fragment>
   <Router>
     <Routes>
       <Route path= "/" element={<Home/>} />
       <Route path = "/login" element = {<Login/>} />
       
       <Route path = "/profileAluno" element = {<ProfileAluno/>} />
       <Route path = "/profileAluno/perfil" element = {<Aluno/>} />

       <Route path = "/profileProfessor" element = {<ProfileProf/>}/>
       <Route path = "/profileProfessor/atividades/:id" element = {<Atividades/>} />
       <Route path = "/profileProfessor/perfil" element = {<Professor/>} />
       <Route path = "/perfil/propostas" element = {<PropostasProf/>} />
       <Route path = "/perfil/tccs" element = {<TccsOrientados/>} />

       <Route path = "*" element ={<h1>Não encontrado!!</h1>}/>
       </Routes>
   </Router>
   <Copyright/>
   </Fragment>
  );
}

export default App;
