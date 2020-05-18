import React from 'react'
import {CenterWrapper,HomePageWrapper} from "./style";
export default function NotFound() {
    return (
        <CenterWrapper>
            <img src="https://img.icons8.com/clouds/100/000000/road-closure.png"/>
            <p >Page Not Found...Click to</p>&nbsp;&nbsp;&nbsp;
            <HomePageWrapper href="/recipe-page-1">Home Page</HomePageWrapper>
        </CenterWrapper>
    )
}