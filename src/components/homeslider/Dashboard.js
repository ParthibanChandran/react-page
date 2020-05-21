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
import { RecipeAlignment } from "../../Pages/style";

export default function Dashboard(props) {
  let { obj, page_two_banner, author_obj } = props;
  return (
    <SliderWrapper img={obj.slider_img} role="img" aria-label="image not found">
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
          <i className="fa fa-user" /> By {author_obj.name}
        </RecipeDetails>
        </RecipeDetailsWrapper>
        <ViewRecipe>
          <Link
            className="banner-link-tag"
            to={{
              pathname: "/recipe-page",
              state: {
                obj: obj,
                page_two_banner: page_two_banner,
                author_obj: author_obj,
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
