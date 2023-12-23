import React, { useState } from "react";
import style from "./styles.module.css";

const ThemeSwitch = () => {
  const [isDark, setIsDark] = useState(false);
  const text = isDark ? "Dark Mode" : "Light Mode";

  return (
    <button
      className={style.switchButton}
      onClick={() => {
        setIsDark(!isDark);
      }}
    >
      {text}
    </button>
  );
};

export default ThemeSwitch;
