🚀 Getting Start

Using <span> npm:</span>

```js
  npm install react-dark-light-theme --save
```

✨ Usage

````jsx
import React, {useState} from "react";
import DarkModeToggle from "react-dark-mode-toggle";

export default () => {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  return (
    <DarkModeToggle
      onChange={setIsDarkMode}
      checked={isDarkMode}
      size={80}
    />
  );
};
```





````

```css
span {
  color: red;
}
```
