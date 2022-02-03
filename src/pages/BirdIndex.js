import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class BirdIndex extends Component {
  render() {
    return (
      <>
        <h1>BirdIndex</h1>
        <ul>
          {typeof this.props.birds !== "undefined" ? (
            this.props.birds.map((bird) => {
              return (
                <li>
                  <NavLink to={`/birdshow/${bird.id}`}>{bird.name}</NavLink>
                </li>
              );
            })
          ) : (
            <p>no data</p>
          )}
        </ul>
      </>
    );
  }
}

export default BirdIndex;
