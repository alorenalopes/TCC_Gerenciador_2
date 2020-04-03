import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './View/Home';
import Login from './View/Login';
import Profile from './View/Profile'
import './global.css'


function App() {
  return (
   <BrowserRouter>
     <Switch>
       <Route exact path= "/" component={Home} />
       <Route path = "/login" component = {Login} />
       <Route path = "/profile" component = {Profile} />
     </Switch>
   </BrowserRouter>
  );
}

export default App;
