import { useRouter } from "next/router";

export default function Router() {
  const router = useRouter();
  console.log(router.query);
  if (router.query.id == "1") {
    console.log("helloooo");
  }
  return <h1>Hell0000</h1>;
}
