import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Basic from "./Basic";
import Filter from "./Filter";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Switch>
        <Route exact path="/">
          <Basic />
        </Route>
        <Route path="/filter">
          <Filter />
        </Route>
      </Switch>
    </React.StrictMode>
  </Router>,
  rootElement
);
