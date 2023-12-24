import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("http://localhost:1337/products");
      const data = await res.json();
      console.log({ data });
      setProducts(data);
    }
    fetchProducts();
  }, []);
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
