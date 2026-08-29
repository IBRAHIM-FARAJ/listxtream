import Link from "next/link";
import type { Article } from "@/lib/content-types";

export function RelatedArticles({ articles }: { articles: Article[] }) {
  if (articles.length === 0) return null;
  return (
    <section className="mt-12 border-t border-border pt-10">
      <h2 className="text-2xl font-bold tracking-tight text-ink">
        Keep reading
      </h2>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/article/${article.slug}`}
            className="group flex flex-col rounded-[14px] border border-border bg-surface p-5 transition-shadow hover:shadow-card"
          >
            <span className="text-xs font-medium text-accent">
              {article.category}
            </span>
            <h3 className="mt-2 font-semibold leading-snug text-ink group-hover:text-accent">
              {article.title}
            </h3>
            <span className="mt-3 text-xs text-soft">{article.readingTime}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
