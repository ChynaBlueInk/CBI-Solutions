import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import Link from "next/link"
import Image from "next/image"
import { ExternalLink, ArrowRight, Calendar, Tag } from "lucide-react"

export default function PortfolioPage() {
  const projects = [
    {
      title: "Memoir Wizard",
      description:
        "AI-powered memoir writing assistant that helps users craft their life stories with guided prompts and intelligent suggestions.",
      category: "AI Tools",
      color: "from-blue-500 to-cyan-500",
      slug: "memoir-wizard",
      year: "2024",
      tags: ["AI", "Writing", "Storytelling"],
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Children's Library App",
      description:
        "Interactive digital library platform designed specifically for young readers with gamification elements.",
      category: "Education",
      color: "from-purple-500 to-pink-500",
      slug: "childrens-library-app",
      year: "2023",
      tags: ["Education", "Mobile App", "Children"],
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "AI Tools Wiki",
      description:
        "Comprehensive resource hub for AI tools and their creative applications, featuring reviews and tutorials.",
      category: "Documentation",
      color: "from-green-500 to-teal-500",
      slug: "ai-tools-wiki",
      year: "2024",
      tags: ["Documentation", "AI", "Resources"],
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Oracle Card Generator",
      description: "Digital platform for creating and sharing custom oracle card decks with AI-generated artwork.",
      category: "Creative Tools",
      color: "from-orange-500 to-red-500",
      slug: "oracle-card-generator",
      year: "2023",
      tags: ["Creative", "AI Art", "Spirituality"],
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Remote Learning Hub",
      description: "Comprehensive platform for distributed teams to access training materials and track progress.",
      category: "Education",
      color: "from-indigo-500 to-purple-500",
      slug: "remote-learning-hub",
      year: "2023",
      tags: ["Remote Work", "Training", "Analytics"],
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Creative Writing Assistant",
      description: "AI-powered tool that helps writers overcome blocks and develop their storytelling skills.",
      category: "AI Tools",
      color: "from-pink-500 to-rose-500",
      slug: "creative-writing-assistant",
      year: "2024",
      tags: ["Writing", "AI", "Creativity"],
      image: "/placeholder.svg?height=200&width=400",
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
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Explore our collection of innovative projects that showcase our commitment to creativity, technology, and
            education.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    <span className="bg-white bg-opacity-20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
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
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs"
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-300 text-sm">
                    View Project
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
