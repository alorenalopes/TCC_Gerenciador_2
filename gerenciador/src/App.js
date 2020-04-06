import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './View/Home';
import Login from './View/Login';
import ProfileAluno from './View/ProfileAluno'
import './global.css'
import ProfileProf from './View/ProfileProf';


function App() {
  return (
   <BrowserRouter>
     <Switch>
       <Route exact path= "/" component={Home} />
       <Route path = "/login" component = {Login} />
       <Route path = "/profileAluno" component = {ProfileAluno} />
       <Route path = "/profileProfessor" component = {ProfileProf} />
     </Switch>
   </BrowserRouter>
  );
}

export default App;
