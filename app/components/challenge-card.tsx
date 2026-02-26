// app/components/challenge-card.tsx
"use client"

import {useEffect,useState}from "react"
import type {Challenge}from "../../types/challenge"

type OutputSubmissionsProps={
  challengeMonth:string;
};

const OutputSubmissions=({challengeMonth}:OutputSubmissionsProps)=>{
  const[entry,setEntry]=useState("")
  const[savedOutputs,setSavedOutputs]=useState<string[]>([])

  const storageKey=`challengeOutputs-${challengeMonth.toLowerCase()}`

  useEffect(()=>{
    if(typeof window==="undefined"){return}
    try{
      const raw=window.localStorage.getItem(storageKey)
      if(raw){
        const parsed=JSON.parse(raw)
        if(Array.isArray(parsed)){
          setSavedOutputs(parsed as string[])
        }
      }
    }catch{
      // ignore
    }
  },[storageKey])

  useEffect(()=>{
    if(typeof window==="undefined"){return}
    try{
      window.localStorage.setItem(storageKey,JSON.stringify(savedOutputs))
    }catch{
      // ignore
    }
  },[savedOutputs,storageKey])

  const handleAdd=()=>{
    const trimmed=entry.trim()
    if(!trimmed){return}
    setSavedOutputs((prev)=>[...prev,trimmed])
    setEntry("")
  }

  const handleDelete=(idx:number)=>{
    setSavedOutputs((prev)=>prev.filter((_,i)=>i!==idx))
  }

  return(
    <section className="mt-4">
      <div className="space-y-3">
        <textarea
          className="w-full min-h-[80px] rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          placeholder="Paste a link, describe what you created, or jot quick notes about your output..."
          value={entry}
          onChange={(e)=>setEntry(e.target.value)}
        />
        <button
          type="button"
          onClick={handleAdd}
          className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Save example
        </button>
      </div>

      {savedOutputs.length>0&&(
        <div className="mt-4 space-y-2">
          <h4 className="text-sm font-semibold text-foreground">
            Saved outputs
          </h4>
          <ul className="space-y-2">
            {savedOutputs.map((item,idx)=>(
              <li
                key={idx}
                className="flex items-start justify-between gap-3 rounded-md border border-border bg-card px-3 py-2"
              >
                <p className="text-sm text-foreground whitespace-pre-wrap">
                  {item}
                </p>
                <button
                  type="button"
                  onClick={()=>handleDelete(idx)}
                  className="text-xs text-muted-foreground hover:text-destructive"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}

function copyToClipboard(text:string){
  if(typeof navigator==="undefined"){return}
  navigator.clipboard.writeText(text).catch(()=>{})
}

export default function ChallengeCard({challenge}:{challenge:Challenge}){
  const submissionsEnabled=false

  return(
    <article className="space-y-4">
      {/* Header */}
      <section className="bg-card border border-border rounded-lg p-6">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance">
          {challenge.month} Challenge
        </h1>
        <p className="text-lg text-muted-foreground">
          {challenge.title}
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          {challenge.theme}
        </p>
      </section>

      {/* Collapsible sections */}
      <div className="space-y-3">

        {/* Intro */}
        <details open className="bg-card border border-border rounded-lg">
          <summary className="cursor-pointer select-none px-6 py-4 font-semibold text-foreground">
            What this challenge is about
          </summary>
          <div className="px-6 pb-6 pt-1 space-y-3">
            {challenge.intro.map((paragraph,idx)=>(
              <p key={idx} className="leading-relaxed text-foreground">
                {paragraph}
              </p>
            ))}
            <p className="text-sm text-muted-foreground italic pt-2 border-t border-border">
              This is optional, flexible, and low-pressure. Complete it at your own pace.
            </p>
          </div>
        </details>

        {/* How it works */}
        <details className="bg-card border border-border rounded-lg">
          <summary className="cursor-pointer select-none px-6 py-4 font-semibold text-foreground">
            How this challenge works
          </summary>
          <div className="px-6 pb-6 pt-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                  Main Tools
                </h3>
                <p className="text-foreground">
                  {challenge.tools.join(", ")}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                  Total Time
                </h3>
                <p className="text-foreground">
                  {challenge.timeCommitment}
                </p>
              </div>

              <div className="sm:col-span-2">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                  Project
                </h3>
                <p className="text-foreground">
                  {challenge.project}
                </p>
              </div>
            </div>
          </div>
        </details>

        {/* Outputs */}
        <details className="bg-card border border-border rounded-lg">
          <summary className="cursor-pointer select-none px-6 py-4 font-semibold text-foreground">
            What you’ll walk away with
          </summary>
          <div className="px-6 pb-6 pt-1">
            <ul className="space-y-2 mt-4">
              {challenge.outputs.map((output,idx)=>(
                <li key={idx} className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-foreground">
                    {output}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </details>

        {/* Weekly breakdown */}
        <details open className="bg-card border border-border rounded-lg">
          <summary className="cursor-pointer select-none px-6 py-4 font-semibold text-foreground">
            Weekly breakdown
          </summary>
          <div className="px-6 pb-6 pt-1">
            <div className="space-y-3 mt-4">
              {challenge.weeks.map((week)=>(
                <details
                  key={`${challenge.id}-week-${week.number}`}
                  className="rounded-lg border border-border bg-background"
                >
                  <summary className="cursor-pointer select-none px-4 py-3">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-sm font-semibold text-foreground">
                          Week {week.number}: {week.title}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {week.purpose}
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground whitespace-nowrap mt-0.5">
                        {week.tools}
                      </div>
                    </div>
                  </summary>

                  <div className="px-4 pb-4 pt-1 border-t border-border">
                    {week.miniOutput&&(
                      <p className="text-sm text-muted-foreground mt-3">
                        <span className="font-semibold text-foreground">Mini output:</span>{" "}
                        {week.miniOutput}
                      </p>
                    )}

                    <div className="mt-3 flex items-center justify-between gap-3">
                      <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                        Prompt
                      </h4>
                      <button
                        type="button"
                        onClick={()=>copyToClipboard(week.prompt)}
                        className="text-xs px-3 py-1.5 rounded-md bg-muted hover:bg-accent transition-colors"
                      >
                        Copy prompt
                      </button>
                    </div>

                    <pre className="mt-2 bg-muted/50 p-4 rounded border border-border overflow-x-auto whitespace-pre-wrap">
                      <code className="text-sm text-foreground font-mono">
                        {week.prompt}
                      </code>
                    </pre>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </details>

        {/* Side quests */}
        {challenge.sideQuests&&challenge.sideQuests.length>0&&(
          <details className="bg-card border border-border rounded-lg">
            <summary className="cursor-pointer select-none px-6 py-4 font-semibold text-foreground">
              Optional side quests
            </summary>
            <div className="px-6 pb-6 pt-1">
              <ul className="space-y-3 mt-4">
                {challenge.sideQuests.map((quest,idx)=>(
                  <li key={idx} className="bg-accent/20 border border-accent/40 rounded-lg p-4">
                    <p className="font-medium text-foreground mb-1">
                      {quest.title}
                    </p>
                    <p className="text-sm text-muted-foreground mb-2">
                      {quest.description}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      <strong>Tool:</strong> {quest.tool}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </details>
        )}

       {/* Output submissions */}
{false && (
  <details className="bg-card border border-border rounded-lg">
    <summary className="cursor-pointer select-none px-6 py-4 font-semibold text-foreground">
      Output submissions
    </summary>
    <div className="px-6 pb-6 pt-1">
      {submissionsEnabled?(
        <>
          <p className="text-sm text-muted-foreground mt-4">
            Capture examples of your work for the {challenge.month} challenge. These stay in your browser only.
          </p>
          <OutputSubmissions challengeMonth={challenge.month}/>
        </>
      ):(
        <div className="mt-4 rounded-lg border border-border bg-muted/40 p-5">
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm font-semibold text-foreground">
              Submissions are currently closed
            </p>
            <span className="text-xs rounded-full bg-gray-200 text-gray-700 px-2 py-1">
              Coming soon
            </span>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Once more people are doing the challenges, you’ll be able to share links or uploads here and showcase results.
          </p>
        </div>
      )}
    </div>
  </details>
)}

        {/* Closing note */}
        <details className="bg-card border border-border rounded-lg">
          <summary className="cursor-pointer select-none px-6 py-4 font-semibold text-foreground">
            Closing note
          </summary>
          <div className="px-6 pb-6 pt-1">
            <p className="text-foreground text-base leading-relaxed italic mt-4">
              {challenge.closingNote}
            </p>
          </div>
        </details>

      </div>
    </article>
  )
}