import React, { Component } from "react";

class Card extends Component {
    constructor(){
        super()

        this.style = {
            // "display": "inline-block"
        }

    }
  
    render() {
    return (

        <div className="card" style={this.style} >
          {this.props.children}
        </div>


    );
  }
}

export default Card;