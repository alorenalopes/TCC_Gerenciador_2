import React from 'react'
import BarraNavegacao from '../componentes/BarraNavegacao/'
import CadastroInformacoes from '../componentes/CadastroInformacoes/'
import ExibirInformacoes from '../componentes/ExibirInformacoes/'

export default function TccsOrientadosCadastro() {

    return (
        <div>
            <BarraNavegacao voltarHabilitado={true} voltarCaminho={"/perfil_Inicial_Professor/perfil"}/>
            <CadastroInformacoes propostas={false} tccOrientado={true} atividades={false} envio={false}/>
            <ExibirInformacoes propostas={false} tccOrientado={true} 
            propostasHome={false} atividadesProfessor={false}  atividadesAluno={false}
            tccOrientadoHome={false}/>
        </div>
    );
}