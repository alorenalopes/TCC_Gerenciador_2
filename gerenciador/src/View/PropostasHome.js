import React from 'react'
import BarraNavegacao from '../componentes/BarraNavegacao/'
import ExibirInformaçoes from '../componentes/ExibirInformaçoes/'


export default function PropostasHome() {

    return (
        <div>
            <BarraNavegacao voltarHabilitado={true} voltarCaminho={"/"}/>
            <ExibirInformaçoes propostas={true} tccOrientado={false} atividadesProfessor={false} atividadesAluno={false}/>
        </div>
    );
}