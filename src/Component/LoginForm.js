import React, { Component } from 'react';
import './LoginForm.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import base from './Rebase.js'


class LoginForm extends Component {

  render () {

    return (
      <Router><Route path="Signup">
        <div className="container w-xxl w-auto-xs">
              <form name="form" className="form-validation">
                <div className="text-danger wrapper text-center">
                </div>
                  <div className="list-group list-group-sm">
                  <div className="list-group-item">
                      <input type="email" placeholder="Email" className="form-control no-border" required/>
                  </div>
                  <div className="list-group-item">
                     <input type="password" placeholder="Password" className="form-control no-border" required/>
                  </div>
                    <button type="submit" onClick={this.handleClick} className="btn btn-lg btn-primary btn-block">Log in</button>
                  </div>
                  <div className="ForgotPW"><a>Forgot password?</a></div>
                  <div className="line line-dashed"></div>
                  <p className="text-center"><small>Need an account?</small></p>
              </form>
                <button className="btn btn-lg btn-default btn-block">Create an account</button>
            </div>
          </Route></Router>
    )
  }
}

export default LoginForm;
