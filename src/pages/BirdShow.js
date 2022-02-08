import React, { Component } from "react";
import { Card, CardTitle, Col, CardText, Button, NavLink } from "reactstrap";

class BirdShow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <h1>BirdShow</h1>
        {typeof this.props.bird !== "undefined" ? (
          <Col sm="6">
            <Card body>
              <CardTitle>Hi, my name is {this.props.bird.name}!</CardTitle>
              <img src={this.props.bird.image} alt="adorable birb" />
              <CardText>
                I am {this.props.bird.age} years old. I enjoy{" "}
                {this.props.bird.enjoys}.
              </CardText>
            </Card>
          </Col>
        ) : (
          <p>no prob</p>
        )}
        <NavLink to={`/birdedit/${this.props.bird.id}`}>
          <Button>Edit Bird Profile</Button>
        </NavLink>
      </>
    );
  }
}
export default BirdShow;
