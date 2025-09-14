// app/events/[id]/page.tsx
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Clock, Users, MapPin, Star, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Normally from DB/API — for now, mirror the list page
const events = {
  "101": {
    id: 101,
    title: "Build an App Using Vibe Coding",
    description:
      "Hands-on intro to 'vibe coding' — rapidly prototype a working app, from idea to deploy, with AI-assisted tooling.",
    longDescription:
      "In this workshop we’ll explore a lightweight pathway to ship a working app quickly. We’ll cover scoping the idea, choosing an approach that suits your skills, and using AI as a productive pair to move from blank page to deployed prototype.",
    date: "", // TBC
    time: "", // TBC
    duration: "", // TBC
    category: "Workshop",
    level: "Beginner",
    instructor: "Cheryl Tyler",
    instructorBio:
      "Cheryl Tyler is the founder of CBI Learning Solutions, working across Aotearoa and Timor-Leste on practical learning and AI-assisted builds.",
    attendees: 0,
    maxAttendees: 0,
    price: "Free",
    image: "/placeholder.svg?height=400&width=800",
    tags: ["Apps", "AI", "Prototyping"],
    status: "upcoming",
    agenda: [
      "What is ‘vibe coding’ and when to use it",
      "From idea to ‘walking skeleton’ in under an hour",
      "Using AI as a productive pair (prompts that actually help)",
      "Next steps: hardening, hosting, and handover",
    ],
    requirements: ["Basic computer skills", "An idea you’d like to try (optional)"],
    whatYouWillLearn: [
      "A simple path from idea to working prototype",
      "How to lean on AI without losing quality",
      "How to choose the right scope for your first release",
    ],
  },
  "102": {
    id: 102,
    title: "The Art of Storytelling",
    description:
      "Story structure, beats, and visuals — take an idea from spark to storyboard, with reusable templates.",
    longDescription:
      "We’ll break down story structure (for learning and creative projects), map beats, and translate ideas into simple storyboards. You’ll leave with templates you can reuse across lessons, videos, or short animations.",
    date: "",
    time: "",
    duration: "",
    category: "Workshop",
    level: "All Levels",
    instructor: "Cheryl Tyler",
    instructorBio:
      "Cheryl works with teams to turn ideas into clear narratives and practical learning experiences across the Pacific.",
    attendees: 0,
    maxAttendees: 0,
    price: "Free",
    image: "/placeholder.svg?height=400&width=800",
    tags: ["Storytelling", "Education", "Visuals"],
    status: "upcoming",
    agenda: [
      "Foundations: What makes a story work",
      "Beats & structure (choose a template)",
      "From beats to storyboard (hands-on)",
      "Optional: preparing assets for animation",
    ],
    requirements: ["Bring a story idea (optional)"],
    whatYouWillLearn: [
      "Simple structures that make stories land",
      "How to map beats and test your flow",
      "Turning ideas into a storyboard you can share",
    ],
  },
}

export default function EventDetailPage({ params }: { params: { id: string } }) {
  const event = events[params.id as keyof typeof events]

  if (!event) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="pt-24 pb-16 px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Event not found</h1>
          <p className="text-gray-700 mb-8">The event you’re after doesn’t exist.</p>
          <Button asChild>
            <Link href="/events">Back to events</Link>
          </Button>
        </div>
      </main>
    )
  }

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

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Link href="/events" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to events
          </Link>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="relative rounded-3xl overflow-hidden mb-8">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  width={800}
                  height={400}
                  className="w-full h-64 md:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-4 text-white mb-4">
                    <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30">{event.category}</Badge>
                    <Badge className="bg-green-500 text-white">{event.price}</Badge>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-white">{event.title}</h1>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {event.tags.map((tag, idx) => (
                  <Badge key={idx} variant="outline" className="text-sm">
                    {tag}
                  </Badge>
                ))}
              </div>

              <p className="text-xl text-gray-700 leading-relaxed mb-8">{event.description}</p>

              <div className="bg-white rounded-3xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">About this event</h2>
                <p className="text-gray-700 leading-relaxed mb-6">{event.longDescription}</p>

                <h3 className="text-xl font-bold text-gray-900 mb-4">What you’ll learn</h3>
                <ul className="space-y-2 mb-6">
                  {event.whatYouWillLearn.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4">Agenda</h3>
                <ul className="space-y-2 mb-6">
                  {event.agenda.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>

                {event.requirements?.length ? (
                  <>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Requirements</h3>
                    <ul className="space-y-2">
                      {event.requirements.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : null}
              </div>

              {/* Instructor Section */}
              <div className="bg-white rounded-3xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Meet your instructor</h2>
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">
                      {event.instructor
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{event.instructor}</h3>
                    <p className="text-gray-700 leading-relaxed">{event.instructorBio}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interest / Registration Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-3xl p-8 shadow-lg sticky top-24">
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 text-gray-700">
                    <Calendar className="w-5 h-5" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Clock className="w-5 h-5" />
                    <span>{formatTime(event.time, event.duration)}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <MapPin className="w-5 h-5" />
                    <span>Online event</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Star className="w-5 h-5" />
                    <span>Level: {event.level}</span>
                  </div>
                </div>

                <Button
                  asChild
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl text-lg font-semibold mb-4"
                >
                  <Link href={`/contact?subject=${encodeURIComponent("Event interest: " + event.title)}`}>
                    Dates TBC — register your interest
                  </Link>
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  We’ll email you dates and joining details once confirmed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
