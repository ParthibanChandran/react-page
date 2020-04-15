import React from "react";
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
  let { obj } = props;
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
            <i className="fa fa-user" /> By {obj.name}
          </RecipeDetails>
        </RecipeDetailsWrapper>
        <ViewRecipe>View Recipe</ViewRecipe>
      </RecipeAlignment>
    </SliderWrapper>
  );
}
