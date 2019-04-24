import React, { Component } from "react";
import Card from "./Card";
import CardContainer from "./CardContainer";
import { MAIL } from "./Main";

const jumbotron = require("../assets/images/empire.png");
const thirtyYears = require("../assets/images/30.svg");
const paintBrush = require("../assets/images/paint.png");
const southAfrica = require("../assets/images/southAfrica.png");
const midasCoOp = require("../assets/images/midasCoop.png");

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
            <a className="btn btn-primary btn-lg" href={MAIL} role="button">
              Request a quote
            </a>
          </p>
        </div>

        <CardContainer>
          <Card>
            <div>
              <h1>30+</h1>
              <h3>Years experience</h3>
            </div>
          </Card>

          <Card>
            <div>
              <h1>
                <img src={southAfrica} alt="Western Cape, South Africa" />
              </h1>
              <h3>Cape Town, South Africa</h3>
            </div>
          </Card>

          <Card>
            <div>
              <h1>
                <img src={paintBrush} />
              </h1>
              <h3>Painting specialists</h3>
            </div>
          </Card>
        </CardContainer>

        <section className="partners">
          <h1 className="title">In cooperation with</h1>
          <img src={midasCoOp} alt="Midas" />
          {/* <img src={Plascon} alt="Plascon" /> */}
        </section>
      </div>
    );
  }
}

export default Home;
