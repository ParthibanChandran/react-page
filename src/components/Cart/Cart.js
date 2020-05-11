import React from "react";
import {
  CartTitle,
  CheckoutWrapper,
  SubtotalTitle,
  SubtotalValue,
  SpicesList,
  CheckoutButton,
  ProdCount,
  ProdThumbnail,
  ProdTitle,
  AddToCartWrapper,
  EmptyCart,
} from "./style";
export default function Cart(props) {
  let { addToCartProduct, subtotal } = props;
  return (
    <React.Fragment>
      <CartTitle>Cart</CartTitle>
      <CheckoutWrapper>
        {addToCartProduct.length === 0 ? (
          <EmptyCart>Empty</EmptyCart>
        ) : (
          addToCartProduct.map((value, index) => {
            return (
              <SpicesList key={index}>
                <ProdThumbnail img={value.prodThumbnail}></ProdThumbnail>
                <AddToCartWrapper>
                  <ProdTitle>{value.producttitle}</ProdTitle>
                  <ProdCount>
                    {value.productClicked} × ${value.productPrice}
                  </ProdCount>
                </AddToCartWrapper>
              </SpicesList>
            );
          })
        )}
        <SubtotalValue>
          <SubtotalTitle>subtotal : ${subtotal}</SubtotalTitle>
        </SubtotalValue>
        <CheckoutButton>Checkout</CheckoutButton>
      </CheckoutWrapper>
    </React.Fragment>
  );
}
