import styled from "styled-components";

export const ProductCard = styled.div`
  margin: 20px 20px 20px 5px;
`;
export const AddCart = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  position: absolute;
  right: 0;
  bottom: 0;
  color: #fff;
  background-color: #8dc63f;
  font-size: 14px;
  width: 42px;
  height: 42px;
  cursor: pointer;
  transform: translateY(45px);
  &:hover {
    background-color: #555;
  }
`;
export const ProductImgWrapper = styled.div`
  position: relative;
  width: 213px;
  height: 213px;
  &:hover ${AddCart}{
    opacity: 1;
    transition: transform .3s,opacity .1s,background .25s;
    transform: translateY(0px);
    
  }
`;
export const ProductCardImg = styled.img.attrs((props) => ({
  src: props.img,
  alt: "file not found",
}))`
  width: inherit;
  height: inherit;
  object-fit: cover;
  cursor: pointer;
`;

export const ProductDetails = styled.div`
  padding: 16px 0 15px;
  text-align: center;
  background-color: #f8f8f8;
`;
export const ProductCatagory = styled.span`
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  color: #aaa;
  font-family: ${(props) => props.theme.fontFamily.primaryFont};
`;
export const ProductTitle = styled.h2`
  color: #707070;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  font-family: ${(props) => props.theme.fontFamily.primaryFont};
`;
export const ProductPrice = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: #606060;
  padding: 1px 0 5px;
  display: block;
  font-family: ${(props) => props.theme.fontFamily.primaryFont};
`;
