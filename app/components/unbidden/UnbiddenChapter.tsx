import Link from "next/link"
import { unbiddenChapters } from "@/data/unbidden-chapters"
import { unbiddenStages } from "@/data/unbidden-stages"

export default function UnbiddenChapter({ chapterId }: { chapterId: string }) {
  const chapter = unbiddenChapters.find((c) => c.id === chapterId) ?? unbiddenChapters[0]
  const relatedStages = unbiddenStages.filter((s) => s.chapterIds?.includes(chapter.id))
  const headedSections = chapter.sections.filter((s) => s.heading)

  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 flex items-center justify-between">
        <Link href="/unbidden" className="text-sm text-muted-foreground hover:text-foreground">
          ← Unbidden
        </Link>
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">
          Chapter {chapter.number}
        </span>
      </div>

      <h1 className="mb-6 font-serif text-4xl font-medium text-foreground">{chapter.title}</h1>

      {relatedStages.length > 0 && (
        <div className="mb-10 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
          <span>Related to:</span>
          {relatedStages.map((stage, i) => (
            <span key={stage.id}>
              <Link
                href={`/unbidden/stage/${stage.id}`}
                className="text-primary underline underline-offset-4"
              >
                Stage {stage.id} — {stage.title}
              </Link>
              {i < relatedStages.length - 1 ? "," : ""}
            </span>
          ))}
        </div>
      )}

      {headedSections.length > 1 && (
        <nav aria-label="Sections" className="mb-14 border-y border-border py-4">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {headedSections.map((section) => (
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
      )}

      <article className="space-y-16">
        {chapter.sections.map((section, sectionIndex) => (
          <section key={section.id} id={section.id} className="scroll-mt-20">
            {section.heading && (
              <h2 className="mb-1 font-serif text-2xl font-medium text-foreground">
                {section.heading}
              </h2>
            )}
            {section.subtitle && (
              <p className="mb-6 font-serif text-lg italic text-muted-foreground">
                {section.subtitle}
              </p>
            )}
            <div className={section.heading ? "mt-6 space-y-5" : "space-y-5"}>
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
          </section>
        ))}
      </article>

      {chapter.coda && (
        <p className="mt-16 text-center font-serif text-lg italic text-primary">{chapter.coda}</p>
      )}

      <div className="mt-16 flex items-center justify-between border-t border-border pt-8">
        <Link href="/unbidden" className="text-sm text-muted-foreground hover:text-foreground">
          ← Unbidden
        </Link>
        {relatedStages[0] && (
          <Link
            href={`/unbidden/stage/${relatedStages[0].id}`}
            className="inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Back to Stage {relatedStages[0].id} →
          </Link>
        )}
      </div>
    </div>
  )
}
