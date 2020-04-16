import React from 'react'
import Copyright from '../componentes/Copyright/index'
import BarraNav from '../componentes/BarraNav/index'
import Cadastro from '../componentes/Cadastro/index'
import Exibir from '../componentes/Exibir/index'


export default function PropostasProf() {

    return (
        <div>
            <BarraNav voltar={true} caminho={"/profileProfessor/perfil"}/>
            <Cadastro proposta={true} tcc={false} atv={false} />
            <Exibir proposta={true} tcc={false} atv={false} aluno={false}/>
            <Copyright />
        </div>
    );
}