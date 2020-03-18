import React from 'react';
import Copyright from '../componentes/Copyright/index'
import Autenticacao from '../componentes/Autenticacao/index'
import BarraNav from '../componentes/BarraNav/index'

export default function Login(){
    return(
        <div>
        <BarraNav/>
        <Autenticacao/>
        <Copyright/>
        </div>
    );
}