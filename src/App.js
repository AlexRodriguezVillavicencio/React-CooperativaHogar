import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PosRouter from './modules/pos/PosRouter';

function App() {
  return (
    <>

      <Router>
        <Switch>
          <Route path="/cuenta" component={PosRouter} /> 
        </Switch>
      </Router> 

    </>
  );
}

export default App;
