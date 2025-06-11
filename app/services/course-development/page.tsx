// app/course-development/page.tsx
"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function CourseDevelopmentPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-8">
      <section>
        <h1 className="text-4xl font-bold mb-4">Online Course Development</h1>
        <p className="text-gray-700 text-lg">
          We design and develop engaging, accessible online learning experiences tailored to your audience and learning goals. Whether you're a government department, academic institution, or corporate team, our solutions blend educational best practices with the latest in technology.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Custom E-learning Platforms</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Branded, user-friendly platforms built to deliver training content seamlessly. Host on your LMS or use as a standalone solution — we tailor the experience to your needs.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Interactive Learning Modules</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Courses go beyond static slides. We integrate scenario-based learning, simulations, video, gamification, and branching pathways to drive deeper engagement and retention.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Assessment Tools</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Embed quizzes, knowledge checks, and practical assessments to evaluate understanding. Tools can include automated feedback and be aligned with certifications or compliance tracking.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Progress Tracking</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Monitor course completion, learner performance, and engagement with real-time analytics and custom dashboards.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Mobile Optimization</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Our content is designed to work flawlessly across all devices — mobile, tablet, or desktop — ensuring learning is accessible anywhere, anytime.
            </p>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mt-10 mb-4">Enhancements & Add-ons</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>AI-Enhanced Learning Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We integrate AI for dynamic content delivery, adaptive learning paths, and intelligent feedback. From personalized recommendations to AI tutors or scenario generators, we help future-proof your training.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Video Production & Storytelling</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Our team can script, film, and produce explainer videos, learner scenarios, or interactive video-based modules. We specialize in educational storytelling that resonates with your learners.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Course Translation & Localization</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Reach global audiences with culturally relevant course versions. We support translation into multiple languages, including Tetun, Portuguese, Bahasa Indonesia, and English, with localization of tone and examples.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
            <div className="text-center mt-12">
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
        >
          ← Back to Home
        </Link>
      </div>

    </div>
  )
}
