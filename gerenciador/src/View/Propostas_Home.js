import React from 'react'
import BarraNav from '../componentes/BarraNav/index'
import Exibir from '../componentes/Exibir/index'


export default function Propostas_Home() {

    return (
        <div>
            <BarraNav voltar={true} caminho={"/"}/>
            <Exibir proposta={true} tcc={false} atv={false} aluno={false}/>
        </div>
    );
}