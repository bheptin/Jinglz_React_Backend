import React from 'react';
import { Router, Route, browserHistory, IndexRedirect } from "react-router";
import App from "../src/App";
import LoginForm from "../src/Container/LoginForm.js";
import Signup from "..src/Container/Signup.js";
import Homepage from "../src/Container/Homepage.js";


const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={LoginForm} />
        <Route path="/LoginForm" component={LoginForm} />
        <Route path="/Signup" component={Signup} />
        <Route path="/Homepage" components={Homepage} />

      </Route>
    </Route>
  </Router>
)

export default routes;
