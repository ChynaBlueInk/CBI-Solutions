// app/components/Portfolio.tsx
import Link from "next/link"
import { ExternalLink, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Portfolio() {
  const projects = [
    {
      title: "Memoir Wizard",
      description: "AI-assisted memoir writing to help people craft life stories with ease.",
      category: "AI Tools",
      color: "from-blue-500 to-cyan-500",
      slug: "memoir-wizard",
    },
    {
      title: "Children's Library App",
      description: "A kid-friendly digital library designed for real-world low-bandwidth contexts.",
      category: "Education",
      color: "from-purple-500 to-pink-500",
      slug: "childrens-library-app",
    },
    {
      title: "AI Wiki Toolbox",
      description: "A practical hub for AI tools and how to use them well.",
      category: "Documentation",
      color: "from-green-500 to-teal-500",
      slug: "ai-wiki-toolbox",
    },
    {
      title: "Oracle Card Generator",
      description: "Create and share custom oracle decks — print or digital.",
      category: "Creative Tools",
      color: "from-orange-500 to-red-500",
      slug: "oracle-card-generator",
    },
    {
      title: "AI-Powered LMS",
      description: "Prototype LMS with AI-generated course outlines and content ideas.",
      category: "AI Tools",
      color: "from-indigo-500 to-purple-500",
      slug: "ai-powered-lms",
    },
    {
      title: "HouseShare NZ (Sharespace)",
      description: "Aotearoa community platform for flatshares, housemates, and tiny-home land.",
      category: "Community",
      color: "from-yellow-500 to-orange-500",
      slug: "houseshare-nz",
    },
    {
      title: "Women's Housing Site",
      description: "Prototype site supporting women’s housing and community connections.",
      category: "Community",
      color: "from-pink-500 to-red-400",
      slug: "womens-housing-site",
    },
    {
      title: "Children’s AR Story App",
      description: "Interactive storytelling prototype using augmented reality for tamariki.",
      category: "Education",
      color: "from-emerald-500 to-teal-400",
      slug: "childrens-ar-story-app",
    },
    {
      title: "Timor Tourism & Booking Site",
      description: "Tourism and booking platform for Timor-Leste operators and tours.",
      category: "Travel",
      color: "from-green-500 to-yellow-400",
      slug: "timor-booking-site",
    },
    {
      title: "Hotel Reservation App",
      description: "Modern hotel booking prototype with a clean, simple UI.",
      category: "Travel",
      color: "from-blue-700 to-blue-400",
      slug: "hotel-reservation-app",
    },
    {
      title: "ANATUR Tourism Homepage",
      description: "Homepage concept for Timor-Leste’s national tourism authority.",
      category: "Travel",
      color: "from-amber-500 to-orange-400",
      slug: "anatur-tourism-homepage",
    },
    {
      title: "L&D Portfolio Hub",
      description: "A tidy showcase of learning design work and capability.",
      category: "Portfolio",
      color: "from-sky-500 to-indigo-400",
      slug: "ld-portfolio-hub",
    },
    {
      title: "CBI Learning Solutions Company Site",
      description: "The core company website for services and projects.",
      category: "Portfolio",
      color: "from-gray-600 to-gray-400",
      slug: "cbi-solutions-site",
    },
    {
      title: "AI Tool Wiki Prototype",
      description: "Early prototype of an AI tools knowledge base.",
      category: "Prototype",
      color: "from-slate-500 to-slate-400",
      slug: "ai-tool-wiki-prototype",
    },
    {
      title: "Wiki Prototype",
      description: "Initial wiki experiment used for testing layouts and content flow.",
      category: "Prototype",
      color: "from-lime-500 to-green-400",
      slug: "wiki-prototype",
    },
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Portfolio Highlights</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            A few recent projects that show how we blend creativity and tech — practical, lightweight, and human-centred.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={`/portfolio/${project.slug}`}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 block"
            >
              <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
                <div className="absolute top-4 right-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <ExternalLink className="w-5 h-5 text-gray-700" />
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">{project.description}</p>
                <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold">
            <Link href="/portfolio">View all projects</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
