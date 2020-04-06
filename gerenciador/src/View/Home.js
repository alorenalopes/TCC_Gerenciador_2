import React from 'react';
import BarraNav from '../componentes/BarraNav/index';
import Titulo from '../componentes/Titulo/index';
import Copyright from '../componentes/Copyright/index';
import Cards from '../componentes/Cards/index';



export default function Home() {

    return (
        <div>
            <BarraNav verificacao={true} profile={true}/>
            <Titulo titulo = {true} />
            <Cards />
            <Copyright />
        </div>
    );

}
