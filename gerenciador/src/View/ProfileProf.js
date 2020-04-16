import React from 'react';
import BarraNav from '../componentes/BarraNav/index';
import Alunos from '../componentes/Alunos/index';
import Copyright from '../componentes/Copyright/index';
import Titulo from '../componentes/Titulo/index'

export default function ProfileProf() {

    return (
        <div>
            <BarraNav profile={false} verificacao={false} perfilprof={true}/>
            <Titulo titulo={false} />
            <Alunos />
            <Copyright/>
        </div>
    );

}
