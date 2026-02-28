//app/services/digital-delivery/page.tsx

"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function DigitalDeliveryPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-10">

      {/* Hero Section */}
      <section>
        <h1 className="text-4xl font-bold mb-4">Learning Systems & Digital Delivery</h1>
        <p className="text-gray-700 text-lg">
          LMS setup and optimisation, content structures, templates, and rollout support — so learning is easy to maintain and scale.
          We make the system work for real humans, not just admins with superhero patience.
        </p>
      </section>

      {/* Core Services */}
      <section className="grid md:grid-cols-2 gap-6">

        <Card>
          <CardHeader>
            <CardTitle>LMS Setup & Optimisation</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Configure and tune your LMS so it’s clear, stable, and usable. We help with structure, navigation, course layouts,
              permissions, and practical workflows that reduce admin effort and learner confusion.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Templates & Content Structures</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Build reusable templates for modules, lessons, resources, and assessments — with consistent naming, metadata,
              and file conventions so content stays organised and easy to update over time.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Rollout & Adoption Support</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Support for launch planning, internal comms, onboarding guides, facilitator notes, and “how to use it”
              walkthroughs so your rollout lands well and doesn’t quietly die in a folder somewhere.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tracking & Reporting Foundations</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Set up the basics you need for credible reporting: completion logic, assessment tracking, simple dashboards,
              and data structures that make it easier to prove participation and performance.
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
              <CardTitle>Content Migration & Clean-Up</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Sort, standardise, and migrate existing learning content into a cleaner structure. Includes naming conventions,
                archive rules, and a “single source of truth” approach so duplicates don’t multiply overnight.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Low-Bandwidth Delivery Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Practical options for low-connectivity learners: lighter media formats, downloadable resources,
                offline-friendly workflows, and file sizing guidance so access isn’t limited by bandwidth.
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