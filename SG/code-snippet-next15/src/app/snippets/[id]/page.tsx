export default async function SnippetShoPage(props: any) {
  const params = await props.params;
  const { id } = params;

  console.log({ propsId: params });
  console.log({ id });

  return (
    <div>
      <h1>showingSnippets</h1>
    </div>
  );
}
