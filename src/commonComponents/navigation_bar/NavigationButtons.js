import React, { Component } from "react";
import { NavigationWrapper } from './style';
import DropDownLinks from "./DropdownLinks.js";
import NormalLink from "./NormalLink.js";
export default class NavigationButtons extends Component {
  state ={
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
  }
  render(){
    return (
      <NavigationWrapper>
        {this.state.nav_list.map((element,index) => {
          return element.subLinks.length ? <DropDownLinks value={element} key={index}/> : <NormalLink value={element} key={index} />;
        })}
      </NavigationWrapper>
    );
  }
}
