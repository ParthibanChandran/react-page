import React from "react";

import PropTypes from "prop-types";

import GridView from "./GridView.js";
import ListView from "./ListView.js";
import {
  RecipeCardWrapper,
  CardWrapper,
  LatestRecipeTitle,
  RecipeTitleWrapper,
  Ruler,
} from "./style";
import { SpinnerWrapper, Spinner } from "../../Pages/Shop/style";
/**
 * Recipe Cards for populating the recipes which are fetched from the firabase.
 * GridView and list View is for structuring.
 */
export default function RecipeCards(props) {
  let { recipe_list, is_grid, page_two_banner, author_obj, loading } = props;
  return (
    <RecipeCardWrapper>
      <RecipeTitleWrapper>
        <LatestRecipeTitle>Latest Recipe</LatestRecipeTitle>
        <Ruler></Ruler>
      </RecipeTitleWrapper>
      {loading ? (
        <SpinnerWrapper>
          <Spinner></Spinner>
        </SpinnerWrapper>
      ) : (
        <CardWrapper grid={is_grid}>
          {is_grid ? (
            <GridView
              loading={loading}
              author_obj={author_obj}
              recipe_list={recipe_list}
              is_grid={is_grid}
              page_two_banner={page_two_banner}
            />
          ) : (
            <ListView
            loading={loading}
              author_obj={author_obj}
              recipe_list={recipe_list}
              is_grid={is_grid}
              page_two_banner={page_two_banner}
            />
          )}
        </CardWrapper>
      )}
    </RecipeCardWrapper>
  );
}

RecipeCards.propTypes = {
  recipe_list: PropTypes.array,
  is_grid: PropTypes.bool,
  author_obj: PropTypes.object,
};
