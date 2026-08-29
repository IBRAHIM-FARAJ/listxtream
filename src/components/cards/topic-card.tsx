import Link from "next/link";
import type { ReactNode } from "react";

export function TopicCard({
  title,
  description,
  href,
  count,
  icon,
}: {
  title: string;
  description: string;
  href: string;
  count?: number;
  icon?: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-[14px] border border-border bg-surface p-6 transition-all hover:border-accent/40 hover:shadow-card"
    >
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
    </Link>
  );
}
