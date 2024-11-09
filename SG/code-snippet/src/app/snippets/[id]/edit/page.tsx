import { db } from "@/db";
import { notFound } from "next/navigation";

interface SnippetEditPageProps {
  params: {
    id: string;
  };
}

export default async function SnippetEditPage(props: SnippetEditPageProps) {
  const id = parseInt(props.params.id);

  const snippet = await db.snippet.findUnique({
    where: { id }, // We converted string id to int id
  });

  if (!snippet) {
    return notFound();
  }

  return <div>Editing snippet with id {id}</div>;
}