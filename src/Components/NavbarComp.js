import React, { Component } from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap';

export default class NavbarComp extends Component
{
    render()
    {
        return(
            <>
          <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Logo</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            </Container>
          </Navbar>
        </>
        )
    }
}