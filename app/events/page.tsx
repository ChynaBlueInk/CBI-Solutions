// app/events/page.tsx
"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, Users, MapPin, ArrowRight, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

// Note: Navigation and Footer come from app/layout.tsx

type EventItem = {
  id: number
  title: string
  description: string
  date: string // "YYYY-MM-DD" or ""
  time: string // free text (e.g., "2:00 PM")
  duration: string // free text or ""
  category: "Workshop" | "Webinar" | "Masterclass"
  level: string
  instructor: string
  attendees: number
  maxAttendees: number
  price: string
  image: string
  tags: string[]
}

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<"all" | EventItem["category"]>("all")

  // NEW workshops (Dates TBC)
  const newWorkshops: EventItem[] = [
    {
      id: 101,
      title: "Build an App Using Vibe Coding",
      description:
        "Hands-on intro to ‘vibe coding’ — go from idea to working prototype with AI-assisted tooling.",
      date: "", // TBC
      time: "", // TBC
      duration: "", // TBC
      category: "Workshop",
      level: "Beginner",
      instructor: "Cheryl Tyler",
      attendees: 0,
      maxAttendees: 0,
      price: "Free",
      image: "/events/VibeCoding.png",
      tags: ["Apps", "AI", "Prototyping"],
    },
    {
      id: 102,
      title: "The Art of Storytelling",
      description:
        "Structure, beats, and visuals — take an idea from spark to storyboard with reusable templates.",
      date: "", // TBC
      time: "", // TBC
      duration: "", // TBC
      category: "Workshop",
      level: "All Levels",
      instructor: "Cheryl Tyler",
      attendees: 0,
      maxAttendees: 0,
      price: "Free",
      image: "/events/ArtStory.png",
      tags: ["Storytelling", "Education", "Visuals"],
    },
  ]

  // Your existing sample events (kept as-is)
  const previousEvents: EventItem[] = [
    {
      id: 1,
      title: "AI-Powered Content Creation Workshop",
      description:
        "Learn how to leverage AI tools for creating engaging educational content and streamline your workflow.",
      date: "2024-02-15",
      time: "2:00 PM",
      duration: "90 minutes",
      category: "Workshop",
      level: "Beginner",
      instructor: "Chyna Blue",
      attendees: 45,
      maxAttendees: 100,
      price: "Free",
      image: "/events/AIContent.png",
      tags: ["AI", "Content Creation", "Education"],
    },
    {
      id: 2,
      title: "Building Interactive Online Courses",
      description:
        "Discover best practices for creating engaging online learning experiences that keep students motivated.",
      date: "2024-02-22",
      time: "1:00 PM",
      duration: "2 hours",
      category: "Masterclass",
      level: "Intermediate",
      instructor: "Sarah Chen",
      attendees: 78,
      maxAttendees: 150,
      price: "$29",
      image: "/events/BuildingCourses.png",
      tags: ["Course Design", "Education", "Engagement"],
    },
    {
      id: 3,
      title: "Digital Publishing Strategies",
      description:
        "From concept to publication: A comprehensive guide to digital publishing in the modern landscape.",
      date: "2024-01-28",
      time: "3:00 PM",
      duration: "75 minutes",
      category: "Webinar",
      level: "All Levels",
      instructor: "Alex Johnson",
      attendees: 120,
      maxAttendees: 200,
      price: "Free",
      image: "/events/DigitalPublishing.png",
      tags: ["Publishing", "Digital", "Strategy"],
    },
    {
      id: 4,
      title: "Remote Team Learning & Development",
      description: "Effective strategies for training and developing distributed teams in the digital age.",
      date: "2024-03-05",
      time: "11:00 AM",
      duration: "2 hours",
      category: "Workshop",
      level: "Advanced",
      instructor: "Chyna Blue",
      attendees: 32,
      maxAttendees: 75,
      price: "$49",
      image: "/events/RemoteTeam.png",
      tags: ["Remote Work", "Training", "Leadership"],
    },
    {
      id: 5,
      title: "Creative Writing with AI Assistance",
      description: "Explore how AI can enhance your creative writing process without replacing human creativity.",
      date: "2024-03-12",
      time: "4:00 PM",
      duration: "90 minutes",
      category: "Workshop",
      level: "Beginner",
      instructor: "Sarah Chen",
      attendees: 15,
      maxAttendees: 50,
      price: "Free",
      image: "/events/CreativeWriting.png",
      tags: ["Writing", "AI", "Creativity"],
    },
    {
      id: 6,
      title: "Oracle Card Design Masterclass",
      description: "Learn the art and business of creating meaningful oracle card decks from concept to market.",
      date: "2024-02-08",
      time: "2:30 PM",
      duration: "3 hours",
      category: "Masterclass",
      level: "Intermediate",
      instructor: "Alex Johnson",
      attendees: 95,
      maxAttendees: 100,
      price: "$79",
      image: "/events/OracleDesign.png",
      tags: ["Design", "Oracle Cards", "Business"],
    },
  ]

  const events: EventItem[] = [...newWorkshops, ...previousEvents]

  const today = new Date()
  const classify = (e: EventItem) => {
    if (!e.date) return "tbc"
    const d = new Date(`${e.date}T12:00:00`) // midday to avoid TZ edge cases
    return d.getTime() >= new Date(today.toDateString()).getTime() ? "upcoming" : "completed"
  }

  // search + filter
  const filtered = useMemo(() => {
    const q = searchTerm.trim().toLowerCase()
    return events.filter((e) => {
      const matchesSearch =
        !q ||
        e.title.toLowerCase().includes(q) ||
        e.description.toLowerCase().includes(q) ||
        e.tags.some((t) => t.toLowerCase().includes(q))
      const matchesCategory = selectedCategory === "all" || e.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [events, searchTerm, selectedCategory])

  const upcoming = filtered.filter((e) => {
    const status = classify(e)
    return status === "tbc" || status === "upcoming"
  })
  const completed = filtered.filter((e) => classify(e) === "completed")

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "Dates TBC"
    const d = new Date(dateStr)
    return isNaN(d.getTime())
      ? "Dates TBC"
      : d.toLocaleDateString("en-NZ", { weekday: "long", year: "numeric", month: "long", day: "numeric" })
  }

  const formatTime = (timeStr: string, duration?: string) => {
    if (!timeStr) return "Time TBC"
    return duration ? `${timeStr} • ${duration}` : timeStr
  }

  const categories: Array<"all" | EventItem["category"]> = ["all", "Workshop", "Webinar", "Masterclass"]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Live{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Events</span>
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Webinars and workshops designed for real-world learning across Aotearoa and the Pacific.
          </p>

          {/* Search + Filter */}
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search events…"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 rounded-full border-gray-200"
              />
            </div>
            <div className="flex gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full capitalize"
                >
                  {category === "all" ? "All events" : category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Upcoming</h2>

          {upcoming.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-700 text-lg">No upcoming events yet — check back soon.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcoming.map((event) => {
                const isTBC = classify(event) === "tbc"
                return (
                  <div
                    key={event.id}
                    className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                  >
                    <div className="relative">
                      <Image
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        width={400}
                        height={200}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                        <Badge variant="secondary" className="bg-white/90 text-gray-700">
                          {event.category}
                        </Badge>
                        {event.price ? (
                          <Badge variant="outline" className="bg-white/90 border-green-500 text-green-700">
                            {event.price}
                          </Badge>
                        ) : null}
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                      <p className="text-gray-700 text-sm mb-4 line-clamp-2">{event.description}</p>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <Calendar className="w-4 h-4" />
                          {formatDate(event.date)}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <Clock className="w-4 h-4" />
                          {formatTime(event.time, event.duration)}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <MapPin className="w-4 h-4" />
                          Online • Level: {event.level}
                        </div>
                        {!isTBC && event.maxAttendees > 0 ? (
                          <div className="flex items-center gap-2 text-sm text-gray-700">
                            <Users className="w-4 h-4" />
                            {event.attendees}/{event.maxAttendees} registered
                          </div>
                        ) : null}
                      </div>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {event.tags.map((tag, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">by {event.instructor}</span>
                        <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                          <Link href={`/events/${event.id}`}>
                            {isTBC ? "Dates TBC — register your interest" : "Register"}
                            <ArrowRight className="ml-1 w-4 h-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* Past events */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Past events</h2>
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/recordings">View recordings</Link>
            </Button>
          </div>

          {completed.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-700 text-lg">No past events yet — recordings coming soon.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {completed.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 opacity-90"
                >
                  <div className="relative">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                      <Badge variant="secondary" className="bg-white/90 text-gray-700">
                        {event.category}
                      </Badge>
                      <Badge className="bg-gray-500 text-white">Completed</Badge>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                    <p className="text-gray-700 text-sm mb-4 line-clamp-2">{event.description}</p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <Calendar className="w-4 h-4" />
                        {formatDate(event.date)}
                      </div>
                      {event.attendees > 0 ? (
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <Users className="w-4 h-4" />
                          {event.attendees} attended
                        </div>
                      ) : null}
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {event.tags.map((tag, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">by {event.instructor}</span>
                      <Button asChild size="sm" variant="outline" className="rounded-full">
                        <Link href={`/recordings/${event.id}`}>Watch recording</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Want to host a session?</h2>
          <p className="text-xl text-gray-700 mb-8">
            We partner with organisations to deliver practical webinars and workshops.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold"
          >
            <Link href="/contact">Get in touch</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
