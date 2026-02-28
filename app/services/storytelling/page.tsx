//app/services/storytelling/page.tsx
"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function AnimationStorytellingPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-10">

      {/* Hero Section */}
      <section>
        <h1 className="text-4xl font-bold mb-4">Scenario Design & Storytelling</h1>
        <p className="text-gray-700 text-lg">
          Decision-based scenarios, scripts, and narratives that reflect real-world work — designed to change behaviour, not just tick boxes.
          We build practical story-led learning that helps people practise good judgement under realistic pressure.
        </p>
      </section>

      {/* Core Services */}
      <section className="grid md:grid-cols-2 gap-6">

        <Card>
          <CardHeader>
            <CardTitle>Scenario Mapping & Branching</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We design the decision points, consequences, and pathways that mirror real workplace trade-offs.
              Learners see how choices play out, so they can practise safer, smarter decisions before it matters.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Storyboarding & Scripts</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Clear storyboards and scripts for interactive modules, videos, role plays, or facilitated sessions.
              Tone, language, and pacing are matched to your audience — and kept grounded in real context.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Role-Based Practice Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Activities designed for the roles people actually work in — not generic “one-size-fits-none.”
              Includes prompts, guided reflection, facilitator notes, and optional assessment rubrics.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Behaviour-Focused Learning Design</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We focus on observable behaviour change: what people should do differently on the job.
              Scenarios are built around triggers, barriers, and realistic constraints — with feedback that supports new habits.
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
              <CardTitle>Interactive Delivery Formats</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Convert scenarios into branching eLearning, facilitated workshops, interactive videos, or blended programmes.
                We help you choose the format that fits your time, budget, and delivery reality.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Localisation & Tone Matching</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Cultural and language adaptation so scenarios feel believable to your learners.
                Includes localisation of examples, workplace norms, and vocabulary (including multilingual support where needed).
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