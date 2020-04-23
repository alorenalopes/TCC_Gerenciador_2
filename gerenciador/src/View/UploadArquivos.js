import React, { Component } from 'react'
import BarraNavegacao from '../componentes/BarraNavegacao/'
import CadastroInformacoes from '../componentes/CadastroInformacoes/'

export default function UploadArquivos() {

    return (
        <div>
            <BarraNavegacao voltarHabilitado={true} voltarCaminho={"/perfil_Inicial_Aluno/"} />
            <CadastroInformacoes propostas={false} tccOrientado={false} atividades={false} envio={true} />
        </div>
    );
}

