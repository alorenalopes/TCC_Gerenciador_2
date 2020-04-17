import React from 'react'
import BarraNav from '../componentes/BarraNav/index'
import Cadastro from '../componentes/Cadastro/index'
import Exibir from '../componentes/Exibir/index'

export default function Tccs_Orientados_Home() {

    return (
        <div>
            <BarraNav voltar={true} caminho={"/"}/>
            <Exibir proposta={false} tcc={true} atv={false}  aluno={false}/>
        </div>
    );
}