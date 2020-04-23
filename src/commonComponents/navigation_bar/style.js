import styled from "styled-components";

export const Logo = styled.div`
  display: flex;
  flex-basis: 20%;
`;
export const NavigationWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-basis: 80%;
  align-items: center;
`;
export const DropdownButton = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: #707070;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  padding: 28px 16px 25px;
  border-bottom: 3px solid transparent;
  &:hover {
    border-color: #8dc63f;
  }
`;
export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  margin: 25px 0 0 0;
  background-color: #505050;
  min-width: 160px;
  z-index: 1;
  border-top: 3px solid #8dc63f;
  color: gray;
`;
export const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
  &:hover ${DropdownContent} {
    display: block;
  }
`;

export const Links = styled.a`
  color: black;
  font-family: "Open Sans", sans-serif;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  border-top: 1px solid #707070;
  &:hover {
    color: white;
    background-color: #707070;
  }
`;

export const DownArrow = styled.i`
  color: #c4c4c4;
  padding: 0 0 0 5px;
`;
