import Head from "next/head";
import axios from "axios";

export const getStaticProps = async () => {
  const products = await axios.get("http://localhost:1337/products");
  console.log(products.data);
  return {
    props: {
      products: products.data,
    },
    revalidate: 30, // 10 seconds
  };
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Shop</title>
      </Head>
      <main className="px-6 py-4">
        <h1>Next Shop</h1>
      </main>
    </>
  );
}
