import React from "react";
import { NavigationWrapper } from '../style';
import DropDownLinks from "./DropdownLinks.js";
import NormalLink from "./NormalLink.js";

export default function NavigationButtons(props) {
  let {arr} = props;
  return (
    <NavigationWrapper>
      {arr.map((element,index) => {
        return element.subLinks.length ? <DropDownLinks value={element} key={index}/> : <NormalLink value={element} key={index} />;
      })}
    </NavigationWrapper>
  );
}
