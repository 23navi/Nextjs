import { useRouter } from "next/router";

function NotFoundPage() {
  const router = useRouter();
  console.log(router.query);
  console.log(router.pathname);
  return <>Page not foundddd</>;
}

export default NotFoundPage;
