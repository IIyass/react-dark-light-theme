import * as React from "react";
import { ThemeContext } from "./themecontextProvider";

const useDarkLightMode = () => {
  const context = React.useContext(ThemeContext);
  return context;
};

export { useDarkLightMode };
