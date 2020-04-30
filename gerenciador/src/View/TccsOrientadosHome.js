import React from 'react'
import BarraNavegacao from '../componentes/BarraNavegacao'
import ExibirInformacoes from '../componentes/ExibirInformacoes'
import Titulo from '../componentes/Titulo'

export default function TccsOrientadosHome() {

    return (
        <div>
            <BarraNavegacao voltarHabilitado={true} voltarCaminho={"/"}/>
            <Titulo tituloTcc={true}/>
            <ExibirInformacoes tccOrientadoHome={true} />
        </div>
    );
}