import React from "react";
import { DropdownButton,DropdownWrapper,DropdownContent,Link,DownArrow } from './style';

export default function DropdownLinks(props) {
  let { linkName, subLinks } = props.value;
  return (
    <React.Fragment>
      <DropdownWrapper className="dropdown">
        <DropdownButton>{linkName}<DownArrow className="fa fa-caret-down"></DownArrow></DropdownButton>
        <DropdownContent className="dropdown-content">
            {subLinks.map((element,index)=>{
                return <Link key={index} href={element.link}>{element.linkName}</Link>
            })}
        </DropdownContent>
      </DropdownWrapper>
    </React.Fragment>
  );
}
