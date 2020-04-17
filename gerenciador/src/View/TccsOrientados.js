import React from 'react'
import BarraNav from '../componentes/BarraNav/index'
import Cadastro from '../componentes/Cadastro/index'
import Exibir from '../componentes/Exibir/index'

export default function TccsOrientados() {

    return (
        <div>
            <BarraNav voltar={true} caminho={"/profileProfessor/perfil"}/>
            <Cadastro proposta={false} tcc={true} atv={false} />
            <Exibir proposta={false} tcc={true} atv={false}  aluno={false}/>
        </div>
    );
}