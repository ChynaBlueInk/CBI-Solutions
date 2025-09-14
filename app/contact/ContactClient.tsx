"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { Mail, MessageCircle, MapPin, ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactClient() {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form:", formData)
    alert("Thanks! We’ll be in touch shortly.")
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }))

  const EMAIL = "ChynaBlueInk@gmail.com"
  const WHATSAPP_LINK = "https://wa.me/64278183098"

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            {intent === "start" ? (
              <>Keen to <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">get started?</span></>
            ) : (
              <>Get in <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span></>
            )}
          </h1>
          <p className="text-xl text-gray-700">Based in Aotearoa New Zealand — working across the Pacific and beyond.</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center"><Mail className="w-6 h-6 text-blue-600" /></div>
              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <a href={`mailto:${EMAIL}`} className="text-blue-600 hover:underline">{EMAIL}</a>
                <p className="text-gray-600 text-sm mt-1">We typically reply within 1–2 business days.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center"><MessageCircle className="w-6 h-6 text-green-600" /></div>
              <div>
                <h3 className="font-semibold text-gray-900">WhatsApp</h3>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">+64 278 183 098</a>
                <p className="text-gray-600 text-sm mt-1">Quickest for a same-day chat.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center"><MapPin className="w-6 h-6 text-purple-600" /></div>
              <div>
                <h3 className="font-semibold text-gray-900">Remote-first</h3>
                <p className="text-gray-700">Aotearoa New Zealand • Working globally</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{intent === "start" ? "Start a new project" : "Send us a message"}</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div><label className="block text-sm font-medium text-gray-700 mb-2">First name *</label>
                  <Input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First name" required className="rounded-2xl border-gray-200" />
                </div>
                <div><label className="block text-sm font-medium text-gray-700 mb-2">Last name *</label>
                  <Input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last name" required className="rounded-2xl border-gray-200" />
                </div>
              </div>
              <div><label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" required className="rounded-2xl border-gray-200" />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div><label className="block text-sm font-medium text-gray-700 mb-2">Company / organisation</label>
                  <Input name="company" value={formData.company} onChange={handleChange} placeholder="(optional)" className="rounded-2xl border-gray-200" />
                </div>
                <div><label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                  <Input name="subject" value={formData.subject} onChange={handleChange} placeholder="How can we help?" required className="rounded-2xl border-gray-200" />
                </div>
              </div>
              <div><label className="block text-sm font-medium text-gray-700 mb-2">Project details *</label>
                <Textarea name="message" value={formData.message} onChange={handleChange} placeholder={intent === "start" ? "Tell us about your idea, goals, timeframe…" : "Kia ora — I’m keen to chat about…"} rows={5} required className="rounded-2xl border-gray-200 resize-none" />
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button type="submit" className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-2xl text-lg font-semibold">
                  Send message <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button asChild variant="outline" className="py-4 rounded-2xl"><a href={`mailto:${EMAIL}?subject=${encodeURIComponent(formData.subject)}`}>Email instead</a></Button>
                <Button asChild variant="outline" className="py-4 rounded-2xl"><a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"><Phone className="w-4 h-4 mr-2" />WhatsApp</a></Button>
              </div>
              <p className="text-xs text-gray-500">No marketing emails — ever.</p>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
