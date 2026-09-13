import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import type { Article } from "@/lib/content-types";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-[14px] border border-border bg-surface transition-shadow hover:shadow-card">
      {article.image && (
        <Link
          href={`/article/${article.slug}`}
          className="relative block aspect-[16/9] overflow-hidden bg-accent-soft"
          aria-hidden
          tabIndex={-1}
        >
          <Image
            src={article.image}
            alt={article.imageAlt ?? article.title}
            fill
            sizes="(min-width: 1024px) 360px, (min-width: 768px) 45vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </Link>
      )}
      <div className="flex flex-1 flex-col p-6">
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
      </div>
    </article>
  );
}
