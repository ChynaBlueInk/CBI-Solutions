// app/services/digital-publishing/page.tsx
"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function DigitalPublishingPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-8">
      <section>
        <h1 className="text-4xl font-bold mb-4">Digital Publishing</h1>
        <p className="text-gray-700 text-lg">
          We bring your ideas to life as publish-ready digital products — whether it’s an eBook, a set of oracle cards,
          or an interactive guide. Our digital publishing services are tailored to creators, educators, and storytellers
          looking to share their work with a wider audience.
        </p>
        <p className="text-gray-700 text-lg mt-2">
          With design, editing, interactivity, and publishing support all in one place, we help you create beautiful,
          accessible publications that reflect your voice and reach your audience.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>eBook Creation</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We transform manuscripts, workbooks, and guides into visually appealing digital books — formatted for platforms
              like Kindle, Apple Books, or direct downloads. Whether it's fiction, education, or nonfiction, we handle layout,
              formatting, and design.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Interactive Publications</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Make your content engaging and dynamic with flipbooks, embedded media, and clickable elements. Ideal for learning
              resources, reports, or digital magazines.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Oracle Card Design</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              From concept to completion, we help you create meaningful, themed card sets — with illustrations, messages,
              interpretations, and companion digital or print guides. Perfect for wellness brands, creatives, and coaches.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Distribution Strategy</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We advise and support your publishing strategy — from print-on-demand and Amazon KDP to email-based delivery
              or course platform bundling.
            </p>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>App Development for Digital Content</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Turn your book, card deck, or learning material into a custom web or mobile app. From e-readers and interactive
              libraries to card-drawing apps and guided journals — we create engaging digital experiences that enhance your
              content and expand your reach.
            </p>
            <p className="mt-2">
              We also help creators build companion tools or standalone apps to deliver, monetize, and scale their creative work.
            </p>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mt-10 mb-4">How We Can Help</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 text-base">
          <li><strong>eBook formatting, layout, and conversion</strong> (PDF, EPUB, MOBI)</li>
          <li><strong>Flipbook-style learning guides or magazines</strong></li>
          <li><strong>Oracle card illustration and content design</strong></li>
          <li><strong>App design and development</strong> for books, oracle decks, and educational tools</li>
          <li><strong>Upload and publishing walkthroughs</strong> (KDP, Gumroad, Shopify)</li>
          <li><strong>Support with copyright, ISBN, and accessibility standards</strong></li>
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
