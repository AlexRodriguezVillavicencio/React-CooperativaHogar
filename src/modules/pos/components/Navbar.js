import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pin from './../img/logo1_sinnom.png';

const Navbar = () => {
    return (
        <>
    
           <nav className="navbar navbar-expand-lg navbar-dark" style= {{backgroundColor: '#6ECAF1'}}>
                <div className="container-fluid">

                  
                    <a className="navbar-brand" href="#"><img src={Pin} width="70" height="60"
                    className="d-inline-block align-text-top" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><a href="mi_cuenta.html"     className="nav-link"    style={{color: '#fff'}} >MI CUENTA</a></li>
                            <li className="nav-item"><a href="transferencia.html" className="nav-link"    style={{color: '#fff'}}>TRANSFFERENCIAS</a></li>
                            <li className="nav-item dropdown"><a href="#"   className="nav-link dropdown-toggle" style={{color: '#fff'}}
                            id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">CREDITOS</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a href="creditos.html" className="dropdown-item">SOLICITUDES</a></li>
                                    <hr className="dropdown-divider"/>
                                    <li><a href="#" className="dropdown-item">MIS CREDITOS</a></li>
                                </ul>
                            </li>
                            <li className="nav-item"><a href="inversiones.html"  className="nav-link"  style={{color: '#fff'}}>INVERSIONES</a></li>
                            <li className="nav-item"><a href="faucet.html"       className="nav-link"  style={{color: '#fff'}}>FAUCET</a></li>
                            <li className="nav-item"><a href="encuentranos.html" className="nav-link"  style={{color: '#fff'}}>ENCUENTRANOS</a></li>
                            <li className="nav-item"><a href="index.html"        className="nav-link"  style={{color: '#fff'}}>CERRAR SESION</a></li>
                        </ul>
                    </div>           
                </div>
            </nav>
 
        </>
    )
}

export default Navbar
