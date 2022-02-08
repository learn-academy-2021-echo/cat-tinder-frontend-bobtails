import React, { Component } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { BrowserRouter as Redirect } from "react-router-dom";

class BirdEdit extends Component {
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
    this.props.updateBird(this.state.newBird, this.props.bird.id);
    this.setState({ submitted: true });
  };

  render() {
    return (
      <>
        <h1>BirdEdit</h1>
        <Button name="submit" onClick={this.handleSubmit}>
          Edit Bird Profile
        </Button>
        <Form>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input type="text" name="name" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="age">Age</Label>
            <Input type="number" name="age" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="enjoys">Enjoys</Label>
            <Input type="text" name="enjoys" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="image">Image URL</Label>
            <Input type="text" name="image" onChange={this.handleChange} />
          </FormGroup>
        </Form>
        {this.state.submitted && (
          <Redirect to={`/birdshow/${this.props.bird.id}`} />
        )}
      </>
    );
  }
}

export default BirdEdit;
