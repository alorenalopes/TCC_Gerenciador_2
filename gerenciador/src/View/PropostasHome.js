import React from 'react'
import BarraNavegacao from '../componentes/BarraNavegacao/'
import ExibirInformacoes from '../componentes/ExibirInformacoes/'


export default function PropostasHome() {

    return (
        <div>
            <BarraNavegacao voltarHabilitado={true} voltarCaminho={"/"}/>
            <ExibirInformacoes propostas={true} tccOrientado={false} atividadesProfessor={false} atividadesAluno={false}/>
        </div>
    );
}