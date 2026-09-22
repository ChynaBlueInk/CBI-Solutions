import Link from "next/link"
import { unbiddenIntro } from "@/data/unbidden-intro"

export default function UnbiddenIntroduction() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 flex items-center justify-between">
        <Link href="/unbidden" className="text-sm text-muted-foreground hover:text-foreground">
          ← Unbidden
        </Link>
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">
          Before you begin
        </span>
      </div>

      <nav aria-label="Sections" className="mb-14 border-y border-border py-4">
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {unbiddenIntro.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="text-xs text-muted-foreground hover:text-primary"
              >
                {section.heading}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <article className="space-y-16">
        {unbiddenIntro.map((section, sectionIndex) => (
          <section key={section.id} id={section.id} className="scroll-mt-20">
            <h2 className="mb-1 font-serif text-2xl font-medium text-foreground">
              {section.heading}
            </h2>
            {section.subtitle && (
              <p className="mb-6 font-serif text-lg italic text-muted-foreground">
                {section.subtitle}
              </p>
            )}
            <div className={section.subtitle ? "space-y-5" : "mt-6 space-y-5"}>
              {section.paragraphs.map((paragraph, i) => (
                <p
                  key={i}
                  className={
                    sectionIndex === 0 && i === 0
                      ? "font-serif text-xl leading-relaxed text-foreground"
                      : "font-serif text-base leading-relaxed text-foreground/90"
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>
            {section.refrain && (
              <div className="mt-10 space-y-1 text-center">
                {section.refrain.map((line, i) => (
                  <p
                    key={i}
                    className="font-serif text-xl font-medium tracking-wide text-primary"
                  >
                    {line}
                  </p>
                ))}
              </div>
            )}
            {section.coda && (
              <p className="mt-6 text-center font-serif text-base italic text-muted-foreground">
                {section.coda}
              </p>
            )}
            {section.signature && (
              <p className="mt-8 font-serif italic text-base text-muted-foreground">
                {section.signature.map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </p>
            )}
          </section>
        ))}
      </article>

      <div className="mt-16 flex items-center justify-between border-t border-border pt-8">
        <Link href="/unbidden" className="text-sm text-muted-foreground hover:text-foreground">
          ← Unbidden
        </Link>
        <Link
          href="/unbidden/stage/1"
          className="inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Continue to Stage 1 →
        </Link>
      </div>
    </div>
  )
}
