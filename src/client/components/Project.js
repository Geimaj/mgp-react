import React, { Component } from "react";
 
class Project extends Component {
  render() {
    return (
      <div className="project">


            <div className="thumbnail">
              <img src={this.props.src} alt={this.props.title} />
              <div className="caption">
                <h3>{this.props.title}</h3>
                <p>{this.props.description}</p>
              </div>
            </div>


      </div>
    );
  }
}
 
export default Project;