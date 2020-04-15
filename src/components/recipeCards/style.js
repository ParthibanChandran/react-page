import styled from "styled-components";

export const RecipeTitleWrapper = styled.div`
  display: flex;
  padding: 20px 0;
`;
export const LatestRecipeTitle = styled.div`
  font-size: 20px;
  font-family: "Open Sans", sans-serif;
`;
export const Ruler = styled.hr`
  width: 74%;
  margin: 10px auto;
  height: 1px;
  border: 0;
  border-top: 1px solid #ccc;
`;
export const RecipeCardWrapper = styled.div`
  flex-basis: 75%;
`;
export const CardWrapper = styled.div`
  display: flex;
  flex-flow: ${(props) => (props.grid ? "row wrap" : "column nowrap")};
`;
export const RecipeCard = styled.div`
  width: ${(props) => (props.grid ? "29.5%" : "none")};
  margin: 0 20px 20px 0;
  display: flex;
  flex-direction: ${(props) => (props.grid ? "column" : "row")};
`;
export const RecipeCardContents = styled.div`
  background-color: #f8f8f8;
  padding: 20px 25px;
`;

export const CardImg = styled.img.attrs((props) => ({
  src: props.img,
  alt: "file not found",
}))`
  width: ${(props) => (props.grid ? "213px" : "235px")};
  height: ${(props) => (props.grid ? "187px" : "285px")};
  object-fit: cover;
`;
export const RecipeTitle = styled.div`
  font-family: "Arvo";
  color: #606060;
  font-size: 22px;
`;
export const RecipeDescription = styled.p`
  color: gray;
  font-family: "Open Sans", sans-serif;
  line-height: 24px;
  margin: 0 0 15px;
  padding: 22px 0;
`;
export const HorizondalRuler = styled.hr`
  border-bottom: 0.2px solid #e5e5e5;
`;
export const DetailsWrapper = styled.div`
  display: flex;
`;
export const RatingWrapper = styled.div`
  flex-basis: 70%;
`;
export const Rating = styled.div``;

export const Stars = styled.i`
color: ${props => props.star_checked ?"rgb(255, 199, 65);":"rgb(224, 224, 224)"};
`;

export const RecipeDetails = styled.div`
  font-family: "Arvo";
  color: #909090;
  opacity: 0.7;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
`;

export const ViewButton = styled.button`
  font-family: "Open Sans", sans-serif;
  background-color: none;
  border: 1px solid gray;
  border-radius: 3px;
  color: gray;
  /* outline: none; */
  cursor: pointer;
`;
