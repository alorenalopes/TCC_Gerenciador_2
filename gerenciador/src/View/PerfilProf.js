import React from 'react';
import Copyright from '../componentes/Copyright/index';
import BarraNav from '../componentes/BarraNav/index';
import Perfil from '../componentes/Perfil/index';

export default function PerfilProf() {

    return (
        <div>
            <BarraNav voltar={true} caminho={"/profileProfessor"}/>
            <Perfil />
            <Copyright />
        </div>
    );
}