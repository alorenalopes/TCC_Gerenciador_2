import React, { useState, useEffect } from 'react'
import '../Autenticacao/styles.css'
import api from '../../servicos/api';
import { useNavigate } from 'react-router-dom';
import './styles.css'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';


export default function Perfil() {

  const [Profs, setProfs] = useState([]);
  const [area, setArea] = useState("");
  const [disponibilidade, setDisponibilidade] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    api.get(`Professor/${localStorage.matricula}`).then(response => {
      setProfs(response.data);
      setArea(response.data.area);
      setDisponibilidade(response.data.disponibilidade);
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
      navigate('/profileProfessor');
    } catch (err) {
      alert('Erro no cadastro, tente novamente');
    }
  }

  async function Propostas() {
    navigate('/perfil/propostas');
  }

  async function Tccs() {
    navigate('/perfil/tccs');
  }

  return (
    <div >
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
    </div>
  );
}