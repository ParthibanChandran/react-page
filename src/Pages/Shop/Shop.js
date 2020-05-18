import React, { Component } from "react";
import axios from "axios";
import { theme } from "../../styles/theme";
import {
  ShopWrapper,
  ShopAlignment,
  ShopTitle,
  PageInfo,
  ProductContainer,
  CartWrapper,
  ProductWrapper,
  SpinnerWrapper,
  Spinner,
} from "./style";
import { ThemeProvider } from "styled-components";
import ProductCards from "../../components/ProductCards/ProductCards";
import Cart from "../../components/Cart/Cart";

export default class Shop extends Component {
  state = {
    products: [],
    productImgs: [
      {
        productImg: require("../../assets/images/shop_item_01.jpg"),
        prodThumbnail: require("../../assets/images/shop_item_01.jpg"),
      },
      {
        productImg: require("../../assets/images/shop_item_02.jpeg"),
        prodThumbnail: require("../../assets/images/shop_item_02a.jpg"),
      },
      {
        productImg: require("../../assets/images/shop_item_03.jpeg"),
        prodThumbnail: require("../../assets/images/shop_item_03.jpeg"),
      },
      {
        productImg: require("../../assets/images/shop_item_04.jpg"),
        prodThumbnail: require("../../assets/images/shop_item_04.jpg"),
      },
      {
        productImg: require("../../assets/images/shop_item_05.jpeg"),
        prodThumbnail: require("../../assets/images/shop_item_05.jpeg"),
      },
      {
        productImg: require("../../assets/images/shop_item_06.jpeg"),
        prodThumbnail: require("../../assets/images/shop_item_06.jpeg"),
      },
    ],
    addToCartProduct: [],
    subtotal: 0,
    loading: true,
  };
  componentDidMount() {
    axios
      .get("/chow/shop")
      .then((response) => {
        const products = response.data;
        const updatedProducts = products.map((data, index) => {
          return {
            ...data,
            ...this.state.productImgs[index],
          };
        });
        this.setState({ products: updatedProducts, loading: false });
      })
      .catch((error) => {
        // console.log(error);
        this.setState({ error: true });
      });
  }
  addToCartHandler = (data, index) => {
    let productObj = { ...data };
    productObj.productClicked = productObj.productClicked + 1;
    let productList = [...this.state.products];
    productList[index] = productObj;
    var total = 0;
    let addToCartObj = productList.filter((data) => {
      total += data.productClicked * data.productPrice;
      return data.productClicked !== 0;
    });
    total = Math.round((total + Number.EPSILON) * 100) / 100;
    this.setState({
      products: productList,
      addToCartProduct: addToCartObj,
      subtotal: total,
    });
  };
  render() {
    return (
      <React.Fragment>
        <ThemeProvider theme={theme}>
          <ShopWrapper>
            <ShopAlignment>
              <ShopTitle>Shop</ShopTitle>
              <PageInfo>
                You are here: <span style={{ fontWeight: "bold" }}>Home</span> >
                Shop
              </PageInfo>
            </ShopAlignment>
          </ShopWrapper>
          <ProductContainer>
            <CartWrapper>
              <Cart
                addToCartProduct={this.state.addToCartProduct}
                subtotal={this.state.subtotal}
              />
            </CartWrapper>
            {this.state.loading ? (
              <SpinnerWrapper>
                <Spinner></Spinner>
              </SpinnerWrapper>
            ) : (
              <ProductWrapper>
                <ProductCards
                  products={this.state.products}
                  addToCartHandler={this.addToCartHandler}
                />
              </ProductWrapper>
            )}
          </ProductContainer>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
