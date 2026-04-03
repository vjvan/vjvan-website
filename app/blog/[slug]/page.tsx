import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import Script from "next/script";
import AuthorBox from "@/components/mdx/AuthorBox";
import { mdxComponents } from "@/components/mdx";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.meta.title,
    description: post.meta.description,
    openGraph: {
      title: post.meta.title,
      description: post.meta.description,
      url: `https://vjvan.com/blog/${slug}`,
      type: "article",
      publishedTime: post.meta.date,
      authors: ["允雷"],
      tags: post.meta.tags,
      images: [
        {
          url: `https://vjvan.com/blog/${slug}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: post.meta.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.meta.title,
      description: post.meta.description,
      images: [`https://vjvan.com/blog/${slug}/opengraph-image`],
    },
    alternates: {
      canonical: `https://vjvan.com/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.meta.title,
    description: post.meta.description,
    image: `https://vjvan.com/blog/${slug}/opengraph-image`,
    datePublished: post.meta.date,
    dateModified: post.meta.date,
    url: `https://vjvan.com/blog/${slug}`,
    author: {
      "@type": "Person",
      name: "允雷",
      jobTitle: "AI 商業系統架構師",
      url: "https://vjvan.com",
      image: "https://vjvan.com/images/vjvan-portrait.jpg",
      sameAs: [
        "https://www.linkedin.com/in/vjvan",
        "https://github.com/vjvan",
        "https://x.com/vjvan_n",
        "https://www.instagram.com/vjvan_n",
        "https://www.threads.net/@vjvan_n",
      ],
    },
    publisher: {
      "@type": "Person",
      name: "允雷",
      url: "https://vjvan.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://vjvan.com/blog/${slug}`,
    },
    keywords: post.meta.tags.join(", "),
    inLanguage: "zh-TW",
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "首頁", item: "https://vjvan.com" },
      { "@type": "ListItem", position: 2, name: "觀點筆記", item: "https://vjvan.com/blog" },
      { "@type": "ListItem", position: 3, name: post.meta.title, item: `https://vjvan.com/blog/${slug}` },
    ],
  };

  return (
    <div className="mx-auto max-w-4xl px-6 py-14 md:py-18">
      <Script
        id={`json-ld-article-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Script
        id={`json-ld-breadcrumb-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <article className="rounded-[2rem] border border-stone-200 bg-white/85 p-8 shadow-sm backdrop-blur md:p-10">
        <Link
          href="/blog"
          className="inline-flex items-center rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-sm font-medium text-stone-600 transition-colors hover:border-stone-300 hover:bg-white hover:text-stone-900"
        >
          返回觀點筆記
        </Link>

        <header className="mt-6 border-b border-stone-200 pb-8">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-amber-700">
            Insight Note
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-950">
            {post.meta.title}
          </h1>
          <p className="mt-4 text-sm text-stone-500">
            {post.meta.date} | {post.meta.readingTime}
          </p>
          {post.meta.tags.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {post.meta.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs text-stone-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <p className="mt-6 max-w-2xl text-base leading-7 text-stone-600">
            {post.meta.description}
          </p>
        </header>

        <div className="article-content mt-8">
          <MDXRemote
            source={post.content}
            components={mdxComponents}
            options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
          />
        </div>

        <div className="article-content">
          <AuthorBox />
        </div>

        <div className="mt-10 rounded-[1.5rem] border border-stone-200 bg-[#f8f3eb] p-6">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-amber-700">
            延伸
          </p>
          <p className="mt-3 text-sm leading-7 text-stone-600">
            如果你面對的不是內容問題，而是流程、資料和系統沒有接起來，可以直接從實際營運情境切入討論。
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:vjvan.n@gmail.com?subject=%E8%AB%AE%E8%A9%A2%20vjvan.com%20%E8%A7%80%E9%BB%9E%E6%96%87%E7%AB%A0"
              className="inline-flex items-center justify-center rounded-full bg-action px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-action-hover"
            >
              預約系統諮詢
            </a>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-stone-300 px-5 py-3 text-sm font-semibold text-stone-700 transition-colors hover:border-stone-400 hover:bg-white"
            >
              查看服務內容
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
