import React, { Component } from "react";
import {
  Route,
  Redirect,
  Switch,
  BrowserRouter,
  HashRouter
} from "react-router-dom";
import Home from "./components/home";
import Design from "./components/design";
import Film from "./components/film";
import Blog from "./components/blog";
import info from "./components/info";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/design" component={Design} />
          <Route path="/film" component={Film} />
          <Route path="/blog" component={Blog} />
          <Route path="/info" component={info} />
          <Redirect from="/" exact to="/home" />
          <Redirect to="/not-found" />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
