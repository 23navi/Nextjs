import { useRouter } from "next/router";

function FilterEvents({ Component, pageProps }) {
  const router = useRouter();
  console.log(router.query.slug);

  router.query.slug?.map((slu) => slu);
  return <>Events with slug: [{router.query.slug?.map((slu) => `${slu}, `)}]</>;
}

export default FilterEvents;
