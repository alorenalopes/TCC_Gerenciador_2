import React, { useState, useEffect } from 'react'
import '../Autenticacao/styles.css'
import api from '../../servicos/api';
import './styles.css'
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import { FiTrash2 } from 'react-icons/fi';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Table from 'react-bootstrap/Table'
import { useParams } from 'react-router-dom'
import { format, parseISO, isAfter} from 'date-fns'


export default function Exibir(props) {


  const codigo_tcc = useParams().id;
  const now = 30;
  const [Propostas, setPropostas] = useState([]);
  const [Tccs, setTccs] = useState([]);
  const [Atvs, setAtvs] = useState([]);
  const [AtvAluno, setAtvAluno] = useState([]);


  useEffect(() => {
    api.get(`Atv/${codigo_tcc}`).then(response => {
      var data = new Date();
      for (const a in response.data) {
        if (isAfter(data, parseISO(response.data[a].dataEntrega)) === true) {
          response.data[a].status = "Atrasado"
        }
      }
      setAtvs(response.data);
    })
  }, [Atvs, codigo_tcc]);


  useEffect(() => {
    api.get(`Proposta/${localStorage.matricula}`).then(response => {
      setPropostas(response.data);
    })
  }, [Propostas]);


  useEffect(() => {
    api.get(`TccOrientado/${localStorage.matricula}`).then(response => {
      setTccs(response.data);
    })
  }, [Tccs]);

  useEffect(() => {
    api.get(`AlunoAtividades/${localStorage.matricula}`).then(response => {
      var data = new Date();
      for (const a in response.data) {
        if (isAfter(data, parseISO(response.data[a].dataEntrega)) === true) {
          response.data[a].status = "Atrasado"
        }
      }
      setAtvAluno(response.data);
    })
  }, [AtvAluno]);


  async function delete_proposta(id) {
    try {
      await api.delete(`Proposta/${id}`, {});
      setPropostas(Propostas.filter(proposta => proposta.id !== id));
    } catch (err) {
      alert('Erro ao deletar o caso, tente novamente');
    }
  }

  async function delete_tcc(id) {
    try {
      await api.delete(`TccOrientado/${id}`, {});
      setTccs(Tccs.filter(tcc => tcc.id !== id));
    } catch (err) {
      alert('Erro ao deletar o caso, tente novamente');
    }
  }

  async function delete_atv(id) {
    try {
      await api.delete(`Atv/${id}`, {});
      setTccs(Atvs.filter(atv => atv.id !== id));
    } catch (err) {
      alert('Erro ao deletar o caso, tente novamente');
    }
  }

  return (
    <div >
      {props.proposta && <div>
        <CardDeck className="division">
          {Propostas.map(propostas => (
            <Card border="danger" key={propostas.id}>
              <Card.Body >
                <Card.Title>{propostas.nome} </Card.Title>
                <Card.Text >
                  {propostas.descricao}
                </Card.Text>
                <button type="button" className="button" onClick={() => delete_proposta(propostas.id)}>
                  <FiTrash2 size={20} color="#e0293d" />
                </button>
              </Card.Body>
            </Card>
          ))}
        </CardDeck>
      </div>}

      {props.tcc && <div>
        <CardDeck className="division">
          {Tccs.map(tcc => (
            <Card border="danger" key={tcc.id}>
              <Card.Body >
                <Card.Title>{tcc.nome} </Card.Title>
                <Card.Text>
                  {tcc.nome_aluno}
                  <br></br>
                  <br></br>
                  {tcc.link}
                </Card.Text>
                <button type="button" className="button" onClick={() => delete_tcc(tcc.id)}>
                  <FiTrash2 size={20} color="#e0293d" />
                </button>
              </Card.Body>
            </Card>
          ))}
        </CardDeck>
      </div>}

      {props.aluno && <div>
        <ProgressBar className="justify-content-center progresso" animated variant="danger" now={now} label={`${now}%`} />
        <Table striped bordered hover >
          <thead>
            <tr>
              <th>Atividade</th>
              <th>Descrição</th>
              <th>Data de Entrega</th>
              <th>Status</th>
            </tr>
          </thead>
          {AtvAluno.map(atv => (
            <tbody key={atv.id}>
              <tr>
                <td>{atv.nome}</td>
                <td>{atv.descricao}</td>
                <td>
                  {format(parseISO(atv.dataEntrega), "dd/MM/yyyy")}
                </td>
                <td>
                  {atv.status}
                </td>
              </tr>
             
            </tbody>
          ))}
        </Table>
      </div>}
      

      {props.atv &&
      <div>
        <Table striped bordered hover >
          <thead>
            <tr>
              <th>Atividade</th>
              <th>Descrição</th>
              <th>Data de Entrega</th>
              <th>Status</th>
            </tr>
          </thead>
          {Atvs.map(atv => (
            <tbody key={atv.id}>
              <tr>
                <td>{atv.nome}</td>
                <td>{atv.descricao}</td>
                <td>
                  {format(parseISO(atv.dataEntrega), "dd/MM/yyyy")}
                </td>
                <td>
                  {atv.status}
                  <button type="button" className="buttontable" onClick={() => delete_atv(atv.id)}>
                    <FiTrash2 size={20} color="#e0293d" />
                  </button>
                </td>
              </tr>

            </tbody>
          ))}
        </Table>
        </div>}

    </div>
  );
}