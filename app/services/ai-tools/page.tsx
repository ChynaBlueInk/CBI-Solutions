// app/ai-tools/page.tsx
"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function AIToolsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-8">
      <section>
        <h1 className="text-4xl font-bold mb-4">AI Writing Tools</h1>
        <p className="text-gray-700 text-lg">
          We help individuals, educators, and businesses harness the power of AI to improve their writing,
          streamline workflows, and boost creativity. Whether you're building course content, writing reports,
          marketing copy, or brainstorming new ideas, AI tools can save time and elevate quality — when used effectively.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Content Generation</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Quickly produce blogs, learning materials, emails, course outlines, and more. We help you choose the right
              tools, refine output with prompting techniques, and adapt AI-generated content to your brand voice.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Writing Assistance</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Need a first draft or help breaking writer’s block? We provide templates and custom prompts to help AI generate
              useful, editable drafts for a wide range of purposes — from formal documents to social posts.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Grammar & Style Checking</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Use AI not just to catch typos but to improve clarity, tone, and flow. Learn how to prompt tools like ChatGPT,
              Claude, or GrammarlyGO for editorial support tailored to your audience and goals.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Custom AI Models & Prompt Engineering</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We design custom AI prompt libraries and guide you in developing role-based assistants that reflect your style
              or industry needs. From reusable templates to advanced workflows, we demystify prompt engineering so you can
              use it confidently.
            </p>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mt-10 mb-4">How We Can Help You</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 text-base">
          <li><strong>Workshops</strong> on using AI tools for writing, teaching, or business</li>
          <li><strong>1:1 Training</strong> for writers, educators, or creators</li>
          <li><strong>Prompt Packs & Templates</strong> for specific writing goals</li>
          <li><strong>Custom GPT Assistants</strong> tailored to your team or project</li>
        </ul>
        <p className="mt-4 text-gray-700 text-base">
          AI isn’t replacing creativity — it’s amplifying it. Let us show you how to collaborate with AI effectively.
        </p>
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
