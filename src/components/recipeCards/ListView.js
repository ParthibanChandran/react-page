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
  RecipeDescription,
  Stars
} from "./style";

export default function ListView(props) {
  let { recipe_list, is_grid } = props;
  console.log(is_grid);
  return (
    <React.Fragment>
      {recipe_list.map((element, index) => {
        return (
          <RecipeCard key={index}>
            <CardImg img={element.card_img} grid={is_grid} />
            <RecipeCardContents>
              <RecipeTitle>{element.recipe_name}</RecipeTitle>
              <RecipeDescription>{element.recipe_content}</RecipeDescription>
              <HorizondalRuler />
              <DetailsWrapper>
                <RatingWrapper>
                  <Rating>
                    {[...new Array(5)].map((value,index)=>{
                      return <Stars star_checked={index+1 <= element.rating} className="fa fa-star"></Stars>
                    })}
                  </Rating>
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
                <ViewButton>View</ViewButton>
              </DetailsWrapper>
            </RecipeCardContents>
          </RecipeCard>
        );
      })}
    </React.Fragment>
  );
}
