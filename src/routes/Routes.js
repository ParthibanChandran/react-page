import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

import Login from "../Pages/forms/Login";
import SignUp from "../Pages/forms/SignUp";
import RecipeHomePage from "../Pages/RecipeHomePage.js";

class Routes extends Component {
  render() {
    // const temp = JSON.parse(localStorage.getItem("user"));
    // if(temp!=null && temp.loginStatus){
      // console.log("enter");
    //   return <RecipeHomePage/>;
    // }
    return (
     
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={SignUp} />
            <Route
              render={() => 
                this.props.isLogged === "true" ? (
                  <RecipeHomePage />
                ) : (
                  <Redirect from="/" to="/login" />
                )
              }
            />
          </Switch>
  
    );
  }
}
const mapStateToProps = state => ({
  isLogged: state.getIn(["isLogged"])
});

export default connect(
  mapStateToProps,
  null
)(Routes);