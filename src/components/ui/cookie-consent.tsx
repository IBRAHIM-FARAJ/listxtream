"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

export function CookieConsent() {
  const [consent, setConsent] = useState<"accepted" | "rejected" | null>(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("analytics-consent");
    if (stored === "accepted" || stored === "rejected") {
      setConsent(stored);
    } else {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("analytics-consent", "accepted");
    setConsent("accepted");
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem("analytics-consent", "rejected");
    setConsent("rejected");
    setShowBanner(false);
  };

  const reopen = () => {
    setShowBanner(true);
  };

  // Expose reopen function to window so other pages (like privacy) can trigger it
  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as any).reopenCookieConsent = reopen;
    }
  }, []);

  return (
    <>
      {consent === "accepted" && (
        <>
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
        </>
      )}

      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-page p-4 shadow-lg sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-ink max-w-3xl">
            <p>
              We use privacy-conscious analytics (Google Analytics) to understand which articles are useful and improve our content.
              We do not sell your data or build advertising profiles.
            </p>
          </div>
          <div className="flex shrink-0 gap-3">
            <button
              onClick={handleReject}
              className="rounded-[10px] border border-border px-4 py-2 text-sm font-medium text-soft transition-colors hover:bg-surface hover:text-ink"
            >
              Reject
            </button>
            <button
              onClick={handleAccept}
              className="rounded-[10px] bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-dark"
            >
              Accept
            </button>
          </div>
        </div>
      )}
    </>
  );
}
