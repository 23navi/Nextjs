import getPage from "./getPage";
import listPages from "./listPages";

export default async function getPosts() {
  const pages = await listPages();
  const posts = [];
  for (const page of pages) {
    const post = await getPage(page);
    posts.push({ ...post, slug: page });
  }
  return posts;
}
