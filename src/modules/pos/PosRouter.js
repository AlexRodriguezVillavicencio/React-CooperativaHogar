import React from 'react';
import {Switch, Route} from 'react-router-dom';
import MiCuenta from './pages/MiCuenta';
import Faucet from './pages/Faucet';
import Encuentranos from './pages/Encuentranos';
// import encuentranos from './pages/encuentranos';

const PosRouter = () => {
    return (
        <>
        <Switch>
            <Route path="/cuenta/mi_cuenta" component={MiCuenta} /> 
            <Route path="/cuenta/faucet" component={Faucet} />
            <Route path="/cuenta/encuentranos" component={Encuentranos} />
            
        </Switch>
        {/* <Switch>
            <Route path="/cuenta/encuentranos" component={encuentranos} />
        </Switch> */}
        </>
    )
}

export default PosRouter
