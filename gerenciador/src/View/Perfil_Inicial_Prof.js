import React from 'react';
import BarraNav from '../componentes/BarraNav/index';
import Alunos from '../componentes/Alunos/index';
import Titulo from '../componentes/Titulo/index'

export default function Perfil_Inicial_Prof() {

    return (
        <div>
            <BarraNav profile={false} verificacao={false} perfil={true} perfilProf={true}/>
            <Titulo titulo={false} />
            <Alunos />
        </div>
    );

}
