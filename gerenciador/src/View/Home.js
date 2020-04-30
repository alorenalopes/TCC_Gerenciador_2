import React, {Fragment} from 'react';
import BarraNavegacao from '../componentes/BarraNavegacao';
import Titulo from '../componentes/Titulo/';
import CardsHome from '../componentes/CardsHome';



export default function Home() {

    return (
        <Fragment>
            <BarraNavegacao loginHabilitado={true} homeHabilitado={true}/>
            <Titulo tituloHome={true}/>
            <CardsHome/>
        </Fragment>
    );

}
