// app/events/[id]/page.tsx

import Link from "next/link"
import Image from "next/image"

import {
  ArrowLeft,
  Calendar,
  Clock,
  Users,
  MapPin,
  Star,
  CheckCircle,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const events = {
  "101": {
    id: 101,

    title: "Build an App Using Vibe Coding",

    description:
      "Learn how educators, creatives, and non-technical teams can rapidly prototype digital tools and ideas using AI-assisted workflows and modern development platforms.",

    longDescription:
      "This practical workshop introduces participants to the emerging world of AI-assisted app creation, sometimes referred to as ‘vibe coding’. Rather than focusing on deep programming knowledge, the session explores how people can use AI tools to rapidly prototype ideas, workflows, dashboards, and lightweight applications.\n\nParticipants will learn how to move from concept to functional prototype using AI-supported planning, prompting, interface generation, debugging, and iteration. The workshop also explores the limitations of AI-assisted coding, including quality control, security, and realistic expectations for workplace use.",

    date: "",
    time: "",
    duration: "2 hours",

    category: "Workshop",
    level: "Beginner",

    instructor: "Cheryl Tyler",

    instructorBio:
      "Cheryl Tyler works across learning design, digital capability, and AI-supported workflow development. She supports organisations and teams across Aotearoa and Timor-Leste to explore practical and human-centred approaches to emerging technology.",

    attendees: 0,
    maxAttendees: 40,

    price: "Free",

    image: "/events/VibeCoding.png",

    tags: [
      "AI",
      "Vibe Coding",
      "Prototyping",
      "Workflow Design",
      "Innovation",
    ],

    status: "upcoming",

    audience: [
      "Educators",
      "Government teams",
      "NGOs",
      "Managers",
      "Creatives",
      "Learning designers",
    ],

    agenda: [
      "Understanding AI-assisted development workflows",
      "Choosing the right scope for a prototype",
      "Using AI to generate and refine app ideas",
      "Building interfaces and simple functionality",
      "Testing, iteration, and debugging strategies",
      "Understanding limitations, risks, and quality control",
    ],

    requirements: [
      "Basic computer confidence",
      "No coding experience required",
      "Bring an idea or workflow challenge if you’d like",
    ],

    whatYouWillLearn: [
      "How AI-assisted app creation actually works",
      "How to prototype ideas without deep technical skills",
      "How to use AI as a creative and productivity partner",
      "Common mistakes and limitations in AI-generated code",
      "Practical workflows for rapid experimentation",
    ],
  },

  "102": {
    id: 102,

    title: "AI Bias & Responsible Use",

    description:
      "Explore the ethical, cultural, and practical challenges of AI including bias, hallucinations, misinformation, accessibility, and responsible workplace implementation.",

    longDescription:
      "AI systems are not neutral. They reflect the data, assumptions, and structures they are trained on. This workshop explores the practical realities of AI bias, misinformation, hallucinations, and ethical risk in workplace and educational settings.\n\nParticipants will examine how AI systems can unintentionally reinforce stereotypes, exclude perspectives, or generate inaccurate information. The session also explores responsible AI use in government, education, NGOs, and organisational environments, with discussion around human oversight, privacy, inclusion, accessibility, and cultural considerations.\n\nRather than fear-based messaging or hype, this workshop focuses on practical AI literacy and thoughtful implementation.",

    date: "",
    time: "",
    duration: "90 minutes",

    category: "Workshop",
    level: "All Levels",

    instructor: "Cheryl Tyler",

    instructorBio:
      "Cheryl Tyler works in learning design and capability development, with a focus on practical, ethical, and accessible approaches to digital learning and emerging technologies.",

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
      "Digital Literacy",
    ],

    status: "upcoming",

    audience: [
      "Government teams",
      "Educators",
      "Managers",
      "Policy teams",
      "NGOs",
      "Community organisations",
    ],

    agenda: [
      "Understanding how AI systems are trained",
      "What bias looks like in AI outputs",
      "Hallucinations, misinformation, and confidence errors",
      "Accessibility and representation challenges",
      "Privacy, risk, and workplace considerations",
      "Human oversight and responsible implementation",
    ],

    requirements: [
      "No technical experience required",
      "Suitable for educators, managers, and workplace teams",
    ],

    whatYouWillLearn: [
      "How AI bias happens",
      "How to critically evaluate AI-generated content",
      "Common ethical risks in workplace AI use",
      "Strategies for responsible implementation",
      "Why human judgement still matters",
    ],
  },

  "103": {
    id: 103,

    title: "Prompt Repair Workshop",

    description:
      "Learn how to diagnose weak prompts, improve AI outputs, and build repeatable prompting workflows that produce clearer, more useful results.",

    longDescription:
      "Most AI frustrations come from unclear instructions, missing context, or unrealistic expectations. This practical workshop focuses on improving AI outputs through better prompting, refinement, and workflow design.\n\nParticipants will learn how to identify why prompts fail, how to repair vague or inconsistent instructions, and how to guide AI tools toward clearer, more structured, and more useful outputs.\n\nThe session focuses on practical workplace applications rather than gimmicks or ‘AI hacks’, helping participants build confidence using AI responsibly and effectively.",

    date: "",
    time: "",
    duration: "2 hours",

    category: "Workshop",
    level: "Beginner",

    instructor: "Cheryl Tyler",

    instructorBio:
      "Cheryl Tyler supports teams and organisations to build practical digital capability through learning design, workflow thinking, and AI-supported productivity approaches.",

    attendees: 0,
    maxAttendees: 40,

    price: "$25",

    image: "/events/PromptRepair.png",

    tags: [
      "Prompting",
      "AI Workflow",
      "Communication",
      "Productivity",
      "Digital Skills",
    ],

    status: "upcoming",

    audience: [
      "Government teams",
      "Admin staff",
      "Managers",
      "Educators",
      "Learning designers",
      "Workplace teams",
    ],

    agenda: [
      "Why AI outputs fail",
      "Understanding ambiguity and missing context",
      "Repairing vague prompts",
      "Improving tone, structure, and clarity",
      "Building reusable prompt frameworks",
      "Human review and verification strategies",
    ],

    requirements: [
      "Basic familiarity with ChatGPT or AI tools helpful",
      "No technical experience required",
    ],

    whatYouWillLearn: [
      "How to improve AI-generated outputs",
      "How to diagnose weak prompts",
      "How to guide AI tools more effectively",
      "Prompt refinement strategies",
      "Practical workplace prompting workflows",
    ],
  },
}

