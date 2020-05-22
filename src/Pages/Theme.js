import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import ThemeSwitcher from "../commonComponents/ThemeSwitcher/ThemeSwitcher";

const theme = {
  primaryColor: "#8DC63F",
  secondaryColor: "#85BA3B",
};
const Theme = ({ children }) => {
  const [color, setcolor] = useState(theme);

  const themeChangeHandler = (color) => {
    const themes = {
      ...theme,
      primaryColor: color.color,
      secondaryColor: color.dark,
    };
    setcolor(themes);
  };

  const defaultColorHandler = () => {
    const themes = { ...theme };
    setcolor(themes);
  };
  
  return (
    <ThemeProvider theme={color}>
      {children}
      <ThemeSwitcher
        onClick={themeChangeHandler}
        resetColor={defaultColorHandler}
      ></ThemeSwitcher>
    </ThemeProvider>
  );
};

export default Theme;
