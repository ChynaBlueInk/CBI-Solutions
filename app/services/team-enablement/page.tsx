//app/services/team-enablement/page.tsx
"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function TeamEnablementPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-10">

      {/* Hero Section */}
      <section>
        <h1 className="text-4xl font-bold mb-4">Capability Uplift & Team Enablement</h1>
        <p className="text-gray-700 text-lg">
          Workshops and mentoring for SMEs and teams to improve how they write, design, and maintain learning content — including sensible AI use where it genuinely adds value.
          We build internal capability so your team becomes more confident, consistent, and self-sufficient.
        </p>
      </section>

      {/* Core Services */}
      <section className="grid md:grid-cols-2 gap-6">

        <Card>
          <CardHeader>
            <CardTitle>Team Workshops & Mentoring</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Practical, hands-on sessions tailored to your context. Topics include learning design basics,
              scenario writing, assessment clarity, content structure, and review processes.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>SME Enablement & Coaching</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Support subject matter experts to translate expertise into clear, learner-friendly content.
              We help them focus on what learners need to do — not just what they need to know.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Writing for Learning Support</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Improve tone, clarity, and structure in learning materials. Includes guidance on simplifying complex topics,
              writing instructions that make sense, and aligning content to behavioural outcomes.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Practical AI Use Guidelines</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Clear guardrails for responsible AI use in learning design. We focus on where AI saves time,
              where human judgement is essential, and how to maintain quality, ethics, and credibility.
            </p>
          </CardContent>
        </Card>

      </section>

      {/* Optional Enhancements */}
      <section>
        <h2 className="text-3xl font-semibold mt-6 mb-4">Optional Enhancements</h2>

        <div className="grid md:grid-cols-2 gap-6">

          <Card>
            <CardHeader>
              <CardTitle>Internal Style Guides & Templates</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Develop writing standards, content templates, and review checklists so your team produces
                consistent learning materials long after the workshops are finished.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Ongoing Advisory Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Retainer-based or project-based advisory input to review materials, troubleshoot design challenges,
                and help your team stay on track as learning initiatives grow.
              </p>
            </CardContent>
          </Card>

        </div>
      </section>

      {/* Back Button */}
      <div className="text-center mt-12">
        <Link
          href="/services"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
        >
          ← Back to Services
        </Link>
      </div>

    </div>
  )
}