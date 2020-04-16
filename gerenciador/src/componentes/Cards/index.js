import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import './styles.css'
import api from '../../servicos/api';


export default function Cards(props) {

    const [Profs, setProfs] = useState([]);
    const [Page, setPage] = useState(1);
    const [TotalPage, setTotals] = useState(0);


    useEffect(() => {
        api.get(`Professor?page=${Page}`).then(response => {
            setProfs(response.data);
            setTotals(response.headers['x-total-page']);
        })
    }, [Page]);

    
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

    return (
        <div className="border">
            <CardDeck className="division">
                {Profs.map(prof => (
                    <Card  border="danger" key={prof.matricula}>
                        <Card.Body >
                            <Card.Title>{prof.nome}</Card.Title>
                            <Card.Text>
                                Área de atuação: {prof.area}.
                                <br></br>
                                Disponibilidade para {prof.disponibilidade} orientandos.
                            </Card.Text>
                            <Button variant="outline-danger" size="lg" block> Propostas de temas </Button>
                            <Button variant="danger" size="lg" block> TCCs orientados </Button>
                            <Button variant="outline-danger" size="lg" block> Contato </Button>
                        </Card.Body>
                    </Card>
                ))}
              
            </CardDeck>

            <div className="botoes">
                <Button variant="outline-danger" onClick={PrevPag}>Anterior</Button>
                <Button variant="outline-danger" onClick={ProxPag}>Próximo</Button>
            </div>
        </div>
    );
}

