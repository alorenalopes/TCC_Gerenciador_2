import React from 'react'
import BarraNavegacao from '../componentes/BarraNavegacao/'
import CadastroInformaçoes from '../componentes/CadastroInformaçoes/'
import ExibirInformaçoes from '../componentes/ExibirInformaçoes/'

export default function TccsOrientadosCadastro() {

    return (
        <div>
            <BarraNavegacao voltarHabilitado={true} voltarCaminho={"/perfil_Inicial_Professor/perfil"}/>
            <CadastroInformaçoes propostas={false} tccOrientado={true} atividades={false} />
            <ExibirInformaçoes propostas={false} tccOrientado={true} atividadesProfessor={false}  atividadesAluno={false}/>
        </div>
    );
}