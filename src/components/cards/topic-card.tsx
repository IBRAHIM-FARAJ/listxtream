import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export function TopicCard({
  title,
  description,
  href,
  count,
  icon,
  image,
  imageAlt,
}: {
  title: string;
  description: string;
  href: string;
  count?: number;
  icon?: ReactNode;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-[14px] border border-border bg-surface transition-all hover:border-accent/40 hover:shadow-card"
    >
      {image && (
        <span className="relative block aspect-[16/9] overflow-hidden bg-accent-soft">
          <Image
            src={image}
            alt={imageAlt ?? title}
            fill
            sizes="(min-width: 1024px) 360px, (min-width: 768px) 45vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </span>
      )}
      <div className="flex flex-1 flex-col p-6">
        {icon && (
          <span className="flex h-11 w-11 items-center justify-center rounded-[12px] bg-accent-soft text-accent-dark">
            {icon}
          </span>
        )}
        <h3 className="mt-4 text-lg font-semibold tracking-tight text-ink group-hover:text-accent">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
        {typeof count === "number" && (
          <p className="mt-4 text-xs text-soft">{count} articles</p>
        )}
      </div>
    </Link>
  );
}
