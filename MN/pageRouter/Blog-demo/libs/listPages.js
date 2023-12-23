import { readdir } from "fs/promises";

export default async function listPages() {
  const pages = await readdir("contents/posts");
  return pages
    .filter((page) => page.endsWith(".md"))
    .map((page) => page.replace(".md", ""));
  //we remove the .md extension from the page name to get the page slug.
}
