import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import logo from '../../../src/logo.png'
import './styles.css'
import {useHistory} from 'react-router-dom';


export default function BarraNav(props) {

  const history = useHistory();

  function Sair(){
    localStorage.clear();
    history.push('/');
  } 

  return (
    <div>
      <Navbar id="Navbar">
        <Navbar.Brand >
          <img alt="" src={logo} id="image" />
        </Navbar.Brand>
        <Navbar.Collapse>
          <Nav className="mr-auto">
            {props.profile && <Nav.Link href="/">Home</Nav.Link>}
            {props.profile && props.verificacao && <Nav.Link href="/login">Login</Nav.Link>}
          </Nav>

          <Nav>    
            {props.perfilprof &&<Nav.Link href="/Perfil">Perfil</Nav.Link>}
            {props.perfil && <Nav.Link onClick={Sair}>Sair</Nav.Link>}
          </Nav>
          

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