import { use } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Tag, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { projects } from "../projects-data"

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <section className="pt-24 pb-16 px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-8">The project you're looking for doesn't exist.</p>
          <Button asChild><Link href="/portfolio">Back to Portfolio</Link></Button>
        </section>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* (keep your existing JSX for the hero, details, tech, buttons…) */}
      {/* Key change is just how we read `slug` and removing Navigation/Footer imports */}
      {/* ...your existing content here... */}
    </main>
  )
}
