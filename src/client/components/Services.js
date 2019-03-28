import React, { Component } from "react";

import "../styles/services.scss"

class Stuff extends Component {
  render() {
    return (
      <div className="services">
        <h1 className="title">Services</h1>
        <p>We offer free quotes on the following services:</p>
        <ol>
          <li>Painting</li>
          <li>Waterproofing</li>
          <li>Damp removal</li>
          <li>Crack repair</li>
          <li>Joint repair</li>          
          <li>Wall, window &amp; facia restoration</li>
        </ol>

        <h1 className="title">About us</h1>

        <p>
          MGP originates from Mike Gregory and staff, founder member of Gregory & Jones from 1989. Through experience over the past
          30 years in the industry has been a painting contracting service with an uncompromising attitude towards
          occupational health and safety regulations, quality relative to costs and the warranty of its work. It is
          recognized as an industry leader, offering a variety of flexible, affordable and proactive maintenance programs
          designed to relieve customers of undue responsibility while ensuring that the property is always looking
          at is best. Building and maintenance managers rest assured that MGP are the on-site experts, sensitive to
          residents’ needs and mindful of workplace surroundings We operate in all areas in of Cape Town.
        </p>

        <h1 className="title">Compliance</h1>
          
          <p>
            We are registered with the BIBC
          </p>

        <img src={require("../assets/images/bibc.png")} alt="http://www.bibc.co.za/"/>


        <h1 className="title">References</h1>
        <img src={require("../assets/images/gj.png")} alt="gregory and jones"/>
        <img src={require("../assets/images/midas.png")} alt="midas"/>
        

      </div>
    );
  }
}
 
export default Stuff;