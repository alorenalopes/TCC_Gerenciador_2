import React from 'react';
import BarraNav from '../componentes/BarraNav/index';
import Perfil from '../componentes/Perfil/index';

export default function Aluno() {

    return (
        <div>
            <BarraNav voltar={true} caminho={"/profileAluno"}/>
            <Perfil perfilAluno={true} perfilProf={false}/>
        </div>
    );
}