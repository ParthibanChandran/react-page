import React from "react";
import { Logo } from './style'; 
import logo from '../../assets/images/logo.jpg';

export default function LogoWrapper() {
  return (
    <Logo>
      <img src={logo} alt="Chow" height="35px" width="auto" ></img>
    </Logo>
  );
}
