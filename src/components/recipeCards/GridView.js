import React from "react";

import {
  RecipeCard,
  RecipeCardContents,
  CardImg,
  RecipeTitle,
  HorizondalRuler,
  RatingWrapper,
  Rating,
  RecipeDetails,
  ViewButton,
  DetailsWrapper,
  Stars
} from "./style";

export default function GridView(props) {
    let { recipe_list,is_grid } = props;
  return (
    <React.Fragment>
      {recipe_list.map((element, index) => {
        return (
          <RecipeCard key={index} grid={is_grid}>
            <CardImg img={element.card_img} grid={is_grid}/>
            <RecipeCardContents>
              <RecipeTitle>{element.recipe_name}</RecipeTitle>
              <HorizondalRuler />
              <DetailsWrapper>
                <RatingWrapper>
                  <Rating>
                  {[...new Array(5)].map((value,index)=>{
                      return <Stars key={index} star_checked={index+1 <= element.rating} className="fa fa-star"></Stars>
                    })}
                  </Rating>
                  <RecipeDetails>
                    <i className="fa fa-clock-o" /> {element.timing}
                  </RecipeDetails>
                </RatingWrapper>
                <ViewButton>View</ViewButton>
              </DetailsWrapper>
            </RecipeCardContents>
          </RecipeCard>
        );
      })}
    </React.Fragment>
  );
}
