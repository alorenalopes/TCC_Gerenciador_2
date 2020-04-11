import React from 'react';
import BarraNav from '../componentes/BarraNav/index';
import Titulo from '../componentes/Titulo/index';
import Exibir from '../componentes/Exibir/index';

export default function ProfileAluno() {
    
    return (
       <div>
            <BarraNav profile={false} verificacao={false} perfil={true}/>
            <Titulo titulo={false} />
            <Exibir progresso={true} />
       </div>
    );
}