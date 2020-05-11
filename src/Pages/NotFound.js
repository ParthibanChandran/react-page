import React from 'react'
import {NotFoundWrapper,HomePageWrapper} from "./style";
export default function NotFound() {
    return (
        <NotFoundWrapper>
            <p >Page Not Found...Click to</p>&nbsp;&nbsp;&nbsp;
            <HomePageWrapper href="/recipe-page-1">Home Page</HomePageWrapper>
        </NotFoundWrapper>
    )
}
