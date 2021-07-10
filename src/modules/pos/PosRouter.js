import React from 'react';
import {Switch, Route} from 'react-router-dom';
import MiCuenta from './pages/MiCuenta';

const PosRouter = () => {
    return (
        <>
        <Switch>
            <Route path="/cuenta/mi_cuenta" component={MiCuenta} />
        </Switch>
        </>
    )
}

export default PosRouter
