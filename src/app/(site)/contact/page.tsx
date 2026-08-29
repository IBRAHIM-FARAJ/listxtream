import { PageShell } from "@/components/layout/page-shell";

export default function ContactPage() {
  return (
    <PageShell title="Contact">
      <p>
        We welcome corrections, suggestions, and editorial feedback. To keep
        things organized and reduce spam, please use the form below rather than
        emailing directly.
      </p>
      <form className="mt-8 space-y-4 rounded-[14px] border border-border bg-surface p-6">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-ink">
            Name
          </label>
          <input
            id="name"
            type="text"
            className="w-full rounded-[10px] border border-border bg-white px-3.5 py-2.5 text-sm focus:border-accent focus:outline-none"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-ink">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full rounded-[10px] border border-border bg-white px-3.5 py-2.5 text-sm focus:border-accent focus:outline-none"
            required
          />
        </div>
        <div>
          <label htmlFor="msg" className="mb-1 block text-sm font-medium text-ink">
            Message
          </label>
          <textarea
            id="msg"
            rows={5}
            className="w-full rounded-[10px] border border-border bg-white px-3.5 py-2.5 text-sm focus:border-accent focus:outline-none"
            required
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-[10px] bg-accent px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-dark"
        >
          Send message
        </button>
        <p className="text-xs text-soft">
          This form is a placeholder and does not submit anywhere yet.
        </p>
      </form>
    </PageShell>
  );
}
