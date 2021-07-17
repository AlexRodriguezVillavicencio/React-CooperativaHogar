import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./../img/logo1_sinnom.png";
import { Navbar, Nav } from "react-bootstrap";
import { useState } from "react";

const Header = () => {
  const [dropdown, setDropdown] = useState(false);

  const abrirCerrarDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#6ECAF1" }}
      >
        <div className="container-fluid">
          <Navbar.Brand href="#">
            <img
              src={logo}
              width="70"
              height="60"
              className="d-inline-block align-text-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            onClick={abrirCerrarDropdown}
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/cuenta/mi_cuenta">MI CUENTA</Nav.Link>
              <Nav.Link href="/cuenta/transferencias">TRANSFFERENCIAS</Nav.Link>
              <Nav.Link href="/cuenta/creditos">CREDITOS</Nav.Link>
              <Nav.Link href="/cuenta/inveriones">INVERSIONES</Nav.Link>
              <Nav.Link href="/bienvenida">CERRAR SESION</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </nav>
    </>
  );
};

export default Header;
