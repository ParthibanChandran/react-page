import styled from "styled-components";
export const EmptyCart = styled.div`
  font-family: ${(props) => props.theme.fontFamily.primaryFont};
  text-align: center;
  color: #8dc63f;
  font-weight: 800;
  padding: 10px;
`;

export const CartTitle = styled.h4`
  color: #606060;
  margin-top: 15px;
  font-weight: 500;
  line-height: 30px;
  font-size: 22px;
  font-family: ${(props) => props.theme.fontFamily.primaryFont};
`;
export const CheckoutWrapper = styled.div`
  background-color: #f8f8f8;
  color: #606060;
  margin-top: 15px;
  padding: 8px 20px 16px;
`;
export const SpicesList = styled.div`
  display: flex;
  margin-bottom: 15px;
`;
export const ProdThumbnail = styled.img.attrs((props) => ({
  src: props.img,
  alt: "file not found",
}))`
  width: 70px;
  height: 70px;
  object-fit: cover;
`;
export const AddToCartWrapper = styled.div`
  padding-left: 10px;
`;
export const ProdTitle = styled.a`
  color: #606060;
  font-size: 14px;
  font-weight: 600;
  font-family: ${(props) => props.theme.fontFamily.primaryFont};
  &:hover {
    color: #8dc63f;
  }
`;
export const ProdCount = styled.div`
  color: #888;
  font-family: ${(props) => props.theme.fontFamily.primaryFont};
`;
export const SubtotalValue = styled.div`
  font-family: ${(props) => props.theme.fontFamily.primaryFont};
  padding: 10px 0px;
`;
export const SubtotalTitle = styled.strong`
  font-family: open sans, helveticaneue, helvetica neue, Helvetica, Arial,
    sans-serif;
  color: #707070;
`;

export const CheckoutButton = styled.a`
  background-color: #8dc63f;
  cursor: pointer;
  padding: 10px 14px;
  margin-top: 10px;
  font-family: ${(props) => props.theme.fontFamily.primaryFont};
  text-transform: uppercase;
  font-weight: 700;
  z-index: 10;
  font-size: 13px;
  outline: none;
  width: 100%;
  display: block;
  box-sizing: border-box;
  text-align: center;
  color: #fff;
  border: none;
  transition: all 0.2s ease-in-out;
`;
