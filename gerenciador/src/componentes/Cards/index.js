import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import Pagination from 'react-bootstrap/Pagination';
import './styles.css'
import api from '../../servicos/api';


export default class Cards extends Component {

    state = {
        pessoas: [],
    }
    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/Pessoa');

        this.setState({ pessoas: response.data.docs });
    }
                                                                                              
    constructor(props) {
        super(props);
        this.propostas = this.propostas.bind(this);
    }

    propostas(e) {
        e.preventDefault()
        window.location.href = "/area"
    }

    render() {
        const {pessoas} = this.state;
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
                              {pessoas.map(Pessoa => <Card.Title key = {Pessoa._id}> ({Pessoa.nome})</Card.Title>)} 
                            <Card.Text>
                                This card has supporting text below as a natural.{' '}
                            </Card.Text>
                            <Button variant="outline-danger" size="lg" block> Propostas de temas </Button>
                            <Button variant="danger" size="lg" block> TCCs orientados </Button>
                        </Card.Body>
                    </Card>
                    <Card border="danger">
                        <Card.Body>
                        {pessoas.map(Pessoa => <Card.Title key = {Pessoa._id}> ({Pessoa.nome})</Card.Title>)} 
                            <Card.Text>
                                This is a wider card with supporting text below.
      </Card.Text>
                            <Button onClick={this.propostas} variant="outline-danger" size="lg" block >Propostas de temas</Button>
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
}