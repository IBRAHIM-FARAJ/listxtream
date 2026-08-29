import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import type { Article } from "@/lib/content-types";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="group flex flex-col rounded-[14px] border border-border bg-surface p-6 transition-shadow hover:shadow-card">
      <Badge tone="soft" className="self-start">
        {article.category}
      </Badge>
      <h3 className="mt-3 text-lg font-semibold leading-snug text-ink">
        <Link
          href={`/article/${article.slug}`}
          className="transition-colors group-hover:text-accent"
        >
          {article.title}
        </Link>
      </h3>
      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
        {article.excerpt}
      </p>
      <div className="mt-4 flex items-center gap-3 text-xs text-soft">
        <span>{article.readingTime}</span>
        <span aria-hidden>·</span>
        <span>Updated {article.updated}</span>
      </div>
    </article>
  );
}
