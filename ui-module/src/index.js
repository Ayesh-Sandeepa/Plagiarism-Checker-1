import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.1.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";

import AdminLayout from "layouts/Admin.jsx";
import AccessLayout from "layouts/Access.jsx";


const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/user" render={props => <AdminLayout {...props} />} />
      <Route path="/access" render={props => <AccessLayout {...props} />} />
      <Redirect to="/access/login" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
