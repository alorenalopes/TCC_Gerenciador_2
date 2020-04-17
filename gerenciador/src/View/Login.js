import React from 'react';
import Autenticacao from '../componentes/Autenticacao/index';
import BarraNav from '../componentes/BarraNav/index';

export default function Login() {
    
    return (
        <div>
            <BarraNav verificacao= {false} profile={true}/>
            <Autenticacao />
        </div>
    );
}