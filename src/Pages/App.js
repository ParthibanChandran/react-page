import React, { Component } from "react";

import { Container, Header } from "./style";

import NavigationButtons from "../commonComponents/navigation_bar/NavigationButtons.js";
import LogoWrapper from "../commonComponents/navigation_bar/LogoWrapper.js";
import RecipeBanner from "../components/RecipeBanner.js";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Header>
            <LogoWrapper />
            <NavigationButtons />
          </Header>
        </Container>
        <RecipeBanner />
      </React.Fragment>
    );
  }
}
export default App;
