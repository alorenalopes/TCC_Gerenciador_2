import React from 'react';
import BarraNav from '../componentes/BarraNav/index';
import Titulo from '../componentes/Titulo/index';
import Copyright from '../componentes/Copyright/index';
import Cards from '../componentes/Cards/index';


const Home = () => {
    return(
        <div>
        <BarraNav/>
        <Titulo/>
        <Cards/>      
        <Copyright/>
        </div>
    );
}

export default Home;