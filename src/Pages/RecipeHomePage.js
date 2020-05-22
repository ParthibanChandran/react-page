import React from "react";
import { Container, Header, MainWrapper, ScrollBarWrapper } from "./style";
import { Route, Switch } from "react-router-dom";

import NavigationButtons from "../commonComponents/navigation_bar/NavigationButtons";
import LogoWrapper from "../commonComponents/navigation_bar/LogoWrapper.js";
import HomeComponent from "../Pages/Home/HomeComponent";
import IndividualRecipes from "../Pages/RecipePage/IndividualRecipes";
import Shop from "../Pages/Shop/Shop";
import Order from "./Order";
import SubmitRecipe from "./SubmitRecipe/SubmitRecipe";
import Theme from "./Theme";
export default function RecipeHomePage() {
  return (
    <React.Fragment>
      <Theme>
        <MainWrapper>
          <ScrollBarWrapper>
            <Container>
              <Header>
                <LogoWrapper />
                <NavigationButtons />
              </Header>
            </Container>
            <Switch>
              <Route path="/home-page" exact component={HomeComponent} />
              <Route path="/recipe-page" exact component={IndividualRecipes} />
              <Route path="/shop" exact component={Shop} />
              <Route path="/order" exact component={Order} />
              <Route path="/submit-recipe" exact component={SubmitRecipe} />
            </Switch>
          </ScrollBarWrapper>
        </MainWrapper>
      </Theme>
    </React.Fragment>
  );
}
