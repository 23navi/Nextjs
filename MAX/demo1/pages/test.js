export async function getServerSideProps(context) {
  const data = { abc: "abc" };
  await new Promise((resolve) => setTimeout(resolve, 10000));
  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {
  return (
    <div>
      <h1>Home</h1>
      <p>{data.abc}</p>
    </div>
  );
}
