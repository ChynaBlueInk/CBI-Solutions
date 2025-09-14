// app/contact/page.tsx
"use client"

import { useMemo, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Mail, MessageCircle, MapPin, ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  const searchParams = useSearchParams()
  const intent = searchParams.get("intent") || ""
  const qpSubject = searchParams.get("subject") || ""
  const defaultSubject = qpSubject || "New project enquiry"

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    subject: defaultSubject,
    message: "",
  })

  const heroTitle = useMemo(
    () =>
      intent === "start"
        ? "Keen to get started?"
        : "Get in " +
          (/* keep styling split like your other pages */ "") +
          "Touch",
    [intent]
  )

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // MVP: just show a confirmation (plug in your backend/email later)
    console.log("Contact form:", formData)
    alert("Thanks! We’ll be in touch shortly.")
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const EMAIL = "ChynaBlueInk@gmail.com"
  const WHATSAPP_LINK = "https://wa.me/64278183098" // +64 278183098 → 64278183098

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            {intent === "start" ? (
              <>
                Keen to <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">get started?</span>
              </>
            ) : (
              <>
                Get in <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
              </>
            )}
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Based in Aotearoa New Zealand — working with organisations across the Pacific and beyond.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Let’s kōrero</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Whether you’re after an online course, an AI-assisted build, or lightweight L&D support, we’ll help
                shape a practical path to your first release (MVP), then iterate.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a href={`mailto:${EMAIL}`} className="text-blue-600 hover:underline">
                      {EMAIL}
                    </a>
                    <p className="text-gray-600 text-sm mt-1">We typically reply within 1–2 business days.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">WhatsApp</h3>
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      +64 278 183 098
                    </a>
                    <p className="text-gray-600 text-sm mt-1">Quickest for a same-day chat.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Remote-first</h3>
                    <p className="text-gray-700">Aotearoa New Zealand • Working globally</p>
                  </div>
                </div>
              </div>

              {/* Simple FAQ */}
              <div className="mt-12">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Common pātai (FAQ)</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">How fast can we kick off?</h4>
                    <p className="text-gray-700 text-sm">
                      For MVPs, we usually scope in a week and ship the first cut in 2–4 weeks depending on complexity.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Do you work across time zones?</h4>
                    <p className="text-gray-700 text-sm">
                      Yup — we’re used to async workflows and flexible meeting slots.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">What’s included in consulting?</h4>
                    <p className="text-gray-700 text-sm">
                      Strategy, scoping, templates, and a tidy backlog so you can keep momentum between sessions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {intent === "start" ? "Start a new project" : "Send us a message"}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First name *</label>
                    <Input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First name"
                      className="rounded-2xl border-gray-200"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last name *</label>
                    <Input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last name"
                      className="rounded-2xl border-gray-200"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="rounded-2xl border-gray-200"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company / organisation</label>
                    <Input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="(optional)"
                      className="rounded-2xl border-gray-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      className="rounded-2xl border-gray-200"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project details *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={
                      intent === "start"
                        ? "Tell us about your idea, goals, timeframe, and any examples you like…"
                        : "Kia ora — I’m keen to chat about…"
                    }
                    rows={5}
                    className="rounded-2xl border-gray-200 resize-none"
                    required
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-2xl text-lg font-semibold"
                  >
                    Send message
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button asChild variant="outline" className="py-4 rounded-2xl">
                    <a href={`mailto:${EMAIL}?subject=${encodeURIComponent(formData.subject)}`}>Email instead</a>
                  </Button>
                  <Button asChild variant="outline" className="py-4 rounded-2xl">
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                      <Phone className="w-4 h-4 mr-2" />
                      WhatsApp
                    </a>
                  </Button>
                </div>

                <p className="text-xs text-gray-500">
                  This form is for enquiries only. No marketing emails — ever.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
