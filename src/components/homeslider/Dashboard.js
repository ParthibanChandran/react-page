import React from "react";
import { SliderWrapper,RecipeDetails } from "./style";
import { Container } from "../../containers/style";
// import sliderA_01 from "../../utils/images/sliderA_01.jpg";

export default function Dashboard(props) {
  let { clicked_obj,obj } = props;
  return (
    <SliderWrapper img={obj.img}>
        {/* <img src={sliderA_01} alt="image not found"></img> */}
      <Container>
        <h1>{obj.recipe_name}</h1>
        <RecipeDetails>
            <div><i className="fa fa-cutlery" />{obj.servings}</div>
            <div><i className="fa fa-clock-o" />{obj.timing}</div>
            <div><i className="fa fa-user" />{obj.name}</div>
        </RecipeDetails>
      </Container>
    </SliderWrapper>
  );
}
