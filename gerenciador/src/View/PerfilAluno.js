import React from 'react';
import BarraNavegacao from '../componentes/BarraNavegacao/';
import Perfil from '../componentes/Perfil';

export default function PerfilAluno() {

    return (
        <div>
            <BarraNavegacao voltarHabilitado={true} voltarCaminho={"/perfil_Inicial_Aluno"}/>
            <Perfil perfilProfessor={false}/>
        </div>
    );
}