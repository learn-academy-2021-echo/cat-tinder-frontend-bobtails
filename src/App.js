import React, { Component } from "react";
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

  render() {
    return (
      <>
        <h1>App</h1>
        <Header />
        <Footer />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/birdindex" component={BirdIndex} />
            <Route path="/birdshow" component={BirdShow} />
            <Route path="/birdnew" component={BirdNew} />
            <Route path="/birdedit" component={BirdEdit} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
