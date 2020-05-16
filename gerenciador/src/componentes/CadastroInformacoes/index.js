import React, { useState, useEffect } from 'react'
import api from '../../servicos/api'
import './styles.css'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { FiFileText } from 'react-icons/fi'
import { useParams } from 'react-router-dom'
import { isPast, parseISO } from 'date-fns'


export default function CadastroInformacoes(props) {

  const codigo_tcc = useParams().id;
  const id = useParams().idArquivo;
  const [, setPropostas] = useState([]);
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [, setTccs] = useState([]);
  const [nome_aluno, setNomeAluno] = useState("");
  const [link, setLink] = useState("");
  const [dataEntrega, setDataEntrega] = useState("");
  const [, setAtvs] = useState([]);
  const [file, setFile] = useState({})
  const [state, setState] = useState(3);

  useEffect(() => {
    api.get(`Proposta/${localStorage.matricula}`).then(response => {
      setPropostas(response.data);
    })
  }, []);

  useEffect(() => {
    api.get(`TccOrientado/${localStorage.matricula}`).then(response => {
      setTccs(response.data);
    })

  }, []);

  useEffect(() => {
    api.get(`Atv/${codigo_tcc}`).then(response => {
      setAtvs(response.data);
    })
  }, [codigo_tcc]);


  async function create_proposta(e) {
    e.preventDefault();

    const data = {
      nome,
      descricao,
    };

    try {
      await api.post(`Proposta/${localStorage.matricula}`, data, {});
      setState(1)
      setTimeout(() => { setState(3) }, 3000)
    } catch (err) {
      setState(0)
      setTimeout(() => { setState(3) }, 3000)
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
      await api.post(`TccOrientado/${localStorage.matricula}`, data, {});
      setState(1)
      setTimeout(() => { setState(3) }, 3000)
    } catch (err) {
      setState(0)
      setTimeout(() => { setState(3) }, 3000)
    }
  }

  async function create_atv(e) {
    e.preventDefault();

    if (isPast(parseISO(dataEntrega)) === true) {
      setState(4)
      setTimeout(() => { setState(3) }, 3000)
    } else {

      const data = {
        nome,
        descricao,
        dataEntrega,
      };
      try {
        await api.post(`Atv/${codigo_tcc}`, data, {});
        setState(1)
        setTimeout(() => { setState(3) }, 3000)
      } catch (err) {
        setState(0)
        setTimeout(() => { setState(3) }, 3000)
      }
    }
  }

  async function envio_arquivo() {

    const data = new FormData()
    data.append('file', file)

    try {
      await api.post(`/AlunoAtividades/upload/${id}`, data, {});
      setState(5)
      setTimeout(() => { setState(3) }, 3000)
    } catch (err) {
      setState(6)
      setTimeout(() => { setState(3) }, 3000)
    }

  }

  function alerta() {
    if (state === 0) {
      return (<div className="alert alert-danger" role="alert">
        Erro no cadastro, tente novamente!
      </div>)
    } else if (state === 1) {
      return (<div className="alert alert-success" role="alert">
        Cadastrado realizado com sucesso!
      </div>)
    } else if (state === 4) {
      return (<div className="alert alert-danger" role="alert">
        Data incoerente, tente novamente!
      </div>)
    } else if (state === 5) {
      return (<div className="alert alert-success" role="alert">
        Arquivo carregado com sucesso!
      </div>)
    } else if (state === 6) {
      return (<div className="alert alert-danger" role="alert">
        Não foi possível carregar o arquivo, tente novamente!
      </div>)
    } else {
      return (<div></div>)
    }
  }

  return (
    <div >
      {alerta()}
      {props.propostas && <div>
        <Container className="container-form" >
          <Row>
            <Col md={{ span: 4, offset: 4 }}>
              <FiFileText className="avatar" size={40} color="#e0293d" />
              <form onSubmit={create_proposta} encType="multipart/formData">
                <div className="form-group">
                  <label className="form"> Nome da Proposta: </label>
                  <input
                    className="form-control"
                    size="lg"
                    type="text"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                  />
                  <label className="form"> Descrição: </label>
                  <textarea
                    className="form-control"
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

      {props.tccOrientado && <div>
        <Container className="container-form" >
          <Row>
            <Col md={{ span: 4, offset: 4 }}>
              <FiFileText className="avatar" size={40} color="#e0293d" />
              <form onSubmit={create_tcc}>
                <div className="form-group">
                  <label className="form"> Nome do tcc: </label>
                  <input
                    className="form-control"
                    size="lg"
                    type="text"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                  />
                  <label className="form"> Nome do Aluno: </label>
                  <input
                    className="form-control"
                    size="lg"
                    type="text"
                    value={nome_aluno}
                    onChange={e => setNomeAluno(e.target.value)}
                  />
                  <label className="form"> Link: </label>
                  <input
                    className="form-control"
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

      {props.atividades && <div>
        <Container className="container-form" >
          <Row>
            <Col md={{ span: 4, offset: 4 }}>
              <FiFileText className="avatar" size={40} color="#e0293d" />
              <form onSubmit={create_atv}>
                <div className="form-group">
                  <label className="form"> Atividade: </label>
                  <input
                    className="form-control"
                    size="lg"
                    type="text"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                  />
                  <label className="form"> Descrição: </label>
                  <textarea
                    className="form-control"
                    style={{ height: '100px' }}
                    size="lg"
                    type="text"
                    value={descricao}
                    onChange={e => setDescricao(e.target.value)}
                  />
                  <label className="form"> Data de Entrega: </label>
                  <input
                    className="form-control"
                    size="lg"
                    type="date"
                    value={(dataEntrega)}
                    onChange={e => setDataEntrega(e.target.value)}
                  />
                  <Button className="button" type="submit" variant="danger" size="lg" block> Cadastrar </Button>
                </div>
              </form>
            </Col>
          </Row>
        </Container>

      </div>}

      {props.envio && <div>
        <Container className="container-form" >
          <Row>
            <Col md={{ span: 4, offset: 4 }}>
              <FiFileText className="avatar" size={40} color="#e0293d" />
              <form onSubmit={envio_arquivo}>
                <div className="form-group">
                  <input
                    className="form-control button"
                    size="lg"
                    type="file"
                    id="file"
                    onChange={(e) => { setFile(e.target.files[0]) }}
                  />
                  <Button className="button" type="submit" variant="danger" size="lg" block> Enviar </Button>
                </div>
              </form>
            </Col>
          </Row>
        </Container>

      </div>}
    </div>
  );
}