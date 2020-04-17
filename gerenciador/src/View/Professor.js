import React from 'react';
import BarraNav from '../componentes/BarraNav/index';
import Perfil from '../componentes/Perfil/index';

export default function Professor() {

    return (
        <div>
            <BarraNav voltar={true} caminho={"/profileProfessor"}/>
            <Perfil perfilAluno={false} perfilProf={true}/>
        </div>
    );
}