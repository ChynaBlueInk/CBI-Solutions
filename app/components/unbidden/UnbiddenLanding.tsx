import Link from "next/link"
import { unbiddenStages } from "@/data/unbidden-stages"
import { unbiddenChapters } from "@/data/unbidden-chapters"
import UnbiddenJourneyWheel from "@/app/components/unbidden/UnbiddenJourneyWheel"

const ACTS = [
  { startId: 1, endId: 3 },
  { startId: 4, endId: 7 },
  { startId: 8, endId: 12 },
]

export default function UnbiddenLanding() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-16 grid items-center gap-12 md:grid-cols-2">
        <div className="space-y-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            An interactive journey
          </span>
          <h1 className="font-serif text-5xl font-medium text-foreground sm:text-6xl">
            Unbidden
          </h1>
          <p className="font-serif text-xl italic text-muted-foreground">
            A woman&apos;s life, chosen.
          </p>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground">
            Three acts. Twelve stages. Nine chapters that go deeper into the research and the
            stories behind them. In each stage, an old story finds a new woman to visit, a piece
            of history explains why it still matters, and one woman living it now tells you what
            it cost her. Read all three. Then write your own.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2">
            <Link
              href="/unbidden/introduction"
              className="inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Begin the journey
            </Link>
            <Link
              href="/unbidden/journey"
              className="text-sm font-medium text-foreground underline underline-offset-4"
            >
              See the full map
            </Link>
            <Link
              href="/unbidden/your-story"
              className="text-sm font-medium text-foreground underline underline-offset-4"
            >
              Continue your journey
            </Link>
          </div>
          <p className="pt-4 text-xs text-muted-foreground">
            Built on Joseph Campbell&apos;s Hero&apos;s Journey, expanded for the story women
            actually live.
          </p>
        </div>
        <div className="hidden items-center justify-center md:flex">
          <UnbiddenJourneyWheel />
        </div>
      </div>

      <div className="mb-16 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 border-y border-border py-6 text-center">
        <div>
          <span className="block font-serif text-3xl text-foreground">3</span>
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Acts</span>
        </div>
        <div>
          <span className="block font-serif text-3xl text-foreground">12</span>
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Stages</span>
        </div>
        <div>
          <span className="block font-serif text-3xl text-foreground">9</span>
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Chapters</span>
        </div>
      </div>

      <section className="mb-20">
        <div className="mb-10 text-center">
          <h2 className="font-serif text-3xl font-medium text-foreground">The journey</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
            Follow the whole arc in order, or jump straight to whichever stage calls to you.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {ACTS.map((act) => {
            const actStages = unbiddenStages.filter((s) => s.id >= act.startId && s.id <= act.endId)
            const actLead = actStages.find((s) => s.act)
            const [actLabel, actName] = actLead?.act ? actLead.act.split(" — ") : [null, null]

            return (
              <div
                key={act.startId}
                className="flex flex-col rounded-xl border border-border bg-card p-6"
              >
                <div className="mb-4">
                  {actLabel && (
                    <span className="block text-xs font-semibold uppercase tracking-widest text-primary">
                      {actLabel}
                    </span>
                  )}
                  {actName && (
                    <h3 className="font-serif text-xl font-medium text-foreground">{actName}</h3>
                  )}
                  {actLead?.actDescription && (
                    <p className="mt-1 font-serif text-sm italic text-muted-foreground">
                      {actLead.actDescription}
                    </p>
                  )}
                </div>
                <ul className="space-y-2.5">
                  {actStages.map((stage) => (
                    <li key={stage.id}>
                      <Link
                        href={`/unbidden/stage/${stage.id}`}
                        className="group flex items-baseline gap-3 text-sm text-foreground/90 hover:text-primary"
                      >
                        <span className="font-serif text-muted-foreground group-hover:text-primary">
                          {stage.id}
                        </span>
                        <span>{stage.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/unbidden/journey"
            className="text-sm font-medium text-primary underline underline-offset-4"
          >
            See the full map with your progress →
          </Link>
        </div>
      </section>

      <section>
        <div className="mb-10 text-center">
          <h2 className="font-serif text-3xl font-medium text-foreground">The chapters</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
            Nine standalone chapters that go deeper into the research, the history, and the
            women&apos;s stories behind the journey.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {unbiddenChapters.map((chapter) => {
            const relatedStages = unbiddenStages.filter((s) => s.chapterIds?.includes(chapter.id))
            return (
              <Link
                key={chapter.id}
                href={`/unbidden/chapter/${chapter.id}`}
                className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                  Chapter {chapter.number}
                </span>
                <h4 className="mt-1 font-serif text-base font-medium text-foreground">
                  {chapter.title}
                </h4>
                {relatedStages.length > 0 && (
                  <span className="mt-1 block text-xs text-muted-foreground">
                    Related to Stage {relatedStages.map((s) => s.id).join(", ")}
                  </span>
                )}
              </Link>
            )
          })}
        </div>
      </section>
    </div>
  )
}
