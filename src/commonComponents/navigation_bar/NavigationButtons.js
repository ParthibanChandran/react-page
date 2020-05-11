import React, { Component } from "react";
import { connect } from 'react-redux';
import { NavigationWrapper, DropdownButton } from "./style";
import DropDownLinks from "./DropdownLinks.js";
import NormalLink from "./NormalLink.js";
import { logoutHandler } from "../../Pages/actions";

class NavigationButtons extends Component {
  state = {
    nav_list: [
      {
        linkName: "Home",
        link: "/recipe-page-1",
        subLinks: [],
      },
      {
        linkName: "Demos",
        linkTo: "/empty-page",
        subLinks: [
          { linkName: "Grid Homepage", link: "#" },
          { linkName: "List Homepage", link: "#" },
          { linkName: "Boxed Version", link: "#" },
        ],
      },
      {
        linkName: "Recipes",
        linkTo: "/empty-page",
        subLinks: [
          { linkName: "Browse Recipes", link: "#" },
          { linkName: "Recipe page #1", link: "#" },
          { linkName: "Recipe page #2", link: "#" },
        ],
      },
      {
        linkName: "Pages",
        linkTo: "/empty-page",
        subLinks: [
          { linkName: "Shortcodes", link: "#" },
          { linkName: "Typography", link: "#" },
          { linkName: "Contact", link: "#" },
        ],
      },
      {
        linkName: "Shop",
        linkTo: "/shop",
        subLinks: [
          { linkName: "Shop", link: "#" },
          { linkName: "Product Page", link: "#" },
        ],
      },
      {
        linkName: "Submit Recipe",
        link: "/empty-page",
        subLinks: [],
      },
    ],
  };
  UserlogoutHandler = () => {
    sessionStorage.setItem("authenticated",false);
    this.props.logoutHandler();
  };
  render() {
    return (
      <NavigationWrapper>
        {this.state.nav_list.map((element, index) => {
          return element.subLinks.length ? (
            <DropDownLinks value={element} key={index} />
          ) : (
            <NormalLink value={element} key={index} />
          );
        })}
        <div>
          <DropdownButton onClick={this.UserlogoutHandler}>Logout</DropdownButton>
        </div>
      </NavigationWrapper>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  logoutHandler: () => dispatch(logoutHandler()),
});

export default connect(null,
  mapDispatchToProps
)(NavigationButtons);