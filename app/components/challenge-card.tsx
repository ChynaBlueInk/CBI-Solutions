// app/components/challenge-card.tsx
"use client"

import {useEffect,useState}from "react"
import type {Challenge}from "../../types/challenge"

type OutputSubmissionsProps={
  challengeMonth:string;
};

const OutputSubmissions=({challengeMonth}:OutputSubmissionsProps)=>{
  const[entry,setEntry]=useState("");
  const[savedOutputs,setSavedOutputs]=useState<string[]>([]);

  const storageKey=`challengeOutputs-${challengeMonth.toLowerCase()}`;

  useEffect(()=>{
    if(typeof window==="undefined"){return;}
    try{
      const raw=window.localStorage.getItem(storageKey);
      if(raw){
        const parsed=JSON.parse(raw);
        if(Array.isArray(parsed)){
          setSavedOutputs(parsed as string[]);
        }
      }
    }catch{
      // ignore localStorage errors
    }
  },[storageKey]);

  useEffect(()=>{
    if(typeof window==="undefined"){return;}
    try{
      window.localStorage.setItem(storageKey,JSON.stringify(savedOutputs));
    }catch{
      // ignore localStorage errors
    }
  },[savedOutputs,storageKey]);

  const handleAdd=()=>{
    const trimmed=entry.trim();
    if(!trimmed){return;}
    setSavedOutputs((prev)=>[...prev,trimmed]);
    setEntry("");
  };

  const handleDelete=(idx:number)=>{
    setSavedOutputs((prev)=>prev.filter((_,i)=>i!==idx));
  };

  return(
    <section className="mt-8">
      <h3 className="text-lg font-semibold text-foreground mb-2">
        Output Submissions
      </h3>
      <p className="text-sm text-muted-foreground mb-4">
        Capture examples of your work for the {challengeMonth} challenge. These stay in your browser only
        (local to this device).
      </p>

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
  );
};

export default function ChallengeCard({challenge}:{challenge:Challenge}){
  return(
    <article className="space-y-8">
      {/* Page Title */}
      <section>
        <h1 className="text-4xl font-bold text-foreground mb-2 text-balance">
          {challenge.month} Challenge
        </h1>
        <p className="text-lg text-muted-foreground">
          {challenge.title}
        </p>
      </section>

      {/* Intro Blurb */}
      <section className="bg-card border border-border rounded-lg p-6 space-y-4">
        <h2 className="text-lg font-semibold text-foreground">
          What This Challenge Is About
        </h2>
        <div className="text-foreground space-y-3">
          {challenge.intro.map((paragraph,idx)=>(
            <p key={idx} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
        <p className="text-sm text-muted-foreground italic pt-2 border-t border-border">
          This is optional, flexible, and low-pressure. Complete it at your own pace.
        </p>
      </section>

      {/* How This Challenge Works */}
      <section>
        <h2 className="text-xl font-semibold text-foreground mb-4">
          How This Challenge Works
        </h2>
        <div className="bg-card border border-border rounded-lg p-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                Theme
              </h3>
              <p className="text-foreground">
                {challenge.theme}
              </p>
            </div>
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
                Project
              </h3>
              <p className="text-foreground">
                {challenge.project}
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
          </div>
        </div>
      </section>

      {/* What You'll Walk Away With */}
      <section>
        <h2 className="text-xl font-semibold text-foreground mb-4">
          What You'll Walk Away With
        </h2>
        <ul className="space-y-2">
          {challenge.outputs.map((output,idx)=>(
            <li key={idx} className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span className="text-foreground">
                {output}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Weekly Breakdown */}
      <section>
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Weekly Breakdown
        </h2>
        <div className="space-y-6">
          {challenge.weeks.map((week,idx)=>(
            <div key={idx} className="border-l-4 border-primary pl-6 py-2">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Week {week.number}: {week.title}
              </h3>
              <p className="text-foreground mb-4">
                {week.purpose}
              </p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                  Tools
                </h4>
                <p className="text-foreground">
                  {week.tools}
                </p>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                  Prompt
                </h4>
                <pre className="bg-muted p-4 rounded border border-border overflow-x-auto">
                  <code className="text-sm text-foreground whitespace-pre-wrap font-mono">
                    {week.prompt}
                  </code>
                </pre>
              </div>

              {week.miniOutput&&(
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                    Mini Output
                  </h4>
                  <p className="text-foreground">
                    {week.miniOutput}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Optional Side Quests */}
      {challenge.sideQuests&&challenge.sideQuests.length>0&&(
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Optional Side Quests
          </h2>
          <ul className="space-y-3">
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
        </section>
      )}

      {/* Time Commitment */}
      <section className="bg-primary/5 border border-primary/20 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-foreground mb-2">
          Time Commitment
        </h3>
        <p className="text-foreground">
          {challenge.timeCommitment} per week
        </p>
      </section>

      {/* Outputs Submission */}
      <OutputSubmissions challengeMonth={challenge.month}/>

      {/* Closing Note */}
      <section className="border-t border-border pt-6">
        <p className="text-foreground text-base leading-relaxed italic">
          {challenge.closingNote}
        </p>
      </section>
    </article>
  );
}
