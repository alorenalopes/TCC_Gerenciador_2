import React from 'react';
import BarraNavegacao from '../componentes/BarraNavegacao';
import Titulo from '../componentes/Titulo';
import ExibirInformacoes from '../componentes/ExibirInformacoes';

export default function PerfilInicialAluno() {
    
    return (
       <div>
            <BarraNavegacao perfil={true}/>
            <Titulo tituloPerfil={true}/>
            <ExibirInformacoes atividadesAluno={true}/>
       </div>
    )
}