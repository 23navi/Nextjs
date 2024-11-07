export default async function SnippetShoPage(props: any) {
  const { id } = await props.params;
  console.log({ id });
  console.log({ params: props.params });
  console.log("fu");
  //   console.log({ props });
  return (
    <div>
      <h1>showingSnippets</h1>
    </div>
  );
}
