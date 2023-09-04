import { useRouter } from "next/router";
export default function ProjectByClientIdAndProjectId({
  Component,
  pageProps,
}) {
  const router = useRouter();
  console.log(router.query);
  return (
    <h1>
      Project Page for client id: {router.query.id} and projectId:{" "}
      {router.query.projectId}
    </h1>
  );
}
