// app/portfolio/[slug]/page.tsx
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Tag, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { projects } from "../projects-data"

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) notFound()

  return (
    <main className="min-h-screen bg-gradient-to-br from-[hsl(var(--muted))] to-[hsl(var(--accent))/10]">
      {/* Hero */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-5xl mx-auto">
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-[hsl(var(--primary))] hover:underline mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1">
              <Image
                src={project.heroImage || "/placeholder.svg"}
                alt={project.title}
                width={800}
                height={400}
                className="rounded-2xl shadow-lg w-full h-auto object-cover"
              />
            </div>

            <div className="flex-1">
              <h1 className="text-4xl font-bold text-[hsl(var(--foreground))] mb-4">{project.title}</h1>
              <p className="text-lg text-[hsl(var(--muted-foreground))] mb-6">{project.longDescription}</p>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="inline-flex items-center gap-2 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] px-3 py-1 rounded-full text-sm">
                  <Calendar className="w-4 h-4" />
                  {project.year}
                </span>
                {project.tags.map((tag) => (
                  <span key={tag} className="inline-flex items-center gap-1 bg-[hsl(var(--muted))] text-[hsl(var(--foreground))] px-2 py-1 rounded-full text-xs">
                    <Tag className="w-3 h-3 text-[hsl(var(--primary))]" />
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                {project.liveUrl && (
                  <Button asChild className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--accent))] text-[hsl(var(--primary-foreground))]">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Site
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button
                    asChild
                    variant="outline"
                    className="border-[hsl(var(--primary))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))] hover:text-[hsl(var(--primary-foreground))]"
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-[hsl(var(--foreground))] mb-4">Key Features</h2>
            <ul className="list-disc list-inside space-y-2 text-[hsl(var(--muted-foreground))]">
              {project.features.map((f) => <li key={f}>{f}</li>)}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[hsl(var(--foreground))] mb-4">Technologies</h2>
            <ul className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span key={t} className="bg-[hsl(var(--muted))] text-[hsl(var(--foreground))] px-3 py-1 rounded-full text-sm">
                  {t}
                </span>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CSR blocks */}
      <section className="py-16 px-4 bg-gradient-to-br from-[hsl(var(--muted))] to-[hsl(var(--accent))/10]">
        <div className="max-w-5xl mx-auto space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-[hsl(var(--foreground))] mb-2">Challenges</h2>
            <p className="text-[hsl(var(--muted-foreground))]">{project.challenges}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[hsl(var(--foreground))] mb-2">Solution</h2>
            <p className="text-[hsl(var(--muted-foreground))]">{project.solution}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[hsl(var(--foreground))] mb-2">Results</h2>
            <p className="text-[hsl(var(--muted-foreground))]">{project.results}</p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {project.images.length > 0 && (
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-[hsl(var(--foreground))] mb-6">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.images.map((img, i) => (
             <Image
  key={i}
  src={img}
  alt={`${project.title} screenshot ${i + 1}`}
  width={400}
  height={250}
  placeholder="blur"
  blurDataURL={img} // quick fallback
  className="rounded-xl shadow-md object-cover w-full h-48"
/>

              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
