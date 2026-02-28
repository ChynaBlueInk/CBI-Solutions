import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import Contact from "./components/Contact"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Tag, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { projects } from "./portfolio/projects-data"

export default function Home() {
  // Show top 3 featured projects
  const featured = projects.slice(0, 3)

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600">A few recent highlights from our portfolio.</p>
        </div>

<div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {featured.map((project) => (
            <Link
              key={project.slug}
              href={`/portfolio/${project.slug}`}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 block"
            >
              <div className="relative aspect-square overflow-hidden">
  <Image
    src={project.heroImage || "/placeholder.svg"}
    alt={project.title}
    fill
    sizes="(max-width:768px) 100vw, 33vw"
    className="object-cover group-hover:scale-105 transition-transform duration-300"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
  <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
    <span className="bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium">
      {project.category}
    </span>
    <div className="flex items-center gap-1 text-white text-xs">
      <Calendar className="w-3 h-3" />
      {project.year}
    </div>
  </div>
</div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>

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

                <div className="flex items-center text-gray-600 font-semibold group-hover:translate-x-2 transition-transform duration-300 text-sm">
                  View Project
                  <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-full font-semibold">
            <Link href="/portfolio">View Full Portfolio</Link>
          </Button>
        </div>
      </section>

      <Contact />
    </main>
  )
}
