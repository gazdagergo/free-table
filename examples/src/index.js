import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Basic from "./Basic";
import Filter from "./Filter";
import Groups from "./Groups";
import Home from "./Home";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/basic" component={Basic} />
        <Route path="/filter" component={Filter} />
        <Route path="/groups" component={Groups} />
      </Switch>
    </React.StrictMode>
  </Router>,
  rootElement
);
