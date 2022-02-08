import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Form, FormGroup, Input, Label } from "reactstrap";

class BirdNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newBird: {
        name: "",
        age: "",
        enjoys: "",
        image: "",
      },
      submitted: false,
    };
  }

  handleChange = (e) => {
    let { newBird } = this.state;
    newBird[e.target.name] = e.target.value;
    this.setState({ newBird: newBird });
  };

  handleSubmit = () => {
    this.props.createBird(this.state.newBird);
    this.setState({ submitted: true });
  };

  render() {
    console.log(this.state.newBird.name);
    return (
      <>
        <h1>BirdNew</h1>
        <Form>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.newBird.name}
            />
          </FormGroup>
          <FormGroup>
            <Label for="age">Age</Label>
            <Input
              type="text"
              name="age"
              onChange={this.handleChange}
              value={this.state.newBird.age}
            />
          </FormGroup>
          <FormGroup>
            <Label for="enjoys">Enjoys</Label>
            <Input
              type="text"
              name="enjoys"
              onChange={this.handleChange}
              value={this.state.newBird.enjoys}
            />
          </FormGroup>
          <FormGroup>
            <Label for="image">Pic</Label>
            <Input
              type="text"
              name="image"
              onChange={this.handleChange}
              value={this.state.newBird.image}
            />
          </FormGroup>
          <button
            onClick={this.handleSubmit}
            name="submit button"
            type="submit"
          >
            Add a New Bird
          </button>
        </Form>
        {this.state.submitted && <Redirect to="/birdindex" />}
      </>
    );
  }
}

export default BirdNew;
