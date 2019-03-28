import React, { Component } from "react";
import Card from "./Card";
import CardContainer from "./CardContainer";
import {MAIL} from "./Main"

const jumbotron = require("../assets/images/empire.png");
const thirtyYears = require("../assets/images/30.svg");

const CardContainerStyles = {
  width: "80%",
  margin: "0 auto"
};

class Home extends Component {
  render() {
    let img = (
      <svg height="30" width="200">
        <text x="0" y="15" fill="#555">
          30+
        </text>
      </svg>
    );
    return (
      <div className="home">
        <h1 className="title">Cape Town based painters</h1>
        <div className="jumbotron">
          <div className="glass">
            <h1 className="title">Three decades of experience</h1>
            <p>Highly rated</p>
          </div>
          <p>
            <a className="btn btn-primary btn-lg" href={MAIL} role="button" >
              Request a quote
            </a>
          </p>
        </div>

        <CardContainer style={CardContainerStyles}>
          <Card>
            <div>
              <h1>30+</h1>
              <h3>Years experience</h3>
            </div>
          </Card>

          <Card>
            <div>
              <h1>South Africa</h1>
              <h3>Enriching Cape Town</h3>
            </div>
          </Card>

          <Card>
            <div>
              <h1>Brush</h1>
              <h3>Painting specialists</h3>
            </div>
          </Card>

          <Card>
            <div>
              <h1>BIBC</h1>
              <h3>Certified</h3>
            </div>
          </Card>
        </CardContainer>

      </div>
    );
  }
}

export default Home;
