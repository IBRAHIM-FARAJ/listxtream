import type { ReactNode } from "react";

type Tone = "default" | "accent" | "soft";

const tones: Record<Tone, string> = {
  default: "bg-subtle text-muted",
  accent: "bg-accent-soft text-accent-dark",
  soft: "bg-subtle text-ink",
};

export function Badge({
  children,
  tone = "default",
  className = "",
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-[6px] px-2 py-0.5 text-xs font-medium ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
