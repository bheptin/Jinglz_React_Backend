import React from 'react';
import ReactDOM from 'react-dom';
import Signup from '../src/Component/Signup';
import LoginForm from '../src/Component/LoginForm';
import About from '../src/Component/About';
import './index.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';


ReactDOM.render(
  <Router>
    <div className="app app-header-fixed app-aside-fixed">
      <header id="header" className="app-header navbar" role="menu">

          <div className="navbar-header bg-dark">
            <button className="pull-right visible-xs" target=".app-aside">
              <i className="glyphicon glyphicon-align-justify"></i>
            </button>

            <a href="#/" className="navbar-brand text-lt">
              <img src="../public/Jinglz.png" />
              <span className="hidden-folded m-l-xs">Jinglz</span>
            </a>

          </div>

          <div className="collapse pos-rlt navbar-collapse box-shadow bg-white-only">
            <div className="nav navbar-nav hidden-xs">
              <a href="#" className="btn no-shadow navbar-btn" target=".app">
                <i className="fa fa-dedent fa-fw text"></i>
                <i className="fa fa-indent fa-fw text-active"></i>
              </a>
              <a href="#" className="btn no-shadow navbar-btn" target="#aside-user">
                <i className="icon-user fa-fw"></i>
              </a>
            </div>

            <ul className="nav navbar-nav hidden-sm">
              <li className="dropdown pos-stc">
                <a href="#" data-toggle="dropdown" className="dropdown-toggle">
                  <span><NavLink to="Signup">Signup</NavLink></span>
                </a>
                <div className="dropdown-menu wrapper w-full bg-white">
                  <div className="row">

                    <div className="col-sm-4 b-l b-light">
                      <div className="m-l-xs m-t-xs m-b-xs font-bold">UI Kits <span className="label label-sm bg-primary">12</span></div>
                      <div className="row">
                        <div className="col-xs-6">
                        </div>
                        <div className="col-xs-6">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="dropdown">
                <a href="#" data-toggle="dropdown" className="dropdown-toggle">
                  <i className="fa fa-fw fa-plus visible-xs-inline-block"></i>
                  <span><NavLink exact to="/">Home</NavLink></span>
                </a>
              </li>
            </ul>


            <form className="navbar-form navbar-form-sm navbar-left shift" data-target=".navbar-collapse" role="search">
              <div className="form-group">
                <div className="input-group">
                  <input type="text" className="form-control input-sm bg-light no-border rounded padder" placeholder="Search projects..."/>
                  <span className="input-group-btn">
                    <button type="submit" className="btn btn-sm bg-light rounded"><i className="fa fa-search"></i></button>
                  </span>
                </div>
              </div>
            </form>
          </div>

      </header>



      <aside id="aside" className="app-aside hidden-xs bg-dark">
          <div className="aside-wrap">
            <div className="navi-wrap">


              <nav className="navi clearfix">
                <ul className="nav">
                  <li className="hidden-folded padder m-t m-b-sm text-muted text-xs">
                    <span>Navigation</span>
                  </li>
                  <li>
                    <a href className="auto">
                      <span className="pull-right text-muted">
                        <i className="fa fa-fw fa-angle-right text"></i>
                        <i className="fa fa-fw fa-angle-down text-active"></i>
                      </span>
                      <i className="glyphicon glyphicon-stats icon text-primary-dker"></i>
                      <span className="font-bold">Videos</span>
                    </a>
                  </li>
                  <li>
                    <a href="mail.html">
                      <b className="badge bg-info pull-right">9</b>
                      <i className="glyphicon glyphicon-envelope icon text-info-lter"></i>
                      <span className="font-bold">Email</span>
                    </a>
                  </li>
                  <li className="line dk"></li>


                  <li>

                  </li>

                  <li>

                  </li>
                  <li>

                  </li>
                </ul>
              </nav>

            </div>
          </div>
      </aside>



      <div id="content" className="app-content" role="main">
      	<div className="app-content-body app-content-full">



    <div className="hbox hbox-auto-xs bg-light
      app.settings.asideFolded = true;
      app.settings.asideFixed = true;
      app.settings.asideDock = false;
      app.settings.container = false;
      app.hideAside = false
      ">

{/*
      <div className="col w lter b-r">
        <div className="vbox">
          <div className="wrapper b-b">
            <div className="font-thin h4">Header</div>
          </div>
          <div className="nav-tabs-alt">
            <ul className="nav nav-tabs nav-justified">
              <li className="active">
                <a data-target="#tab-1" role="tab" data-toggle="tab">Day</a>
              </li>
              <li >
                <a data-target="#tab-2" role="tab" data-toggle="tab">Month</a>
              </li>
              <li >
                <a data-target="#tab-3" role="tab" data-toggle="tab">Year</a>
              </li>
            </ul>
          </div>
          <div className="row-row">
            <div className="cell scrollable hover">
              <div className="cell-inner">
                <div className="tab-content">
                  <div className="tab-pane active" id="tab-1">
                    <div className="wrapper-md">
                      This is the scrollable content, hover to show the scrollbar
                      <p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>
                      You got the bottom
                    </div>
                  </div>
                  <div className="tab-pane" id="tab-2">
                    <div className="wrapper-md">
                      Month report
                    </div>
                  </div>
                  <div className="tab-pane" id="tab-3">
                    <div className="wrapper-md">
                      Year report
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="col">
        <div className="vbox">
          <div className="row-row">
            <div className="cell">
              <div className="cell-inner">
                <div className="wrapper-md">
                  This is the scrollable content
                  <p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>
                  You got the bottom
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="col w-md lter b-l">
        <div className="vbox">
          <div className="wrapper b-b b-light">
            <div className="font-thin h4">Header</div>
            <small className="text-muted">with fluid height</small>
          </div>
          <div className="row-row">
            <div className="cell">
              <div className="cell-inner">
                <div className="wrapper-md">
                  This is the scrollable content
                  <p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>
                  You got the bottom
                </div>
              </div>
            </div>
          </div>
          <div className="padder b-t b-light text-center">
            <div className="m-xs">Footer with fluid height</div>
          </div>
        </div>
      </div>
*/}

    </div>




    	</div>

      </div>

      <LoginForm />

      <footer id="footer" className="app-footer" >
        <div className="wrapper b-t bg-light">
          <span className="pull-right">Jinglz <a href="#" className="m-l-sm text-muted"><i className="fa fa-long-arrow-up"></i></a></span>
          &copy; 2016 Copyright.
        </div>
      </footer>



    </div>

  </Router>,
  document.getElementById('root')
);
