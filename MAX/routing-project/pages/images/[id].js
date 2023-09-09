import { useRouter } from "next/router";

function EventsById({ Component, pageProps }) {
  const router = useRouter();

  return <>Events with id: {router.query.id}</>;
}

export default EventsById;
