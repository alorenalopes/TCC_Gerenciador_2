import React from 'react';
import BarraNav from '../componentes/BarraNav';
import Titulo from '../componentes/Titulo';
import Exibir from '../componentes/Exibir';

export default function Perfil_Inicial_Aluno() {
    
    return (
       <div>
            <BarraNav profile={false} verificacao={false} perfil={true} perfilAluno={true}/>
            <Titulo titulo={false} />
            <Exibir proposta={false} tcc={false} atv={false} aluno={true} />
       </div>
    )
}