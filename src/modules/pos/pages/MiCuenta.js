import React from 'react';

import './../css/MiCuenta.css'

const MiCuenta = () => {
    return (
        <>
                <section className="section">
        
                    <h1>CUENTA EN SOLES</h1>
                    <div className="circulo">
                        <p>Saldo Disponible</p>
                        <b>s/10'456.50</b>
                    </div>
                    <div className="cuenta">
                        <p>Numero de cuenta</p>
                        <b>100-4567839849-4-23</b>
                    </div>
                    
                    <table className="table">
                            <thead className="cabecera-tabla">
                                <td colspan="3">Ultimos movimientos</td>
                            </thead>
                            <tbody className="cuerpo-tabla">
                                <tr>
                                    <th>Fecha</th>
                                    <th>IN/OUT</th>
                                    <th>Monto</th>
                                </tr>
                                <tr>
                                    <td>5/30/2021</td>
                                    <td>IN</td>
                                    <td>s/450.50</td>
                                </tr>
                                <tr>
                                    <td>5/30/2021</td>
                                    <td>OUT</td>
                                    <td>s/450.50</td>
                                </tr>
                                <tr>
                                    <td>5/30/2021</td>
                                    <td>IN</td>
                                    <td>s/450.50</td>
                                </tr>
                                <tr>
                                    <td>5/30/2021</td>
                                    <td>OUT</td>
                                    <td>s/450.50</td>
                                </tr>
                            </tbody>
                    </table> 
                </section>
        </>
    )
}

export default MiCuenta
