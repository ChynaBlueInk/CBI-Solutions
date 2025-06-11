// app/services/animation/page.tsx
"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function AnimationPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-8">
      <section>
        <h1 className="text-4xl font-bold mb-4">Animation & Storytelling</h1>
        <p className="text-gray-700 text-lg">
          We bring ideas to life through animation and narrative design. Whether you’re creating explainer videos,
          educational content, or story-driven marketing, our team helps you capture attention and connect emotionally
          with your audience.
        </p>
        <p className="text-gray-700 text-lg mt-2">
          From concept to completion, we focus on making your story engaging, memorable, and visually stunning — no matter the medium.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>2D & 3D Animation</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We create animations for education, branding, social media, and storytelling. Whether it's simple whiteboard
              explainers or Pixar-style 3D sequences, we tailor each piece to your goals, tone, and audience.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Storyboarding & Script Development</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Good stories start with structure. We work with you to develop scripts and storyboards that visualize the
              narrative flow and make production efficient and aligned with your message.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Character Design & World-Building</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              From mascots to heroes, we design characters that feel alive and relatable. We can also help build visual
              worlds and consistent animation styles for episodic or branded series.
            </p>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mt-10 mb-4">How We Can Help You</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 text-base">
          <li><strong>Explainer & training videos</strong></li>
          <li><strong>Animated storytelling for children's books</strong></li>
          <li><strong>Short films or campaigns</strong></li>
          <li><strong>Social media animations</strong></li>
          <li><strong>Visual storytelling consulting & scripting support</strong></li>
        </ul>
        <p className="mt-4 text-gray-700 text-base">
          Want to animate your story? We’ll guide you through every frame.
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
