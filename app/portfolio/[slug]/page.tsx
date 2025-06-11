import Navigation from "../../components/Navigation"
import Footer from "../../components/Footer"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Tag, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

// This would typically come from a database or CMS
const projects = {
  "memoir-wizard": {
    title: "Memoir Wizard",
    description:
      "AI-powered memoir writing assistant that helps users craft their life stories with guided prompts and intelligent suggestions.",
    longDescription:
      "Memoir Wizard is a revolutionary AI-powered platform designed to help individuals write their life stories. The application uses advanced natural language processing to provide personalized writing prompts, suggest narrative structures, and offer editing assistance. Users can organize their memories chronologically, add photos and documents, and receive AI-generated insights to enhance their storytelling.",
    category: "AI Tools",
    color: "from-blue-500 to-cyan-500",
    year: "2024",
    tags: ["AI", "Writing", "Storytelling", "NLP"],
    heroImage: "/placeholder.svg?height=400&width=800",
    images: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    features: [
      "AI-powered writing prompts",
      "Intelligent story structure suggestions",
      "Memory organization tools",
      "Photo and document integration",
      "Export to multiple formats",
      "Privacy-focused design",
    ],
    technologies: ["Next.js", "OpenAI GPT-4", "TypeScript", "Tailwind CSS", "Supabase"],
    challenges:
      "Creating an AI system that could understand personal narratives and provide meaningful suggestions while maintaining user privacy.",
    solution:
      "We developed a custom AI model trained on memoir structures and implemented local processing for sensitive content.",
    results: "95% user satisfaction rate with over 1,000 completed memoirs in the first six months.",
  },
  "childrens-library-app": {
    title: "Children's Library App",
    description:
      "Interactive digital library platform designed specifically for young readers with gamification elements.",
    longDescription:
      "The Children's Library App transforms reading into an adventure for young learners. Featuring an extensive collection of age-appropriate books, interactive reading tools, and gamification elements that encourage consistent reading habits. The app includes read-aloud functionality, comprehension quizzes, and a reward system that motivates children to explore new genres and authors.",
    category: "Education",
    color: "from-purple-500 to-pink-500",
    year: "2023",
    tags: ["Education", "Mobile App", "Children", "Gamification"],
    heroImage: "/placeholder.svg?height=400&width=800",
    images: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    features: [
      "Age-appropriate book recommendations",
      "Interactive reading tools",
      "Read-aloud functionality",
      "Progress tracking for parents",
      "Gamified reading challenges",
      "Offline reading capability",
    ],
    technologies: ["React Native", "Node.js", "MongoDB", "AWS", "Text-to-Speech API"],
    challenges:
      "Creating an engaging experience that balances entertainment with educational value while ensuring child safety.",
    solution:
      "We implemented a comprehensive content curation system and robust parental controls with engaging but educational game mechanics.",
    results: "40% increase in reading time among users and positive feedback from 500+ families.",
  },
  // Add more projects as needed
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug as keyof typeof projects]

  if (!project) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        <div className="pt-24 pb-16 px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-8">The project you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/portfolio">Back to Portfolio</Link>
          </Button>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Link href="/portfolio" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>

          <div className="relative rounded-3xl overflow-hidden mb-8">
            <Image
              src={project.heroImage || "/placeholder.svg"}
              alt={project.title}
              width={800}
              height={400}
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-4 text-white mb-4">
                <span className="bg-white bg-opacity-20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
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
                className="inline-flex items-center gap-1 bg-white text-gray-600 px-3 py-1 rounded-full text-sm shadow-sm"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>

          <p className="text-xl text-gray-600 leading-relaxed">{project.description}</p>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">{project.longDescription}</p>

              {/* Image Gallery */}
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Project Screenshots</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {project.images.map((image, idx) => (
                  <div key={idx} className="rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} Screenshot ${idx + 1}`}
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h3>
              <ul className="space-y-3 mb-8">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Challenge</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{project.challenges}</p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Solution</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{project.solution}</p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Results</h3>
              <p className="text-gray-600 leading-relaxed">{project.results}</p>
            </div>

            <div>
              <div className="bg-gray-50 rounded-3xl p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Technologies Used</h3>
                <div className="space-y-2">
                  {project.technologies.map((tech, idx) => (
                    <div key={idx} className="bg-white px-3 py-2 rounded-lg text-sm text-gray-700">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-2xl">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Live Project
                </Button>
                <Button variant="outline" className="w-full border-gray-300 rounded-2xl">
                  <Github className="w-4 h-4 mr-2" />
                  View Source Code
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Interested in a Similar Project?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can create something amazing for your organization.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold"
          >
            <Link href="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
