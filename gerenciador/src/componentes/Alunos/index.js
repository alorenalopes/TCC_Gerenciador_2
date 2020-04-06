import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import './styles.css'
import api from '../../servicos/api';

export default function Alunos() {

    const[Alunos, setAlunos] = useState([]);

    useEffect(() => {
        api.get(`Alunos/${localStorage.matricula}`).then(response => {
          setAlunos(response.data);
      })
      },[Alunos]);

    return (
        <div>
             <div className="borderAluno">
            <CardDeck className="division">
                {Alunos.map(aluno => (
                    <Card  border="danger" key={aluno.matricula_aluno}>
                        <Card.Body >
                            <Card.Title>{aluno.nome_tcc}</Card.Title>
                            <Card.Text>
                                Aluno: {aluno.nome}
                            </Card.Text>
                            <Button variant="danger" size="lg" block> Atividades </Button>
                        </Card.Body>
                    </Card>
                ))}
            </CardDeck>
        </div>

        </div>
    );
}