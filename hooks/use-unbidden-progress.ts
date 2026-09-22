"use client"

import { useCallback, useEffect, useState } from "react"
import type { UnbiddenReflection } from "@/types/unbidden"

const STORAGE_KEY = "unbidden-journey-v1"

type ReflectionMap = Record<number, UnbiddenReflection>

function loadReflections(): ReflectionMap {
  if (typeof window === "undefined") return {}
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as ReflectionMap) : {}
  } catch {
    return {}
  }
}

// Tracks a reader's Unbidden reflections in this browser only, for now.
// The shape here (a map of stageId -> reflection) is deliberately close to
// what a future accounts + database version would store per user, so
// swapping the storage layer later shouldn't need to touch the components
// that call this hook.
export function useUnbiddenProgress(totalStages: number) {
  const [reflections, setReflections] = useState<ReflectionMap>({})
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setReflections(loadReflections())
    setLoaded(true)
  }, [])

  const saveReflection = useCallback((stageId: number, text: string) => {
    setReflections((prev) => {
      const next: ReflectionMap = {
        ...prev,
        [stageId]: { stageId, text, updatedAt: new Date().toISOString() },
      }
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
      } catch {
        // localStorage unavailable (private browsing, storage full, etc).
        // The reflection still holds in memory for the rest of this visit.
      }
      return next
    })
  }, [])

  const completedCount = Object.keys(reflections).length
  const currentStage = Math.min(completedCount + 1, totalStages)

  return { reflections, saveReflection, completedCount, currentStage, loaded }
}
