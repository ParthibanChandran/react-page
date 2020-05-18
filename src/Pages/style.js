import styled from "styled-components";

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  @media (max-width: 768px) {
    max-width: 768px;
    padding: 0px 20px;
  }
`;

export const Header = styled.div`
  display: flex;
  padding: 21px 0;
`;
export const TabWrapper = styled(Container)`
  display: flex;
  font-weight: bold;
`;
export const RecipeAlignment = styled(Container)`
  width: 960px;
`;
export const CenterWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Arvo";
`;
export const HomePageWrapper = styled.a`
text-decoration: none;
color: #8dc63f;
`;
