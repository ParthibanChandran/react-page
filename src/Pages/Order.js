import React, { useEffect } from "react";
import { CenterWrapper } from "./style";

export default function Order() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <CenterWrapper style={{ fontSize: "22px" }}>
      Your order is placed....<span role="img" aria-label="cart">🛒</span>
    </CenterWrapper>
  );
}
