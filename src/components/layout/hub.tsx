import type { ReactNode } from "react";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";

export function HubHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description: string;
}) {
  return (
    <section className="border-b border-border bg-gradient-to-b from-white to-page">
      <Container className="py-14">
        {eyebrow && (
          <Badge tone="accent">{eyebrow}</Badge>
        )}
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
          {description}
        </p>
      </Container>
    </section>
  );
}

export function HubSection({
  title,
  children,
  link,
}: {
  title: string;
  children: ReactNode;
  link?: { href: string; label: string };
}) {
  return (
    <section className="py-10">
      <div className="flex items-end justify-between">
        <h2 className="text-2xl font-bold tracking-tight text-ink">{title}</h2>
        {link && (
          <a href={link.href} className="text-sm font-medium text-accent hover:underline">
            {link.label}
          </a>
        )}
      </div>
      <div className="mt-5">{children}</div>
    </section>
  );
}
