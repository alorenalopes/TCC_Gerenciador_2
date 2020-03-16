import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './View/Home';
import Main from './paginas/main';

function App() {
  return (
   <BrowserRouter>
     <Switch>
       <Route exact path= "/" component={Home} />
       <Route path = "/area" component ={Main} />
     </Switch>
   </BrowserRouter>
  );
}

export default App;
