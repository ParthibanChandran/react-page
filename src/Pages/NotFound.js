import React from "react";
import { CenterWrapper, HomePageWrapper } from "./style";
export default function NotFound() {
  return (
    <CenterWrapper>
      <img
        src="https://img.icons8.com/clouds/100/000000/road-closure.png"
        alt="file is corrupted"
      />
      <p>Page Not Found...Click to</p>&nbsp;&nbsp;&nbsp;
      <HomePageWrapper href="/home-page">Home Page</HomePageWrapper>
    </CenterWrapper>
  );
}
