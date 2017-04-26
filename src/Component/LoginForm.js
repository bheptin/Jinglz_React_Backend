import React, { Component } from 'react';
import './LoginForm.css';
import base from './Rebase.js'
import './LoginForm.css';
import Login from './Login';


class LoginForm extends Component {

    constructor() {
      super();
      this.state = {login: true};
      this.handleSubmit = this.handleSubmit.bind(this);
      this.authHandler = this.authHandler.bind(this);
    }

    handleSubmit(event) {
      event.preventDefault();
      let email = event.target.elements[0].value;
      let password = event.target.elements[1].value;
      if (this.state.login) {
        base.authWithPassword({email, password}, this.authHandler);
      } else {

           this.createUser(email, password);
      }
    }

    authHandler(error, authData) {
      if(error){
        console.log("Success");
      } else {
        console.log("Error");

      }
    }

    toggleLogin() {
      this.setState({login: !this.state.login});
    }



  render () {

    return (
      <div>
        <Login
          handleSubmit={this.handleSubmit}
          login={this.state.login}
          toggleLogin={this.toggleLogin.bind(this)}
          />
        {this.props.children}
      </div>

    )
  }
}


export default LoginForm;
