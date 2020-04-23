import React from "react";
import { Link } from "react-router-dom";
import "../recipeCards/style.css";

import {
  SliderWrapper,
  RecipeDetailsWrapper,
  RecipeType,
  RecipeTitle,
  RecipeDetails,
  ViewRecipe,
} from "./style";
import { RecipeAlignment } from "../../container/style";

export default function Dashboard(props) {
  let { obj, page_two_banner } = props;
  return (
    <SliderWrapper img={obj.slider_img}>
      <RecipeAlignment>
        <RecipeType>{obj.type}</RecipeType>
        <RecipeTitle>{obj.recipe_name}</RecipeTitle>
        <RecipeDetailsWrapper>
          <RecipeDetails>
            <i className="fa fa-cutlery" />
            {obj.servings}
          </RecipeDetails>
          <RecipeDetails>
            <i className="fa fa-clock-o" />
            {obj.timing}
          </RecipeDetails>
          <RecipeDetails>
            <i className="fa fa-user" /> By {obj.author_list[0].name}
          </RecipeDetails>
        </RecipeDetailsWrapper>
        <ViewRecipe>
          <Link
            className="banner-link-tag"
            to={{
              pathname: "/home-page/recipe-page-2",
              state: {
                obj: obj,
                page_two_banner: page_two_banner,
              },
            }}
          >
            View Recipe
          </Link>
        </ViewRecipe>
      </RecipeAlignment>
    </SliderWrapper>
  );
}
