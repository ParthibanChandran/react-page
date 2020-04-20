import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import { Container, Header } from "./style";

import NavigationButtons from "../commonComponents/navigation_bar/NavigationButtons.js";
import LogoWrapper from "../commonComponents/navigation_bar/LogoWrapper.js";
import Routes from "../routes/Routes.js";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Container>
            <Header>
              <LogoWrapper />
              <NavigationButtons />
            </Header>
          </Container>
          <Routes/>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}
export default App;
