import React from 'react'
import BarraNavegacao from '../componentes/BarraNavegacao/'
import AlunosOrientados from '../componentes/AlunosOrientados/'
import Titulo from '../componentes/Titulo'

export default function PerfilInicialProf() {

    return (
        <div>
            <BarraNavegacao homeHabilitado={false} loginHabilitado={false} perfil={true} perfilProfessor={true}/>
            <Titulo tituloHome={false} tituloProposta={false} tituloPerfil={true} tituloTcc={false}/>
            <AlunosOrientados />
        </div>
    );

}