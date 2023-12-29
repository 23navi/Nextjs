import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";

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

export default function Home(props) {
  const [urls, setUrls] = useState([]);
  useEffect(() => {
    (async function abc() {
      try {
        const response = await fetch(
          "https://o10kcrtatf.execute-api.ap-south-1.amazonaws.com/dev/getUrls/357073294020116?startDate=2023-12-01&days=15"
        );

        console.log(response);
        const data = await response.json();
        setUrls(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return (
    <>
      <Head>
        <title>Next Shop</title>
      </Head>
      <main className="px-6 py-4">
        <h1 className="text-lg text-amber-600">Next Shop</h1>
        <div>
          <ul>
            {props.products.map((product) => {
              return (
                <li key={product.id}>
                  <Link href={`/products/${product.id}`}>{product.title}</Link>
                </li>
              );
            })}
          </ul>
          <ul>
            {urls.map((url) => {
              return (
                <li key={url.date}>
                  <Link href={url.url}>{url.date}</Link>
                </li>
              );
            })}{" "}
          </ul>
        </div>
      </main>
    </>
  );
}
