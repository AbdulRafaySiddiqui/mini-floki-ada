import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Top100 from "./pages/Top100/Top100";


const Routes = () => {
  return (
    <Switch>
      <Route component={Home} path="/" exact />
      <Route component={Top100} path="/top100" exact />      
    </Switch>
  );
};

export default Routes;
