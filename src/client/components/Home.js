import React, { Component } from "react";

const jumbotron = require('../assets/images/empire.png');

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="jumbotron">
          <h1>Three decades of experience</h1>
          <p>Highly rated</p>
          <p>
            <a className="btn btn-primary btn-lg" href="/" role="button">Request a quote</a>
          </p>

        </div>

        <h2>About us</h2>
        <p>
          MGP originates from Mike Gregory and staff, founder member of Gregory & Jones from 1989. Through experience over the past
          30 years in the industry has been a painting contracting service with an uncompromising attitude towards
          occupational health and safety regulations, quality relative to costs and the warranty of its work. It is
          recognized as an industry leader, offering a variety of flexible, affordable and proactive maintenance programs
          designed to relieve customers of undue responsibility while ensuring that the property is always looking
          at is best. Building and maintenance managers rest assured that MGP are the on-site experts, sensitive to
          residents’ needs and mindful of workplace surroundings We operate in all areas in of Cape Town.
            </p>
      </div>
    );
  }
}

export default Home;