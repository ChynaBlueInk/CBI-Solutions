//app/services/editing/page.tsx

"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function EditingPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-10">

      {/* Hero Section */}
      <section>
        <h1 className="text-4xl font-bold mb-4">Content Editing & Plain-Language Rewrite</h1>
        <p className="text-gray-700 text-lg">
          Clear, human writing for learning, policy, and product content — improving readability, tone, and structure without losing accuracy or voice.
          The goal is content people can actually understand the first time.
        </p>
      </section>

      {/* Core Services */}
      <section className="grid md:grid-cols-2 gap-6">

        <Card>
          <CardHeader>
            <CardTitle>Plain-Language Rewrites</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Rewrite complex or jargon-heavy content into plain language that’s still accurate. Ideal for policy, guidance,
              internal comms, learner resources, and customer-facing content.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Structure & Flow Improvements</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Strengthen the logic and readability of your content: clearer headings, better sequencing, reduced repetition,
              and cleaner transitions so readers don’t have to work so hard to follow the message.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tone & Consistency Checks</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Align tone and terminology across documents, teams, or product areas. Includes consistency in spelling, style,
              naming, and “what we call things” so content feels cohesive and trustworthy.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Learning-Ready Content Formatting</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Format content so it works for learning: clearer instructions, chunking, callouts, examples, knowledge checks,
              and conversion into module-ready sections for digital or blended delivery.
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
              <CardTitle>Style Guide & Writing Standards</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Create simple writing standards and templates your team can follow. Includes tone guidelines, structure rules,
                and a short list of “we say this, not that” examples to speed up future work.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Editing for Accessibility</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Improve readability for diverse audiences by simplifying sentence structure, clarifying instructions, and ensuring
                content works well with screen readers and mobile viewing where required.
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