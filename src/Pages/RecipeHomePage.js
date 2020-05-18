import React from "react";
import { Container, Header } from "./style";
import { Route, Switch } from "react-router-dom";
import NavigationButtons from "../commonComponents/navigation_bar/NavigationButtons";
import LogoWrapper from "../commonComponents/navigation_bar/LogoWrapper.js";
import HomeComponent from "../Pages/Home/HomeComponent";
import IndividualRecipes from "../Pages/RecipePage/IndividualRecipes";
import Shop from "../Pages/Shop/Shop";
import Order from "./Order";
export default function RecipeHomePage() {
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
        <Route path="/shop" exact component={Shop} />
        <Route path="/order" exact component={Order} />
      </Switch>
    </React.Fragment>
  );
}
