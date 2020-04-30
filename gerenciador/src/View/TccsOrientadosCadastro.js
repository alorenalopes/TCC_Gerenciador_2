import React from 'react'
import BarraNavegacao from '../componentes/BarraNavegacao/'
import CadastroInformacoes from '../componentes/CadastroInformacoes/'
import ExibirInformacoes from '../componentes/ExibirInformacoes/'

export default function TccsOrientadosCadastro() {

    return (
        <div>
            <BarraNavegacao voltarHabilitado={true} voltarCaminho={"/perfil_Inicial_Professor/perfil"}/>
            <CadastroInformacoes tccOrientado={true}/>
            <ExibirInformacoes tccOrientado={true}/>
        </div>
    );
}