// app/services/print-on-demand/page.tsx
"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function PrintOnDemandPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-8">
      <section>
        <h1 className="text-4xl font-bold mb-4">Print on Demand</h1>
        <p className="text-gray-700 text-lg">
          We help artists, photographers, and creative entrepreneurs turn their visuals into products. Whether it’s wall art,
          apparel, or stationery, we offer photography, layout, and print setup services to prepare your work for seamless
          Print on Demand (POD) distribution.
        </p>
        <p className="text-gray-700 text-lg mt-2">
          We specialize in visual storytelling that translates beautifully to print — and guide you through setup, testing,
          and launch so your creative products are ready for the world.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Product Photography</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Need high-quality visuals for your store? We provide clean, styled, or lifestyle photography of your products for
              use across POD platforms, ecommerce listings, or social media.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Art Direction</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We support layout, visual style, and branding decisions to help your designs look great on physical products.
              Whether you're launching a collection or creating a one-off gift, we help your creative work shine.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Print Setup</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              From canvas dimensions to DPI settings and file formats, we prepare your images for upload on platforms like
              Redbubble, Society6, Printify, Gelato, or your own site. We help you avoid technical issues before they cost you sales.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quality Control</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We assist with reviewing samples, test orders, and product listings to ensure everything arrives looking just as
              you imagined. Your reputation is worth getting it right the first time.
            </p>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mt-10 mb-4">How We Can Help</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 text-base">
          <li>Photography and design advice for physical product lines</li>
          <li>File prep for POD platforms (formatting, layout, resolution)</li>
          <li>Print tests, mockups, and quality checks</li>
          <li>Coaching on pricing, product selection, and launch strategy</li>
          <li>Bundled publishing + POD options (e.g., books, cards, journals)</li>
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
