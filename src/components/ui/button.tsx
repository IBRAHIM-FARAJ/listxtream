import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md";

const base =
  "inline-flex items-center justify-center gap-2 rounded-[10px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-white hover:bg-accent-dark",
  secondary:
    "bg-surface text-ink border border-border hover:border-soft hover:bg-page",
  ghost: "text-ink hover:text-accent",
};

const sizes: Record<Size, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2.5 text-sm",
};

export function ButtonLink({
  variant = "primary",
  size = "md",
  href,
  children,
  className = "",
}: {
  variant?: Variant;
  size?: Size;
  href: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "href"> &
  { className?: string }) {
  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </Link>
  );
}

export function Button({
  variant = "primary",
  size = "md",
  type = "button",
  children,
  className = "",
  ...rest
}: {
  variant?: Variant;
  size?: Size;
  type?: "button" | "submit" | "reset";
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<"button">, "type"> & {
    className?: string;
  }) {
  return (
    <button
      type={type}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
