import { Container } from "@/components/layout/container";
import { HubHeader } from "@/components/layout/hub";
import { Input } from "@/components/ui/input";
import { getGlossary } from "@/lib/glossary";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function GlossaryPage() {
  const terms = getGlossary();
  const letters = [...new Set(terms.map((t) => t.letter))].sort();

  return (
    <>
      <HubHeader
        eyebrow="Reference"
        title="IPTV & Xtream Glossary"
        description="Plain-language definitions of the terms you will meet while setting up IPTV and Xtream."
      />
      <Container className="pb-20">
        <form action="/search" className="mt-8 max-w-md">
          <Input
            name="q"
            placeholder="Search terminology..."
            aria-label="Search the glossary"
          />
        </form>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {alphabet.map((letter) => (
            <a
              key={letter}
              href={letters.includes(letter) ? `#${letter}` : undefined}
              aria-disabled={!letters.includes(letter)}
              className={`inline-flex h-8 w-8 items-center justify-center rounded-[8px] text-sm font-medium ${
                letters.includes(letter)
                  ? "bg-accent-soft text-accent-dark hover:bg-accent hover:text-white"
                  : "cursor-default text-soft"
              }`}
            >
              {letter}
            </a>
          ))}
        </div>

        {letters.map((letter) => {
          const group = terms.filter((t) => t.letter === letter);
          return (
            <section key={letter} id={letter} className="mt-10 scroll-mt-24">
              <h2 className="border-b border-border pb-2 text-2xl font-bold tracking-tight text-ink">
                {letter}
              </h2>
              <dl className="mt-4">
                {group.map((t) => (
                  <div
                    key={t.slug}
                    className="border-b border-border py-4 last:border-0"
                  >
                    <dt>
                      <a
                        href={`/glossary/${t.slug}`}
                        className="text-lg font-semibold text-ink hover:text-accent"
                      >
                        {t.term}
                      </a>
                    </dt>
                    <dd className="mt-1 text-muted">{t.definition}</dd>
                  </div>
                ))}
              </dl>
            </section>
          );
        })}
      </Container>
    </>
  );
}
