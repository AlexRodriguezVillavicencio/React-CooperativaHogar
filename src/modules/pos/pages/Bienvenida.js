import React from 'react';
import './../css/Bienvenida.css';
import logo from'./../img/logo_col.png'
import BienvenidaAcuerdos from './../components/BienvenidaAcuerdos'
import BienvenidaFormulario from './../components/BienvenidaFormulario';
import BienvenidaFooter from './../components/BienvenidaFooter';

const Bienvenida = () => {
    return (
        <>
            <section className="body" >
                <nav className="navbar">
                    <div className="navbar-a">
                        <a className="boton1" href='/cuenta/mi_cuenta' >INGRESAR</a>
                    </div>
                </nav>
                <div className="container">
                    <div className="bienvenida">  
                        <img src={logo} alt="" className="logo" />
                        <h1 className='h1'>BIENVENIDO</h1>
                        <p className="pBienvenida">Lorem ipsus at iure quas, quia dolores ea praesentium velit repellendus totam odit qui inventore, nemo beatae. Deleniti.</p>
                    </div>    
                <BienvenidaFormulario />
                </div>
            </section>
            <section className="acuerdos" style={{padding:'20px 0'}}>
                <BienvenidaAcuerdos/>
                <BienvenidaAcuerdos/>
            </section>

            <BienvenidaFooter/>  
        </>
    )
}

export default Bienvenida
