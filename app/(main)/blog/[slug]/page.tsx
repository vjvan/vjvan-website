import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import AuthorBox from "@/components/mdx/AuthorBox";
import { mdxComponents } from "@/components/mdx";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";
import JsonLd from "@/components/JsonLd";
import DateRail from "@/components/blog/DateRail";
import TableOfContents from "@/components/blog/TableOfContents";
import CtaLink from "@/components/CtaLink";

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
      url: `https://www.vjvan.com/blog/${slug}`,
      type: "article",
      publishedTime: post.meta.date,
      authors: ["允雷 (VJVAN)"],
      tags: post.meta.tags,
      siteName: "VJVAN · 唯捷允雷",
      locale: "zh_TW",
      images: [
        {
          url: `/blog/${slug}/opengraph-image`,
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
      creator: "@vjvan",
      images: [`/blog/${slug}/opengraph-image`],
    },
    alternates: {
      canonical: `https://www.vjvan.com/blog/${slug}`,
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
    image: `https://www.vjvan.com/blog/${slug}/opengraph-image`,
    datePublished: post.meta.date,
    dateModified: post.meta.date,
    url: `https://www.vjvan.com/blog/${slug}`,
    author: {
      "@type": "Person",
      name: "允雷",
      alternateName: ["VJVAN", "唯捷允雷"],
      url: "https://www.vjvan.com",
      image: "https://www.vjvan.com/portrait.png",
      sameAs: [
        "https://www.threads.net/@vjvan_n",
        "https://www.youtube.com/@vjvan",
        "https://www.linkedin.com/in/vjvan",
        "https://github.com/vjvan",
        "https://x.com/vjvan_n",
        "https://www.instagram.com/vjvan_n",
      ],
    },
    publisher: {
      "@type": "Organization",
      name: "唯捷允雷有限公司",
      alternateName: "VJVAN",
      url: "https://www.vjvan.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.vjvan.com/portrait.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.vjvan.com/blog/${slug}`,
    },
    keywords: post.meta.tags.join(", "),
    inLanguage: "zh-TW",
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "首頁", item: "https://www.vjvan.com" },
      { "@type": "ListItem", position: 2, name: "Writing", item: "https://www.vjvan.com/blog" },
      { "@type": "ListItem", position: 3, name: post.meta.title, item: `https://www.vjvan.com/blog/${slug}` },
    ],
  };

  const readingTimeShort = post.meta.readingTime.replace("分鐘閱讀", "MIN");

  return (
    <>
      <JsonLd id={`json-ld-article-${slug}`} data={articleJsonLd} />
      <JsonLd id={`json-ld-breadcrumb-${slug}`} data={breadcrumbJsonLd} />
      <div className="px-5 md:px-10">
        <div className="mx-auto max-w-[1120px] py-14 md:py-24">
          <div
            className="mb-12 text-[11px] tracking-[0.14em] uppercase"
            style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink-muted)" }}
          >
            <CtaLink href="/blog" arrow="left">
              回觀點列表
            </CtaLink>
          </div>

          <div className="grid gap-8 md:gap-12 md:grid-cols-[100px_1fr_200px]">
            <DateRail
              date={post.meta.date}
              readingTime={post.meta.readingTime}
              tags={post.meta.tags}
            />

            <article>
              <h1
                className="m-0 mb-8"
                style={{
                  fontFamily: "var(--f-zh-display), serif",
                  fontWeight: 400,
                  fontSize: "clamp(36px, 5.5vw, 72px)",
                  lineHeight: 1.1,
                  letterSpacing: "0.01em",
                }}
              >
                {post.meta.title}
              </h1>
              <div
                className="mb-12 pb-5 flex flex-wrap gap-5 text-[11px] tracking-[0.14em] uppercase"
                style={{
                  fontFamily: "var(--f-mono), monospace",
                  color: "var(--ink-muted)",
                  borderBottom: "1px solid var(--rule)",
                }}
              >
                <span>ESSAY</span>
                <span>{post.meta.date}</span>
                <span>{readingTimeShort} READ</span>
                <span>BY VJVAN</span>
              </div>

              <p
                className="m-0 mb-12 max-w-[640px]"
                style={{
                  fontFamily: "var(--f-zh-body), sans-serif",
                  fontSize: 19,
                  lineHeight: 1.85,
                  color: "var(--ink-muted)",
                }}
              >
                {post.meta.description}
              </p>

              <div className="article-content">
                <MDXRemote
                  source={post.content}
                  components={mdxComponents}
                  options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
                />
                <AuthorBox />
              </div>

              <div
                className="mt-16 pt-10 flex flex-wrap gap-7 text-[12px] tracking-[0.12em] uppercase"
                style={{
                  fontFamily: "var(--f-mono), monospace",
                  borderTop: "1px solid var(--rule)",
                }}
              >
                <CtaLink href="/consult" variant="primary">
                  預約諮詢
                </CtaLink>
                <CtaLink href="/services" arrow="none">
                  看服務
                </CtaLink>
                <CtaLink href="/blog" arrow="none">
                  看更多觀點
                </CtaLink>
              </div>
            </article>

            <TableOfContents />
          </div>
        </div>
      </div>
    </>
  );
}
