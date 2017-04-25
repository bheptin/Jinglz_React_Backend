import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../public/Jinglz.png';
import LoginForm from '../src/Component/LoginForm.js';
import './App.css';
import base from '../src/Component/Rebase.js'

class App extends Component {


  render() {

    return (
    <div className="App">
        <LoginForm />
    </div>

    );
  }
}

export default App;
