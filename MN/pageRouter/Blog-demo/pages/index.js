import React from "react";
import Link from "next/link";
import getPosts from "../libs/getPosts";
import ThemeSwitch from "../components/ThemeSwitch";

export async function getStaticProps() {
  const posts = await getPosts();
  return {
    props: {
      posts,
    },
  };
}

const index = ({ posts }) => {
  return (
    <main>
      <div className="indexDiv">
        <h1>Home</h1>
        <ThemeSwitch />
      </div>

      <div>
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`posts/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default index;
