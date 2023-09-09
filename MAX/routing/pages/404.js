import { useRouter } from "next/router";

function NotFoundPage() {
  const router = useRouter();
  console.log(router.query);
  console.log(router.pathname);
  console.log(router);
  return <>Page not foundddd</>;
}

export default NotFoundPage;
