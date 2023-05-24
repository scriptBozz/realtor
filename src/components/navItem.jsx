import React from "react"
import PersonOutlineSharpIcon from '@mui/icons-material/PersonOutlineSharp';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Tooltip from '@mui/material/Tooltip';

export default function NavItems(){
    return <div className="Nav-Items">

          <>
      {["sm" ].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3 nav-bar">
          <Container fluid>
            <Navbar.Brand href="#" className="logo-text ">Realtor</Navbar.Brand>
           
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className="nav-menu-items"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}
                className="nav-menu-items">
                  Realtor
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 nav-menu-items ">
                 <Link to="/" style={{textDecorationLine:"none"}}><Nav.Link href="#action1" className="nav-menu-items">HOME</Nav.Link></Link> 
                  <Link to="/Listings" style={{textDecorationLine:"none"}}><Nav.Link href="#action2" className="nav-menu-items">LISTINGS</Nav.Link></Link> 
                   <Link to="/Login" style={{textDecorationLine:"none"}}><Nav.Link href="#action2" className="nav-menu-items">LOGIN </Nav.Link></Link>
                       <Nav.Link href="action3" className="nav-menu-items"> <PersonOutlineSharpIcon /></Nav.Link>
                  <NavDropdown
                    title="Agents"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    className="nav-menu-items"
                  >
                    <NavDropdown.Item href="#action4" >
                      View Agents new you
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Register as Agent
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                {/* <Form className="d-flex">
                  <Form.Control
                    label="recieve notifications on new Listings"
                    type="email"
                    placeholder="enteran email"
                    className="me-2"
                    aria-label="Subscribe"
                  />
                  <Button variant="outline-success">Subscribe</Button>
                </Form> */}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
       ))} 
    </>
        <div className="menu-items">
            {/* <h3 className="logo-text menu-item1"></h3> */}
            <div className="menu-items2">
                
                <li>Studio</li>
                <li>Family</li>
                <li>Condo </li>
                <Tooltip disableFocusListener title="consult our agents"><PhoneInTalkIcon/></Tooltip>
               
            </div>

        </div>

    </div>
}