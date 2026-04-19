import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/mdx";

const BASE = "https://www.vjvan.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const blogEntries = posts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/cases`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/consult`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE}/glossary/liff`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/glossary/ai-business-system`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/courses/prompt-to-pixel`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          "zh-TW": `${BASE}/courses/prompt-to-pixel`,
          en: `${BASE}/en/courses/prompt-to-pixel`,
          "x-default": `${BASE}/courses/prompt-to-pixel`,
        },
      },
    },
    {
      url: `${BASE}/en/courses/prompt-to-pixel`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          "zh-TW": `${BASE}/courses/prompt-to-pixel`,
          en: `${BASE}/en/courses/prompt-to-pixel`,
          "x-default": `${BASE}/courses/prompt-to-pixel`,
        },
      },
    },
    ...blogEntries,
  ];
}
