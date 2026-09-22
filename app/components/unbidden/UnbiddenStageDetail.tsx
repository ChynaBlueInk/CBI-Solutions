"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { unbiddenStages } from "@/data/unbidden-stages"
import { unbiddenChapters } from "@/data/unbidden-chapters"
import { useUnbiddenProgress } from "@/hooks/use-unbidden-progress"

export default function UnbiddenStageDetail({ stageId }: { stageId: number }) {
  const stage = unbiddenStages.find((s) => s.id === stageId) ?? unbiddenStages[0]
  const relatedChapters = unbiddenChapters.filter((c) => stage.chapterIds?.includes(c.id))
  const { reflections, saveReflection, loaded } = useUnbiddenProgress(unbiddenStages.length)
  const [draft, setDraft] = useState("")
  const [savedJustNow, setSavedJustNow] = useState(false)

  useEffect(() => {
    setDraft(reflections[stage.id]?.text ?? "")
  }, [loaded, stage.id, reflections])

  const prevStage = unbiddenStages.find((s) => s.id === stage.id - 1)
  const nextStage = unbiddenStages.find((s) => s.id === stage.id + 1)

  function handleSave() {
    saveReflection(stage.id, draft)
    setSavedJustNow(true)
    setTimeout(() => setSavedJustNow(false), 2000)
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-center justify-between">
        <Link href="/unbidden/journey" className="text-sm text-muted-foreground hover:text-foreground">
          ← All stages
        </Link>
        <span className="text-xs text-muted-foreground">
          Stage {stage.id} of {unbiddenStages.length}
        </span>
      </div>
      <Progress value={(stage.id / unbiddenStages.length) * 100} className="mb-8 h-1.5" />

      {stage.act && (
        <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-primary">
          {stage.act}
        </span>
      )}
      <h1 className="mb-1 font-serif text-4xl font-medium text-foreground">{stage.title}</h1>
      {stage.actDescription && (
        <p className="mt-2 font-serif text-base italic text-muted-foreground">
          {stage.actDescription}
        </p>
      )}

      {relatedChapters.length > 0 && (
        <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
          <span>From the chapters:</span>
          {relatedChapters.map((chapter, i) => (
            <span key={chapter.id}>
              <Link
                href={`/unbidden/chapter/${chapter.id}`}
                className="text-primary underline underline-offset-4"
              >
                {chapter.title}
              </Link>
              {i < relatedChapters.length - 1 ? "," : ""}
            </span>
          ))}
        </div>
      )}

      <Tabs defaultValue="unbidden" className="mt-8">
        <TabsList>
          <TabsTrigger value="unbidden">The Unbidden</TabsTrigger>
          <TabsTrigger value="truth">The Universal Truth</TabsTrigger>
          <TabsTrigger value="voice">My Voice</TabsTrigger>
          <TabsTrigger value="yourvoice">Your Voice</TabsTrigger>
        </TabsList>

        <TabsContent value="unbidden">
          <div className="space-y-4 rounded-xl bg-accent/10 p-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-foreground/60">
              Mythology
            </span>
            <div className="space-y-4">
              {stage.unbidden.map((paragraph, i) => (
                <p key={i} className="font-serif text-lg italic leading-relaxed text-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="truth">
          <div className="space-y-4 rounded-xl border border-border bg-card p-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Context
            </span>
            <div className="space-y-4">
              {stage.universalTruth.map((paragraph, i) => (
                <p key={i} className="text-base leading-relaxed text-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
            {relatedChapters.length > 0 && (
              <div className="flex flex-wrap gap-3 pt-2">
                {relatedChapters.map((chapter) => (
                  <Link
                    key={chapter.id}
                    href={`/unbidden/chapter/${chapter.id}`}
                    className="text-sm font-medium text-primary underline underline-offset-4"
                  >
                    Read the full chapter: {chapter.title} →
                  </Link>
                ))}
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="voice">
          <div className="space-y-4 rounded-xl border border-border bg-card p-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              My voice
            </span>
            <div className="space-y-4">
              {stage.myVoice.map((paragraph, i) => (
                <p key={i} className="text-base leading-relaxed text-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="yourvoice">
          <div className="space-y-4 rounded-xl border border-border bg-card p-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Your voice
            </span>
            <p className="font-serif text-xl text-foreground">{stage.prompt}</p>
            <Textarea
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Write as much or as little as you like..."
              className="min-h-[140px]"
            />
            <div className="flex items-center gap-4">
              <Button onClick={handleSave}>{savedJustNow ? "Saved" : "Save your reflection"}</Button>
              <span className="text-xs text-muted-foreground">
                Saved on this device only, for now. Only you can see this.
              </span>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {stage.authorNote && stage.authorNote.length > 0 && (
        <div className="mt-10 space-y-4 rounded-xl border border-primary/20 bg-primary/5 p-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            A note from the author
          </span>
          <div className="space-y-4">
            {stage.authorNote.map((paragraph, i) => (
              <p key={i} className="font-serif text-base italic leading-relaxed text-foreground/90">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      )}

      {stage.epilogue && stage.epilogue.length > 0 && (
        <div className="mt-10 space-y-2 py-8 text-center">
          {stage.epilogue.map((line, i) => (
            <p key={i} className="font-serif text-xl italic leading-relaxed text-primary">
              {line}
            </p>
          ))}
        </div>
      )}

      <div className="mt-10 flex items-center justify-between border-t border-border pt-6">
        {prevStage ? (
          <Link
            href={`/unbidden/stage/${prevStage.id}`}
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            ← Stage {prevStage.id}
          </Link>
        ) : (
          <span />
        )}
        <span className="hidden text-xs text-muted-foreground sm:inline">
          Your reflections build your own closing chapter at Stage {unbiddenStages.length}.
        </span>
        {nextStage ? (
          <Link
            href={`/unbidden/stage/${nextStage.id}`}
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Stage {nextStage.id} →
          </Link>
        ) : (
          <Link href="/unbidden/your-story" className="text-sm font-medium text-primary">
            See your closing chapter →
          </Link>
        )}
      </div>
    </div>
  )
}
