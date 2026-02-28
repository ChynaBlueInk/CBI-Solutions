"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function CourseDevelopmentPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-10">

      {/* Hero Section */}
      <section>
        <h1 className="text-4xl font-bold mb-4">
          Learning Design & Course Development
        </h1>
        <p className="text-gray-700 text-lg">
          We design story-led learning journeys, microlearning experiences, and blended programmes that turn complex ideas into practical, usable knowledge. 
          Our focus is clarity, engagement, and outcomes — not just content delivery.
        </p>
      </section>

      {/* Core Services */}
      <section className="grid md:grid-cols-2 gap-6">

        <Card>
          <CardHeader>
            <CardTitle>Learning Journeys & Course Design</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We map structured learning pathways that guide participants from awareness to confidence and application. 
              This includes needs analysis, curriculum design, outcomes mapping, and aligned assessments.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Interactive Modules & Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Scenario-based learning, activities, reflection tools, downloadable guides, and multimedia content 
              designed to deepen understanding and encourage practical application.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Blended Delivery Support</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We design for flexible delivery — combining online modules, live workshops, facilitator guides, 
              and supporting materials to create cohesive blended programmes.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Low-Bandwidth-Friendly Options</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Designed for accessibility in diverse environments, including remote or low-connectivity settings. 
              Optimised media, downloadable resources, and lightweight course structures ensure learning remains inclusive.
            </p>
          </CardContent>
        </Card>

      </section>

      {/* Optional Add-On Section */}
      <section>
        <h2 className="text-3xl font-semibold mt-6 mb-4">
          Optional Enhancements
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <Card>
            <CardHeader>
              <CardTitle>AI-Supported Learning Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Intelligent feedback tools, adaptive pathways, AI-assisted drafting, and workflow automation 
                to enhance — not replace — strong learning design.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Video & Storytelling Production</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Script development, scenario filming, explainer videos, and narrative-based content 
                that makes learning relatable and memorable.
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