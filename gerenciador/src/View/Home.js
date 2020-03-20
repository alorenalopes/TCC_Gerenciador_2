import React, {Component} from 'react';
import BarraNav from '../componentes/BarraNav/index';
import Titulo from '../componentes/Titulo/index';
import Copyright from '../componentes/Copyright/index';
import Cards from '../componentes/Cards/index';


export default class Home extends Component {
    render(){
    return(
        <div>
        <BarraNav verificacao= {true}/>
        <Titulo/>
        <Cards/>      
        <Copyright/>
        </div>
    );
    }
}
