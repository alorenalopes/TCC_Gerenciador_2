import React from 'react'
import BarraNavegacao from '../componentes/BarraNavegacao/'
import AlunosOrientados from '../componentes/AlunosOrientados/'
import Titulo from '../componentes/Titulo'

export default function PerfilInicialProf() {

    return (
        <div>
            <BarraNavegacao perfil={true} perfilProfessor={true}/>
            <Titulo tituloPerfil={true}/>
            <AlunosOrientados />
        </div>
    );

}
