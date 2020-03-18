import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './View/Home';
import Main from './paginas/main';
import Login from './View/Login';

function App() {
  return (
   <BrowserRouter>
     <Switch>
       <Route exact path= "/" component={Home} />
       <Route path = "/area" component ={Main} />
       <Route path = "/login" component = {Login} />
     </Switch>
   </BrowserRouter>
  );
}

export default App;
