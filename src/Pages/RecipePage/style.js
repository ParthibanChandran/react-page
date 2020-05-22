import styled from "styled-components";
import { Container } from "../style";

export const RecipeBackgroundWrapper = styled.div`
  width: 100%;
  height: 250px;
`;
export const RecipeBackground = styled.img`
  width: inherit;
  height: inherit;
  filter: brightness(60%);
`;
export const RecipeWrapperAlignment = styled(Container)`
  display: flex;
  justify-content: space-between;
`;

export const SideBar = styled.div`
  flex-basis: 25%;
  margin-top: 30px;
`;
export const RecipeWrapper = styled.div`
  width: 71%;
`;
export const RecipeBanner = styled.div`
  background-color: ${(props) => props.theme.colors.lightGrey};
  transform: translateY(-65px);
`;
export const RecipeHeadingWrapper = styled.div`
  padding: 35px 20px;
`;
export const RecipeHeading = styled.h2`
  color: ${(props) => props.theme.colors.darkGrey};
  font-size: 30px;
  font-family: "Arvo";
  margin-bottom: 10px;
`;
export const Rating = styled.div`
  color: #909090;
  font-family: ${(props) => props.theme.fontFamily.primaryFont};
`;
export const RecipeImgWrapper = styled.div`
  width: 680px;
  height: 320px;
`;
export const RecipeImg = styled.img`
  width: inherit;
  height: inherit;
`;
export const Contents = styled.div`
  border-right: 1px solid #d8d8d8;
  color: ${(props) => props.theme.colors.darkGrey};
  padding: 5px 10px;
  font-family: ${(props) => props.theme.fontFamily.primaryFont};
`;
export const ContentDesc = styled.div`
  font-weight: bold;
  font-size: 14px;
  margin-top: 5px;
`;
export const RecipeContentsWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.lightGrey};
  padding: 20px 23px 20px 35px;
  display: flex;
  & ${Contents}:last-child {
    border-right: none;
  }
`;
export const PrintButton = styled.button`
  position: absolute;
  right: 0;
  margin-right: 20px;
  border: none;
  color: white;
  background-color: ${(props) => props.theme.colors.yellowGreen};
  padding: 10px;
  font-family: ${(props) => props.theme.fontFamily.primaryFont};
`;
export const RecipeDesc = styled.div`
  margin-top: -35px;
  color: #808080;
  line-height: 24px;
  font-family: ${(props) => props.theme.fontFamily.primaryFont};
`;
export const RecipeDescriptionWrapper = styled.div`
  display: flex;
  margin-top: 30px;
`;
export const IngredientWrapper = styled.div`
  flex-basis: 40%;
  background-color: ${(props) => props.theme.colors.lightGrey};
  padding: 30px 35px 0;
`;
export const IngredientTitle = styled.h3`
  font-size: 22px;
  font-family: ${(props) => props.theme.fontFamily.primaryFont};
  color: ${(props) => props.theme.colors.darkGrey};
  margin-bottom: 20px;
}
`;
export const DirectionsWrapper = styled.div`
  flex-basis: 60%;
  padding: 30px 35px 0;
`;

export const InputCheckedWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 15px 10px 0;
  > input {
    background-color: #fff;
    border: 2px solid #d0d0d0;
  }
  > input:checked + label {
    text-decoration: line-through;
  }
  > label {
    font-family: ${(props) => props.theme.fontFamily.primaryFont};
    color: ${(props) => props.theme.colors.darkGrey};
    font-size: 14px;
    margin-left: 10px;
    line-height: 18px;
  }
`;

export const DirectionsContents = styled.div`
  display: flex;
  margin-bottom: 30px;
`;
export const DirectionsIndexNo = styled.span`
  background-color: #f4f4f4;
  color: #999;
  padding: 8px 10px;
  display: inline-table;
  font-family: ${(props) => props.theme.fontFamily.primaryFont};
  font-weight: 700;
`;
export const DirectionsValues = styled.div`
  font-family: ${(props) => props.theme.fontFamily.primaryFont};
  color: ${(props) => props.theme.colors.darkGrey};
  font-size: 14px;
  margin-left: 10px;
  line-height: 24px;
`;
