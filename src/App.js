import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import Me from './me/Me';
import WorkExperience from './work-experience/WorkExperience';
import Projects from './projects/Projects';

import Art from './art/Art';
import logo from './assets/logo.svg'
import './App.css';
import './media-queries.css'

class App extends React.Component {
  render() {
    return (
    <div className="app-container">
      <div className="header">
        <img src={logo} alt="nabeels logo" className="logo"/>
      </div>
      <div className="header-border">
      </div> 
      <Router>
        <div>
          <Route path="/" exact component={Me} />
          <Route path="/workexperience/" component={WorkExperience} />
          <Route path="/projects/" component={Projects} />
          <Route path="/art/" component={Art} />

          <div className="nav-container"> 
            <nav>
              <ul className="navbar-ul">
                <li>
                  <NavLink to="/" exact activeClassName="active-link">ME</NavLink>
                </li>
                <li>|</li>
                <li>
                  <NavLink to="/workexperience/" activeClassName="active-link">WORK EXPERIENCE</NavLink>
                </li>
                <li>|</li>
                <li>
                  <NavLink to="/projects/" activeClassName="active-link">PROJECTS</NavLink>
                </li>
                <li>|</li>
                <li>
                  <NavLink to="/art/" activeClassName="active-link">ART</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </Router>
    </div>
    )
  }
}

export default App;
