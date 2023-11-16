import React from "react";
import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <Link style={{textDecoration: 'none', color: 'black'}} to='/'>Home</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link style={{textDecoration: 'none', color: 'black'}} className='ms-4' to ='/zoo-news'>News</Link>
            <Link style={{textDecoration: 'none', color: 'black'}} className='ms-4' to ='/viewticket'>Tickets</Link>
            <Link style={{textDecoration: 'none', color: 'black'}} className='ms-4' to ='/opening-hours'>Opening Hours</Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
