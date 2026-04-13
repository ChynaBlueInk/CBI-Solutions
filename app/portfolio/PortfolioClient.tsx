"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ExternalLink, ArrowRight, Calendar, Tag, FileText, Search } from "lucide-react"
import { projects } from "./projects-data"

type FilterValue =
  | "all"
  | "resources"
  | "learning-ai"
  | "apps-data"
  | "travel-tourism"

type GroupConfig = {
  key: FilterValue
  title: string
  description: string
  match: (slug: string, hasDocuments: boolean) => boolean
}

const groupConfigs: GroupConfig[] = [
  {
    key: "resources",
    title: "eLearning Resources",
    description:
      "Downloadable learning design, AI, Moodle, gamification, and EdTech resource collections.",
    match: (_slug, hasDocuments) => hasDocuments,
  },
  {
    key: "learning-ai",
    title: "Learning & AI Tools",
    description:
      "Learning platforms, AI-assisted tools, education websites, and supporting digital learning work.",
    match: (slug) =>
      ["ai-wiki-toolbox", "memoir-wizard", "lafaek-tl"].includes(slug),
  },
  {
    key: "apps-data",
    title: "Apps, Data & Platforms",
    description:
      "Interactive apps, portfolio platforms, and projects built around profiles, data, and structured browsing.",
    match: (slug) =>
      ["tyler-family-tree", "houseshare-app", "ld-portfolio-two"].includes(slug),
  },
  {
    key: "travel-tourism",
    title: "Travel & Tourism",
    description:
      "Travel, mapping, booking, and tourism-focused prototypes designed for discovery and visual storytelling.",
    match: (slug) =>
      ["timor-leste-map", "timor-booking", "anatur-homepage"].includes(slug),
  },
]

function getGroupKey(project: (typeof projects)[number]): FilterValue | "other" {
  const hasDocuments = Array.isArray(project.documents) && project.documents.length > 0

  for (const group of groupConfigs) {
    if (group.key === "resources") continue
    if (group.match(project.slug, hasDocuments)) return group.key
  }

  if (hasDocuments) return "resources"

  return "other"
}

function matchesSearch(project: (typeof projects)[number], query: string) {
  if (!query.trim()) return true

  const searchableText = [
    project.title,
    project.description,
    project.longDescription,
    project.category,
    project.year,
    ...project.tags,
    ...project.features,
    ...project.technologies,
    project.challenges,
    project.solution,
    project.results,
    ...(project.documents?.map((doc) => doc.title) || []),
  ]
    .join(" ")
    .toLowerCase()

  return searchableText.includes(query.toLowerCase())
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="group relative block overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.heroImage || "/placeholder.svg"}
          alt={project.title}
          width={400}
          height={200}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

        <div className="absolute top-4 left-4 right-4 flex items-start justify-between gap-3">
          <span className="rounded-full bg-[hsl(var(--primary))]/90 px-3 py-1 text-sm font-medium text-[hsl(var(--primary-foreground))]">
            {project.category}
          </span>

          <div className="flex shrink-0 items-center gap-2 text-sm text-white">
            <Calendar className="h-4 w-4" />
            {project.year}
          </div>
        </div>

        <div className="absolute right-4 bottom-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[hsl(var(--primary-foreground))] shadow-md">
            <ExternalLink className="h-5 w-5 text-[hsl(var(--primary))]" />
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="mb-3 text-xl font-bold text-[hsl(var(--foreground))] transition-colors group-hover:text-[hsl(var(--primary))]">
          {project.title}
        </h3>

        <p className="mb-4 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
          {project.description}
        </p>

        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 rounded-full bg-[hsl(var(--muted))] px-2 py-1 text-xs text-[hsl(var(--foreground))]"
            >
              <Tag className="h-3 w-3 text-[hsl(var(--primary))]" />
              {tag}
            </span>
          ))}
        </div>

        {project.documents && project.documents.length > 0 && (
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[hsl(var(--accent))/12] px-3 py-1 text-xs font-medium text-[hsl(var(--foreground))]">
            <FileText className="h-3.5 w-3.5 text-[hsl(var(--primary))]" />
            Includes {project.documents.length} resource
            {project.documents.length > 1 ? "s" : ""}
          </div>
        )}

        <div className="flex items-center text-sm font-semibold text-[hsl(var(--primary))] transition-transform duration-300 group-hover:translate-x-2">
          View project
          <ArrowRight className="ml-2 h-4 w-4" />
        </div>
      </div>
    </Link>
  )
}

