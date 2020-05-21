import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
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
  RecipeDescription,
} from "./style";
import RatingStar from "../../commonComponents/Rating/RatingStar";

export default function ListView(props) {
  let { recipe_list, is_grid, page_two_banner,author_obj } = props;
  return (
    <React.Fragment>
      {recipe_list.map((element, index) => {
        return (
          <RecipeCard key={index}>
            <CardImg img={element.card_img} grid={is_grid} />
            <RecipeCardContents grid={is_grid}>
              <RecipeTitle>{element.recipe_name}</RecipeTitle>
              <RecipeDescription>{element.recipe_content}</RecipeDescription>
              <HorizondalRuler />
              <DetailsWrapper>
                <RatingWrapper>
                  <div>
                    <RatingStar element={element} />
                  </div>
                  <div>
                    <RecipeDetails>
                      <i className="fa fa-clock-o" /> {element.timing}
                    </RecipeDetails>
                    <RecipeDetails>
                      <i className="fa fa-user" /> By {element.name}
                    </RecipeDetails>
                    <RecipeDetails>
                      <i className="fa fa-cutlery" />
                      {element.servings}
                    </RecipeDetails>
                  </div>
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
