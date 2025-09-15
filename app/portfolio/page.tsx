// app/portfolio/page.tsx
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ExternalLink, ArrowRight, Calendar, Tag } from "lucide-react"
import { projects } from "./projects-data"

export const metadata: Metadata = {
  title: "Portfolio – CBI Learning Solutions",
  description:
    "A selection of projects across AI, education, and digital publishing — built for real-world use in Aotearoa and the Pacific.",
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[hsl(var(--muted))] to-[hsl(var(--accent))/10]">
      {/* Hero */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[hsl(var(--foreground))] mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] bg-clip-text text-transparent">
              Portfolio
            </span>
          </h1>
          <p className="text-xl text-[hsl(var(--muted-foreground))] leading-relaxed">
            Projects that blend creativity and tech — built to work in the real world.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/portfolio/${project.slug}`}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 block"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
  src={project.heroImage || "/placeholder.svg"}
  alt={project.title}
  width={400}
  height={200}
  placeholder="blur"
  blurDataURL={project.heroImage || "/placeholder.svg"} // quick fallback
  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
/>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    <span className="bg-[hsl(var(--primary))]/90 text-[hsl(var(--primary-foreground))] px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                    <div className="flex items-center gap-2 text-white text-sm">
                      <Calendar className="w-4 h-4" />
                      {project.year}
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 bg-[hsl(var(--primary-foreground))] rounded-full flex items-center justify-center shadow-md">
                      <ExternalLink className="w-5 h-5 text-[hsl(var(--primary))]" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[hsl(var(--foreground))] mb-3 group-hover:text-[hsl(var(--primary))] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[hsl(var(--muted-foreground))] leading-relaxed mb-4 text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 bg-[hsl(var(--muted))] text-[hsl(var(--foreground))] px-2 py-1 rounded-full text-xs"
                      >
                        <Tag className="w-3 h-3 text-[hsl(var(--primary))]" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center text-[hsl(var(--primary))] font-semibold group-hover:translate-x-2 transition-transform duration-300 text-sm">
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
