import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Login from "../Pages/forms/Login";
import SignUp from "../Pages/forms/SignUp";
import RecipeHomePage from "../Pages/RecipeHomePage.js";
import NotFound from "../Pages/NotFound";
class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
        <Route
          path={["/home-page", "/recipe-page", "/shop", "/order","/submit-recipe"]}
          exact
          render={() =>
            this.props.isLogged === "true" ? (
              <RecipeHomePage />
            ) : (
              <Redirect from="/" to="/" />
            )
          }
        />
        <Route exact path="*" component={NotFound} />
      </Switch>
    );
  }
}
const mapStateToProps = (state) => ({
  isLogged: state.getIn(["isLogged"]),
});

export default connect(mapStateToProps, null)(Routes);
