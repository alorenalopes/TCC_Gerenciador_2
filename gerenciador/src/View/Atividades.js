import React from 'react'
import BarraNavegacao from '../componentes/BarraNavegacao/'
import CadastroInformacoes from '../componentes/CadastroInformacoes/'
import ExibirInformacoes from '../componentes/ExibirInformacoes/'

export default function Atividades() {

    return (
        <div>
            <BarraNavegacao voltarHabilitado={true} voltarCaminho={"/perfil_Inicial_Professor"}/>
            <CadastroInformacoes propostas={false} tccOrientado={false} atividades={true} />
            <ExibirInformacoes atividadesProfessor={true}/>
        </div>
    );
}