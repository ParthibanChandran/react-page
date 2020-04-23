import React from "react";
import { DropdownButton } from "./style";
import { Link } from "react-router-dom";

export default function NormalLink(props) {
  let { linkName, link } = props.value;
  return (
    <div>
      <Link
        className="nav-tag"
        to={{ pathname: link }}
      >
        {linkName}
      </Link>
    </div>
  );
}
