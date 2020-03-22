import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import './styles.css'
import api from '../../servicos/api';


export default class Cards extends Component {

    state = {
        pessoas: [],
        pessoasInfo: {},
        page: 1,
    };

    componentDidMount() {
        this.loadPessoas();
    }

    loadPessoas = async (page = 1) => {
        const response = await api.get(`/Pessoa?page=${page}`);
        console.log("page recebida =" + page);

        const {docs, ...pessoasInfo} = response.data;
        console.log(pessoasInfo.page);
        this.setState({ pessoas: docs, pessoasInfo, page:page});
        console.log(pessoasInfo);
    };

    constructor(props) {
        super(props);
        this.propostas = this.propostas.bind(this);
    }

    propostas(e) {
        e.preventDefault()
        window.location.href = "/area"
    }

    PagAnterior = () => {
        const {page, pessoasInfo} = this.state;
        
        if(page === 1) return;

        const pageNumber = page - 1;
        
        this.loadPessoas(pageNumber);

    };

    PagProxima = () => {
        const {page, pessoasInfo} = this.state;
        
        if(page === pessoasInfo.pages) return;

        const pageNumber = page + 1;
        
        this.loadPessoas(pageNumber);
    };

    render() {
        const { pessoas } = this.state;
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
                            {pessoas.map(Pessoa => <Card.Title key={Pessoa._id}> ({Pessoa.nome})</Card.Title>)}
                            <Card.Text>
                                This card has supporting text below as a natural.{' '}
                            </Card.Text>
                            <Button variant="outline-danger" size="lg" block> Propostas de temas </Button>
                            <Button variant="danger" size="lg" block> TCCs orientados </Button>
                        </Card.Body>
                    </Card>
                    <Card border="danger">
                        <Card.Body>
                            {pessoas.map(Pessoa => <Card.Title key={Pessoa._id}> ({Pessoa.nome})</Card.Title>)}
                            <Card.Text>
                                This is a wider card with supporting text below.
      </Card.Text>
                            <Button onClick={this.propostas} variant="outline-danger" size="lg" block >Propostas de temas</Button>
                            <Button variant="danger" size="lg" block> TCCs orientados </Button>
                        </Card.Body>
                    </Card>
                </CardDeck>
                <div id="botoes">
                <Button variant="outline-danger" onClick={this.PagAnterior}>Anterior</Button>
                <Button variant="outline-danger" onClick={this.PagProxima}>Próximo</Button>
                </div>
            </div>
        );
    }
}