import { db } from "@/db";
export default async function SnippetShoPage(props: any) {
  const params = await props.params;
  const { id } = params;

  const snippit = await db.snippet.findUnique({
    where: {
      id,
    },
  });

  return (
    <div>
      <h1>{snippit?.id}</h1>
    </div>
  );
}
