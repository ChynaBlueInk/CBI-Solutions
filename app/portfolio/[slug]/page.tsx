// app/portfolio/[slug]/page.tsx
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Tag, ExternalLink, Github, FileText, Download, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { projects } from "../projects-data"

// Turns a normal YouTube or Vimeo link into an embeddable one.
// Returns null for anything else (for example an .mp4 file path).
function getEmbedUrl(url: string): string | null {
  const youtube = url.match(
    /(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/|live\/)|youtu\.be\/)([\w-]{11})/
  )
  if (youtube) return `https://www.youtube.com/embed/${youtube[1]}`

  const vimeo = url.match(/vimeo\.com\/(?:video\/)?(\d+)/)
  if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}`

  return null
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) notFound()

  const embedUrl = project.videoUrl ? getEmbedUrl(project.videoUrl) : null
  const isVertical = project.videoOrientation === "vertical"
  const hasFeatures = project.features.length > 0
  const hasTechnologies = project.technologies.length > 0
  const hasCsr = Boolean(project.challenges || project.solution || project.results)

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

      {/* Video, with the game link underneath */}
      {(project.videoUrl || project.gameUrl) && (
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            {project.videoUrl && (
              <>
                <h2 className="text-2xl font-bold text-[hsl(var(--foreground))] mb-6">Watch the video</h2>
                <div
                  className={
                    isVertical
                      ? "mx-auto aspect-[9/16] w-full max-w-sm overflow-hidden rounded-2xl bg-black shadow-lg"
                      : "aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-lg"
                  }
                >
                  {embedUrl ? (
                    <iframe
                      src={embedUrl}
                      title={`${project.title} video`}
                      className="h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  ) : (
                    <video
                      src={project.videoUrl}
                      controls
                      preload="metadata"
                      playsInline
                      className="h-full w-full"
                    />
                  )}
                </div>
              </>
            )}

            {project.gameUrl && (
              <div className={project.videoUrl ? "mt-8 text-center" : "text-center"}>
                <a
                  href={project.gameUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full bg-[hsl(var(--primary))] px-8 py-3 text-lg font-semibold text-[hsl(var(--primary-foreground))] shadow-md transition hover:bg-[hsl(var(--accent))]"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Play the game
                </a>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Details */}
      {(hasFeatures || hasTechnologies) && (
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
            {hasFeatures && (
              <div>
                <h2 className="text-2xl font-bold text-[hsl(var(--foreground))] mb-4">Key Features</h2>
                <ul className="list-disc list-inside space-y-2 text-[hsl(var(--muted-foreground))]">
                  {project.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
              </div>
            )}
            {hasTechnologies && (
              <div>
                <h2 className="text-2xl font-bold text-[hsl(var(--foreground))] mb-4">Technologies</h2>
                <ul className="flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <li key={t} className="bg-[hsl(var(--muted))] text-[hsl(var(--foreground))] px-3 py-1 rounded-full text-sm">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Resources */}
      {project.documents && project.documents.length > 0 && (
        <section className="py-16 px-4 bg-[hsl(var(--muted))/35]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-[hsl(var(--foreground))] mb-6">Resources</h2>
            <div className="grid gap-4">
              {project.documents.map((doc) => (
                <a
                  key={doc.file}
                  href={doc.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-2xl border border-[hsl(var(--border))] bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--muted))]">
                      <FileText className="w-5 h-5 text-[hsl(var(--primary))]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[hsl(var(--foreground))]">{doc.title}</p>
                      <p className="text-sm text-[hsl(var(--muted-foreground))]">
                        {doc.type ? doc.type.toUpperCase() : "FILE"}
                      </p>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 text-sm font-medium text-[hsl(var(--primary))]">
                    Open file
                    <Download className="w-4 h-4" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CSR blocks */}
      {hasCsr && (
        <section className="py-16 px-4 bg-gradient-to-br from-[hsl(var(--muted))] to-[hsl(var(--accent))/10]">
          <div className="max-w-5xl mx-auto space-y-8">
            {project.challenges && (
              <div>
                <h2 className="text-2xl font-bold text-[hsl(var(--foreground))] mb-2">Challenges</h2>
                <p className="text-[hsl(var(--muted-foreground))]">{project.challenges}</p>
              </div>
            )}
            {project.solution && (
              <div>
                <h2 className="text-2xl font-bold text-[hsl(var(--foreground))] mb-2">Solution</h2>
                <p className="text-[hsl(var(--muted-foreground))]">{project.solution}</p>
              </div>
            )}
            {project.results && (
              <div>
                <h2 className="text-2xl font-bold text-[hsl(var(--foreground))] mb-2">Results</h2>
                <p className="text-[hsl(var(--muted-foreground))]">{project.results}</p>
              </div>
            )}
          </div>
        </section>
      )}

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
                  blurDataURL={img}
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