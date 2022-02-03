import React, { Component } from "react";

class BirdIndex extends Component {
  render() {
    return (
      <>
        <h1>BirdIndex</h1>

       { if (typeof this.props.birds !== 'undefined'){
        {this.props.birds.map(bird => {
          return (
            <p>{bird.name}</p>
          )}
          else {
           return( <h1>no </h1>
           )
          }
        }
        }
        )
        }
        }
        
      </>
    )
  }
}

export default BirdIndex;
