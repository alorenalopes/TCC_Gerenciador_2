import React from 'react'
import BarraNavegacao from '../componentes/BarraNavegacao'
import ExibirInformacoes from '../componentes/ExibirInformacoes'
import Titulo from '../componentes/Titulo'

export default function TccsOrientadosHome() {

    return (
        <div>
            <BarraNavegacao voltarHabilitado={true} voltarCaminho={"/"}/>
            <Titulo tituloHome={false} tituloProposta={false} tituloPerfil={false} tituloTcc={true}/>
            <ExibirInformacoes propostas={false} propostasHome={false}  
            TccOrientado={false} tccOrientadoHome={true} atividadesProfessor={false} 
            atividadesAluno={false}/>
        </div>
    );
}