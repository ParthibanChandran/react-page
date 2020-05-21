import styled from "styled-components";

export const WelcomeWrapper = styled.div`
  display: flex;
`;
export const WelcomeImage = styled.div`
background-image: url('${(props) => props.img}');
background-repeat: no-repeat;
background-position: center;
background-size: cover;
width: calc(100% - 520px);
height: 850px;
`;
export const FormWrapper = styled.div`
  width: 520px;
`;
export const LoginWrapper = styled.div`
  padding: 75px 50px 50px;
`;
export const SignupWrapper = styled.div`
  padding: 40px 50px 50px;
`;
export const TitleText = styled.label`
  display: block;
  width: 100%;
  font-family: ${(props) => props.theme.fontFamily.primaryFont};
  font-size: 39px;
  color: #333;
  line-height: 1.2;
  text-align: left;
  padding-bottom: 30px;
`;
export const InputTitle = styled.div`
  font-weight: bold;
  font-family: ${(props) => props.theme.fontFamily.primaryFont};
  font-size: 22px;
  color: #999;
  line-height: 1.2;
  padding-left: 2px;
  margin-bottom: 10px;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const InputBox = styled.input`
  display: block;
  width: 100%;
  height: 50px;
  background: 0 0;
  font-family: ${(props) => props.theme.fontFamily.primaryFont};
  color: #555;
  line-height: 1.2;
  padding: 0 2px;
  margin-bottom: 35px;
  outline: none;
  border: none;
  font-size: 20px;
  &::placeholder {
    font-size: 16px;
    font-weight: 300;
    font-family: "Arial";
    opacity: 0.8;
  }
  &:focus {
    border-bottom: 1px solid #8dc63f;
  }
`;
export const ErrorMsg = styled.h3`
  color: red;
  font-size: 18px;
  padding-bottom: 10px;
  height: 45px;
  font-family: "Open Sans", sans-serif;
`;
