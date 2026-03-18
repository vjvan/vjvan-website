import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
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
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <header className="mb-12">
        <h1 className="text-3xl font-bold">{post.meta.title}</h1>
        <p className="mt-4 text-sm text-gray-500">
          {post.meta.date} - {post.meta.readingTime}
        </p>
        {post.meta.tags.length > 0 && (
          <div className="mt-4 flex gap-2">
            {post.meta.tags.map((tag: string) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <div className="prose prose-gray max-w-none">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}
