import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Signup from '../src/Component/Signup';
import About from '../src/Component/About';
import LoginForm from '../src/Component/LoginForm';
import './index.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';


ReactDOM.render(
  <Router>
    <div className="container">
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">Jinglz</a>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
              <li><NavLink exact to="/">Home</NavLink></li>
              <li><NavLink to="Signup">Signup</NavLink></li>
              <li><NavLink to="Contact">Contact</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
    <Route exact path="/" component={App}/>
    <Route path="/Signup" component={Signup}/>
    <Route path="/About" component={About}/>

    </div>

  </Router>,
  document.getElementById('root')
);
