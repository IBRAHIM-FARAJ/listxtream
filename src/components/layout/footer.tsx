import Link from "next/link";
import { Container } from "./container";
import { footerNav } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-white">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <p className="text-lg font-bold tracking-tight text-ink">
              LISTXTREAM
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              An editorial resource for IPTV, Xtream streaming technology,
              device guides, apps, and troubleshooting.
            </p>
          </div>
          {footerNav.map((col) => (
            <div key={col.heading}>
              <p className="text-sm font-semibold text-ink">{col.heading}</p>
              <ul className="mt-3 space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-border pt-6 text-xs text-soft">
          <p>
            © {new Date().getFullYear()} ListXtream. Educational content only —
            not affiliated with any IPTV service provider.
          </p>
        </div>
      </Container>
    </footer>
  );
}
