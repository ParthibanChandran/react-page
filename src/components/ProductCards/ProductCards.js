import React from "react";
import {
  ProductCard,
  ProductImgWrapper,
  AddCart,
  ProductCardImg,
  ProductDetails,
  ProductCatagory,
  ProductTitle,
  ProductPrice,
} from "./style";

export default function ProductCards(props) {
  let { products, addToCartHandler } = props;
  return (
    <React.Fragment>
      {products.map((data, index) => {
        return (
          <ProductCard key={data.productId}>
            <ProductImgWrapper>
              <ProductCardImg img={data.productImg}/>
              <AddCart
                onClick={() => {
                  addToCartHandler(data, index);
                }}
              >
                <i className="fa fa-shopping-cart"></i>
              </AddCart>
            </ProductImgWrapper>
            <ProductDetails>
              <ProductCatagory>{data.productCatagory}</ProductCatagory>
              <ProductTitle>{data.producttitle}</ProductTitle>
              <ProductPrice>
                {data.productPriceType}
                {data.productPrice}
              </ProductPrice>
            </ProductDetails>
          </ProductCard>
        );
      })}
    </React.Fragment>
  );
}
