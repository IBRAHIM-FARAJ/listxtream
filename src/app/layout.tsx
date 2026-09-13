import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { site } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  verification: {
    google: "VvpRj1x1IMm2SYqbpHsBDWqHu2U8cO8c4VKV0fOLhvE",
  },
  title: {
    default: "ListXtream — IPTV & Xtream Streaming Resource",
    template: "%s | ListXtream",
  },
  description:
    "Practical guides, explainers, device tutorials and troubleshooting resources for modern IPTV and Xtream streaming.",
  openGraph: {
    type: "website",
    siteName: "ListXtream",
    title: "ListXtream — IPTV & Xtream Streaming Resource",
    description:
      "Practical guides, explainers, device tutorials and troubleshooting resources for modern IPTV and Xtream streaming.",
    url: site.url,
  },
  twitter: {
    card: "summary",
    site: "@listxtream",
    title: "ListXtream — IPTV & Xtream Streaming Resource",
    description:
      "Practical guides, explainers, device tutorials and troubleshooting resources for modern IPTV and Xtream streaming.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        description: site.description,
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${site.url}/search?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: site.name,
        url: site.url,
        description: site.description,
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-page text-ink">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QZ26RB371B"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QZ26RB371B');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
