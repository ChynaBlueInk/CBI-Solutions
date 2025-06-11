import Link from "next/link"
import { ExternalLink, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Portfolio() {
  const projects = [
    {
      title: "Memoir Wizard",
      description: "AI-powered memoir writing assistant that helps users craft their life stories.",
      category: "AI Tools",
      color: "from-blue-500 to-cyan-500",
      slug: "memoir-wizard",
    },
    {
      title: "Children's Library App",
      description: "Interactive digital library platform designed specifically for young readers.",
      category: "Education",
      color: "from-purple-500 to-pink-500",
      slug: "childrens-library-app",
    },
    {
      title: "AI Tools Wiki",
      description: "Comprehensive resource hub for AI tools and their creative applications.",
      category: "Documentation",
      color: "from-green-500 to-teal-500",
      slug: "ai-tools-wiki",
    },
    {
      title: "Oracle Card Generator",
      description: "Digital platform for creating and sharing custom oracle card decks.",
      category: "Creative Tools",
      color: "from-orange-500 to-red-500",
      slug: "oracle-card-generator",
    },
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Portfolio Highlights</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore some of our recent projects that showcase our commitment to innovation and creativity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Link
              key={project.title}
              href={`/portfolio/${project.slug}`}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 block"
            >
              <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white bg-opacity-20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
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
                <p className="text-gray-600 leading-relaxed mb-4">{project.description}</p>
                <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold">
            <Link href="/portfolio">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
