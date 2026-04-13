// app/portfolio/page.tsx
"use client"

import { useMemo, useState } from "react"
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ExternalLink, ArrowRight, Calendar, Tag, FileText, Search } from "lucide-react"
import { projects } from "./projects-data"

export const metadata: Metadata = {
  title: "Portfolio – CBI Learning Solutions",
  description:
    "A selection of projects across AI, education, and digital publishing — built for real-world use in Aotearoa and the Pacific.",
}

type FilterValue =
  | "all"
  | "learning-ai"
  | "apps-data"
  | "travel-tourism"
  | "resources"

type GroupConfig = {
  key: FilterValue
  title: string
  description: string
  match: (slug: string, hasDocuments: boolean) => boolean
}

const groupConfigs: GroupConfig[] = [
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
  {
    key: "resources",
    title: "Resource Collections",
    description:
      "Grouped downloadable resources and supporting document collections.",
    match: (_slug, hasDocuments) => hasDocuments,
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
      className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 block"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.heroImage || "/placeholder.svg"}
          alt={project.title}
          width={400}
          height={200}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

        <div className="absolute top-4 left-4 right-4 flex justify-between items-start gap-3">
          <span className="bg-[hsl(var(--primary))]/90 text-[hsl(var(--primary-foreground))] px-3 py-1 rounded-full text-sm font-medium">
            {project.category}
          </span>

          <div className="flex items-center gap-2 text-white text-sm shrink-0">
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

        {project.documents && project.documents.length > 0 && (
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[hsl(var(--accent))/12] px-3 py-1 text-xs font-medium text-[hsl(var(--foreground))]">
            <FileText className="w-3.5 h-3.5 text-[hsl(var(--primary))]" />
            Includes {project.documents.length} resource
            {project.documents.length > 1 ? "s" : ""}
          </div>
        )}

        <div className="flex items-center text-[hsl(var(--primary))] font-semibold group-hover:translate-x-2 transition-transform duration-300 text-sm">
          View project
          <ArrowRight className="ml-2 w-4 h-4" />
        </div>
      </div>
    </Link>
  )
}

export default function PortfolioPage() {
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
      {/* Hero */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[hsl(var(--foreground))] mb-6">
            <span className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] bg-clip-text text-transparent">
              Portfolio
            </span>
          </h1>
          <p className="text-xl text-[hsl(var(--muted-foreground))] leading-relaxed">
            Projects that blend creativity and tech — built to work in the real world.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-md border border-[hsl(var(--border))] p-5 md:p-6">
            <div className="grid gap-4 md:grid-cols-[1fr_260px]">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-[hsl(var(--muted-foreground))]" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search projects, topics, tags, technologies, or resource titles..."
                  className="w-full rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--background))] pl-11 pr-4 py-3 text-sm text-[hsl(var(--foreground))] outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]/30"
                />
              </div>

              <select
                value={activeFilter}
                onChange={(e) => setActiveFilter(e.target.value as FilterValue)}
                className="w-full rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--background))] px-4 py-3 text-sm text-[hsl(var(--foreground))] outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]/30"
              >
                <option value="all">All work</option>
                <option value="learning-ai">Learning & AI Tools</option>
                <option value="apps-data">Apps, Data & Platforms</option>
                <option value="travel-tourism">Travel & Tourism</option>
                <option value="resources">Resource Collections</option>
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
                  className="inline-flex items-center rounded-full bg-[hsl(var(--muted))] px-3 py-1 text-[hsl(var(--foreground))] hover:bg-[hsl(var(--accent))/15] transition"
                >
                  Clear filters
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Grouped Projects */}
      <section className="pb-20 px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {groupedProjects.grouped.map((group) => (
            <div key={group.key}>
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--foreground))] mb-3">
                  {group.title}
                </h2>
                <p className="text-[hsl(var(--muted-foreground))] max-w-3xl leading-relaxed">
                  {group.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {group.items.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </div>
          ))}

          {groupedProjects.otherItems.length > 0 && (
            <div>
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--foreground))] mb-3">
                  Other Work
                </h2>
                <p className="text-[hsl(var(--muted-foreground))] max-w-3xl leading-relaxed">
                  Additional projects that do not neatly fit the main groups but still deserve their moment.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {groupedProjects.otherItems.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </div>
          )}

          {totalResults === 0 && (
            <div className="bg-white rounded-3xl shadow-md border border-[hsl(var(--border))] p-10 text-center">
              <h2 className="text-2xl font-bold text-[hsl(var(--foreground))] mb-3">
                No matches found
              </h2>
              <p className="text-[hsl(var(--muted-foreground))] mb-5">
                Try a different keyword or reset the filter.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("")
                  setActiveFilter("all")
                }}
                className="inline-flex items-center rounded-full bg-[hsl(var(--primary))] px-5 py-2.5 text-[hsl(var(--primary-foreground))] font-medium hover:bg-[hsl(var(--accent))] transition"
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