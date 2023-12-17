import React from "react";
import Link from "next/link";

const index = () => {
  return (
    <main>
      <nav>
        <Link href="/about">About page</Link>
      </nav>
      <h1>Home</h1>
    </main>
  );
};

export default index;
