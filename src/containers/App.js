import React, { Component } from "react";
import { Container, Header } from "./style";
import NavigationButtons from "../components/navigation_bar/NavigationButtons.js";
import LogoWrapper from "../components/navigation_bar/LogoWrapper.js";
import HomeSlider from "../components/homeslider/HomeSlider.js";

class App extends Component {
  state = {
    nav_list: [
      {
        linkName: "Home",
        link: "#",
        subLinks: [],
      },
      {
        linkName: "Demos",
        subLinks: [
          { linkName: "Grid Homepage", link: "#" },
          { linkName: "List Homepage", link: "#" },
          { linkName: "Boxed Version", link: "#" },
        ],
      },
      {
        linkName: "Recipes",
        subLinks: [
          { linkName: "Browse Recipes", link: "#" },
          { linkName: "Recipe page #1", link: "#" },
          { linkName: "Recipe page #2", link: "#" },
        ],
      },
      {
        linkName: "Pages",
        subLinks: [
          { linkName: "Shortcodes", link: "#" },
          { linkName: "Typography", link: "#" },
          { linkName: "Contact", link: "#" },
        ],
      },
      {
        linkName: "Shop",
        subLinks: [
          { linkName: "Shop", link: "#" },
          { linkName: "Product Page", link: "#" },
        ],
      },
      {
        linkName: "Submit Recipe",
        link: "#",
        subLinks: [],
      },
    ],
  };

  render() {
    return (
      <React.Fragment>
        <Container>
          <Header>
            <LogoWrapper />
            <NavigationButtons arr={this.state.nav_list}></NavigationButtons>
          </Header>
        </Container>
        <HomeSlider></HomeSlider>
      </React.Fragment>
    );
  }
}
export default App;
