import React from "react"
import PersonOutlineSharpIcon from '@mui/icons-material/PersonOutlineSharp';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function NavItems(){
    return <div className="Nav-Items">

        <>
      {[false ].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#"></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Realtor
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">About</Nav.Link>
                  <Nav.Link href="#action2">Listings</Nav.Link>
                  <NavDropdown
                    title="Agents"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">...</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      View Agents
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Register as Agent
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="enter Agent name/location"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
       ))} 
    </>


        <div className="menu-items">
            <h2 className="logo-text menu-item1">Realtor</h2>
            <div className="menu-items2">
                
                <Link to=""><li>Home</li></Link>
                <Link to="/Listings"><li>Listings</li></Link>
                <button className=""><PhoneInTalkIcon/></button>
                <Link to="/Login"><li>Login </li></Link>
                <PersonOutlineSharpIcon />
            </div>

        </div>

    </div>
}