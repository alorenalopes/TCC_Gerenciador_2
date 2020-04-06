import React from 'react';
import BarraNav from '../componentes/BarraNav/index';
import Titulo from '../componentes/Titulo/index';
import AtvAluno from '../componentes/AtvAluno/index';

export default function Profile() {
    
    return (
       <div>
            <BarraNav profile={false} verificacao={false} perfil={true}/>
            <Titulo />
            <AtvAluno />
       </div>
    );
}