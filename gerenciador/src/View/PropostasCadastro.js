import React from 'react'
import BarraNavegacao from '../componentes/BarraNavegacao/'
import CadastroInformaçoes from '../componentes/CadastroInformaçoes/'
import ExibirInformaçoes from '../componentes/ExibirInformaçoes/'


export default function PropostasCadastro() {

    return (
        <div>
            <BarraNavegacao voltarHabilitado={true} voltarCaminho={"/perfil_Inicial_Professor/perfil"}/>
            <CadastroInformaçoes propostas={true} tccOrientado={false} atividades={false} />
            <ExibirInformaçoes propostas={true} tccOrientado={false} atividadesProfessor={false} atividadesAluno={false}/>
        </div>
    );
}