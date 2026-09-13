import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How ListXtream handles data — what we collect, what we do not do, and how to reach us with questions.",
  alternates: { canonical: `${site.url}/privacy` },
  openGraph: {
    title: "Privacy Policy",
    description: "How ListXtream handles data — what we collect, what we do not do, and how to reach us with questions.",
    url: `${site.url}/privacy`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy — ListXtream",
    description: "How ListXtream handles data — what we collect, what we do not do, and how to reach us with questions.",
  },
};

export default function PrivacyPage() {
  return (
    <PageShell title="Privacy Policy">
      <p>
        This is a draft privacy policy for ListXtream. It explains, at a high
        level, how we intend to handle data when the site is live.
      </p>
      <h2 className="mt-8 text-2xl font-semibold text-ink">What we collect</h2>
      <p className="mt-4">
        As a content site, we plan to keep data collection to a minimum. We may
        use privacy-conscious analytics to understand which articles are useful,
        and we may collect an email address only when you actively sign up for
        the newsletter.
      </p>
      <h2 className="mt-8 text-2xl font-semibold text-ink">What we do not do</h2>
      <ul className="mt-4 list-disc space-y-2 pl-6">
        <li>We do not sell personal data.</li>
        <li>We do not build tracking profiles for advertising.</li>
        <li>We do not store IPTV credentials or any login information.</li>
      </ul>
      <h2 className="mt-8 text-2xl font-semibold text-ink">Updates</h2>
      <p className="mt-4">
        This policy may be updated as the site evolves. Significant changes will
        be reflected in this document with a revised date.
      </p>
    </PageShell>
  );
}
