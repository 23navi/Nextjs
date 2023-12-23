// import { useRouter } from "next/router";
import React from "react";
import getPage from "../../libs/getPage";
import listPages from "../../libs/listPages";

export const getStaticPaths = async () => {
  const paths = await listPages();
  return {
    paths: paths.map((path) => ({ params: { slug: path } })),
    fallback: true, // false or 'blocking'
  };
};

export const getStaticProps = async ({ params }) => {
  const { date, title, html } = await getPage(params.slug);
  console.log({ date, title, html });
  return {
    props: {
      title,
      date,
      content: html,
    },
  };
};

const post = (props) => {
  // const router = useRouter();
  // console.log({ router });

  return (
    <main>
      <h1>{props.title}</h1>
      <p>{props.date}</p>
      <article dangerouslySetInnerHTML={{ __html: props.content }} />
    </main>
  );
};

export default post;
