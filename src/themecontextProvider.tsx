import React, { createContext, useEffect, useState } from "react";

interface CustomStyle {
  lightColor: string;
  darkColor: string;
}

export enum Modes {
  DARK = "dark",
  LIGHT = "light",
}

export const ThemeContext = createContext<{
  mode: Modes;
  changeMode: () => void;
}>({
  mode: Modes.LIGHT,
  changeMode: () => {},
});

const DarkLightModeProvider = (props: {
  children:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  customStyle: CustomStyle;
}) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const changeTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (typeof window != undefined) {
      setDarkMode(window.localStorage.getItem("mode") === Modes.DARK);
    }
  }, [typeof window]);

  useEffect(() => {
    if (darkMode) {
      document.body.style.background = props.customStyle.darkColor;
      localStorage.setItem("mode", Modes.DARK);
    } else {
      document.body.style.background = props.customStyle?.lightColor;
      localStorage.setItem("mode", Modes.LIGHT);
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider
      value={{
        mode: darkMode ? Modes.DARK : Modes.LIGHT,
        changeMode: () => changeTheme(),
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export { DarkLightModeProvider };
