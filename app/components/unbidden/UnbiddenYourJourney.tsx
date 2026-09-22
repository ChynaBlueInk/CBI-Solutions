"use client"

import Link from "next/link"
import { Check } from "lucide-react"
import { unbiddenStages } from "@/data/unbidden-stages"
import { useUnbiddenProgress } from "@/hooks/use-unbidden-progress"

export default function UnbiddenYourJourney() {
  const { reflections, currentStage, loaded } = useUnbiddenProgress(unbiddenStages.length)

  const started = unbiddenStages.filter(
    (stage) => reflections[stage.id] || (loaded && stage.id === currentStage)
  )
  const notStartedCount = unbiddenStages.length - started.length

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-2 flex items-center justify-between">
        <Link href="/unbidden" className="text-sm text-muted-foreground hover:text-foreground">
          ← Unbidden
        </Link>
        <h1 className="font-serif text-2xl font-medium text-foreground">Your Unbidden</h1>
        <span className="w-16" aria-hidden="true" />
      </div>
      <p className="mb-8 text-center text-sm text-muted-foreground">
        The story you are building, one stage at a time.
      </p>

      {started.length === 0 ? (
        <p className="px-4 py-10 text-center text-sm text-muted-foreground">
          You have not started yet.{" "}
          <Link href="/unbidden/stage/1" className="text-primary underline underline-offset-4">
            Begin at Stage 1 →
          </Link>
        </p>
      ) : (
        <div className="mb-4 space-y-1">
          {started.map((stage) => {
            const reflection = reflections[stage.id]
            return (
              <Link
                key={stage.id}
                href={`/unbidden/stage/${stage.id}`}
                className={`flex items-start gap-4 rounded-lg px-4 py-3 transition-colors hover:bg-muted ${
                  !reflection ? "border border-primary/40 bg-card" : ""
                }`}
              >
                <span
                  className={`mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full font-serif text-xs ${
                    reflection
                      ? "bg-primary text-primary-foreground"
                      : "border-2 border-primary text-primary"
                  }`}
                >
                  {reflection ? <Check className="h-3.5 w-3.5" /> : stage.id}
                </span>
                <span className="flex-1">
                  <span className="font-serif text-base text-foreground">{stage.title}</span>
                  <span className="mt-0.5 block font-serif text-sm italic text-muted-foreground">
                    {reflection
                      ? `"${reflection.text.slice(0, 100)}${reflection.text.length > 100 ? "…" : ""}"`
                      : "Pick up where you left off"}
                  </span>
                </span>
                <span className="mt-1 whitespace-nowrap text-xs font-medium text-primary">
                  {reflection ? "Edit" : "Continue →"}
                </span>
              </Link>
            )
          })}
        </div>
      )}

      {notStartedCount > 0 && (
        <p className="mb-8 px-4 text-xs text-muted-foreground">
          {notStartedCount} {notStartedCount === 1 ? "stage" : "stages"} not started yet.
        </p>
      )}

      <div className="rounded-xl bg-accent/10 p-6 text-center">
        <p className="font-serif text-base leading-relaxed text-foreground">
          At Stage {unbiddenStages.length}, everything you have written here becomes one page:
          the closing chapter, written by you.
        </p>
      </div>
    </div>
  )
}
