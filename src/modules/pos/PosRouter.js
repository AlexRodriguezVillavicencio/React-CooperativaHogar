import React from "react";
import { Switch, Route } from "react-router-dom";
import MiCuenta from "./pages/MiCuenta";
import Transferencias from "./pages/Transferencias";
import Header from "./components/Header";
import Creditos from "./pages/Creditos";
import Inversiones from "./pages/Inversiones";

const PosRouter = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/cuenta/mi_cuenta" component={MiCuenta} />
        <Route path="/cuenta/transferencias" component={Transferencias} />
        <Route path="/cuenta/creditos" component={Creditos} />
        <Route path="/cuenta/inversiones" component={Inversiones} />
      </Switch>
    </>
  );
};

export default PosRouter;
