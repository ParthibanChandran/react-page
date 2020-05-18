import React, { useEffect } from "react";
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
import { withRouter } from "react-router";
function Cart(props) {
  let { addToCartProduct, subtotal } = props;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const orderHandler = () => {
    props.history.push("/order");
  };
  
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
        <CheckoutButton onClick={orderHandler}>Checkout</CheckoutButton>
      </CheckoutWrapper>
    </React.Fragment>
  );
}
export default withRouter(Cart);
