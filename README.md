# 🚀 Installation

```jsx
  npm install react-dark-light-theme --save
```

# 📌 How it works

By using the context API from React in react-dark-light-theme, you'll be able to access the mode variable that can be `light` or `dark` and the changeMode function to change the current theme.

# ✨ Usage

```jsx
import React, { useState } from 'react'
import { DarkLightModeProvider } from 'react-dark-light-theme'

const App = () => {
  const darkLightThemeStyle = { lightColor: '#fff', darkColor: '#000' }
  return (
    <DarkLightModeProvider customStyle={darkLightThemeStyle}>
      <NavBar />
    </DarkLightModeProvider>
  )
}
```

````jsx
import React, {useState} from "react";
import { useDarkLightMode } from 'react-dark-light-theme';
import NightModeIcon from 'assets/icons/NightModeIcon';
import LightModeIcon from 'assets/icons/LightModeIcon';

const NavBar = () => {
  const { mode, changeMode } = useDarkLightMode();
  return (
    <div>
       {mode === 'dark' ? <LightModeIcon/> : <NightModeIcon />}
       <button type="button" onClick={changeMode}>
            Change Mode
       </button>
    </div>
  );
};
```
````
