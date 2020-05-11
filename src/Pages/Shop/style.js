import styled from "styled-components";
import { Container } from "../style";

export const ShopWrapper = styled.div`
  background-color: #f6f6f6;
  min-height: 88px;
  margin: 0 0 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const ShopAlignment = styled(Container)`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
export const ShopTitle = styled.h2`
  color: #606060;
  font-size: 24px;
  font-weight: 500;
  font-family: ${(props) => props.theme.fontFamily.primaryFont};
`;
export const PageInfo = styled.p`
  font-size: 13px;
  letter-spacing: 1.9;
  color: #909090;
  font-family: ${(props) => props.theme.fontFamily.primaryFont};
`;
export const ProductContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
`;
export const CartWrapper = styled.div`
  flex-basis: 22%;
`;
export const ProductWrapper = styled.div`
  display: flex;
  flex-basis: 75%;
  flex-flow: row wrap;
`;
