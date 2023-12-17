import React from "react";
import Link from "next/link";

const index = () => {
  return (
    <main>
      <h1>Home</h1>
      <div>
        <ul>
          <li>
            <Link href="posts/first">First Post</Link>
          </li>
          <li>
            <Link href="posts/second">Second Post</Link>
          </li>
          <li>
            <Link href="posts/third">Third Post</Link>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default index;
