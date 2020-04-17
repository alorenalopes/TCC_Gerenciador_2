import React from 'react';
import LoginUsuarios from '../componentes/LoginUsuarios';
import BarraNavegacao from '../componentes/BarraNavegacao';

export default function Login() {
    
    return (
        <div>
            <BarraNavegacao loginHabilitado= {false} homeHabilitado={true}/>
            <LoginUsuarios/>
        </div>
    );
}