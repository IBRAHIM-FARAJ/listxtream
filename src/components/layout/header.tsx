import Link from "next/link";
import { Container } from "./container";
import { MobileNav } from "./mobile-nav";
import { mainNav } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface/90 backdrop-blur">
      <Container className="flex h-[72px] items-center justify-between gap-6">
        <Link href="/" className="shrink-0 text-lg font-bold tracking-tight text-ink">
          <span className="inline-flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-[6px] bg-accent-soft text-accent-dark">
              <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                <path
                  d="M4 5l6 5-6 5V5zM11 5l6 5-6 5V5z"
                  fill="currentColor"
                />
              </svg>
            </span>
            LISTXTREAM
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-[8px] px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-page hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <Link
            href="/search"
            aria-label="Search"
            className="inline-flex h-10 w-10 items-center justify-center rounded-[10px] text-muted hover:bg-page hover:text-ink"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle
                cx="9"
                cy="9"
                r="5.5"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M13 13l4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </Link>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
