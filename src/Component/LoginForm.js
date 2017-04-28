import React, { Component } from 'react';
import './LoginForm.css';

import './LoginForm.css';
import Login from './Login';


class LoginForm extends Component {




  render () {

    return (
      <div>
        
        {this.props.children}

      </div>

    )
  }
}


export default LoginForm;
