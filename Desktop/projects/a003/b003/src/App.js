import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Container, 
  Row,
  Col 
} from 'reactstrap';

const MyNavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar   dark expand="md" fixed id="myNavbar">
        <NavbarBrand href="/">Robótica Sustentável</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">Sobre nós </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Projetos
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Carrinho de Sopro
                </DropdownItem>
                <DropdownItem>
                  Catapulta I
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Catapulta II
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Bem vindo e volte sempre</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

function Conteudo(){
  return(
    <p>Ola</p>
  );
}

function App(prop) {
  return (
    <div className="App">
      <MyNavBar />
      <Container>
        <Row sm={{ px: 0, size:12}} md={{ px: 0,size:12}} lg={{ px: 0,size:12}}>
          <Col>
          
          </Col>
        </Row>
      </Container>
     
    </div>
  );
}

export default App;
