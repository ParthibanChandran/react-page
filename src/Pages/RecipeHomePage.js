import React, { Component } from "react";
import { Container, Header } from "./style";
import { Route, Switch, Redirect } from "react-router-dom";
import NavigationButtons from "../commonComponents/navigation_bar/NavigationButtons";
import LogoWrapper from "../commonComponents/navigation_bar/LogoWrapper.js";
import HomeComponent from "../Pages/Home/HomeComponent";
import IndividualRecipes from "../Pages/RecipePage/IndividualRecipes";

export default class RecipeHomePage extends Component {
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
          <Route path="/recipe-page-1" exact component={HomeComponent} />
          <Route path="/recipe-page-2" exact component={IndividualRecipes} />
          <Redirect to="/recipe-page-1" />
        </Switch>
      </React.Fragment>
    );
  }
}
