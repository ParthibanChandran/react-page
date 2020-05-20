import React from "react";

import PropTypes from 'prop-types';

import GridView from "./GridView.js";
import ListView from "./ListView.js";
import {
  RecipeCardWrapper,
  CardWrapper,
  LatestRecipeTitle,
  RecipeTitleWrapper,
  Ruler,
} from "./style";

export default function RecipeCards(props) {
  let { recipe_list, is_grid, page_two_banner, author_obj } = props;
  return (
    <RecipeCardWrapper>
      <RecipeTitleWrapper>
        <LatestRecipeTitle>Latest Recipe</LatestRecipeTitle>
        <Ruler></Ruler>
      </RecipeTitleWrapper>
      <CardWrapper grid={is_grid}>
        {is_grid ? (
          <GridView
            author_obj={author_obj}
            recipe_list={recipe_list}
            is_grid={is_grid}
            page_two_banner={page_two_banner}
          />
        ) : (
          <ListView
            author_obj={author_obj}
            recipe_list={recipe_list}
            is_grid={is_grid}
            page_two_banner={page_two_banner}
          />
        )}
      </CardWrapper>
    </RecipeCardWrapper>
  );
}

RecipeCards.propTypes = {
	recipe_list: PropTypes.array,
  is_grid: PropTypes.bool,
  author_obj: PropTypes.object,
}
