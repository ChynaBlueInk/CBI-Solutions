// app/portfolio/page.tsx
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ExternalLink, ArrowRight, Calendar, Tag } from "lucide-react"

export const metadata: Metadata = {
  title: "Portfolio – CBI Learning Solutions",
  description:
    "A selection of projects across AI, education, and digital publishing — built for real-world use in Aotearoa and the Pacific.",
}

// Note: Navigation and Footer come from app/layout.tsx

export default function PortfolioPage() {
  const projects = [
    {
      title: "AI Wiki Toolbox",
      description: "A practical resource hub for AI tools and how to apply them.",
      category: "Documentation",
      slug: "ai-wiki-toolbox",
      year: "2024",
      tags: ["Documentation", "AI", "Resources"],
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "L&D Portfolio Hub",
      description: "A tidy showcase of learning design capability.",
      category: "Portfolio",
      slug: "ld-portfolio-hub",
      year: "2024",
      tags: ["Portfolio", "L&D", "Showcase"],
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Lafaek Children’s Book Library",
      description: "Digital library for tamariki in Timor-Leste — designed for low bandwidth.",
      category: "Education",
      slug: "lafaek-childrens-book-library",
      year: "2024",
      tags: ["Education", "Children", "Library"],
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Memoir Wizard",
      description: "AI-powered assistant for writing life stories.",
      category: "AI Tools",
      slug: "memoir-wizard",
      year: "2024",
      tags: ["AI", "Writing", "Storytelling"],
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Oracle Card Generator",
      description: "Create and share oracle decks — digital or print.",
      category: "Creative Tools",
      slug: "oracle-card-generator",
      year: "2024",
      tags: ["Creative", "AI Art", "Cards"],
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Sharespace NZ",
      description: "Aotearoa platform for house sharing and tiny-home land.",
      category: "Community",
      slug: "sharespace-nz",
      year: "2024",
      tags: ["Community", "Housing", "NZ"],
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Timor Tourism & Booking",
      description: "Tour and operator booking prototype for Timor-Leste.",
      category: "Travel",
      slug: "timor-booking-site",
      year: "2024",
      tags: ["Travel", "Booking", "Timor-Leste"],
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "ANATUR Homepage",
      description: "Concept homepage for Timor-Leste’s tourism authority.",
      category: "Travel",
      slug: "anatur-tourism-homepage",
      year: "2024",
      tags: ["Tourism", "Govt", "Timor-Leste"],
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Projects that blend creativity and tech — built to work in the real world.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link
                key={project.title}
                href={`/portfolio/${project.slug}`}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 block"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                    <div className="flex items-center gap-2 text-white text-sm">
                      <Calendar className="w-4 h-4" />
                      {project.year}
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                      <ExternalLink className="w-5 h-5 text-gray-700" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4 text-sm">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-300 text-sm">
                    View project
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
