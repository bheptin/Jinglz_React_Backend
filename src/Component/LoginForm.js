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
      this.state = {showComponent: false};
      this.onButtonClick = this.onButtonClick.bind(this);
    }
    onButtonClick() {
      this.setState({
        showComponent: true,
      });
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
      console.log(error);
    } else {
      localStorage.setItem('UID', authData.uid);
      console.log(authData.uid);
    }
  }

  toggleLogin() {
    this.setState({login: !this.state.login});
  }

  createUser(email, password) {
       base.createUser({email, password}, function(error, authData) {
         console.log(authData);
         base.update(`${authData.uid}`, {
           data: {0: 'Name'}
         });

       });
     }


  render () {

    return (
      <div>
        <Login
          handleSubmit={this.handleSubmit}
          login={this.state.login}
          toggleLogin={this.toggleLogin.bind(this)}
          onButtonClick={this.onButtonClick.bind(this)}
          />
        {this.props.children}

      </div>

    )
  }
}


export default LoginForm;
