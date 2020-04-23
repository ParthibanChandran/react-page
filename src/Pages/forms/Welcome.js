import React, { Component } from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";

import { WelcomeWrapper, WelcomeImage, FormWrapper } from "./style";
import Login from "./Login";
import SignUp from "./SignUp";

export default class Welcome extends Component {
  state = {
    BannerImage: require("../../assets/images/receipe.jpeg"),
  };
  render() {
    return (
      <BrowserRouter>
        <WelcomeWrapper>
          <WelcomeImage img={this.state.BannerImage}></WelcomeImage>
          <FormWrapper>
            <Switch>
              <Route path="/welcome/login" exact  component={Login} />
              <Route path="/welcome/signup" exact component={SignUp} />
              <Redirect from="/welcome" to="/welcome/login" />
            </Switch>
          </FormWrapper>
        </WelcomeWrapper>
      </BrowserRouter>
    );
  }
}
