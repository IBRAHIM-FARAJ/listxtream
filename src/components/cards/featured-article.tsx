import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import type { Article } from "@/lib/content-types";

export function FeaturedArticle({ article }: { article: Article }) {
  return (
    <article className="group grid gap-6 overflow-hidden rounded-[18px] border border-border bg-surface md:grid-cols-2">
      <div className="order-2 flex flex-col justify-center p-8 md:order-1 md:p-10">
        <div className="flex items-center gap-2">
          <Badge tone="accent">{article.category}</Badge>
          {article.badge && <Badge tone="soft">{article.badge}</Badge>}
        </div>
        <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl">
          <Link
            href={`/article/${article.slug}`}
            className="transition-colors group-hover:text-accent"
          >
            {article.title}
          </Link>
        </h2>
        <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
          {article.excerpt}
        </p>
        <p className="mt-6 text-xs text-soft">
          Updated {article.updated} · {article.readingTime}
        </p>
      </div>
      <div className="relative order-1 aspect-[16/9] bg-accent-soft md:order-2 md:aspect-auto md:min-h-[260px]">
        {article.image ? (
          <Image
            src={article.image}
            alt={article.imageAlt ?? article.title}
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <HeroDiagram />
        )}
      </div>
    </article>
  );
}

function HeroDiagram() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-8">
      <div className="relative h-40 w-40">
        <div className="absolute left-0 top-0 h-24 w-24 rounded-[14px] border border-accent/30 bg-white/60" />
        <div className="absolute bottom-0 right-0 h-24 w-24 rounded-[14px] border border-accent/30 bg-white/60" />
        <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[14px] bg-accent text-white">
          <svg width="30" height="30" viewBox="0 0 20 20" fill="none">
            <path d="M4 5l6 5-6 5V5zM11 5l6 5-6 5V5z" fill="currentColor" />
          </svg>
        </div>
      </div>
    </div>
  );
}
