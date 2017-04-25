import React, { Component } from 'react';
import base from './Rebase.js';
import LoginForm from './LoginForm.js';


class Login extends Component {
    constructor() {
      super();
      this.setState = {
        user: '',
        email: '',
        password: ''
      }
    }

     getuser(){
       base.fetch('user', {
         context: this,
         asArray: true,
         then(data){

         }
       });
     }

  render () {

    return (
        <LoginForm handleSubmit={this.handleSubmit}/>
    )
  }
}
export default Login;
