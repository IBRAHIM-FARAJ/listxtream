import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms that apply when using ListXtream — content use, no professional advice, and site availability.",
  alternates: { canonical: `${site.url}/terms` },
  openGraph: {
    title: "Terms of Use",
    description: "The terms that apply when using ListXtream — content use, no professional advice, and site availability.",
    url: `${site.url}/terms`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Terms of Use — ListXtream",
    description: "The terms that apply when using ListXtream — content use, no professional advice, and site availability.",
  },
};

export default function TermsPage() {
  return (
    <PageShell title="Terms of Use">
      <p>
        By using ListXtream you agree to these terms.
      </p>
      <h2 className="mt-8 text-2xl font-semibold text-ink">Content use</h2>
      <p className="mt-4">
        The content on this site is for general information and education. You
        may read and share it with attribution, but you may not reproduce large
        portions of it commercially without permission.
      </p>
      <h2 className="mt-8 text-2xl font-semibold text-ink">No professional advice & No Subscriptions</h2>
      <p className="mt-4">
        Our guides are informational and educational. They are not professional, legal, or technical advice for your specific situation. You are responsible for how you apply the information.
      </p>
      <p className="mt-4">
        <strong>ListXtream does not provide, host, or sell IPTV subscriptions, channels, or copyrighted streams.</strong> We are strictly an editorial and informational resource discussing the technology, players, and configuration methods.
      </p>
      <h2 className="mt-8 text-2xl font-semibold text-ink">Availability</h2>
      <p className="mt-4">
        We work to keep the site accurate and available, but we do not guarantee
        that it will be uninterrupted or free from errors.
      </p>
    </PageShell>
  );
}
