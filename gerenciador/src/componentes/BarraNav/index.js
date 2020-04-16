import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import logo from '../../../src/logo.png'
import './styles.css'
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiLogOut, FiUserCheck } from 'react-icons/fi'
import { FaUserCircle } from 'react-icons/fa'
import Dropdown from 'react-bootstrap/Dropdown'


export default function BarraNav(props) {

  const navigate = useNavigate();

  function Sair() {
    localStorage.clear();
    navigate('/');
  }

  function Voltar() {
    navigate(props.caminho);
  }

  function Perfil() {
    navigate('/profileProfessor/perfil');
  }

  return (
    <div>
      <Navbar className="Navbar">
        <Navbar.Brand >
          <img alt="" src={logo} className="image" />
        </Navbar.Brand>
        <Navbar.Collapse>
          <Nav className="mr-auto">
            {props.profile && <Nav.Link href="/">Home</Nav.Link>}
            {props.profile && props.verificacao && <Nav.Link href="/login">Login</Nav.Link>}
          </Nav>

          {/* <Nav>
            {props.perfilprof && <button type="button" className="simbolos" >
              <FiUserCheck size={30} color="#e0293d"  style={{marginRight:'25px'}}/>
            </button>}
            {props.perfil && <button type="button" className="simbolos" onClick={() => Sair()} >
              <FiLogOut size={30} color="#e0293d" />
            </button>}
          </Nav> */}

          {props.perfilprof && <Dropdown style={{ marginRight: '25px', color: '#ef9a9a' }}>
            <Dropdown.Toggle as="symbol" id="dropdown-basic">
              <FaUserCircle size={30} color="#e0293d"  />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => Perfil()} >Perfil</Dropdown.Item>
              <Dropdown.Item onClick={() => Sair()} >Sair</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          }

          {props.voltar &&
            <button type="button" className="simbolos" onClick={() => Voltar()} >
              <FiArrowLeft size={20} color="#e0293d" />
            </button>}


          {props.profile && props.verificacao && (
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