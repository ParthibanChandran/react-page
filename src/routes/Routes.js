import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import HomeComponent from "../Pages/Home/HomeComponent.js";
import IndividualRecipes from "../Pages/RecipePage/IndividualRecipes.js";

export default class Routes extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/home-page" exact component={HomeComponent} />
          <Route path="/recipe-page" component={IndividualRecipes} />
          <Redirect from="/" to="/home-page" />
        </Switch>
      </React.Fragment>
    );
  }
}
