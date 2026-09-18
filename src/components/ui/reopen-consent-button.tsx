"use client";

export function ReopenConsentButton() {
  return (
    <button
      onClick={() => {
        if (typeof window !== "undefined" && (window as any).reopenCookieConsent) {
          (window as any).reopenCookieConsent();
        }
      }}
      className="text-accent hover:underline text-sm font-medium"
    >
      Change Analytics Preferences
    </button>
  );
}
