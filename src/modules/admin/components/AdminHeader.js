import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './../../pos/img/logo1_sinnom.png';
import { NavDropdown, Navbar,Nav, Container } from 'react-bootstrap';

const AdminHeader = () => {
    return (
        <>
            <Navbar className="header" variant="dark" expand="lg" style= {{backgroundColor: '#6ECAF1',color:'#fff'}}>  
            <Container fluid>
              <Navbar.Brand href="#"><img src={logo} width="70" height="60"
                              className="d-inline-block " /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" variant="dark-bold">
                        <Nav style= {{backgroundColor: '#6ECAF1'}} >
                          <Nav.Link href='/cuenta/mi_cuenta'>MI CUENTA</Nav.Link>
                          <Nav.Link href='/cuenta/transferencias'>TRANSFFERENCIAS</Nav.Link>
                            <NavDropdown title="CREDITOS" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">SOLICITUDES</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">MIS CREDITOS</NavDropdown.Item>
                            </NavDropdown>                            
                          <Nav.Link href='/cuenta/mi_cuenta'>FAUCET</Nav.Link>
                          <Nav.Link href='/bienvenida'>CERRAR SESION</Nav.Link> 
                        </Nav>
                      </Navbar.Collapse>   
            </Container>
            </Navbar>  
        </>
    )
}

export default AdminHeader
