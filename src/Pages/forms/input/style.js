import styled from "styled-components";

export const SubmitButton = styled.button`
  font-family: "Open Sans", sans-serif;
  font-size: 20px;
  color: white;
  background-color: #8dc63f;
  line-height: 1.2;
  padding: 10px 30px;
  border: none;
  cursor: pointer;
  :disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
