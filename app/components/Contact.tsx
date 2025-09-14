// app/components/Contact.tsx
"use client"

import { Mail, MessageCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const EMAIL = "ChynaBlueInk@gmail.com"
  const WHATSAPP_LINK = "https://wa.me/64278183098"

  return (
    <section className="py-20 px-4 bg-[hsl(30,48%,94%)]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-teal-900 mb-6">
            Let’s collaborate on something beautiful
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Ready to kick off a project? Drop us a line and we’ll shape a practical path to your MVP.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-bold text-teal-900 mb-6">Get in touch</h3>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Courses, AI builds, L&D systems — we keep it lean, accessible, and measurable.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-teal-700" />
                </div>
                <div>
                  <p className="font-semibold text-teal-900">Email</p>
                  <a href={`mailto:${EMAIL}`} className="text-teal-700 hover:underline">
                    {EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-2xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-teal-700" />
                </div>
                <div>
                  <p className="font-semibold text-teal-900">WhatsApp</p>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline">
                    +64 278 183 098
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-yellow-50 rounded-3xl p-8 shadow-lg">
            {/* This form is just a visual teaser; the CTA goes to /contact */}
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-teal-800 mb-2">First name</label>
                  <Input type="text" placeholder="First name" className="rounded-2xl border-0 bg-white shadow-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-teal-800 mb-2">Last name</label>
                  <Input type="text" placeholder="Last name" className="rounded-2xl border-0 bg-white shadow-sm" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-teal-800 mb-2">Email</label>
                <Input type="email" placeholder="you@example.com" className="rounded-2xl border-0 bg-white shadow-sm" />
              </div>

              <div>
                <label className="block text-sm font-medium text-teal-800 mb-2">Project details</label>
                <Textarea placeholder="Tell us about your project…" rows={4} className="rounded-2xl border-0 bg-white shadow-sm resize-none" />
              </div>

              <Button
                asChild
                className="w-full bg-gradient-to-r from-teal-600 to-yellow-500 hover:from-teal-700 hover:to-yellow-600 text-white py-4 rounded-2xl text-lg font-semibold transition-all duration-300 hover:scale-105 group"
              >
                <a href="/contact?intent=start">
                  Get started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
