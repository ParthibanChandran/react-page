import React, { Component } from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";

import Welcome from "../Pages/forms/Welcome.js";
import App from "../container/App.js";

export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/welcome" exact component={Welcome} />
          <Route path="/home-page" exact component={App} />
          <Redirect from="/" to="/welcome"/>
        </Switch>
      </BrowserRouter>
    );
  }
}
