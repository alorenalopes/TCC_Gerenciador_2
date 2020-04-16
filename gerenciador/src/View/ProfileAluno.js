import React from 'react';
import BarraNav from '../componentes/BarraNav';
import Titulo from '../componentes/Titulo';
import Exibir from '../componentes/Exibir';
import Copyright from '../componentes/Copyright'

export default function ProfileAluno() {
    
    return (
       <div>
            <BarraNav profile={false} verificacao={false} perfil={true}/>
            <Titulo titulo={false} />
            <Exibir proposta={false} tcc={false} atv={false} aluno={true} />
            <Copyright />
       </div>
    )
}