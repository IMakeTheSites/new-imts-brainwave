import { marked } from "marked";

// Every .md file in src/posts becomes a blog post. The file name is the URL slug:
// src/posts/my-first-post.md  ->  /blog/my-first-post
const files = import.meta.glob("../posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

// Reads the "front matter" block at the top of each post:
// ---
// title: My post
// date: 2026-10-19
// summary: One-line description shown on the blog index
// tags: react, dotnet
// ---
const parseFrontMatter = (raw) => {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {}, body: raw };
  const data = {};
  match[1].split(/\r?\n/).forEach((line) => {
    const i = line.indexOf(":");
    if (i === -1) return;
    const key = line.slice(0, i).trim();
    const value = line.slice(i + 1).trim().replace(/^["']|["']$/g, "");
    data[key] = value;
  });
  return { data, body: match[2] };
};

export const posts = Object.entries(files)
  .map(([path, raw]) => {
    const slug = path.split("/").pop().replace(/\.md$/, "");
    const { data, body } = parseFrontMatter(raw);
    return {
      slug,
      title: data.title || slug,
      date: data.date || "",
      summary: data.summary || "",
      tags: data.tags ? data.tags.split(",").map((t) => t.trim()).filter(Boolean) : [],
      draft: data.draft === "true",
      html: marked.parse(body),
      readingMinutes: Math.max(1, Math.round(body.split(/\s+/).length / 220)),
    };
  })
  .filter((p) => !p.draft)
  .sort((a, b) => (a.date < b.date ? 1 : -1));

export const getPost = (slug) => posts.find((p) => p.slug === slug);

export const formatDate = (date) =>
  date
    ? new Date(`${date}T12:00:00`).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : "";
