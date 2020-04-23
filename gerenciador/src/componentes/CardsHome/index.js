import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'
import './styles.css'
import api from '../../servicos/api'
import '../LoginUsuarios/styles.css'
import { useNavigate, useParams } from 'react-router-dom'

export default function CardsHome(props) {

    const [Profs, setProfs] = useState([]);
    const [ProfsPesquisa, setProfsPesquisa] = useState([]);
    const [Page, setPage] = useState(1);
    const [TotalPage, setTotals] = useState(0);
    const navigate = useNavigate();
    const nome= useParams().nome;


    useEffect(() => {
        api.get(`Professor?page=${Page}`).then(response => {
            setProfs(response.data);
            setTotals(response.headers['x-total-page']);
        })
    }, [Page]);

    useEffect(() => {
        api.get(`pesquisar/${nome}`).then(response => {
            setProfsPesquisa(response.data);
        })
    }, [nome]);


    function ProxPag() {
        if (Page === Number(TotalPage)) {
            return;
        }
        setPage(Page + 1);
    }

    function PrevPag() {
        console.log(Page);
        if (Page === 1) {
            return;
        }

        setPage(Page - 1);
    }

    function PropostasProf(matricula_prof) {
        navigate(`/home/propostas/${matricula_prof}`);

    }

    function TccsOrientadosProf(matricula_prof) {
        navigate(`/home/tccs_Orientados/${matricula_prof}`);
    }

    return (


        <div className="border">
            {!props.pesquisarHome &&
            <div>
                <CardDeck className="division">
                    {Profs.map(prof => (
                        <Card border="danger" key={prof.matricula}>
                            <Card.Body >
                                <Card.Title>{prof.nome}</Card.Title>
                                <Card.Text>
                                    Área de atuação: {prof.area}.
                                <br></br>
                                Disponibilidade para {prof.disponibilidade} orientandos.
                            </Card.Text>
                                <Button variant="outline-danger" size="lg" block onClick={() => PropostasProf(prof.matricula)}> Propostas de temas </Button>
                                <Button variant="danger" size="lg" block onClick={() => TccsOrientadosProf(prof.matricula)}> TCCs orientados </Button>

                            </Card.Body>
                        </Card>
                    ))}

                </CardDeck>

                 <div className="botoes">
                 <Button variant="outline-danger" onClick={PrevPag}>Anterior</Button>
                 <Button variant="outline-danger" onClick={ProxPag}>Próximo</Button>
                </div>
                </div>
            }

            {props.pesquisarHome &&
                <CardDeck className="divisionPesquisar">
                    {ProfsPesquisa.map(prof => (
                        <Card border="danger" key={prof.matricula}>
                            <Card.Body >
                                <Card.Title>{prof.nome}</Card.Title>
                                <Card.Text>
                                    Área de atuação: {prof.area}.
                                <br></br>
                                Disponibilidade para {prof.disponibilidade} orientandos.
                            </Card.Text>
                                <Button variant="outline-danger" size="lg" block onClick={() => PropostasProf(prof.matricula)}> Propostas de temas </Button>
                                <Button variant="danger" size="lg" block onClick={() => TccsOrientadosProf(prof.matricula)}> TCCs orientados </Button>
                            </Card.Body>
                        </Card>
                    ))}

                </CardDeck>
            }

           

        </div>

    );
}

