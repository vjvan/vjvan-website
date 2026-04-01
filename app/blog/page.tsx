import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "觀點筆記",
  description: "關於 AI、自動化、系統架構與實務落地的精選觀點。",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-5xl px-6 py-14 md:py-18">
      <section className="rounded-[2rem] border border-stone-200 bg-white/80 p-8 shadow-sm backdrop-blur md:p-10">
        <p className="text-sm font-medium uppercase tracking-[0.28em] text-amber-700">
          Insights
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-950 md:text-5xl">
          觀點筆記
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">
          這裡不追求高頻更新，比較像精選發布。只整理我在 AI 導入、自動化與系統規劃上，對企業真正有用的觀察與拆解。
        </p>
      </section>

      <section className="mt-10">
        {posts.length === 0 ? (
          <div className="rounded-[1.75rem] border border-stone-200 bg-[#f8f3eb] p-8">
            <p className="text-lg font-medium text-stone-900">文章準備中</p>
            <p className="mt-3 text-sm leading-7 text-stone-600">
              目前採精選發布，數量不會很多，但每篇都會盡量回到真實營運問題與可執行做法。
            </p>
          </div>
        ) : (
          <div className="space-y-5">
            {posts.map((post, index) => (
              <article
                key={post.slug}
                className={`rounded-[1.75rem] border border-stone-200 p-8 shadow-sm ${
                  index === 0 ? "bg-white" : "bg-white/70"
                }`}
              >
                <Link href={`/blog/${post.slug}`} className="group block">
                  {index === 0 && (
                    <p className="text-xs font-medium uppercase tracking-[0.26em] text-amber-700">
                      Featured Note
                    </p>
                  )}
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-stone-950 transition-colors group-hover:text-amber-800">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm text-stone-500">
                    {post.date} | {post.readingTime}
                  </p>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-600">
                    {post.description}
                  </p>
                  {post.tags.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs text-stone-600"
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

      <section className="mt-10">
        <div className="rounded-[1.75rem] border border-stone-200 bg-stone-950 px-8 py-9 text-white">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.28em] text-amber-200/80">
                比內容更急的是流程
              </p>
              <p className="mt-4 text-xl font-semibold leading-8">
                如果你現在最需要的不是文章，而是把 LINE、CRM 或自動化流程整理清楚，可以直接找我聊系統。
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full bg-amber-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-amber-600"
            >
              查看服務內容
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
