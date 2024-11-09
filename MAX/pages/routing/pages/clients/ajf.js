import { useRouter } from "next/router";
export default function ClientById({ Component, pageProps }) {
  const router = useRouter();
  console.log(router.query);
  return <h1>Client Page for client id: {router.query.id}</h1>;
}
