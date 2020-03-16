import React, {Component} from 'react';
import api from '../../servicos/api';

export default class Main extends Component{
    state = {
        pessoas: [],
    }
    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/Pessoa');

        this.setState({pessoas: response.data.docs});
    }

    render(){
        const {pessoas} = this.state;
        return(
            <div className="pessoa-lista">
                {pessoas.map(Pessoa => (
            /* <h2 key = {Pessoa._id}>{Pessoa.matricula}</h2> */
            <article key = {Pessoa._id}>
                <strong>{Pessoa.nome}</strong>
                <strong>{Pessoa.matricula}</strong>
            </article>))}
            </div>
        )
    }
}