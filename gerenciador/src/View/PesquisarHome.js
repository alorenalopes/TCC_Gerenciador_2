import React from 'react';
import BarraNavegacao from '../componentes/BarraNavegacao';
import Titulo from '../componentes/Titulo/';
import CardsHome from '../componentes/CardsHome';



export default function Home() {

    return (
        <div>
            <BarraNavegacao loginHabilitado={true} homeHabilitado={true}/>
            <Titulo tituloHome={true}/>
            <CardsHome pesquisarHome={true} />
        </div>
    );

}