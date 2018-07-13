import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./comp/Dashboard";
import Wizard from "./comp/Wizard";

export default (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/wizard" component={Wizard} />
  </Switch>
);
