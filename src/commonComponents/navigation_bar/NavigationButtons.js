import React, { Component } from "react";
import { connect } from "react-redux";
import { NavigationWrapper, DropdownButton } from "./style";
import DropDownLinks from "./DropdownLinks.js";
import NormalLink from "./NormalLink.js";
import { logoutHandler } from "../../Pages/Store/actions";

class NavigationButtons extends Component {
  state = {
    nav_list: [
      {
        tag_id : 0,
        linkName: "Home",
        link: "/home-page",
        subLinks: [],
      },
      {
        tag_id : 1,
        linkName: "Recipes",
        linkTo: "/recipes",
        subLinks: [
          { linkName: "Browse Recipes", link: "/recipes" },
          { linkName: "Recipe page #1", link: "/recipes" },
          { linkName: "Recipe page #2", link: "/recipes" },
        ],
      },
      {
        tag_id: 2,
        linkName: "Shop",
        linkTo: "/shop",
        subLinks: [
          { linkName: "Shop", link: "/shop" },
          { linkName: "Product Page", link: "/shop" },
        ],
      },
      {
        tag_id : 3,
        linkName: "Submit Recipe",
        link: "/submit-recipe",
        subLinks: [],
      },
    ],
  };
  UserlogoutHandler = () => {
    sessionStorage.setItem("authenticated", false);
    this.props.logoutHandler();
  };
  render() {
    return (
      <NavigationWrapper>
        {this.state.nav_list.map((element, index) => {
          return element.subLinks.length ? (
            <DropDownLinks value={element} key={element.tag_id} />
          ) : (
            <NormalLink value={element} key={element.tag_id} />
          );
        })}
        <div>
          <DropdownButton onClick={this.UserlogoutHandler}>
            Logout
          </DropdownButton>
        </div>
      </NavigationWrapper>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  logoutHandler: () => dispatch(logoutHandler()),
});

export default connect(null, mapDispatchToProps)(NavigationButtons);
