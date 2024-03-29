import React, { useState, useEffect } from 'react'
import api from '../../servicos/api'
import './styles.css'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck';
import { FiTrash2, FiExternalLink } from 'react-icons/fi'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Table from 'react-bootstrap/Table'
import { useParams, useNavigate } from 'react-router-dom'
import { format, parseISO, isAfter } from 'date-fns'
import { FaRegCheckSquare, FaRegFilePdf, FaRegSquare} from 'react-icons/fa'
import { RiFeedbackLine } from 'react-icons/ri'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

export default function ExibirInformacoes(props) {

  const codigo_tcc = useParams().id;
  const matricula_prof = useParams().matricula_prof;
  const id = useParams().idArquivo;
  const [Propostas, setPropostas] = useState([]);
  const [PropostasHome, setPropostasHome] = useState([]);
  const [Tccs, setTccs] = useState([]);
  const [TccsHome, setTccsHome] = useState([]);
  const [Atvs, setAtvs] = useState([]);
  const [AtvAluno, setAtvAluno] = useState([]);
  const [Arquivo, setArquivo] = useState([]);
  const [now, setNow] = useState(0);
  const navigate = useNavigate();
  const [state, setState] = useState(3);
  const [show, setShow] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [descricao, setDescricao] = useState('');
  const [atvid, setAtvId] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);


  useEffect(() => {

    api.get(`Atv/${codigo_tcc}`).then(response => {
      var data = new Date();
      for (const a in response.data) {
        if (isAfter(data, parseISO(response.data[a].dataEntrega)) === true && response.data[a].status !== "Concluído") {
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
    api.get(`Proposta/${matricula_prof}`).then(response => {
      setPropostasHome(response.data);
    })
  }, [matricula_prof]);


  useEffect(() => {
    api.get(`TccOrientado/${localStorage.matricula}`).then(response => {
      setTccs(response.data);
    })
  }, [Tccs]);

  useEffect(() => {

    api.get(`TccOrientado/${matricula_prof}`).then(response => {
      setTccsHome(response.data);
    })
  }, [matricula_prof]);

  useEffect(() => {

    api.get(`AlunoAtividades/${localStorage.matricula}`).then(response => {
      var data = new Date();
      for (const a in response.data) {
        if (isAfter(data, parseISO(response.data[a].dataEntrega)) === true && response.data[a].status !== "Concluído") {
          response.data[a].status = "Atrasado"
        }
      }
      setAtvAluno(response.data);
      setNow(response.headers['x-porcentagem'])
    })

  }, [AtvAluno]);

  useEffect(() => {
    api.get(`/AlunoAtividades/listar/${id}`).then(response => {
      setArquivo(response.data);
    })
  }, [id, Arquivo]);



  async function delete_proposta(id) {
    try {
      await api.delete(`Proposta/${id}`, {});
      setState(1)
      setPropostas(Propostas.filter(proposta => proposta.id !== id));
      setTimeout(() => { setState(3) }, 1500)
    } catch (err) {
      setState(0)
      setTimeout(() => { setState(3) }, 1500)
    }
  }

  async function delete_tcc(id) {
    try {
      await api.delete(`TccOrientado/${id}`, {});
      setState(1)
      setTccs(Tccs.filter(tcc => tcc.id !== id));
      setTimeout(() => { setState(3) }, 1500)
    } catch (err) {
      setState(0)
      setTimeout(() => { setState(3) }, 1500)
    }
  }

  async function delete_atv(id) {
    try {
      await api.delete(`Atv/${id}`, {});
      setState(1)
      setAtvs(Atvs.filter(atv => atv.id !== id));
      setTimeout(() => { setState(3) }, 1500)
    } catch (err) {
      setState(0)
      setTimeout(() => { setState(3) }, 1500)
    }
  }

  async function confirma_atv(id) {
    try {
      await api.put(`Atv/${id}`, {});
    } catch (err) {
      setState(5)
      setTimeout(() => { setState(3) }, 1500)
    }
  }

  async function envio_pdf(idArquivo) {
    navigate(`/perfil_Inicial_Aluno/upload/${idArquivo}`);
  }

  function alerta_pdf() {
    setState(4)
    setTimeout(() => { setState(3) }, 3000)
  }

  function setfeed(id, feedback) {
    setShow(true)
    setFeedback(feedback)
    setAtvId(id)
  }

  function setDescription(id, descricao) {
    setShowDescription(true)
    setDescricao(descricao)
    setAtvId(id)
  }

  async function feedback_pdf(e) {
    setShow(false)
    e.preventDefault();

    const data = {
      feedback,
    };

    try {
      await api.put(`Atv/feedback/${atvid}`, data, {});
    } catch (err) {
    }
  }

  async function descricao_atv(e) {
    setShowDescription(false)
    e.preventDefault();

    const data = {
      descricao,
    };

    try {
      await api.put(`Atv/descricao/${atvid}`, data, {});
    } catch (err) {
    }
  }

  async function delete_arquivo(id, arquivo_path) {
    try {
      await api.delete(`/AlunoAtividades/delete/${id}`, {
        headers: {
          arquivo: arquivo_path
        }
      });
      setState(1)
      setArquivo(Arquivo.filter(arq => arq.arquivo_path !== arquivo_path));
      setTimeout(() => { setState(3) }, 1500)
    } catch (err) {
      setState(0)
      setTimeout(() => { setState(3) }, 1500)
    }
  }

  function alerta() {
    if (state === 0) {
      return (<div className="alert alert-danger" role="alert">
        Erro ao deletar, tente novamente!
      </div>)
    } else if (state === 1) {
      return (<div className="alert alert-success" role="alert">
        Deletado com sucesso!
      </div>)
    } else if (state === 4) {
      return (<div className="alert alert-danger" role="alert">
        Nenhum arquivo recebido
      </div>)
    } else if (state === 5) {
      return (<div className="alert alert-danger" role="alert">
        Não foi possível confirmar, tente novamente!
      </div>)
    } else {
      return (<div></div>)
    }
  }


  return (
    <div >
      {alerta()}
      {props.propostas && <div>
        <CardDeck className="division">
          {Propostas.map(propostas => (
            <Card border="danger" key={propostas.id}>
              <Card.Body >
                <Card.Title>{propostas.nome} </Card.Title>
                <Card.Text >
                  {propostas.descricao}
                </Card.Text>
                <button type="button" className="button" onClick={() => delete_proposta(propostas.id)}>
                  <FiTrash2 size={25} color="#e0293d" />
                </button>
              </Card.Body>
            </Card>
          ))}
        </CardDeck>
      </div>}

      {props.propostasHome && <div>
        <CardDeck className="divisionHome">
          {PropostasHome.map(propostas => (
            <Card border="danger" key={propostas.id}>
              <Card.Body >
                <Card.Header className="text-center"><b>{propostas.nome}</b> </Card.Header>
                <Card.Text className="text-black-50">
                  {propostas.descricao}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </CardDeck>
      </div>}


      {props.tccOrientado && <div>
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
                  <FiTrash2 size={25} color="#e0293d" />
                </button>
              </Card.Body>
            </Card>
          ))}
        </CardDeck>
      </div>}

      {props.tccOrientadoHome && <div>
        <CardDeck className="divisionHome">
          {TccsHome.map(tcc => (
            <Card border="danger" key={tcc.id}>
              <Card.Body >
                <Card.Header className="text-center text-text-info"> <b>{tcc.nome}</b></Card.Header>
                <Card.Title></Card.Title>
                <Card.Text> <b>Aluno(a): </b>
                  {tcc.nome_aluno}
                  <br></br>
                  <br></br>
                  <a className="text-danger" href={tcc.link}>
                    <button type="button" className="button" onClick={() => delete_tcc(tcc.id)}>
                      <FiExternalLink size={25} color="#e0293d" />
                    </button>
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </CardDeck>
      </div>}

      {props.atividadesAluno &&
        <div>
          <div className="progresso">
            <ProgressBar
              block="true"
              animated variant="danger"
              now={now}
              label={`${Math.round(now)}%`}
              style={{ height: '30px', width: '700px', backgroundColor: '#ef9a9a' }} />
          </div>
          <div className="table_atv">
            <Table borderless style={{ marginLeft: '30px' }} className="tabela" >
              <thead>
                <tr>
                  <th width="40%">Atividade</th>
                  <th width="20%">Data de Entrega</th>
                  <th width="20%">Status</th>
                  <th width="20%"></th>
                </tr>
              </thead>
              {AtvAluno.map(atv => (
                <tbody key={atv.id}>
                  <tr>
                    <td><button className="link-button" onClick={() => setDescription(atv.id, atv.descricao)}>{atv.nome}</button></td>
                    <td>
                      {format(parseISO(atv.dataEntrega), "dd/MM/yyyy")}
                    </td>
                    <td>{atv.status}</td>
                    <td>
                      {atv.status === 'Concluído' &&
                        <button type="button" className="button_table" onClick={() => confirma_atv(atv.id)}>
                          <FaRegCheckSquare size={25} color="#e0293d" />
                        </button>
                      }
                      {atv.status === 'A fazer' &&
                        <button type="button" className="button_table" onClick={() => confirma_atv(atv.id)}>
                          <FaRegSquare size={25} color="#e0293d" />
                        </button>
                      }

                      <button type="button" className="button_table" onClick={() => envio_pdf(atv.id)}>
                        <FaRegFilePdf size={25} color="#e0293d" />
                      </button>

                      {showDescription &&
                        <Modal
                          show={showDescription}
                          onHide={() => setShowDescription(false)}>
                          <Modal.Header closeButton>
                            <Modal.Title>
                              Descrição    </Modal.Title>
                          </Modal.Header>
                          <Modal.Body >
                            <form>
                              <div className="form-group">
                                <textarea
                                  disabled
                                  className="form-control modal-atv"
                                  style={{ height: '200px' }}
                                  size="lg"
                                  type="text"
                                  value={descricao}
                                />
                              </div>
                            </form>
                          </Modal.Body>
                        </Modal>
                      }
                    </td>
                  </tr>
                </tbody>
              ))}
            </Table>
          </div>
        </div>}


      {props.atividadesProfessor &&
        <div className="table_atv">
          <Table borderless style={{ marginLeft: '30px' }} >
            <thead>
              <tr>
                <th width="35%">Atividade</th>
                <th width="25%">Data de Entrega</th>
                <th width="20%">Status</th>
                <th width="20%"></th>
              </tr>
            </thead>
            {Atvs.map(atv => (
              <tbody key={atv.id}>
                <tr>
                  <td><button className="link-button" onClick={() => setDescription(atv.id, atv.descricao)}>{atv.nome}</button></td>
                  <td >{format(parseISO(atv.dataEntrega), "dd/MM/yyyy")}</td>
                  <td>{atv.status} </td>
                  <td>
                    {atv.arquivo_filename &&
                      <button type="button" className="button_table" onClick={() => window.location = `http://localhost:3333/files/${atv.arquivo_filename}`}>
                        <FaRegFilePdf size={25} color="#e0293d" />
                      </button>
                    }
                    {!atv.arquivo_filename &&
                      <button type="button" className="button_table" onClick={() => alerta_pdf()}>
                        <FaRegFilePdf size={25} color="#e0293d" />
                      </button>
                    }
                    <button type="button" className="button_table" onClick={() => delete_atv(atv.id)}>
                      <FiTrash2 size={25} color="#e0293d" />
                    </button>
                    <button type="button" className="button_table" onClick={() => setfeed(atv.id)}>
                      <RiFeedbackLine size={25} color="#e0293d" />
                    </button>
                    {show &&
                      <Modal
                        show={show}
                        onHide={() => setShow(false)}>
                        <Modal.Header closeButton>
                          <Modal.Title>
                            Feedback    </Modal.Title>
                        </Modal.Header>
                        <Modal.Body >
                          <form onSubmit={feedback_pdf}>
                            <div className="form-group">
                              <textarea
                                className="form-control modal-atv"
                                style={{ height: '100px' }}
                                size="lg"
                                type="text"
                                required
                                value={feedback}
                                onChange={e => setFeedback(e.target.value)}
                              />
                              <Button className="button" type="submit" variant="danger" size="lg" block> Enviar </Button>
                            </div>
                          </form>
                        </Modal.Body>
                      </Modal>
                    }
                    {showDescription &&
                      <Modal
                        show={showDescription}
                        onHide={() => setShowDescription(false)}>
                        <Modal.Header closeButton>
                          <Modal.Title>
                            Descrição    </Modal.Title>
                        </Modal.Header>
                        <Modal.Body >
                          <form onSubmit={descricao_atv}>
                            <div className="form-group">
                              <textarea
                                className="form-control modal-atv"
                                style={{ height: '200px' }}
                                size="lg"
                                type="text"
                                value={descricao}
                                onChange={e => setDescricao(e.target.value)}
                              />
                              <Button className="button" type="submit" variant="danger" size="lg" block> Enviar </Button>
                            </div>
                          </form>
                        </Modal.Body>
                      </Modal>
                    }
                  </td>
                </tr>
              </tbody>
            ))}
          </Table>
        </div>}

      {
        props.envio &&
        <div>
          <Container>
            <Col md={{ span: 6, offset: 3 }}>
              {Arquivo.map(arq => (
                <div key={arq.id}>
                  {arq.arquivo_filename &&
                    <div class="card colorcard card-header"><a href={`http://localhost:3333/files/${arq.arquivo_filename}`} style={{ color: '000000' }}>{arq.nome}</a>
                      <button type="button" className="button_pdf" onClick={() => delete_arquivo(arq.id, arq.arquivo_path)}>
                        <FiTrash2 size={25} color="#e0293d" />
                      </button>
                      <button type="button" className="button_feedback" onClick={() => setShowFeedback(true)}>
                        <RiFeedbackLine size={25} color="#e0293d" />
                      </button>
                    </div>
                  }
                  {!arq.arquivo_filename &&
                    <div class="card colorcard card-header">Nenhum arquivo enviado</div>
                  }

                  {showFeedback &&
                    <Modal
                      show={showFeedback}
                      onHide={() => setShowFeedback(false)}>
                      <Modal.Header closeButton>
                        <Modal.Title>
                          Feedback   </Modal.Title>
                      </Modal.Header>
                      <Modal.Body >
                        <form>
                          <div className="form-group">
                            <textarea
                              disabled
                              className="form-control modal-atv"
                              style={{ height: '200px' }}
                              size="lg"
                              type="text"
                              value={arq.feedback}
                            />
                          </div>
                        </form>
                      </Modal.Body>
                    </Modal>
                  }
                </div>
              ))}
            </Col>
          </Container>
        </div>
      }

    </div >
  );
}
