import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import Link from "next/link"
import { BookOpen, Bot, Film, FileText, Users, Camera, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  const services = [
    {
      icon: BookOpen,
      title: "Online Course Development",
      description: "Custom e-learning platforms and interactive course content that engages and educates.",
      features: ["Interactive Learning Modules", "Assessment Tools", "Progress Tracking", "Mobile Optimization"],
      slug: "course-development",
    },
    {
      icon: Bot,
      title: "AI Writing Tools",
      description: "Intelligent writing assistants and content generation tools powered by cutting-edge AI.",
      features: ["Content Generation", "Writing Assistance", "Grammar & Style Checking", "Custom AI Models"],
      slug: "ai-tools",
    },
    {
      icon: Film,
      title: "Animation & Storytelling",
      description: "Compelling visual narratives and animated content that brings stories to life.",
      features: ["2D/3D Animation", "Storyboarding", "Character Design", "Motion Graphics"],
      slug: "animation-storytelling",
    },
    {
      icon: FileText,
      title: "Digital Publishing",
      description: "App Development, Books, oracle cards, and digital publications designed for modern audiences.",
      features: ["App Development", "eBook Creation", "Interactive Publications", "Oracle Card Design", "Distribution Strategy"],
      slug: "digital-publishing",
    },
    {
      icon: Users,
      title: "Remote L&D Consulting",
      description: "Learning and development strategies tailored for distributed teams and organizations.",
      features: ["Training Strategy", "Remote Learning Design", "App Development Consultation", "Team Development", "Performance Analytics"],
      slug: "consulting",
    },
    {
      icon: Camera,
      title: "Print on Demand",
      description: "Photography and art services with seamless print-on-demand integration.",
      features: ["Product Photography", "Art Direction", "Print Setup", "Quality Control"],
      slug: "print-on-demand",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Comprehensive digital solutions designed to help you succeed in the modern creative and educational
            landscape.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  variant="outline"
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white group-hover:scale-105 transition-all duration-300"
                >
                  <Link href={`/services/${service.slug}`}>
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how our services can help bring your vision to life.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold"
          >
            <Link href="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
