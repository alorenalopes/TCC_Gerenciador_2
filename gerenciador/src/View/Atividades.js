import React from 'react'
import BarraNav from '../componentes/BarraNav/index'
import Cadastro from '../componentes/Cadastro/index'
import Exibir from '../componentes/Exibir/index'

export default function Atividades() {

    return (
        <div>
            <BarraNav voltar={true} caminho={"/profileProfessor"}/>
            <Cadastro proposta={false} tcc={false} atv={true} />
            <Exibir proposta={false} tcc={false} atv={true} aluno={false}/>
        </div>
    );
}