export default function EventDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const event =
    events[params.id as keyof typeof events]

  if (!event) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="pt-24 pb-16 px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Workshop not found
          </h1>

          <p className="text-gray-700 mb-8">
            The workshop you’re looking for does not exist.
          </p>

          <Button asChild>
            <Link href="/events">
              Back to workshops
            </Link>
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

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/events"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to workshops
          </Link>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="relative rounded-3xl overflow-hidden mb-8">
                <Image
                  src={event.image}
                  alt={event.title}
                  width={800}
                  height={400}
                  className="w-full h-64 md:h-96 object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-4 text-white mb-4">
                    <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                      {event.category}
                    </Badge>

                    <Badge className="bg-green-500 text-white">
                      {event.price}
                    </Badge>
                  </div>

                  <h1 className="text-4xl md:text-5xl font-bold text-white">
                    {event.title}
                  </h1>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {event.tags.map((tag, idx) => (
                  <Badge
                    key={idx}
                    variant="outline"
                    className="text-sm"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                {event.description}
              </p>

              <div className="bg-white rounded-3xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  About this workshop
                </h2>

                <p className="text-gray-700 leading-relaxed whitespace-pre-line mb-8">
                  {event.longDescription}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  What you’ll learn
                </h3>

                <ul className="space-y-3 mb-8">
                  {event.whatYouWillLearn.map(
                    (item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />

                        <span className="text-gray-700">
                          {item}
                        </span>
                      </li>
                    )
                  )}
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Who this is for
                </h3>

                <div className="flex flex-wrap gap-2 mb-8">
                  {event.audience.map(
                    (group, idx) => (
                      <Badge
                        key={idx}
                        className="bg-blue-100 text-blue-800 hover:bg-blue-200"
                      >
                        {group}
                      </Badge>
                    )
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Workshop agenda
                </h3>

                <ul className="space-y-3 mb-8">
                  {event.agenda.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3"
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />

                      <span className="text-gray-700">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Requirements
                </h3>

                <ul className="space-y-3">
                  {event.requirements.map(
                    (item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3"
                      >
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0" />

                        <span className="text-gray-700">
                          {item}
                        </span>
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div className="bg-white rounded-3xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Meet your facilitator
                </h2>

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
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {event.instructor}
                    </h3>

                    <p className="text-gray-700 leading-relaxed">
                      {event.instructorBio}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-3xl p-8 shadow-lg sticky top-24">
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 text-gray-700">
                    <Calendar className="w-5 h-5" />
                    <span>
                      {formatDate(event.date)}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-700">
                    <Clock className="w-5 h-5" />
                    <span>
                      {formatTime(
                        event.time,
                        event.duration
                      )}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-700">
                    <MapPin className="w-5 h-5" />
                    <span>Online workshop</span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-700">
                    <Users className="w-5 h-5" />
                    <span>
                      Max {event.maxAttendees} attendees
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-700">
                    <Star className="w-5 h-5" />
                    <span>
                      Level: {event.level}
                    </span>
                  </div>
                </div>

                <Button
                  asChild
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl text-lg font-semibold mb-4"
                >
                  <Link
                    href={`/contact?subject=${encodeURIComponent(
                      "Workshop interest: " +
                        event.title
                    )}`}
                  >
                    Register your interest
                  </Link>
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  We’ll send workshop dates and
                  registration details once confirmed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}