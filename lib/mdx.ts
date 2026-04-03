import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const contentDir = path.join(process.cwd(), "content/blog");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  published: boolean;
  readingTime: string;
  image?: string;
}

function formatDate(value: unknown) {
  if (value instanceof Date) {
    return value.toISOString().split("T")[0];
  }

  return String(value || "");
}

function formatReadingTime(minutes: number) {
  return `${Math.max(1, Math.round(minutes))} 分鐘閱讀`;
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(contentDir)) return [];

  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".mdx"));

  const posts = files
    .map((filename) => {
      const slug = filename.replace(".mdx", "");
      const filePath = path.join(contentDir, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);
      const stats = readingTime(content);

      return {
        slug,
        title: data.title || slug,
        date: formatDate(data.date),
        description: data.description || "",
        tags: data.tags || [],
        published: data.published !== false,
        readingTime: formatReadingTime(stats.minutes),
        image: data.image || undefined,
      };
    })
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getPostBySlug(slug: string) {
  const filePath = path.join(contentDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const stats = readingTime(content);

  return {
    meta: {
      slug,
      title: data.title || slug,
      date: formatDate(data.date),
      description: data.description || "",
      tags: data.tags || [],
      published: data.published !== false,
      readingTime: formatReadingTime(stats.minutes),
      image: data.image || undefined,
    },
    content,
  };
}
