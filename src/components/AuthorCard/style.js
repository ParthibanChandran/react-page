import styled from "styled-components";

export const AuthorWrapper = styled.div`
  padding: 28px 25px;
  border: 1px solid #e8e8e8;
`;
export const AuthorBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const AuthorLeftAlignment = styled.div`
  flex-basis: 50%;
  flex-direction: column;
`;
export const AuthorTitle = styled.div`
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  color: #8dc63f;
  font-family: "Open Sans", sans-serif;
  line-height: 2;
`;
export const AuthorName = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #606060;
  font-family: "Open Sans", sans-serif;
  line-height: 1.2;
`;
export const AuthorRightAlignment = styled.div`
  flex-basis: 50%;
  height: 64px;
  width: 64px;
`;
export const AuthorImg = styled.img.attrs((props) => ({
  src: props.img,
  alt: "file not found"
}))`
  height: inherit;
  width: inherit;
  border-radius: 50%;
`;
export const AuthorMail = styled.a`
  color: #a0a0a0;
  text-decoration: none;
  line-height: 2;
  font-family: "Open Sans", sans-serif;
`;
export const AuthorDescription = styled.p`
  line-height: 24px;
  font-size: 14px;
  font-family: "Open Sans", sans-serif;
  text-align: left;
`;
