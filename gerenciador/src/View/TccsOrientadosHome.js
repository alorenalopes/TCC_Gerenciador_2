import React from 'react'
import BarraNavegacao from '../componentes/BarraNavegacao/'
import ExibirInformacoes from '../componentes/ExibirInformacoes/'

export default function TccsOrientadosHome() {

    return (
        <div>
            <BarraNavegacao voltarHabilitado={true} voltarCaminho={"/"}/>
            <ExibirInformacoes propostas={false} TccOrientado={true} atividadesProfessor={false}  atividadesAluno={false}/>
        </div>
    );
}