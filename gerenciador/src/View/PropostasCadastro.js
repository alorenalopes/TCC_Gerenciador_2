import React from 'react'
import BarraNavegacao from '../componentes/BarraNavegacao/'
import CadastroInformacoes from '../componentes/CadastroInformacoes/'
import ExibirInformacoes from '../componentes/ExibirInformacoes/'


export default function PropostasCadastro() {

    return (
        <div>
            <BarraNavegacao voltarHabilitado={true} voltarCaminho={"/perfil_Inicial_Professor/perfil"}/>
            <CadastroInformacoes propostas={true} tccOrientado={false} atividades={false} />
            <ExibirInformacoes propostas={true} propostasHome={false} 
            tccOrientado={false} atividadesProfessor={false} atividadesAluno={false}
            tccOrientadoHome={false}/>
        </div>
    );
}