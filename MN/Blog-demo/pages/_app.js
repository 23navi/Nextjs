import React from "react";
import Link from "next/link";
import "../styles/global.css";

export const App = ({ Component, pageProps }) => {
  return (
    <>
      <nav>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </nav>
      <Component {...pageProps} />
    </>
  );
};

export default App;
