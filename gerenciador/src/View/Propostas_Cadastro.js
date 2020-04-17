import React from 'react'
import BarraNav from '../componentes/BarraNav/index'
import Cadastro from '../componentes/Cadastro/index'
import Exibir from '../componentes/Exibir/index'


export default function Propostas_Cadastro() {

    return (
        <div>
            <BarraNav voltar={true} caminho={"/profileProfessor/perfil"}/>
            <Cadastro proposta={true} tcc={false} atv={false} />
            <Exibir proposta={true} tcc={false} atv={false} aluno={false}/>
        </div>
    );
}