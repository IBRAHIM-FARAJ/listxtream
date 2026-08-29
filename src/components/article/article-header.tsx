import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import type { Article } from "@/lib/content-types";

export function ArticleHeader({ article }: { article: Article }) {
  return (
    <header className="mx-auto max-w-[740px]">
      <nav aria-label="Breadcrumb" className="text-xs text-soft">
        <ol className="flex items-center gap-1.5">
          <li>
            <Link href="/" className="hover:text-accent">
              Home
            </Link>
          </li>
          <li aria-hidden>·</li>
          <li>
            <Link href={article.categoryHref} className="hover:text-accent">
              {article.category}
            </Link>
          </li>
        </ol>
      </nav>

      <Badge tone="accent" className="mt-6">
        {article.category}
      </Badge>
      <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-ink md:text-5xl">
        {article.title}
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-muted">
        {article.excerpt}
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-soft">
        <span className="text-ink">{article.author}</span>
        <span aria-hidden>·</span>
        <span>Updated {article.updated}</span>
        <span aria-hidden>·</span>
        <span>{article.readingTime}</span>
      </div>
    </header>
  );
}
