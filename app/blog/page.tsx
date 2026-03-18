import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "部落格",
  description: "AI、自動化、系統架構相關文章與教學。",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8">部落格</h1>

      {posts.length === 0 ? (
        <p className="text-gray-500">文章準備中,敬請期待。</p>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <h2 className="text-xl font-semibold group-hover:text-gray-600 transition-colors">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  {post.date} - {post.readingTime}
                </p>
                <p className="mt-2 text-gray-600">{post.description}</p>
                {post.tags.length > 0 && (
                  <div className="mt-3 flex gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
