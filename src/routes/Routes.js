import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Login from "../Pages/forms/Login";
import SignUp from "../Pages/forms/SignUp";
import RecipeHomePage from "../Pages/RecipeHomePage.js";

export default class Routes extends Component {
  render() {
    const temp = JSON.parse(sessionStorage.getItem("user"));
    // if(temp!=null && temp.loginStatus){
    //   return <RecipeHomePage/>;
    // }
    return (
     
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={SignUp} />
            {/* <Route path="/welcome" exact component={RecipeHomePage}/> */}
            <Route
              render={() => 
                temp != null && temp.loginStatus ? (
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
