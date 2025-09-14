// app/recordings/[id]/page.tsx
import { use } from "react"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Users, Star, Download, Share2, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// In real life you’d fetch this from a DB or API
const recordings = {
  "1": {
    id: 1,
    title: "AI-Powered Content Creation Workshop",
    description:
      "Learn how to leverage AI tools for creating engaging educational content and streamline your workflow.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // placeholder demo video
    duration: "1h 32m",
    category: "Workshop",
    instructor: "Chyna Blue",
    recordedDate: "2024-01-15",
    views: 1250,
    rating: 4.8,
    tags: ["AI", "Content Creation", "Education"],
    downloadable: true,
    premium: false,
    transcript: "This is where the video transcript would go...",
    resources: [
      { name: "AI Tools Checklist", url: "#" },
      { name: "Content Templates", url: "#" },
      { name: "Workflow Guide", url: "#" },
    ],
  },
} as const

export default function RecordingDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)
  const recording = recordings[id as keyof typeof recordings]

  if (!recording) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <section className="pt-24 pb-16 px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Recording not found</h1>
          <p className="text-gray-700 mb-8">The recording you’re after doesn’t exist.</p>
          <Button asChild>
            <Link href="/recordings">Back to recordings</Link>
          </Button>
        </section>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero / Back link */}
      <section className="pt-24 pb-6 px-4">
        <div className="max-w-6xl mx-auto">
          <Link href="/recordings" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to recordings
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{recording.title}</h1>
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-700">
            <Badge variant="secondary">{recording.category}</Badge>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {new Date(recording.recordedDate).toLocaleDateString("en-NZ", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {recording.duration}
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              {recording.views.toLocaleString()} views
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              {recording.rating} rating
            </div>
          </div>
        </div>
      </section>

      {/* Player + details */}
      <section className="px-4 pb-16">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {/* Simple video player for MVP */}
            <div className="bg-black rounded-3xl overflow-hidden mb-6 aspect-video">
              <video
                className="w-full h-full"
                src={recording.videoUrl}
                controls
                poster="/placeholder.svg?height=400&width=800"
              />
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {recording.tags.map((tag, idx) => (
                <Badge key={idx} variant="outline" className="text-sm">
                  {tag}
                </Badge>
              ))}
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">{recording.description}</p>

            {/* Resources */}
            <div className="bg-white rounded-3xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Resources & downloads</h2>
              <div className="space-y-3">
                {recording.resources.map((resource, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                    <span className="font-medium text-gray-900">{resource.name}</span>
                    <Button size="sm" variant="outline" className="rounded-full">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Transcript */}
            <div className="bg-white rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Transcript</h2>
              <div className="prose max-w-none text-gray-700">
                <p>{recording.transcript}</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-8 shadow-lg sticky top-24">
              <div className="text-center mb-6">
                <Badge variant="secondary" className="mb-4">
                  {recording.category}
                </Badge>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{recording.title}</h3>
                <p className="text-gray-600">by {recording.instructor}</p>
              </div>

              <div className="space-y-4 mb-6">
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-2xl">
                  <Link href="#player">
                    <Play className="w-4 h-4 mr-2" />
                    Watch now
                  </Link>
                </Button>

                {recording.downloadable && (
                  <Button variant="outline" className="w-full py-3 rounded-2xl">
                    <Download className="w-4 h-4 mr-2" />
                    Download video
                  </Button>
                )}

                <Button variant="outline" className="w-full py-3 rounded-2xl">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share recording
                </Button>
              </div>

              <div className="border-t pt-6">
                <h4 className="font-semibold text-gray-900 mb-4">Related recordings</h4>
                <div className="space-y-3">
                  <div className="p-3 bg-gray-50 rounded-2xl">
                    <p className="font-medium text-sm text-gray-900">Building Interactive Courses</p>
                    <p className="text-xs text-gray-600">2h 15m • Sarah Chen</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-2xl">
                    <p className="font-medium text-sm text-gray-900">Digital Publishing Strategies</p>
                    <p className="text-xs text-gray-600">1h 18m • Alex Johnson</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
