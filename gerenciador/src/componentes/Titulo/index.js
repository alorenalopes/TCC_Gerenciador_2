import React, { useState, useEffect } from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import "./styles.css"
import api from '../../servicos/api'
import '../LoginUsuarios/styles.css'
import { useParams } from 'react-router-dom'
import { FiMail } from 'react-icons/fi'


export default function Titulo(props) {

    const [Nome, setNome] = useState([]);
    const [NomeProfessor, setNomeProfessor] = useState([]);
    const matricula_prof = useParams().matricula_prof;

    useEffect(() => {

        api.get(`Nome/${localStorage.matricula}`).then(response => {
            setNome(response.data);
        })

        return () => {setNome([])}
    }, [Nome]);

    useEffect(() => {
        api.get(`Nome/${matricula_prof}`).then(response => {
            setNomeProfessor(response.data);
        })

        return () => {setNomeProfessor([])}

    }, [NomeProfessor, matricula_prof]);

    return (


        <Container className="container_titulo" maxWidth="sm">
            {props.tituloHome && <Typography className="titulo" component="h2" variant="overline" gutterBottom>
                <font className="fonte">E</font>ncontre seu  <font className="fonte">O</font>rientador
            </Typography>}
            {props.tituloPerfil &&
                Nome.map(nomes => (
                    <Typography className="titulo" component="h2" variant="overline" gutterBottom key={nomes.matricula}>
                        <font className="nome"> Bem-vindo</font>  {(nomes.nome).split(' ')[0]} {(nomes.nome).split(' ')[1]}
                    </Typography>
                ))}
            {props.tituloProposta &&
                NomeProfessor.map(nomes => (
                    <Typography className="titulo" component="h2" variant="overline" gutterBottom key={nomes.matricula}>
                        <font className="nome"> Propostas do(a) Docente</font>  {(nomes.nome).split(' ')[0]}
                        <br></br>
                        <FiMail size={25} color="#e0293d" /> <font className="email"> {nomes.email}</font>
                    </Typography>

                ))}

            {props.tituloTcc &&
                NomeProfessor.map(nomes => (
                    <Typography className="titulo" component="h2" variant="overline" gutterBottom key={nomes.matricula}>
                        <font className="nome"> Tccs Orientados do(a) Docente</font>  {(nomes.nome).split(' ')[0]}
                    </Typography>

                ))}

        </Container>

    );
}
