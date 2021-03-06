import React, { Component } from "react";
import {
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Home from "./components/home";
import Design from "./components/design";
import Film from "./components/film";
import Blog from "./components/blog";
import Info from "./components/info";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/design" component={Design} />
          <Route path="/film" component={Film} />
          <Route path="/blog" component={Blog} />
          <Route path="/info" component={Info} />
          <Redirect from="/" exact to="/home" />
          <Redirect to="/not-found" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
