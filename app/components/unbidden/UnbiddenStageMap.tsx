"use client"

import Link from "next/link"
import { Check, ChevronRight } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { unbiddenStages } from "@/data/unbidden-stages"
import { unbiddenChapters } from "@/data/unbidden-chapters"
import { useUnbiddenProgress } from "@/hooks/use-unbidden-progress"

const ACTS = [
  { startId: 1, endId: 3 },
  { startId: 4, endId: 7 },
  { startId: 8, endId: 12 },
]

export default function UnbiddenStageMap() {
  const { reflections, currentStage, completedCount, loaded } = useUnbiddenProgress(
    unbiddenStages.length
  )

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-2 flex items-center justify-between">
        <Link href="/unbidden" className="text-sm text-muted-foreground hover:text-foreground">
          ← Unbidden
        </Link>
        <h1 className="font-serif text-2xl font-medium text-foreground">Your journey</h1>
        <span className="w-24 text-right text-xs text-muted-foreground">
          Stage {loaded ? currentStage : 1} of {unbiddenStages.length}
        </span>
      </div>
      <Progress
        value={loaded ? (completedCount / unbiddenStages.length) * 100 : 0}
        className="mb-8 h-1.5"
      />
      <p className="mb-2 text-sm text-muted-foreground">
        Jump to any stage. The path unfolds best in order, but it is yours to walk.
      </p>
      <p className="mb-10 text-xs text-muted-foreground">
        Three acts, twelve stages, nine chapters. Every stage holds a myth, its context, and one
        woman's voice. Some stages open onto a full chapter as well.
      </p>

      {ACTS.map((act) => {
        const actStages = unbiddenStages.filter((s) => s.id >= act.startId && s.id <= act.endId)
        const actLead = actStages.find((s) => s.act)
        const [actLabel, actName] = actLead?.act ? actLead.act.split(" — ") : [null, null]

        return (
          <section key={act.startId} className="mb-12 last:mb-0">
            <div className="mb-5 border-b border-border pb-3">
              {actLabel && (
                <span className="block text-xs font-semibold uppercase tracking-widest text-primary">
                  {actLabel}
                </span>
              )}
              {actName && (
                <h2 className="font-serif text-2xl font-medium text-foreground">{actName}</h2>
              )}
              {actLead?.actDescription && (
                <p className="mt-1 font-serif text-sm italic text-muted-foreground">
                  {actLead.actDescription}
                </p>
              )}
            </div>

            <div className="space-y-1">
              {actStages.map((stage) => {
                const done = Boolean(reflections[stage.id])
                const isCurrent = loaded && stage.id === currentStage && !done
                const stageChapters = unbiddenChapters.filter((c) =>
                  stage.chapterIds?.includes(c.id)
                )

                return (
                  <div
                    key={stage.id}
                    className={`rounded-lg transition-colors hover:bg-muted ${
                      isCurrent ? "border border-primary/40 bg-card" : ""
                    }`}
                  >
                    <Link
                      href={`/unbidden/stage/${stage.id}`}
                      className="flex items-center gap-4 px-4 py-3"
                    >
                      <span
                        className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full font-serif text-sm ${
                          done
                            ? "bg-primary text-primary-foreground"
                            : isCurrent
                              ? "border-2 border-primary text-primary"
                              : "border border-border text-muted-foreground"
                        }`}
                      >
                        {done ? <Check className="h-4 w-4" /> : stage.id}
                      </span>
                      <span className="flex-1">
                        <span className="font-serif text-base text-foreground">{stage.title}</span>
                        <span className="block text-xs text-muted-foreground">
                          {done ? "Reflection saved" : isCurrent ? "Continue" : "Not started"}
                        </span>
                      </span>
                      <ChevronRight className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
                    </Link>
                    {stageChapters.length > 0 && (
                      <div className="flex flex-wrap gap-x-4 gap-y-1 px-4 pb-3 pl-[3.25rem]">
                        {stageChapters.map((chapter) => (
                          <Link
                            key={chapter.id}
                            href={`/unbidden/chapter/${chapter.id}`}
                            className="text-xs text-primary underline underline-offset-4 hover:text-primary/80"
                          >
                            Chapter {chapter.number}: {chapter.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </section>
        )
      })}
    </div>
  )
}
