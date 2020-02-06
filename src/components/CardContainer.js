import React, { Component } from "react";

class CardContainer extends Component {
    constructor(){
        super()

        this.style = {
            
        }
    }
  
    render() {
        let merged = {...this.style, ...this.props.style}
    return (

        <div className="cardContainer" style={merged}>
            {this.props.children}
        </div>


    );
  }
}

export default CardContainer;