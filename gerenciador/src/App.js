import React from 'react'
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
import PerfilProf from './View/PerfilProf'
import PropostasProf from './View/PropostasProf'
import TccsOrientados from './View/TccsOrientados'
import Atividades from './View/Atividades'


function App() {
  return (
   <Router>
     <Routes>
       <Route path= "/" element={<Home/>} />
       <Route path = "/login" element = {<Login/>} />
       
       <Route path = "/profileAluno" element = {<ProfileAluno/>} />

       <Route path = "/profileProfessor" element = {<ProfileProf/>}/>
       <Route path = "/profileProfessor/atividades/:id" element = {<Atividades/>} />
       <Route path = "/profileProfessor/perfil" element = {<PerfilProf/>} />
       <Route path = "/perfil/propostas" element = {<PropostasProf/>} />
       <Route path = "/perfil/tccs" element = {<TccsOrientados/>} />

       <Route path = "*" element ={<h1>Não encontrado!!</h1>}/>
       </Routes>
   </Router>
  );
}

export default App;
