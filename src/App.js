import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import adminRouter from "./modules/admin/adminRouter";
import authRouter from "./modules/auth/authRouter";
import Bienvenida from "./modules/pos/pages/Bienvenida";
import PosRouter from "./modules/pos/PosRouter";
import Creditos from "./modules/pos/pages/Creditos";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/bienvenida" component={Bienvenida} />
          <Route path="/cuenta" component={PosRouter} />
          <Route path="/admin" component={adminRouter} />
          <Route path="/auth" component={authRouter} />
          <Redirect to="/bienvenida" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
