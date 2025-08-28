"use client"

import { useState } from "react"
import Navigation from "../../components/Navigation"
import Footer from "../../components/Footer"
import Link from "next/link"
import { ArrowLeft, Play, Download, Calendar, Clock, Users, Star, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// This would typically come from a database or API
const recordings = {
  "1": {
    id: 1,
    title: "AI-Powered Content Creation Workshop",
    description:
      "Learn how to leverage AI tools for creating engaging educational content and streamline your workflow.",
    videoUrl: "https://example.com/video.mp4", // This would be your actual video URL
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
}

export default function RecordingDetailPage({ params }: { params: { id: string } }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const recording = recordings[params.id as keyof typeof recordings]

  if (!recording) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        <div className="pt-24 pb-16 px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Recording Not Found</h1>
          <p className="text-gray-600 mb-8">The recording you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/recordings">Back to Recordings</Link>
          </Button>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Link href="/recordings" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Recordings
          </Link>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {/* Video Player */}
              <div className="bg-black rounded-3xl overflow-hidden mb-8 aspect-video relative">
                {!isPlaying ? (
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                    <Button
                      size="lg"
                      onClick={() => setIsPlaying(true)}
                      className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-8 py-4"
                    >
                      <Play className="w-8 h-8 mr-3" />
                      Play Recording
                    </Button>
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white">
                    <p>Video Player Would Be Here</p>
                    {/* In a real implementation, you'd use a video player component */}
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {recording.tags.map((tag, idx) => (
                  <Badge key={idx} variant="outline" className="text-sm">
                    {tag}
                  </Badge>
                ))}
              </div>

              <h1 className="text-4xl font-bold text-gray-900 mb-4">{recording.title}</h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">{recording.description}</p>

              {/* Recording Details */}
              <div className="bg-white rounded-3xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Recording Details</h2>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Calendar className="w-5 h-5" />
                    <span>
                      Recorded on{" "}
                      {new Date(recording.recordedDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Clock className="w-5 h-5" />
                    <span>{recording.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Users className="w-5 h-5" />
                    <span>{recording.views.toLocaleString()} views</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span>{recording.rating} rating</span>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">About the Instructor</h3>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">
                        {recording.instructor
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{recording.instructor}</p>
                      <p className="text-gray-600 text-sm">Founder & Creative Director at CBI Learning Solutions</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Resources */}
              <div className="bg-white rounded-3xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Resources & Downloads</h2>
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
                <div className="prose max-w-none text-gray-600">
                  <p>{recording.transcript}</p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-3xl p-8 shadow-lg sticky top-24">
                <div className="text-center mb-6">
                  <Badge variant="secondary" className="mb-4">
                    {recording.category}
                  </Badge>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{recording.title}</h3>
                  <p className="text-gray-600">by {recording.instructor}</p>
                </div>

                <div className="space-y-4 mb-6">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-2xl">
                    <Play className="w-4 h-4 mr-2" />
                    Watch Now
                  </Button>

                  {recording.downloadable && (
                    <Button variant="outline" className="w-full py-3 rounded-2xl">
                      <Download className="w-4 h-4 mr-2" />
                      Download Video
                    </Button>
                  )}

                  <Button variant="outline" className="w-full py-3 rounded-2xl">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share Recording
                  </Button>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Related Recordings</h4>
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
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
