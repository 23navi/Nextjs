import { db } from "@/db";
export default async function Home() {
  const snippets = await db.snippet.findMany();
  console.log({ snippets });

  const renderedSnippets = snippets.map((snippet) => (
    <div key={snippet.id}>
      <h2>{snippet.title}</h2>
      <p>{snippet.code}</p>
    </div>
  ));
  return <div>{renderedSnippets}</div>;
}
