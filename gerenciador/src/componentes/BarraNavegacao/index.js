import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import logo from '../../../src/logo.png'
import './styles.css'
import { useNavigate } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { FaUserCircle } from 'react-icons/fa'
import Dropdown from 'react-bootstrap/Dropdown'
import '../LoginUsuarios/styles.css'


export default function BarraNavegacao(props) {

  const navigate = useNavigate();

  function Sair() {
    localStorage.clear();
    navigate('/');
  }

  function Voltar() {
    navigate(props.voltarCaminho);
  }

  function PerfilProf() {
    navigate('/perfil_Inicial_Professor/perfil');
  }

  function PerfilAluno() {
    navigate('/perfil_Inicial_Aluno/perfil');
  }

  return (
    <div>
      <Navbar className="Navbar">
        <Navbar.Brand >
          <img alt="" src={logo} className="image" />
        </Navbar.Brand>
        <Navbar.Collapse>
          <Nav className="mr-auto">
            {props.homeHabilitado && <Nav.Link href="/">Home</Nav.Link>}
            {props.homeHabilitado && props.loginHabilitado && <Nav.Link href="/login">Login</Nav.Link>}
          </Nav>

          {props.perfil && <Dropdown style={{ marginRight: '25px', color: '#fafafa' }}>
            <Dropdown.Toggle as="symbol" id="dropdown-basic">
              <FaUserCircle size={30} color="#e0293d"  />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {props.perfilProfessor &&<Dropdown.Item onClick={() => PerfilProf()} >Perfil</Dropdown.Item>}
              {!props.perfilProfessor &&<Dropdown.Item onClick={() => PerfilAluno()} >Perfil</Dropdown.Item>}
              <Dropdown.Item onClick={() => Sair()} >Sair</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          }

          {props.voltarHabilitado &&
            <button type="button" className="simbolos" onClick={() => Voltar()} >
              <FiArrowLeft size={20} color="#e0293d" />
            </button>}


          {props.homeHabilitado && props.loginHabilitado && (
            <Form inline>
              <FormControl
                type="text"
                placeholder="Nome"
                className="mr-sm-2"
              />
              <Button type="submit" variant="outline-danger">Pesquisar</Button>
            </Form>
          )
          }
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}