import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BirdIndex from "./pages/BirdIndex";
import BirdShow from "./pages/BirdShow";
import BirdNew from "./pages/BirdNew";
import BirdEdit from "./pages/BirdEdit";
import NotFound from "./pages/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bird: [],
    };
  }

  componentDidMount() {
    this.readBird();
  }

  readBird = () => {
    fetch("http://localhost:3000/birds")
      .then((response) => response.json())
      .then((birdsArray) => this.setState({ bird: birdsArray }))
      .catch((errors) => console.log("Bird read errors:", errors));
  };

  createBird = (newBird) => {
    fetch("http://localhost:3000/birds", {
      body: JSON.stringify(newBird),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => response.json())
      .then((payload) => this.readBird())
      .catch((errors) => console.log("Bird create errors:", errors));
    console.log("bird has been created", newBird);
  };

  render() {
    return (
      <>
        <h1>App</h1>
        <Header />
        <Footer />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/birdindex"
              render={(props) => <BirdIndex birds={this.state.bird} />}
            />
            <Route
              path="/birdshow/:id"
              render={(props) => {
                let id = props.match.params.id;
                let bird = this.state.bird.find((bird) => bird.id === +id);
                return <BirdShow bird={bird} />;
              }}
            />
            <Route
              path="/birdnew"
              render={(props) => <BirdNew createBird={this.createBird} />}
            />
            <Route
              path="/birdedit/:id"
              render={(props) => {
                let id = props.match.params.id;
                let bird = this.state.bird.find((bird) => bird.id === +id);
                return <BirdEdit updateBird={this.updateBird} bird={bird} />;
              }}
            />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
