import React from 'react'
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Bienvenida from './modules/pos/pages/Bienvenida';
import PosRouter from './modules/pos/PosRouter';

function App() {
  return (
    <>

      <Router>
 
        <Switch>
          <Route path="/bienvenida" component={Bienvenida} /> 
          <Route path="/cuenta" component={PosRouter} /> 
          <Redirect to="/bienvenida"/>
        </Switch>
      </Router> 

    </>
  );
}

export default App;
