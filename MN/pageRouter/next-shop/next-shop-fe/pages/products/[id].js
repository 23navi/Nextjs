import Head from "next/head";
import axios from "axios";

export const getStaticPaths = async () => {
  const products = await axios.get("http://localhost:1337/products");
  const paths = products.data.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: "blocking" };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  try {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const product = await axios.get(`http://localhost:1337/products/${id}`);
    return {
      props: {
        product: product.data,
      },
      revalidate: 30, // 10 seconds
    };
  } catch (err) {
    console.log(err.response.status);
    if (err.response.status === 404) {
      return {
        notFound: true,
      };
    }
  }
};

export default function Product(props) {
  return (
    <>
      <Head>
        <title>{props.product.title}</title>
      </Head>
      <main>
        <div>{props.product.title}</div>
      </main>
    </>
  );
}
