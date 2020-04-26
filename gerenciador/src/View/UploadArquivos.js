import React from 'react'
import BarraNavegacao from '../componentes/BarraNavegacao/'
import CadastroInformacoes from '../componentes/CadastroInformacoes/'
import ExibirInformacoes from '../componentes/ExibirInformacoes'

export default function UploadArquivos() {

    return (
        <div>
            <BarraNavegacao voltarHabilitado={true} voltarCaminho={"/perfil_Inicial_Aluno/"} />
            <CadastroInformacoes propostas={false} tccOrientado={false} atividades={false} envio={true} />
            <ExibirInformacoes propostas={false} propostasHome={false}  
            TccOrientado={false} tccOrientadoHome={false} atividadesProfessor={false} 
            atividadesAluno={false} envio={true}/>
        </div>
    );
}

