import Head from "next/head";
import Link from "next/link";
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

export default function Home(props) {
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
        </div>
      </main>
    </>
  );
}
