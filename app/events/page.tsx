// app/events/page.tsx
"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Calendar,
  Clock,
  Users,
  MapPin,
  ArrowRight,
  Search,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

type EventItem = {
  id: number
  title: string
  description: string
  date: string
  time: string
  duration: string
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
  const [selectedCategory, setSelectedCategory] =
    useState<"all" | EventItem["category"]>("all")

  // AI Workshops & Learning Labs
  const newWorkshops: EventItem[] = [
    {
      id: 101,
      title: "Build an App Using Vibe Coding",
      description:
        "A practical introduction to AI-assisted app creation. Learn how educators, creatives, and non-technical teams can rapidly prototype ideas using AI-supported workflows and modern tools.",
      date: "",
      time: "",
      duration: "2 hours",
      category: "Workshop",
      level: "Beginner",
      instructor: "Cheryl Tyler",
      attendees: 0,
      maxAttendees: 40,
      price: "Free",
      image: "/events/VibeCoding.png",
      tags: [
        "AI",
        "Vibe Coding",
        "Prototyping",
        "Workflow Design",
      ],
    },

    {
      id: 102,
      title: "AI Bias & Responsible Use",
      description:
        "Explore the ethical challenges of AI including bias, hallucinations, misinformation, cultural representation, accessibility, and responsible workplace use in education, government, and organisations.",
      date: "",
      time: "",
      duration: "90 minutes",
      category: "Workshop",
      level: "All Levels",
      instructor: "Cheryl Tyler",
      attendees: 0,
      maxAttendees: 50,
      price: "Free",
      image: "/events/AIBias.png",
      tags: [
        "AI Ethics",
        "Bias",
        "Responsible AI",
        "Government",
        "Education",
      ],
    },

    {
      id: 103,
      title: "Prompt Repair Workshop",
      description:
        "Most AI mistakes come from weak instructions. Learn how to diagnose vague prompts, repair broken outputs, improve tone and accuracy, and build repeatable prompting workflows that actually work.",
      date: "",
      time: "",
      duration: "2 hours",
      category: "Workshop",
      level: "Beginner",
      instructor: "Cheryl Tyler",
      attendees: 0,
      maxAttendees: 40,
      price: "$25",
      image: "/events/PromptRepair.png",
      tags: [
        "Prompting",
        "AI Workflow",
        "Productivity",
        "Communication",
      ],
    },

    {
      id: 104,
      title: "AI Productivity Without the Hype",
      description:
        "Discover practical ways AI can support everyday work including summarising documents, drafting content, workflow planning, research support, and learning design — without replacing human thinking.",
      date: "",
      time: "",
      duration: "90 minutes",
      category: "Workshop",
      level: "All Levels",
      instructor: "Cheryl Tyler",
      attendees: 0,
      maxAttendees: 60,
      price: "Free",
      image: "/events/AIProductivity.png",
      tags: [
        "AI Literacy",
        "Productivity",
        "Workflows",
        "Learning Design",
      ],
    },
  ]

  const events: EventItem[] = [...newWorkshops]

  const today = new Date()

  const classify = (e: EventItem) => {
    if (!e.date) return "tbc"

    const d = new Date(`${e.date}T12:00:00`)

    return d.getTime() >= new Date(today.toDateString()).getTime()
      ? "upcoming"
      : "completed"
  }

  const filtered = useMemo(() => {
    const q = searchTerm.trim().toLowerCase()

    return events.filter((e) => {
      const matchesSearch =
        !q ||
        e.title.toLowerCase().includes(q) ||
        e.description.toLowerCase().includes(q) ||
        e.tags.some((t) => t.toLowerCase().includes(q))

      const matchesCategory =
        selectedCategory === "all" ||
        e.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [events, searchTerm, selectedCategory])

  const upcoming = filtered.filter((e) => {
    const status = classify(e)
    return status === "tbc" || status === "upcoming"
  })

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "Dates TBC"

    const d = new Date(dateStr)

    return isNaN(d.getTime())
      ? "Dates TBC"
      : d.toLocaleDateString("en-NZ", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
  }

  const formatTime = (
    timeStr: string,
    duration?: string
  ) => {
    if (!timeStr) return "Time TBC"

    return duration
      ? `${timeStr} • ${duration}`
      : timeStr
  }

  const categories: Array<
    "all" | EventItem["category"]
  > = ["all", "Workshop", "Webinar", "Masterclass"]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            AI{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Workshops & Learning Labs
            </span>
          </h1>

          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Practical, human-centred AI training designed
            for educators, government teams, NGOs,
            creatives, and modern workplaces across
            Aotearoa and the Pacific.
          </p>

          {/* Search + Filter */}
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

              <Input
                type="text"
                placeholder="Search workshops…"
                value={searchTerm}
                onChange={(e) =>
                  setSearchTerm(e.target.value)
                }
                className="pl-10 rounded-full border-gray-200"
              />
            </div>

            <div className="flex gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category
                      ? "default"
                      : "outline"
                  }
                  size="sm"
                  onClick={() =>
                    setSelectedCategory(category)
                  }
                  className="rounded-full capitalize"
                >
                  {category === "all"
                    ? "All"
                    : category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Upcoming Workshops
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcoming.map((event) => {
              const isTBC =
                classify(event) === "tbc"

              return (
                <div
                  key={event.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                >
                  <div className="relative">
                    <Image
                      src={
                        event.image ||
                        "/placeholder.svg"
                      }
                      alt={event.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover"
                    />

                    <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                      <Badge
                        variant="secondary"
                        className="bg-white/90 text-gray-700"
                      >
                        {event.category}
                      </Badge>

                      <Badge
                        variant="outline"
                        className="bg-white/90 border-green-500 text-green-700"
                      >
                        {event.price}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {event.title}
                    </h3>

                    <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                      {event.description}
                    </p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <Calendar className="w-4 h-4" />
                        {formatDate(event.date)}
                      </div>

                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <Clock className="w-4 h-4" />
                        {formatTime(
                          event.time,
                          event.duration
                        )}
                      </div>

                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <MapPin className="w-4 h-4" />
                        Online • Level: {event.level}
                      </div>

                      {event.maxAttendees > 0 ? (
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <Users className="w-4 h-4" />
                          Max {event.maxAttendees} attendees
                        </div>
                      ) : null}
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {event.tags.map((tag, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">
                        by {event.instructor}
                      </span>

                      <Button
                        asChild
                        size="sm"
                        className="bg-blue-600 hover:bg-blue-700 text-white rounded-full"
                      >
                        <Link
                          href={`/events/${event.id}`}
                        >
                          {isTBC
                            ? "Register interest"
                            : "Register"}

                          <ArrowRight className="ml-1 w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Looking for AI training for your team?
          </h2>

          <p className="text-xl text-gray-700 mb-8">
            We work with organisations, educators,
            and teams to deliver practical,
            ethical, and workplace-ready AI
            capability training.
          </p>

          <Button
            asChild
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold"
          >
            <Link href="/contact">
              Get in touch
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}