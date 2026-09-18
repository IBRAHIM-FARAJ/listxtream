import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { site } from "@/lib/site";
import { ReopenConsentButton } from "@/components/ui/reopen-consent-button";

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
        This privacy policy explains how ListXtream handles data — what we collect, what we do not do, and how we protect your privacy.
      </p>
      <h2 className="mt-8 text-2xl font-semibold text-ink">What we collect</h2>
      <p className="mt-4">
        As a content site, we keep data collection to a minimum. We use Google Analytics to understand which articles are useful, what devices our readers use, and to improve our site's content. This analytics service is only loaded if you explicitly accept it via our cookie consent banner.
      </p>
      <p className="mt-4">
        <ReopenConsentButton />
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
