import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "ListXtream is an independent editorial website focused on IPTV, Xtream streaming technology, device guides and troubleshooting — written plainly, without hype.",
  alternates: { canonical: `${site.url}/about` },
  openGraph: {
    title: "About ListXtream",
    description:
      "ListXtream is an independent editorial website focused on IPTV, Xtream streaming technology, device guides and troubleshooting — written plainly, without hype.",
    url: `${site.url}/about`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "About ListXtream",
    description:
      "ListXtream is an independent editorial website focused on IPTV, Xtream streaming technology, device guides and troubleshooting — written plainly, without hype.",
  },
};

export default function AboutPage() {
  return (
    <PageShell title="About ListXtream">
      <p>
        ListXtream is an independent, editorial website focused on IPTV, Xtream
        streaming technology, device guides, apps, and troubleshooting. We
        write practical, plainly-worded material that helps people set things up
        and fix problems — without the hype and urgency you see on many
        streaming sales pages.
      </p>
      <h2 className="mt-8 text-2xl font-semibold text-ink">What we cover</h2>
      <ul className="mt-4 list-disc space-y-2 pl-6">
        <li>Xtream Codes, Xtream API, and how modern players connect</li>
        <li>Guides for beginners, setup, M3U playlists, and EPG</li>
        <li>Device-specific tutorials for Fire TV, Android TV, and more</li>
        <li>Straightforward fixes for common streaming problems</li>
      </ul>
      <h2 className="mt-8 text-2xl font-semibold text-ink">Our approach</h2>
      <p className="mt-4">
        We aim to be accurate, current, and easy to read. Where a topic is
        uncertain or depends on a specific provider, we say so. We do not invent
        ratings or testimonials, and we keep our guides and recommendations
        separate from any advertising or commercial interest.
      </p>
      <p className="mt-4">
        Questions or corrections? Reach out through the{" "}
        <a href="/contact" className="text-accent hover:underline">
          contact
        </a>{" "}
        page.
      </p>
    </PageShell>
  );
}
