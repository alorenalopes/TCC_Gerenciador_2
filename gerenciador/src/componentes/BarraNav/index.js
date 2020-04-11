import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import logo from '../../../src/logo.png'
import './styles.css'
import { useHistory } from 'react-router-dom';
import { FiArrowLeft, FiLogOut, FiUserCheck } from 'react-icons/fi'


export default function BarraNav(props) {

  const history = useHistory();

  function Sair() {
    localStorage.clear();
    history.push('/');
  }

  function Voltar() {
    history.push(props.caminho);
  }

  function Perfil() {
    history.push('/perfil');
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

          <Nav>
            {props.perfilprof && <button type="button" className="simbolos" onClick={() => Perfil()} >
              <FiUserCheck size={30} color="#e0293d"  style={{marginRight:'25px'}}/>
            </button>}
            {props.perfil && <button type="button" className="simbolos" onClick={() => Sair()} >
              <FiLogOut size={30} color="#e0293d" />
            </button>}
          </Nav>

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