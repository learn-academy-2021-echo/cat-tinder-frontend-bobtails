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
import mockBird from "./mockBirds";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bird: mockBird,
    };
  }

  createBird = (bird) => {
    console.log(bird);
  };

  updateBird = (bird, id) => {
    console.log("bird:", bird);
    console.log("id:", id);
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
