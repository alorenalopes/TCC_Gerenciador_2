import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
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
   <BrowserRouter>
     <Switch>
       <Route exact path= "/" component={Home} />
       <Route path = "/login" component = {Login} />
       <Route path = "/profileAluno" component = {ProfileAluno} />
       <Route path = "/profileProfessor" component = {ProfileProf} />
       <Route path = "/perfil" component = {PerfilProf} />
       <Route path = "/propostas" component = {PropostasProf} />
       <Route path = "/tccs" component = {TccsOrientados} />
       <Route path = "/atividades/:id" component = {Atividades} />
     </Switch>
   </BrowserRouter>
  );
}

export default App;
