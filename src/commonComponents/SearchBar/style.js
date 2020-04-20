import styled from "styled-components";

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
