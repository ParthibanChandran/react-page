import styled from "styled-components";

export const Stars = styled.i`
  color: ${(props) =>
    props.star_checked ? "rgb(255, 199, 65);" : "rgb(224, 224, 224)"};
`;
