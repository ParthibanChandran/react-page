import styled from "styled-components";
import { ViewButton } from "./recipeCards/style";

export const RecipeContents = styled.div`
  display: flex;
  margin-top: 30px;
`;

export const SearchWrapper = styled.div`
  flex-basis: 25%;
`;

export const SearchBar = styled.input.attrs(() => ({
  placeholder: "Search for recipes",
  type: "text",
}))`
  color: #777;
  font-size: 14px;
  outline: none;
  padding: 10px;
  border: 1px solid #e8e8e8;
  height: 20px;
  &::placeholder {
    font-size: 13px;
    color: rgb(224, 224, 224);
    font-weight: bold;
    font-family: "Open Sans", sans-serif;
  }
`;
export const SearchPanel = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const SearchButton = styled.button`
  background-color: #8dc63f;
  color: white;
  border: none;
  padding: 10px 14px;
  &:hover {
    background-color: gray;
  }
`;
export const View = styled(ViewButton)`
  margin: 25px 0 25px 20px;
`;
export const ntents = styled.div``;
