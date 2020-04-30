import React from 'react'
import BarraNavegacao from '../componentes/BarraNavegacao'
import ExibirInformacoes from '../componentes/ExibirInformacoes'
import Titulo from '../componentes/Titulo'


export default function PropostasHome() {

    return (
        <div>
            <BarraNavegacao voltarHabilitado={true} voltarCaminho={"/"}/>
            <Titulo tituloProposta={true}/>
            <ExibirInformacoes propostasHome={true} />
        </div>
    );
}