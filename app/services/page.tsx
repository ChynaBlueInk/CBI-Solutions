// app/services/page.tsx
import Link from "next/link"
import {BookOpen,Film,FileText,Users,ClipboardCheck,Workflow,ArrowRight}from "lucide-react"

export default function ServicesPage(){
  const services=[
    {
      icon:BookOpen,
      title:"Learning Design & Course Development",
      description:
        "Story-led learning journeys, microlearning, and blended programmes that make complex topics clear and usable.",
      features:["Learning journeys & course design","Interactive modules & resources","Blended delivery support","Low-bandwidth-friendly options"],
      slug:"learning-design",
    },
    {
      icon:Film,
      title:"Scenario Design & Storytelling",
      description:
        "Decision-based scenarios, scripts, and narratives that reflect real-world work — designed to change behaviour, not just tick boxes.",
      features:["Scenario mapping & branching","Storyboarding & scripts","Role-based practice activities","Behaviour-focused learning design"],
      slug:"storytelling",
    },
    {
      icon:ClipboardCheck,
      title:"Assessment, QA & Learning Evidence",
      description:
        "Defensible assessment design, feedback loops, and quality checks so your learning holds up in regulated and high-stakes environments.",
      features:["Assessment design & rubrics","Feedback loops & checks","Compliance-aligned learning","Evaluation and evidence support"],
      slug:"assessment-qa",
    },
    {
      icon:Workflow,
      title:"Learning Systems & Digital Delivery",
      description:
        "LMS setup and optimisation, content structures, templates, and rollout support — so learning is easy to maintain and scale.",
      features:["LMS setup & optimisation","Templates and content structures","Rollout and adoption support","Tracking and reporting foundations"],
      slug:"digital-delivery",
    },
    {
      icon:Users,
      title:"Capability Uplift & Team Enablement",
      description:
        "Workshops and mentoring for SMEs and teams to improve how they write, design, and maintain learning content (including sensible AI use where it helps).",
      features:["Team workshops & mentoring","SME enablement and coaching","Writing for learning support","Practical AI use guidelines"],
      slug:"team-enablement",
    },
    {
      icon:FileText,
      title:"Content Editing & Plain-Language Rewrite",
      description:
        "Clear, human writing for learning, policy, and product content — improving readability, tone, and structure without losing accuracy or voice.",
      features:["Plain-language rewrites","Structure and flow improvements","Tone and consistency checks","Learning-ready content formatting"],
      slug:"editing",
    },
  ]

  return(
    <main className="min-h-screen bg-gradient-to-br from-[hsl(var(--muted))] to-[hsl(var(--accent))/10]">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[hsl(var(--foreground))] mb-6">
            Services
          </h1>
          <p className="text-xl text-[hsl(var(--muted-foreground))] leading-relaxed">
            Practical learning design and digital delivery — grounded in real-world performance, with storytelling at the centre.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service)=>(
              <div
                key={service.title}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-[hsl(var(--primary-foreground))]"/>
                </div>

                <h3 className="text-xl font-bold text-[hsl(var(--foreground))] mb-4">{service.title}</h3>
                <p className="text-[hsl(var(--muted-foreground))] leading-relaxed mb-6">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature,idx)=>(
                    <li key={idx} className="flex items-center text-sm text-[hsl(var(--muted-foreground))]">
                      <span className="w-2 h-2 bg-[hsl(var(--primary))] rounded-full mr-3"/>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex w-full items-center justify-center rounded-full border border-[hsl(var(--primary))] px-4 py-3 text-sm font-semibold text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))] hover:text-[hsl(var(--primary-foreground))] group-hover:scale-[1.02] transition-all duration-300"
                >
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4"/>
                </Link>
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
            Tell me what you’re building, who it’s for, and what “good” looks like — I’ll help you shape the learning to get there.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[hsl(var(--primary))] hover:bg-[hsl(var(--accent))] text-[hsl(var(--primary-foreground))] px-8 py-4 text-lg font-semibold transition"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </main>
  )
}