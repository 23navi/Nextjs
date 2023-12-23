import React, { useState } from "react";
import Link from "next/link";
import "../styles/global.css";
import ThemeSwitch from "../components/ThemeSwitch";

export const App = ({ Component, pageProps }) => {
  return (
    <div>
      <div className="indexDiv">
        <nav>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </nav>
        <ThemeSwitch />
      </div>

      <Component {...pageProps} />
    </div>
  );
};

export default App;
