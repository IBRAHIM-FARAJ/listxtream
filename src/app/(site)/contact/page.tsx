import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Send corrections, suggestions, or editorial feedback to the ListXtream team.",
  alternates: { canonical: `${site.url}/contact` },
  openGraph: {
    title: "Contact ListXtream",
    description:
      "Send corrections, suggestions, or editorial feedback to the ListXtream team.",
    url: `${site.url}/contact`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact ListXtream",
    description: "Send corrections, suggestions, or editorial feedback to the ListXtream team.",
  },
};

export default function ContactPage() {
  return (
    <PageShell title="Contact">
      <p>
        We welcome corrections, suggestions, and editorial feedback.
      </p>
      <div className="mt-8 rounded-[14px] border border-border bg-surface p-6">
        <h2 className="text-lg font-semibold text-ink">Contact is being finalized</h2>
        <p className="mt-2 text-sm text-soft">
          Our direct contact channels are currently being set up. Please check back soon to reach the ListXtream editorial team.
        </p>
      </div>
    </PageShell>
  );
}
