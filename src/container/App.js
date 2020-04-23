import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Container, Header } from "./style";

import NavigationButtons from "../commonComponents/navigation_bar/NavigationButtons.js";
import LogoWrapper from "../commonComponents/navigation_bar/LogoWrapper.js";
import HomeComponent from "../Pages/Home/HomeComponent";
import IndividualRecipes from "../Pages/RecipePage/IndividualRecipes";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Header>
            <LogoWrapper />
            <NavigationButtons />
          </Header>
        </Container>
        <Switch>
          <Route
            path="/home-page/recipe-page-1"
            exact
            component={HomeComponent}
          />
          <Route
            path="/home-page/recipe-page-2"
            exact
            component={IndividualRecipes}
          />
          <Redirect from="/home-page" to="/home-page/recipe-page-1" />
        </Switch>
      </React.Fragment>
    );
  }
}
export default App;
