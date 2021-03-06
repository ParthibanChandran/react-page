import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import RatingStar from "../../commonComponents/Rating/RatingStar";

import {
  RecipeCard,
  RecipeCardContents,
  CardImg,
  RecipeTitle,
  HorizondalRuler,
  RatingWrapper,
  RecipeDetails,
  DetailsWrapper,
  ViewButton
} from "./style";

export default function GridView(props) {
  let { recipe_list, is_grid, page_two_banner, author_obj } = props;
  return (
    <React.Fragment>
      {recipe_list.map((element, index) => {
        return (
          <RecipeCard key={index} grid={is_grid}>
            <CardImg img={element.card_img} grid={is_grid} />
            <RecipeCardContents grid={is_grid}>
              <RecipeTitle>{element.recipe_name}</RecipeTitle>
              <HorizondalRuler />
              <DetailsWrapper>
                <RatingWrapper>
                  <div>
                    <RatingStar element={element} />
                  </div>
                  <RecipeDetails>
                    <i className="fa fa-clock-o" /> {element.timing}
                  </RecipeDetails>
                </RatingWrapper>
                <ViewButton>
                <Link
                  className="link-tag"
                  to={{
                    pathname: "/recipe-page",
                    state: {
                      obj: element,
                      page_two_banner: page_two_banner,
                      author_obj: author_obj,
                    },
                  }}
                >
                  View
                </Link>
                </ViewButton>
              </DetailsWrapper>
            </RecipeCardContents>
          </RecipeCard>
        );
      })}
    </React.Fragment>
  );
}
