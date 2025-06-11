// app/services/consulting/page.tsx
"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function ConsultingPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-8">
      <section>
        <h1 className="text-4xl font-bold mb-4">Remote L&D Consulting</h1>
        <p className="text-gray-700 text-lg">
          We help organizations design effective, engaging learning strategies for distributed teams. From aligning training
          with business outcomes to building digital learning ecosystems, we provide practical guidance grounded in real-world
          remote experience.
        </p>
        <p className="text-gray-700 text-lg mt-2">
          Our consulting supports HR, L&D, education, and nonprofit teams — especially those scaling programs or adapting to hybrid work.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Training Strategy</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We work with you to assess needs, define goals, and build outcome-based learning roadmaps. Whether you're onboarding,
              upskilling, or shifting delivery models, we align learning with performance and impact.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Remote Learning Design</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We design online courses, workshops, and blended learning experiences that keep remote learners engaged.
              This includes content planning, platform selection, and scalable delivery methods.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Team Development</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              From facilitating virtual workshops to creating long-term capability-building plans, we support your team’s growth.
              We also offer mentoring and upskilling for internal L&D staff and subject matter experts.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Performance Analytics</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We help you choose tools and build dashboards to track learning effectiveness, engagement, and performance improvements.
              If you’re gathering feedback or usage data, we’ll turn it into insights.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>App Development Consultation</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Looking to scale your training or learning content? We offer expert guidance on designing custom apps to deliver your
              learning products — from microlearning platforms and onboarding apps to mobile training tools and assessment engines.
            </p>
            <p className="mt-2">
              We bridge the gap between education, design, and technology — helping you validate your app idea, define requirements,
              and plan your build.
            </p>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mt-10 mb-4">What We Deliver</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 text-base">
          <li><strong>Learning needs assessments</strong> & training strategy</li>
          <li><strong>Remote/hybrid learning course or program design</strong></li>
          <li><strong>L&D team capability planning</strong> and mentoring</li>
          <li><strong>KPI-aligned measurement</strong> and analytics planning</li>
          <li><strong>Custom app consultation</strong> for delivering learning content</li>
        </ul>
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
