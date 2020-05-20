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
  console.log(products)
  return (
    <React.Fragment>
      {products.map((data, index) => {
        return (
          <ProductCard key={index}>
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
              {/* <div>{data.productDescription}</div> */}
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
