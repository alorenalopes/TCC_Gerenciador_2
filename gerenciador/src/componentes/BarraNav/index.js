import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import logo from '../../../src/logo.png'
import './styles.css'

export default function BarraNav(props) {

  return (
    <div>
      <Navbar id="Navbar">
        <Navbar.Brand >
          <img alt="" src={logo} id="image" />
        </Navbar.Brand>
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {props.verificacao && <Nav.Link href="/login">Login</Nav.Link>}
          </Nav>
          {
            props.verificacao && (
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