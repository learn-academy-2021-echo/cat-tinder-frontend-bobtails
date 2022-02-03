import React, { Component } from "react";

class BirdIndex extends Component {
  render() {
    return (
      <>
        <h1>BirdIndex</h1>
        {this.props.birds.map(bird => {
          return (
            <p>{bird.name}</p>
          )
        })}
        
      </>
    );
  }
}

export default BirdIndex;
