import styled from "styled-components";

export const SliderWrapper = styled.div`
    background-image: url('${(props) => props.img}');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 415px;
    transition: 1s ease-in;
    display: flex;
    filter: brightness(98%);
    flex-direction: column ;
    justify-content: center;
`;
export const RecipeType = styled.span`
  padding: 5px;
  font-family: "Open Sans", sans-serif;
  background-color: ${(props) => props.theme.primaryColor};
  color: white;
`;
export const RecipeTitle = styled.div`
  color: white;
  width: 40%;
  margin: 0px;
  font-size: 45px;
  font-family: "Arvo";
  font-weight: normal;
  margin: 15px 0px;
`;
export const RecipeDetailsWrapper = styled.div`
  margin-top: 15px;
  display: flex;
`;
export const RecipeDetails = styled.div`
  font-family: "Arvo";
  font-weight: normal;
  color: white;
  margin-right: 25px;
`;
export const RecipeTabs = styled.div`
  transition: all 0.2s ease-in-out;
  font-family: "Open Sans", sans-serif;
  padding: 25px 30px;
  width: 25%;
  font-size: 14px;
  border-left: 1px solid #e3e3e3;
  background-color : ${(props) =>
    props.active ? props.theme.primaryColor : "#f2f2f2"};
  box-shadow: inset 0 -1px 0 0 rgba(50, 50, 50, 0.08);
  text-align: center;
  color: ${(props) => (props.active ? "white" : "gray")};
  cursor: pointer;
`;
export const ViewRecipe = styled.button`
  margin-top: 20px;
  border: 3px solid #fff;
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.2);
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 10px 0;
  width: 130px;
  text-align: center;
`;
