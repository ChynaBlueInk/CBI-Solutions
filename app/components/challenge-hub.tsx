// app/components/challenge-hub.tsx
"use client"

import {useState}from "react"
import ChallengeCard from "./challenge-card"
import {challenges}from "../../data/challenges"
import type {Challenge}from "../../types/challenge"

export default function ChallengeHub(){
  const[firstSelectedId]=useState<string|null>(challenges[0]?.id||null)
  const[selectedMonth,setSelectedMonth]=useState<string|null>(firstSelectedId)
  const selectedChallenge:Challenge|undefined=challenges.find((c)=>c.id===selectedMonth)

  return(
    <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Challenge List */}
        <div className="lg:col-span-1">
          <div className="sticky top-8">
            <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">
              All Challenges
            </h2>
            <div className="space-y-2">
              {challenges.map((challenge)=>(
                <button
                  key={challenge.id}
                  onClick={()=>setSelectedMonth(challenge.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    selectedMonth===challenge.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground hover:bg-accent"
                  }`}
                >
                  <div className="text-sm font-medium">
                    {challenge.month}
                  </div>
                  <div
                    className={`text-xs ${
                      selectedMonth===challenge.id
                        ? "opacity-90"
                        : "text-muted-foreground"
                    }`}
                  >
                    {challenge.title}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Challenge Detail */}
        <div className="lg:col-span-2">
          {selectedChallenge&&(
            <ChallengeCard challenge={selectedChallenge}/>
          )}
        </div>
      </div>
    </div>
  )
}
