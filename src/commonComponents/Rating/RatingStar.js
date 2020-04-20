import React from "react";
import { Stars } from "./style";

export default function RatingStar(props) {
  let { element } = props;
  return (
    <React.Fragment>
      {[...new Array(5)].map((value, index) => {
        return (
          <Stars
            key={index}
            star_checked={index + 1 <= element.rating}
            className="fa fa-star"
          ></Stars>
        );
      })}
    </React.Fragment>
  );
}
