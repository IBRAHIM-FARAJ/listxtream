import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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
  metadataBase: new URL("https://listxtream.com"),
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
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-page text-ink">
        {children}
      </body>
    </html>
  );
}
