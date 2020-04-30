import React, { useState, useEffect } from 'react'
import api from '../../servicos/api'
import { useNavigate } from 'react-router-dom'
import './styles.css'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


export default function Perfil(props) {

  const [Profs, setProfs] = useState([]);
  const [area, setArea] = useState("");
  const [disponibilidade, setDisponibilidade] = useState("");
  const navigate = useNavigate();
  const [aluno, setAluno] = useState([]);

  useEffect(() => {

    api.get(`Professor/${localStorage.matricula}`).then(response => {
      setProfs(response.data);
      setArea(response.data.area);
      setDisponibilidade(response.data.disponibilidade);
    })

  }, []);

  useEffect(() => {

    api.get(`Pessoa/${localStorage.matricula}`).then(response => {
      setAluno(response.data);
    })
  }, []);


  async function updateInfo(e) {
    e.preventDefault();

    const data = {
      area,
      disponibilidade,
    };

    try {
      await api.put('Professor', data, {
        headers: {
          matricula_prof: localStorage.matricula,
        }
      });
      navigate('/perfil_Inicial_Professor');
    } catch (err) {
      alert('Erro no cadastro, tente novamente');
    }
  }

  async function Propostas() {
    navigate('/perfil_Inicial_Professor/propostas');
  }

  async function Tccs() {
    navigate('/perfil_Inicial_Professor/tccs');
  }

  return (
    <div >
      {props.perfilAluno && <Container className="container-form" >
        {aluno.map(aluno => (
          <Row key={aluno.matricula}>
            <Col md={{ span: 4, offset: 1 }} >
              <Form.Label className="form"> Nome: </Form.Label>
              <Form.Control size="lg" type="text" disabled placeholder={aluno.nome_aluno} />
              <Form.Label className="form"> Matrícula: </Form.Label>
              <Form.Control size="lg" type="text" disabled placeholder={localStorage.matricula} />
              <Form.Label className="form"> Email: </Form.Label>
              <Form.Control size="lg" type="text" disabled placeholder={aluno.email} />
              <Form.Label className="form"> CPF: </Form.Label>
              <Form.Control size="lg" type="text" disabled placeholder={aluno.cpf} />
            </Col>
            <Col md={{ span: 4, offset: 2 }}>
              <Form.Label className="form"> Trabalho de Conclusão de Curso: </Form.Label>
              <Form.Control size="lg" type="text" disabled placeholder={aluno.nome_tcc} />
              <Form.Label className="form"> Orientador: </Form.Label>
              <Form.Control size="lg" type="text" disabled placeholder={aluno.nome_prof} />
            </Col>
          </Row>
        ))}
      </Container>}

      {props.perfilProfessor &&
        <Container className="container-form" >
          {Profs.map(prof => (
            <Row key={prof.matricula}>
              <Col md={{ span: 4, offset: 1 }} >
                <Form.Label className="form"> Nome: </Form.Label>
                <Form.Control size="lg" type="text" disabled placeholder={prof.nome} />
                <Form.Label className="form"> Matrícula: </Form.Label>
                <Form.Control size="lg" type="text" disabled placeholder={prof.matricula} />
                <Form.Label className="form"> Email: </Form.Label>
                <Form.Control size="lg" type="text" disabled placeholder={prof.email} />
                <Form.Label className="form"> CPF: </Form.Label>
                <Form.Control size="lg" type="text" disabled placeholder={prof.cpf} />
              </Col>
              <Col md={{ span: 4, offset: 2 }}>
                <Form onSubmit={updateInfo}>
                  <Form.Label className="form"> Área de atuação: </Form.Label>
                  <Form.Control
                    size="lg"
                    type="text"
                    placeholder={prof.area}
                    value={area}
                    onChange={e => setArea(e.target.value)}
                  />
                  <Form.Label className="form"> Disponibilidade: </Form.Label>
                  <Form.Control
                    size="lg"
                    type="number"
                    placeholder={prof.disponibilidade}
                    value={disponibilidade}
                    onChange={e => setDisponibilidade(e.target.value)}
                  />
                  <Button className="button" onClick={Propostas} variant="outline-danger" size="lg" block> Adicionar propostas </Button>
                  <Button className="button" onClick={Tccs} variant="outline-danger" size="lg" block> Adicionar Tcc's orientados </Button>
                  <Button className="button" type="submit" variant="danger" size="lg" block> Salvar informações </Button>
                </Form>
              </Col>
            </Row>
          ))}
        </Container>
      }
    </div>
  );
}