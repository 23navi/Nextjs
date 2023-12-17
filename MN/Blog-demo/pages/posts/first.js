// import { useRouter } from "next/router";
import React from "react";
import getPages from "../../libs/getPages";

export const getStaticProps = async () => {
  const { date, title, html } = await getPages("first");
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
