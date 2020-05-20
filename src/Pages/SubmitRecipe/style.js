import styled from "styled-components";
import { Container } from "../style";

export const FormContainer = styled(Container)``;

export const SelectOption = styled.select`
  width: 100%;
  outline: none;
  border: 1px solid #ddd;
  font-size: 16px;
  line-height: 24px;
  padding: 0px 15px;
  height: 52px;
  font-family: ${(props) => props.theme.fontFamily.primaryFont};
  margin-bottom: 10px;
`;
export const Input = styled.input`
  width: 100%;
  outline: none;
  border: 1px solid #ddd;
  font-size: 16px;
  padding: 0px 15px;
  line-height: 24px;
  height: 52px;
  font-family: ${(props) => props.theme.fontFamily.primaryFont};
  box-sizing: border-box;
  margin-bottom: 10px;
  &:focus {
    border-color: ${(props) => props.theme.colors.yellowGreen};
  }
  ::placeholder {
    color: #d4d4d4;
  }
`;
export const TextArea = styled.textarea`
  height: 125px;
  border: 2px solid #dbdbdb;
  width: 100%;
  outline: none;
  font-size: 16px;
  font-family: ${(props) => props.theme.fontFamily.primaryFont};
  resize: none;
  box-sizing: border-box;
  border-radius: 3px;
  padding-left: 10px;
  ::placeholder {
    font-size: 16px;
    color: #d4d4d4;
    line-height: 1.2;
  }
  & + div {
    display: none;
  }
  :focus {
    ::placeholder {
      color: transparent;
    }
    border-color: ${(props) => props.theme.colors.yellowGreen};
  }
  ::-webkit-scrollbar {
    width: 4px;
    background-color: #dbdbdb;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.yellowGreen};
    border-radius: 10px;
  }
`;

export const InputFieldTitle = styled.h4`
  font-family: ${(props) => props.theme.fontFamily.primaryFont};
  color: ${(props) => props.theme.colors.darkGrey};
  font-weight: 500;
  margin-bottom: 10px;
  font-size: 18px;
  line-height: 30px;
`;

export const IngradientInputWrapper = styled.div`
  width: 100%;
  background-color: #f8f8f8;
  border-bottom: 15px solid white;
`;
export const IngradientInputAlignment = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
`;
export const IngradientInput = styled.input`
  border: 2px solid #dbdbdb;
  outline: none;
  position: relative;
  font-size: 16px;
  padding-left: 10px;
  height: 32px;
  width: 350px;
  font-family: ${(props) => props.theme.fontFamily.primaryFont};
  ::placeholder {
    font-size: 14px;
    color: #d4d4d4;
    line-height: 1.2;
  }
  :focus {
    ::placeholder {
      color: transparent;
    }
    border-color: ${(props) => props.theme.colors.yellowGreen};
  }
`;
export const IngIconWrapper = styled.div`
  width: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
  cursor: ${(props) => (props.delete ? "pointer" : "move")};
  :hover {
    background-color: ${(props) => (props.delete ? "red" : "#eeeeee")};
    color: ${(props) => (props.delete ? "white" : "unset")};
  }
`;
export const IngIcon = styled.i`
  color: inherit;
  cursor: inherit;
`;
export const NewIng = styled.button`
  height: 40px;
  border: none;
  outline: none;
  background-color: ${(props) => props.theme.colors.yellowGreen};
  color: #ffffff;
  font-weight: 600;
  font-size: 14px;
  padding: 0px 10px;
  margin-bottom: 10px;
  display: block;
  cursor: pointer;
  & + div {
    display: none;
  }
`;
