import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

import { DropdownWrapper, DropdownContent, Links, DownArrow } from "./style";

export default function DropdownLinks(props) {
  let { linkName, subLinks, linkTo } = props.value;
  return (
    <React.Fragment>
      <DropdownWrapper className="dropdown">
        <Link
          className="nav-tag"
          to={{
            pathname: linkTo,
          }}
        >
          {linkName}
          <DownArrow className="fa fa-caret-down"></DownArrow>
        </Link>
        <DropdownContent className="dropdown-content">
          {subLinks.map((element, index) => {
            return (
              <Links key={index} href={element.link}>
                {element.linkName}
              </Links>
            );
          })}
        </DropdownContent>
      </DropdownWrapper>
    </React.Fragment>
  );
}
