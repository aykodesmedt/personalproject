import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import "./App.module.css";

import Home from "./Home";
import Leren from "./Leren";
import Letters from "./Letters";
import Woorden from "./Woorden";

class App extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path="/" exact strict component={Home} />
          <Route path="/leren" component={Leren} />
          <Route path="/letters" component={Letters} />
          <Route path="/woorden" component={Woorden} />
        </Switch>
      </main>
    );
  }
}

export default withRouter(App);
