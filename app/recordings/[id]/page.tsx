"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Play, Download, Calendar, Clock, Users, Star, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// keep your `recordings` object exactly as you have it…

export default function RecordingDetailPage() {
  const { id } = useParams<{ id: string }>()
  const [isPlaying, setIsPlaying] = useState(false)
  const recording = recordings[id as keyof typeof recordings]

  if (!recording) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <section className="pt-24 pb-16 px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Recording Not Found</h1>
          <p className="text-gray-600 mb-8">The recording you're looking for doesn't exist.</p>
          <Button asChild><Link href="/recordings">Back to Recordings</Link></Button>
        </section>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* (the rest of your component unchanged) */}
    </main>
  )
}
