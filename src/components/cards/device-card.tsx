import Link from "next/link";

export function DeviceCard({
  name,
  href,
  description,
}: {
  name: string;
  href: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-[14px] border border-border bg-surface p-6 transition-all hover:border-accent/40 hover:shadow-card"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-[12px] bg-accent-soft text-accent-dark">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <rect
            x="3"
            y="4"
            width="18"
            height="13"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M8 21h8M12 17v4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <h3 className="mt-4 text-lg font-semibold tracking-tight text-ink group-hover:text-accent">
        {name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
    </Link>
  );
}
