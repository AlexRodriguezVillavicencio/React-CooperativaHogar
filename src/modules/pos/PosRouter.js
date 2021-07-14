import React from 'react';
import {Switch, Route} from 'react-router-dom';
import MiCuenta from './pages/MiCuenta';
import Transferencias from './pages/Transferencias';
import Navbar from './components/Navbar';

const PosRouter = () => {
    return (
        <>
        <Navbar/>
        <Switch>
            <Route path="/cuenta/mi_cuenta" component={MiCuenta} />
            <Route path="/cuenta/transferencias" component={Transferencias} />
        </Switch>
        </>
    )
}

export default PosRouter
