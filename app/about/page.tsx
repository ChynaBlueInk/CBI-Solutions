// app/about/page.tsx
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
  Users,
  Target,
  Lightbulb,
  Award,
  BookOpen,
  Bot,
  Film,
  FileText,
  Camera,
  Heart,
  Globe,
  GraduationCap,
  Palette,
  Mail,
  MessageCircle,
  ArrowRight,
} from "lucide-react"

// Note: Navigation and Footer are provided by app/layout.tsx — don’t import them here.

export const metadata: Metadata = {
  title: "About – CBI Learning Solutions",
  description:
    "CBI Learning Solutions is a small Aotearoa New Zealand studio creating practical learning, AI workflows, and digital publishing with a Pacific focus.",
}

export default function AboutPage() {
  const team = [
    {
      name: "Cheryl Tyler",
      role: "Founder & Learning Technologist",
      description:
        "Leads product vision, learning design, and the tech stack. Builds templates, automations, and AI workflows so courses ship quickly, look sharp, and work in low-bandwidth contexts when needed.",
      image: "/about/cheryl.jpg",
    },
    {
      name: "Susan Tyler",
      role: "Learning Operations & Producer",
      description:
        "Keeps projects humming — briefs, schedules, QA sign-off, and launch comms. Turns feedback into a tidy, actionable backlog so nothing falls through the cracks.",
      image: "/about/susan.jpg",
    },
  ]

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We try new things — but always with purpose. Practical, future-ready solutions that actually get used.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "We work alongside clients and partners as one team to ship the right thing, not just the shiny thing.",
    },
    {
      icon: Target,
      title: "Purpose-Driven",
      description:
        "Every project has clear learner outcomes and a simple way to check if it’s working.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "From design to delivery we keep the bar high — especially for accessibility, performance, and inclusivity.",
    },
  ]

  const coreValues = [
    { icon: Palette, label: "Creative" },
    { icon: Heart, label: "Ethical" },
    { icon: Globe, label: "Pacific-minded" },
    { icon: GraduationCap, label: "Education-led" },
  ]

  const services = [
    {
      icon: BookOpen,
      title: "Online Course Development",
      description:
        "Interactive content and lightweight delivery that stands up well in low-connectivity environments.",
    },
    {
      icon: Bot,
      title: "AI Writing & Workflow Assist",
      description:
        "Assistants to speed up drafting, localisation, and QA — without losing voice or quality.",
    },
    {
      icon: Film,
      title: "Animation & Storytelling",
      description: "Visual stories that help ideas stick — from concept to final cut.",
    },
    {
      icon: FileText,
      title: "Digital Publishing",
      description:
        "Books, card decks, and modern digital publications — built for today’s readers.",
    },
    {
      icon: Users,
      title: "Remote L&D Consulting",
      description:
        "Lean learning systems for distributed teams and organisations across Aotearoa and the Pacific.",
    },
    {
      icon: Camera,
      title: "Print on Demand",
      description:
        "Photography and artwork with seamless POD integration when you’re ready to sell.",
    },
  ]

  const EMAIL = "ChynaBlueInk@gmail.com"
  const WHATSAPP = "https://wa.me/64278183098"

  return (
    <section className="min-h-screen bg-[hsl(var(--muted))]">
      {/* Hero */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[hsl(var(--foreground))] mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] bg-clip-text text-transparent">
              CBI Learning Solutions
            </span>
          </h1>
          <p className="text-xl text-[hsl(var(--muted-foreground))] leading-relaxed">
            A small Aotearoa New Zealand studio pairing creativity and tech to deliver
            practical learning — fast, accessible, and measurable.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[hsl(var(--foreground))] mb-6">Our Story</h2>
              <p className="text-lg text-[hsl(var(--muted-foreground))] mb-6 leading-relaxed">
                CBI Learning Solutions began with a straightforward goal: bridge creativity and
                technology in education. What started as a passion project helping educators build
                engaging online content has grown into a suite of lightweight, scalable learning tools.
              </p>
              <p className="text-lg text-[hsl(var(--muted-foreground))] mb-6 leading-relaxed">
                We believe creativity can transform learning and business. Our mission is to provide
                innovative digital solutions that help educators, creatives, and entrepreneurs share
                their knowledge with the world — with a strong focus on Timor-Leste, the Pacific, and
                communities that benefit from low-bandwidth design.
              </p>
              <p className="text-lg text-[hsl(var(--muted-foreground))] leading-relaxed">
                We’re remote-first and values-led — ethical, inclusive, and geared for sustainable growth.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[hsl(var(--primary))/10] to-[hsl(var(--accent))/10] rounded-3xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <Image
                    src="/placeholder.svg?height=250&width=350"
                    alt="CBI Learning Solutions"
                    width={350}
                    height={250}
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-[hsl(var(--foreground))] mb-2">Small team, big mahi</h3>
                    <p className="text-[hsl(var(--muted-foreground))]">Creativity × Technology for education</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 bg-[hsl(var(--muted))]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[hsl(var(--foreground))] mb-6">Our Core Values</h2>
            <p className="text-xl text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto">
              Principles that guide every project and partnership.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {coreValues.map((value) => (
              <div
                key={value.label}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:shadow-lg transition-shadow">
                  <value.icon className="w-8 h-8 text-[hsl(var(--primary-foreground))]" />
                </div>
                <p className="font-semibold text-[hsl(var(--foreground))]">{value.label}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-[hsl(var(--primary-foreground))]" />
                </div>
                <h3 className="text-xl font-bold text-[hsl(var(--foreground))] mb-4">{value.title}</h3>
                <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--foreground))] mb-6">What We Do</h2>
            <p className="text-xl text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto">
              A practical set of creative and educational services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-gradient-to-br from-[hsl(var(--muted))] to-[hsl(var(--accent))/10] rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-[hsl(var(--primary-foreground))]" />
                </div>
                <h3 className="text-xl font-bold text-[hsl(var(--foreground))] mb-4">{service.title}</h3>
                <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 bg-[hsl(var(--accent))/10]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[hsl(var(--foreground))] mb-6">Meet the Team</h2>
            <p className="text-xl text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto">
              Two roles, clear lanes — small, nimble, and accountable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center group">
                <div className="relative mb-6 group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="w-32 h-32 object-cover rounded-full mx-auto shadow-lg"
                  />
                  <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-[hsl(var(--primary))/20] to-[hsl(var(--accent))/20] group-hover:opacity-0 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-bold text-[hsl(var(--foreground))] mb-2">{member.name}</h3>
                <p className="text-[hsl(var(--primary))] font-semibold mb-4">{member.role}</p>
                <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[hsl(var(--foreground))] mb-4">Keen to work with us?</h2>
          <p className="text-xl text-[hsl(var(--muted-foreground))] mb-8">
            Email{" "}
            <a className="text-[hsl(var(--primary))] hover:underline" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>{" "}
            or message us on{" "}
            <a
              className="text-[hsl(var(--primary))] hover:underline"
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp (+64&nbsp;278&nbsp;183&nbsp;098)
            </a>
            .
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${EMAIL}?subject=${encodeURIComponent("About page enquiry")}`}
              className="inline-flex items-center justify-center bg-[hsl(var(--primary))] hover:bg-[hsl(var(--accent))] text-[hsl(var(--primary-foreground))] px-6 py-3 rounded-2xl font-semibold"
            >
              <Mail className="w-4 h-4 mr-2" />
              Email us
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-[hsl(var(--border))] hover:bg-[hsl(var(--muted))] text-[hsl(var(--foreground))] px-6 py-3 rounded-2xl font-semibold"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </a>
            <Link
              href="/contact?intent=start"
              className="inline-flex items-center justify-center bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] hover:from-[hsl(var(--accent))] hover:to-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] px-6 py-3 rounded-2xl font-semibold"
            >
              Get started
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
          <p className="text-xs text-[hsl(var(--muted-foreground))] mt-4">
            We keep it simple: no marketing emails — ever.
          </p>
        </div>
      </section>
    </section>
  )
}
