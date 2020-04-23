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
  ViewButton,
  DetailsWrapper,
} from "./style";

export default function GridView(props) {
  let { recipe_list, is_grid, page_two_banner } = props;
  return (
    <React.Fragment>
      {recipe_list.map((element, index) => {
        return (
          <RecipeCard key={index} grid={is_grid}>
            <CardImg img={element.card_img} grid={is_grid} />
            <RecipeCardContents>
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
                      pathname: "/home-page/recipe-page-2",
                      state: {
                        obj: element,
                        page_two_banner: page_two_banner,
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
