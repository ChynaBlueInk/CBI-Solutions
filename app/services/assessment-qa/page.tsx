"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function AssessmentQaPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-10">

      {/* Hero Section */}
      <section>
        <h1 className="text-4xl font-bold mb-4">Assessment, QA & Learning Evidence</h1>
        <p className="text-gray-700 text-lg">
          Defensible assessment design, feedback loops, and quality checks so your learning holds up in regulated and high-stakes environments.
          We help you prove what was learned, what changed, and what you can stand behind.
        </p>
      </section>

      {/* Core Services */}
      <section className="grid md:grid-cols-2 gap-6">

        <Card>
          <CardHeader>
            <CardTitle>Assessment Design & Rubrics</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Practical assessments that measure real performance, not just recall. We build rubrics, model answers,
              marking guides, and alignment to learning outcomes so results are consistent and defensible.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Feedback Loops & Checks</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Structured checks that catch confusion early: knowledge checks, in-module feedback, facilitator prompts,
              and revision cycles that improve clarity before learners reach the “oops” moment.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Compliance-Aligned Learning</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Learning that aligns to policy, standards, and audit expectations without becoming a box-ticking exercise.
              We map content to requirements, document rationale, and help you reduce risk through better design.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Evaluation & Evidence Support</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Support for evaluation planning and evidence capture: measures, survey items, observation guides, data collection plans,
              and summary reporting so you can show outcomes and improve over time.
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
              <CardTitle>Quality Review & Content QA</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                A structured QA pass across learning content for accuracy, readability, accessibility, and consistency.
                Includes link checks, tone/style consistency, and “learner reality” testing (what people will actually do).
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Assessment Item Bank Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Build or refine a question bank with tagged difficulty levels, rationale for answers, and coverage mapping.
                Useful for compliance refreshers and ongoing knowledge checks.
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