import Link from "next/link";
import { Container } from "@/components/layout/container";
import { ButtonLink, Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArticleCard } from "@/components/cards/article-card";
import { FeaturedArticle } from "@/components/cards/featured-article";
import { TopicCard } from "@/components/cards/topic-card";
import { DeviceCard } from "@/components/cards/device-card";
import {
  getFeaturedArticle,
  getPopularArticles,
  getLatestArticles,
} from "@/lib/articles";

const xtreamTopics = [
  {
    title: "Xtream Codes",
    description:
      "What the login format means, how services use it, and how to work with it.",
    href: "/xtream/xtream-codes",
  },
  {
    title: "Xtream API",
    description:
      "The structured interface players use to fetch channels, categories and EPG.",
    href: "/xtream/xtream-api",
  },
  {
    title: "Xtream Troubleshooting",
    description:
      "Resolve login errors, blank lists and playback issues step by step.",
    href: "/xtream/xtream-troubleshooting",
  },
];

const devices = [
  { name: "Fire TV", href: "/devices/fire-tv", description: "Get IPTV running on Amazon Fire TV." },
  { name: "Android TV", href: "/devices/android-tv", description: "Setup and sideloading guidance for Android TV." },
  { name: "Smart TV", href: "/devices/smart-tv", description: "Run IPTV on your TV&apos;s built-in apps." },
  { name: "Apple TV", href: "/devices/apple-tv", description: "Players and setup for Apple TV." },
];

const problems = [
  "Buffering",
  "EPG issues",
  "Login errors",
  "Playback issues",
  "Blank channel list",
  "Connection drops",
];

export default function HomePage() {
  const featured = getFeaturedArticle()!;
  const popular = getPopularArticles();
  const latest = getLatestArticles(6);

  return (
    <>
      <section className="border-b border-border bg-gradient-to-b from-white to-page">
        <Container className="grid items-center gap-12 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              IPTV &amp; Streaming Resource
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-ink md:text-6xl">
              Understand IPTV.
              <br />
              Master Xtream.
            </h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
              Practical guides, explainers, device tutorials and
              troubleshooting resources for modern streaming.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/xtream">Explore Xtream</ButtonLink>
              <ButtonLink href="/guides" variant="secondary">
                Browse Guides
              </ButtonLink>
            </div>
          </div>
          <div className="hidden items-center justify-center md:flex">
            <HeroArt />
          </div>
        </Container>
      </section>

      <Container>
        <section className="py-14">
          <div className="flex items-end justify-between">
            <h2 className="text-3xl font-bold tracking-tight text-ink">
              Featured
            </h2>
            <Link
              href="/blog"
              className="text-sm font-medium text-accent hover:underline"
            >
              All articles
            </Link>
          </div>
          <div className="mt-6">
            {featured && <FeaturedArticle article={featured} />}
          </div>
        </section>

        <section className="pb-14">
          <h2 className="text-3xl font-bold tracking-tight text-ink">
            Explore Xtream
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {xtreamTopics.map((t) => (
              <TopicCard key={t.href} {...t} icon={<TopicIcon />} />
            ))}
          </div>
        </section>

        <section className="pb-14">
          <div className="flex items-end justify-between">
            <h2 className="text-3xl font-bold tracking-tight text-ink">
              Popular guides
            </h2>
            <Link
              href="/guides"
              className="text-sm font-medium text-accent hover:underline"
            >
              Browse all guides
            </Link>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {popular.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>

        <section className="pb-14">
          <h2 className="text-3xl font-bold tracking-tight text-ink">
            Learn by device
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {devices.map((d) => (
              <DeviceCard key={d.href} {...d} />
            ))}
          </div>
        </section>

        <section className="pb-14">
          <div className="rounded-[18px] border border-border bg-white p-8 md:p-12">
            <h2 className="text-3xl font-bold tracking-tight text-ink">
              Having a problem?
            </h2>
            <p className="mt-2 text-muted">
              Search our troubleshooting guides for a fast fix.
            </p>
            <form action="/search" className="mt-6 max-w-md">
              <Input name="q" placeholder="Search for a problem..." aria-label="Search for a problem" />
              <div className="mt-4 flex flex-wrap gap-2">
                {problems.map((p) => (
                  <Link
                    key={p}
                    href={`/search?q=${encodeURIComponent(p)}`}
                    className="rounded-[8px] border border-border bg-page px-3 py-1.5 text-xs font-medium text-muted transition-colors hover:border-accent/40 hover:text-accent"
                  >
                    {p}
                  </Link>
                ))}
              </div>
            </form>
          </div>
        </section>

        <section className="pb-14">
          <div className="flex items-end justify-between">
            <h2 className="text-3xl font-bold tracking-tight text-ink">
              Latest articles
            </h2>
            <Badge tone="soft">Updated regularly</Badge>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {latest.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>

        <section className="pb-20">
          <div className="rounded-[18px] border border-accent/20 bg-accent-soft/50 p-8 text-center md:p-12">
            <h2 className="text-2xl font-bold tracking-tight text-ink md:text-3xl">
              The ListXtream newsletter
            </h2>
            <p className="mx-auto mt-2 max-w-md text-muted">
              A short, useful roundup of new guides and fixes. No noise.
            </p>
            <form className="mx-auto mt-6 flex max-w-md gap-2">
              <Input type="email" placeholder="you@example.com" aria-label="Email address" required />
              <Button type="submit" variant="primary">
                Subscribe
              </Button>
            </form>
          </div>
        </section>
      </Container>
    </>
  );
}

function HeroArt() {
  return (
    <div className="relative flex h-72 w-72 items-center justify-center rounded-[24px] border border-accent/20 bg-accent-soft/40">
      <div className="absolute left-8 top-8 h-24 w-32 rounded-[14px] border border-border bg-white/70" />
      <div className="absolute bottom-8 right-8 h-24 w-32 rounded-[14px] border border-border bg-white/70" />
      <div className="flex h-24 w-24 items-center justify-center rounded-[18px] bg-accent text-white">
        <svg width="36" height="36" viewBox="0 0 20 20" fill="none">
          <path d="M4 5l6 5-6 5V5zM11 5l6 5-6 5V5z" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}

function TopicIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 7l8-4 8 4v10l-8 4-8-4V7z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M9 12l2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
