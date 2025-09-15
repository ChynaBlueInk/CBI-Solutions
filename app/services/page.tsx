// app/services/page.tsx
import Link from "next/link"
import { BookOpen, Bot, Film, FileText, Users, Camera, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// Note: Navigation and Footer are handled in app/layout.tsx

export default function ServicesPage() {
  const services = [
    {
      icon: BookOpen,
      title: "Online Course Development",
      description:
        "Custom e-learning and interactive course content that engages learners and works well in low-bandwidth settings.",
      features: ["Interactive Learning Modules", "Assessment Tools", "Progress Tracking", "Mobile Optimisation"],
      slug: "course-development",
    },
    {
      icon: Bot,
      title: "AI Writing Tools",
      description:
        "Assistants and workflows to speed up drafting, localisation, and QA — without losing your voice or quality.",
      features: ["Content Generation", "Writing Assistance", "Grammar & Style Checking", "Custom AI Models"],
      slug: "ai-tools",
    },
    {
      icon: Film,
      title: "Animation & Storytelling",
      description: "Compelling visual narratives that bring ideas to life — from concept to final cut.",
      features: ["2D/3D Animation", "Storyboarding", "Character Design", "Motion Graphics"],
      slug: "animation-storytelling",
    },
    {
      icon: FileText,
      title: "Digital Publishing",
      description:
        "Apps, books, oracle cards, and modern digital publications designed for today’s audiences.",
      features: ["App Development", "eBook Creation", "Interactive Publications", "Oracle Card Design", "Distribution Strategy"],
      slug: "digital-publishing",
    },
    {
      icon: Users,
      title: "Remote L&D Consulting",
      description:
        "Learning and development systems tailored for distributed teams and organisations across Aotearoa and the Pacific.",
      features: ["Training Strategy", "Remote Learning Design", "App Development Consultation", "Team Development", "Performance Analytics"],
      slug: "consulting",
    },
    {
      icon: Camera,
      title: "Print on Demand",
      description:
        "Photography and art with seamless print-on-demand integration when you’re ready to sell.",
      features: ["Product Photography", "Art Direction", "Print Setup", "Quality Control"],
      slug: "print-on-demand",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-[hsl(var(--muted))] to-[hsl(var(--accent))/10]">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[hsl(var(--foreground))] mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-xl text-[hsl(var(--muted-foreground))] leading-relaxed">
            Practical digital solutions to help your learning, content, and creative projects land well —
            here in Aotearoa and across the Pacific.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-[hsl(var(--primary-foreground))]" />
                </div>
                <h3 className="text-xl font-bold text-[hsl(var(--foreground))] mb-4">{service.title}</h3>
                <p className="text-[hsl(var(--muted-foreground))] leading-relaxed mb-6">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-[hsl(var(--muted-foreground))]">
                      <span className="w-2 h-2 bg-[hsl(var(--primary))] rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  variant="outline"
                  className="w-full border-[hsl(var(--primary))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))] hover:text-[hsl(var(--primary-foreground))] group-hover:scale-105 transition-all duration-300"
                >
                  <Link href={`/services/${service.slug}`}>
                    Learn more
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[hsl(var(--muted))]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[hsl(var(--foreground))] mb-6">Keen to get started?</h2>
          <p className="text-xl text-[hsl(var(--muted-foreground))] mb-8">
            Let’s chat about how we can help bring your ideas to life.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--accent))] text-[hsl(var(--primary-foreground))] px-8 py-4 rounded-full text-lg font-semibold"
          >
            <Link href="/contact">Start your project</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
