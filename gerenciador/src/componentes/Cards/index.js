import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import './styles.css'
import api from '../../servicos/api';


export default function Cards() {
    const [Profs, setProfs] = useState([]);
    const [Page, setPage] = useState(1);
    const [Total, setTotals] = useState(0);

    
    useEffect(() => {
        api.get(`Professor?page=${Page}`).then(response => {
            setProfs(response.data);
        })
    });


    async function ProxPag(){

        

        if(Total > 0 && Profs.length === Total){
            return;
          }
      
        setPage(Page + 1);
            api.get(`Professor?page=${Page}`).then(response => {
            setProfs(response.data);
            console.log(response.headers)
        });
    }

    async function PrevPag() {

        if(Page === 1){
            return;
        }

        setPage(Page - 1);
        api.get(`Professor?page=${Page}`, {}).then(response => {
            setProfs(response.data);
        });
    }

    return (
        <div className="border">
            <CardDeck>
                {Profs.map(prof => (
                    <Card className="division" border="danger">
                        <Card.Body key={prof.matricula}>
                            <Card.Title>{prof.nome}</Card.Title>
                            <Card.Text>
                                Área de atuação: {prof.area}.
                                <br></br>
                                Disponibilidade para {prof.disponibilidade} orientandos.
                            </Card.Text>
                            <Button variant="outline-danger" size="lg" block> Propostas de temas </Button>
                            <Button variant="danger" size="lg" block> TCCs orientados </Button>
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

