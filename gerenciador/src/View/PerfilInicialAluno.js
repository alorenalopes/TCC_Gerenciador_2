import React from 'react';
import BarraNavegacao from '../componentes/BarraNavegacao';
import Titulo from '../componentes/Titulo';
import ExibirInformacoes from '../componentes/ExibirInformacoes';

export default function PerfilInicialAluno() {
    
    return (
       <div>
            <BarraNavegacao homeHabilitado={false} loginHabilitado={false} perfil={true} perfilProfessor={false}/>
            <Titulo tituloHome={false} />
            <ExibirInformacoes propostas={false} tccOrientado={false} atividadesProfessor={false} atividadesAluno={true} />
       </div>
    )
}