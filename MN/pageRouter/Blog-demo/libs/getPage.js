import { marked } from "marked";
import matter from "gray-matter";
import fs from "fs/promises";

export default async function getPage(slug) {
  const content = await fs.readFile(`contents/posts/${slug}.md`);
  const { data, content: body } = matter(content);
  const html = marked.parse(body);
  return {
    title: data.title,
    date: data.date,
    html,
  };
}
