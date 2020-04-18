import React from 'react'
import BarraNavegacao from '../componentes/BarraNavegacao'
import ExibirInformacoes from '../componentes/ExibirInformacoes'
import Titulo from '../componentes/Titulo'


export default function PropostasHome() {

    return (
        <div>
            <BarraNavegacao voltarHabilitado={true} voltarCaminho={"/"}/>
            <Titulo tituloHome={false} tituloProposta={true} tituloPerfil={false} tituloTcc={false}/>
            <ExibirInformacoes propostas={false} propostasHome={true} 
            tccOrientado={false} atividadesProfessor={false} atividadesAluno={false}
            tccOrientadoHome={false}/>
        </div>
    );
}