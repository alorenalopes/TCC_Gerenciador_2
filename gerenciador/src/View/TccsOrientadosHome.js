import React from 'react'
import BarraNavegacao from '../componentes/BarraNavegacao/'
import ExibirInformaçoes from '../componentes/ExibirInformaçoes/'

export default function TccsOrientadosHome() {

    return (
        <div>
            <BarraNavegacao voltarHabilitado={true} voltarCaminho={"/"}/>
            <ExibirInformaçoes propostas={false} TccOrientado={true} atividadesProfessor={false}  atividadesAluno={false}/>
        </div>
    );
}