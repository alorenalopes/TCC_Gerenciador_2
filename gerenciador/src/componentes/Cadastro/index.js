import React, { useState, useEffect } from 'react'
import '../Autenticacao/styles.css'
import api from '../../servicos/api'
import './styles.css'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { FiFileText } from 'react-icons/fi'
import { useHistory } from 'react-router-dom'


export default function Cadastro(props) {

  const id_atv = route.params.id;
  const [Propostas, setPropostas] = useState([]);
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [Tccs, setTccs] = useState([]);
  const [nome_aluno, setNomeAluno] = useState("");
  const [link, setLink] = useState("");
  const [data, setData] = useState("");
  const [Atvs, setAtvs] = useState([]);
  const history = useHistory();


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
    api.get(`Atv/${id_atv}`).then(response => {
      setAtvs(response.data);
    })
  }, [Atvs]);


  async function create_proposta(e) {
    e.preventDefault();

    const data = {
      nome,
      descricao,
    };

    try {
      const response = await api.post(`Proposta/${localStorage.matricula}`, data, {});
    } catch (err) {
      alert('Erro no cadastro, tente novamente');
    }
  }

  async function create_tcc(e) {
    e.preventDefault();

    const data = {
      nome,
      nome_aluno,
      link,
    };

    try {
      const response = await api.post(`TccOrientado/${localStorage.matricula}`, data, {});
    } catch (err) {
      alert('Erro no cadastro, tente novamente');
    }
  }

  async function create_atv(e) {
    e.preventDefault();

    const data = {
      nome,
      descricao,
      data,
    };

    try {
      const response = await api.post(`Atv/${id_atv}`, data, {});
    } catch (err) {
      alert('Erro no cadastro, tente novamente');
    }
  }

  return (
    <div >
      {props.proposta && <div>
        <Container className="container-form" >
          <Row>
            <Col md={{ span: 4, offset: 4 }}>
              <FiFileText className="avatar" size={40} color="#e0293d" />
              <form onSubmit={create_proposta}>
                <div class="form-group">
                  <label className="form"> Nome da Proposta: </label>
                  <input
                    class="form-control"
                    size="lg"
                    type="text"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                  />
                  <label className="form"> Descrição: </label>
                  <textarea
                    class="form-control"
                    style={{ height: '100px' }}
                    size="lg"
                    type="text"
                    value={descricao}
                    onChange={e => setDescricao(e.target.value)}
                  />
                  <Button className="button" type="submit" variant="danger" size="lg" block> Cadastrar </Button>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </div>}

      {props.tcc && <div>
        <Container className="container-form" >
          <Row>
            <Col md={{ span: 4, offset: 4 }}>
              <FiFileText className="avatar" size={40} color="#e0293d" />
              <form onSubmit={create_tcc}>
                <div class="form-group">
                  <label className="form"> Nome do tcc: </label>
                  <input
                    class="form-control"
                    size="lg"
                    type="text"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                  />
                  <label className="form"> Nome do Aluno: </label>
                  <input
                    class="form-control"
                    size="lg"
                    type="text"
                    value={nome_aluno}
                    onChange={e => setNomeAluno(e.target.value)}
                  />
                  <label className="form"> Link: </label>
                  <input
                    class="form-control"
                    size="lg"
                    type="text"
                    value={link}
                    onChange={e => setLink(e.target.value)}
                  />
                  <Button className="button" type="submit" variant="danger" size="lg" block> Cadastrar </Button>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </div>}

      {props.atv && <div>
        <Container className="container-form" >
          <Row>
            <Col md={{ span: 4, offset: 4 }}>
              <FiFileText className="avatar" size={40} color="#e0293d" />
              <form onSubmit={create_atv}>
                <div class="form-group">
                  <label className="form"> Atividade: </label>
                  <input
                    class="form-control"
                    size="lg"
                    type="text"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                  />
                  <label className="form"> Descrição: </label>
                  <textarea
                    class="form-control"
                    style={{ height: '100px' }}
                    size="lg"
                    type="text"
                    value={descricao}
                    onChange={e => setDescricao(e.target.value)}
                  />
                  <label className="form"> Data de Entrega: </label>
                  <input
                    class="form-control"
                    size="lg"
                    type="date"
                    value={data}
                    onChange={e => setData(e.target.value)}
                  />
                  <Button className="button" type="submit" variant="danger" size="lg" block> Cadastrar </Button>
                </div>
              </form>
            </Col>
          </Row>
        </Container>

      </div>}
    </div>
  );
}