import React from 'react'
import BarraNavegacao from '../componentes/BarraNavegacao/'
import CadastroInformaçoes from '../componentes/CadastroInformaçoes/'
import ExibirInformaçoes from '../componentes/ExibirInformaçoes/'

export default function Atividades() {

    return (
        <div>
            <BarraNavegacao voltarHabilitado={true} voltarCaminho={"/perfil_Inicial_Professor"}/>
            <CadastroInformaçoes propostas={false} tccOrientado={false} atividades={true} />
            <ExibirInformaçoes propostas={false} tccOrientado={false} atividadesProfessor={true} atividadesAluno={false}/>
        </div>
    );
}