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
export const MAIL = "mailto:mike@datis.co.za?Subject=Painting%20Quote%20Request"

class Main extends Component {
  render() {
    return (
      <HashRouter>

        <div className="container">
        <header>
            <a href="#" className="">
                <img src={logo} alt="thumbnail"/>
            </a>

          <nav>

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
          </nav>
        
        </header>

        <hr />
          
          
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/services" component={Services}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/contact" component={Contact}/>
          </div>

          <footer>

            <h3 className="title">Contact us</h3>

            <ul>
              <li>
                Email:
                <a href={MAIL}> mike@datis.co.za</a>
              </li>
              <li>
                Phone: 
            <a href="#">+27 893 2136</a>
              </li>
            </ul>

            <p>
              Postnet Suite 356 | Private Bag X16
            </p>

            <hr/>
            Copy right &copy; Mike Gregory Projects {new Date().getUTCFullYear()}

          </footer>
        </div>


      </HashRouter>
    );
  }
}
 
export default Main;