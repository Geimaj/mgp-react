import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home"
import Services from "./Services"
import Projects from "./Projects"
import Contact from "./Contact"
 
const logo = require('../assets/images/logo.png');

class Main extends Component {
  render() {
    return (
      <HashRouter>

        <div className="container">
        <header>
            <a href="#" className="thumbnail">
                <img src={logo} alt="thumbnail"/>
            </a>
        </header>

          <ul className="nav nav-tabs">

            <li role="presentation">
                <NavLink exact to="/">HOME</NavLink>
            </li>
            <li role="presentation">
                <NavLink to="/services">SERVICES</NavLink>
            </li>

            <li role="presentation">
                <NavLink to="/projects">PROJECTS</NavLink>
            </li>

            <li role="presentation">
                <NavLink to="/contact">CONTACT</NavLink>
            </li>
          
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/services" component={Services}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/contact" component={Contact}/>
            
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;