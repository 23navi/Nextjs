import Head from "next/head";

import axios from "axios";
import { ProductCard } from "@/components/ProductCard";

export const getStaticProps = async () => {
  const products = await axios.get("http://localhost:1337/products");
  return {
    props: {
      products: products.data,
    },
    revalidate: 30, // 10 seconds
  };
};

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Next Shop</title>
      </Head>
      <main className="px-6 py-4">
        <h1 className="text-lg text-amber-600">Next Shop</h1>
        <div>
          <ul className="grid grid-cols-3">
            {props.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
