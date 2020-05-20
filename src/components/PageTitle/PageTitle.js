import React from "react";
import { ShopWrapper, ShopAlignment, ShopTitle, PageInfo } from "./style.js";

export default function PageTitle(props) {
  return (
    <React.Fragment>
      <ShopWrapper>
        <ShopAlignment>
          <ShopTitle>{props.title}</ShopTitle>
          <PageInfo>
            You are here: <span style={{ fontWeight: "bold" }}>Home</span> >
            {props.title}
          </PageInfo>
        </ShopAlignment>
      </ShopWrapper>
    </React.Fragment>
  );
}
