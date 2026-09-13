import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "ListXtream is an independent editorial site, not affiliated with any IPTV service provider, player developer, or streaming platform.",
  alternates: { canonical: `${site.url}/disclaimer` },
  openGraph: {
    title: "Disclaimer",
    description:
      "ListXtream is an independent editorial site, not affiliated with any IPTV service provider, player developer, or streaming platform.",
    url: `${site.url}/disclaimer`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Disclaimer — ListXtream",
    description:
      "ListXtream is an independent editorial site, not affiliated with any IPTV service provider, player developer, or streaming platform.",
  },
};

export default function DisclaimerPage() {
  return (
    <PageShell title="Disclaimer">
      <p>
        ListXtream is an independent editorial resource. We are not affiliated
        with, endorsed by, or sponsored by any IPTV service provider, player
        developer, or streaming platform.
      </p>
      <h2 className="mt-8 text-2xl font-semibold text-ink">Accuracy</h2>
      <p className="mt-4">
        Technology and provider configurations change often. We aim to keep
        information current, but we cannot guarantee that every detail will
        apply to every provider or device. Always follow the official setup
        instructions you received from your service.
      </p>
      <h2 className="mt-8 text-2xl font-semibold text-ink">No legal advice</h2>
      <p className="mt-4">
        Content on this site is provided for general information only and is not
        legal advice. Streaming laws vary by region; you are responsible for
        understanding the rules that apply where you live.
      </p>
    </PageShell>
  );
}
