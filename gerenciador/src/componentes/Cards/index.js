import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import Pagination from 'react-bootstrap/Pagination'
import './styles.css'

const Cards = () => {
    return (
        <div id="border">
            <CardDeck>
                <Card border="danger">
                    <Card.Body>
                        <Card.Title>Nome do Professor</Card.Title>
                        <Card.Text>
                            Área de atuação
                            Disponibilidade
                            </Card.Text>
                        <Button variant="outline-danger" size="lg" block> Propostas de temas </Button>
                        <Button variant="danger" size="lg" block> TCCs orientados </Button>
                    </Card.Body>
                </Card>
                <Card border="danger">
                    <Card.Body>
                        <Card.Title>Nome do Professor</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural.{' '}
                        </Card.Text>
                        <Button variant="outline-danger" size="lg" block> Propostas de temas </Button>
                        <Button variant="danger" size="lg" block> TCCs orientados </Button>
                    </Card.Body>
                </Card>
                <Card border="danger">
                    <Card.Body>
                        <Card.Title>Nome do Professor</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below.
      </Card.Text>
                        <Button variant="outline-danger" size="lg" block > Propostas de temas </Button>
                        <Button variant="danger" size="lg" block> TCCs orientados </Button>
                    </Card.Body>
                </Card>
            </CardDeck>

            <div id="border">
                <Pagination className="pagination justify-content-center"> 
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Ellipsis />

                    <Pagination.Item>{10}</Pagination.Item>
                    <Pagination.Item>{11}</Pagination.Item>
                    <Pagination.Item active>{12}</Pagination.Item>
                    <Pagination.Item>{13}</Pagination.Item>
                    <Pagination.Item disabled>{14}</Pagination.Item>

                    <Pagination.Ellipsis />
                    <Pagination.Item>{20}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                </Pagination>
            </div>

        </div>
    );
}

export default Cards;