export default function PortfolioClient() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeFilter, setActiveFilter] = useState<FilterValue>("all")

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const groupKey = getGroupKey(project)
      const searchMatch = matchesSearch(project, searchTerm)

      if (activeFilter === "all") return searchMatch
      return groupKey === activeFilter && searchMatch
    })
  }, [searchTerm, activeFilter])

  const groupedProjects = useMemo(() => {
    const grouped = groupConfigs
      .map((group) => ({
        ...group,
        items: filteredProjects.filter((project) => {
          const hasDocuments = Array.isArray(project.documents) && project.documents.length > 0

          if (group.key === "resources") {
            return hasDocuments
          }

          return group.match(project.slug, hasDocuments)
        }),
      }))
      .filter((group) => group.items.length > 0)

    const matchedSlugs = new Set(grouped.flatMap((group) => group.items.map((item) => item.slug)))
    const otherItems = filteredProjects.filter((project) => !matchedSlugs.has(project.slug))

    return { grouped, otherItems }
  }, [filteredProjects])

  const totalResults = filteredProjects.length

  return (
    <main className="min-h-screen bg-gradient-to-br from-[hsl(var(--muted))] to-[hsl(var(--accent))/10]">
      <section className="px-4 pt-24 pb-12">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-5xl font-bold text-[hsl(var(--foreground))] md:text-6xl">
            <span className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] bg-clip-text text-transparent">
              Portfolio
            </span>
          </h1>
          <p className="text-xl leading-relaxed text-[hsl(var(--muted-foreground))]">
            Projects that blend creativity and tech — built to work in the real world.
          </p>
        </div>
      </section>

      <section className="px-4 pb-8">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-[hsl(var(--border))] bg-white p-5 shadow-md md:p-6">
            <div className="grid gap-4 md:grid-cols-[1fr_260px]">
              <div className="relative">
                <Search className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-[hsl(var(--muted-foreground))]" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search projects, topics, tags, technologies, or resource titles..."
                  className="w-full rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--background))] py-3 pr-4 pl-11 text-sm text-[hsl(var(--foreground))] outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]/30"
                />
              </div>

              <select
                value={activeFilter}
                onChange={(e) => setActiveFilter(e.target.value as FilterValue)}
                className="w-full rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--background))] px-4 py-3 text-sm text-[hsl(var(--foreground))] outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]/30"
              >
                <option value="all">All work</option>
                <option value="resources">eLearning Resources</option>
                <option value="learning-ai">Learning & AI Tools</option>
                <option value="apps-data">Apps, Data & Platforms</option>
                <option value="travel-tourism">Travel & Tourism</option>
              </select>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-[hsl(var(--muted-foreground))]">
              <span>
                {totalResults} result{totalResults !== 1 ? "s" : ""}
              </span>

              {(searchTerm || activeFilter !== "all") && (
                <button
                  onClick={() => {
                    setSearchTerm("")
                    setActiveFilter("all")
                  }}
                  className="inline-flex items-center rounded-full bg-[hsl(var(--muted))] px-3 py-1 text-[hsl(var(--foreground))] transition hover:bg-[hsl(var(--accent))/15]"
                >
                  Clear filters
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="mx-auto max-w-6xl space-y-16">
          {groupedProjects.grouped.map((group) => (
            <div key={group.key}>
              <div className="mb-8">
                <h2 className="mb-3 text-3xl font-bold text-[hsl(var(--foreground))] md:text-4xl">
                  {group.title}
                </h2>
                <p className="max-w-3xl leading-relaxed text-[hsl(var(--muted-foreground))]">
                  {group.description}
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {group.items.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </div>
          ))}

          {groupedProjects.otherItems.length > 0 && (
            <div>
              <div className="mb-8">
                <h2 className="mb-3 text-3xl font-bold text-[hsl(var(--foreground))] md:text-4xl">
                  Other Work
                </h2>
                <p className="max-w-3xl leading-relaxed text-[hsl(var(--muted-foreground))]">
                  Additional projects that do not neatly fit the main groups but still deserve their moment.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {groupedProjects.otherItems.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </div>
          )}

          {totalResults === 0 && (
            <div className="rounded-3xl border border-[hsl(var(--border))] bg-white p-10 text-center shadow-md">
              <h2 className="mb-3 text-2xl font-bold text-[hsl(var(--foreground))]">
                No matches found
              </h2>
              <p className="mb-5 text-[hsl(var(--muted-foreground))]">
                Try a different keyword or reset the filter.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("")
                  setActiveFilter("all")
                }}
                className="inline-flex items-center rounded-full bg-[hsl(var(--primary))] px-5 py-2.5 font-medium text-[hsl(var(--primary-foreground))] transition hover:bg-[hsl(var(--accent))]"
              >
                Reset search
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}