import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./componentes/Principal/Home/Home";
import Menu from "./componentes/Principal/Home/Menu/Menu";
import Seguridad from "./componentes/Secundario/Seguridad/Seguridad";
import Activar from "./componentes/Secundario/Seguridad/Activar/Activar";
import Ahorro from "./componentes/Secundario/Seguridad/Ahorro/Ahorro";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/Seguridad">
        <Seguridad />
      </Route>

      <Route exact path="/Seguridad">
        <Home />
      </Route>

      <Route exact path="/Activar">
        <Activar />
      </Route>

      <Route exact path="/Ahorro">
        <Ahorro />
      </Route>

      <Route exact path="/Seguridad">
        <Menu />
      </Route>
    </Switch>
  </Router>
);
export default App;
