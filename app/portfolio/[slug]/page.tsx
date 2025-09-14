// app/portfolio/[slug]/page.tsx
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Tag, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { projects } from "../projects-data"

// Optional: basic static metadata for the route (dynamic per-project can be added later)
export const metadata: Metadata = {
  title: "Project – CBI Learning Solutions",
  description: "Deep dive into a selected project from our portfolio.",
}

// Note: Navigation and Footer are provided by app/layout.tsx

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const slug = params.slug
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="pt-24 pb-16 px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Project not found</h1>
          <p className="text-gray-700 mb-8">The project you’re looking for doesn’t exist.</p>
          <Button asChild>
            <Link href="/portfolio">Back to portfolio</Link>
          </Button>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Link href="/portfolio" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to portfolio
          </Link>

          <div className="relative rounded-3xl overflow-hidden mb-8">
            <Image
              src={project.heroImage || "/placeholder.svg"}
              alt={project.title}
              width={800}
              height={400}
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-4 text-white mb-4">
                <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </span>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="w-4 h-4" />
                  {project.year}
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">{project.title}</h1>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 bg-white text-gray-700 px-3 py-1 rounded-full text-sm shadow-sm"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>

          <p className="text-xl text-gray-700 leading-relaxed">{project.description}</p>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Project overview</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">{project.longDescription}</p>

              {/* Image Gallery */}
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Project screenshots</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {project.images.map((image: string, idx: number) => (
                  <div key={idx} className="rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} screenshot ${idx + 1}`}
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key features</h3>
              <ul className="space-y-3 mb-8">
                {project.features.map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Challenge</h3>
              <p className="text-gray-700 leading-relaxed mb-6">{project.challenges}</p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Solution</h3>
              <p className="text-gray-700 leading-relaxed mb-6">{project.solution}</p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Results</h3>
              <p className="text-gray-700 leading-relaxed">{project.results}</p>
            </div>

            <div>
              <div className="bg-gray-50 rounded-3xl p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Technologies used</h3>
                <div className="space-y-2">
                  {project.technologies.map((tech: string, idx: number) => (
                    <div key={idx} className="bg-white px-3 py-2 rounded-lg text-sm text-gray-700">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                {project.liveUrl && (
                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-2xl">
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View live project
                    </Link>
                  </Button>
                )}

                {project.githubUrl && (
                  <Button asChild variant="outline" className="w-full border-gray-300 rounded-2xl">
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View source code
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Interested in something similar?</h2>
          <p className="text-xl text-gray-700 mb-8">
            Let’s have a kōrero about your goals and how we can help.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold"
          >
            <Link href="/contact">Start your project</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
