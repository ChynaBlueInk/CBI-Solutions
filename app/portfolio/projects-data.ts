// app/portfolio/projects-data.ts
export type Project = {
  title: string
  description: string
  longDescription: string
  category: string
  slug: string
  year: string
  tags: string[]
  heroImage: string
  images: string[]
  features: string[]
  technologies: string[]
  challenges: string
  solution: string
  results: string
  liveUrl?: string
  githubUrl?: string
}

export const projects: Project[] = [
  {
    title: "AI Wiki Toolbox",
    description: "A practical resource hub for AI tools and how to apply them.",
    longDescription:
      "AI Wiki Toolbox helps people discover, compare, and learn AI tools with practical examples and workflows.",
    category: "Documentation",
    slug: "ai-wiki-toolbox",
    year: "2024",
    tags: ["Documentation", "AI", "Resources"],
    heroImage: "/portfolio/AIWiki.jpg",
    images: ["/portfolio/AIWiki.jpg"],
    features: [
      "AI tools directory",
      "Use-case guides & prompts",
      "Community submissions",
      "Fast filtering",
    ],
    technologies: ["Next.js", "Tailwind CSS"],
    challenges: "Making content scannable but deep.",
    solution: "Simple categories with progressive detail.",
    results: "Growing library and return visitors.",
    liveUrl: "https://www.aiwikitoolbox.com/",
  },
  {
    title: "L&D Portfolio Hub",
    description: "A tidy showcase of learning design capability.",
    longDescription:
      "A compact hub that highlights L&D case studies, services, and outcomes with quick-glance tiles.",
    category: "Portfolio",
    slug: "ld-portfolio-hub",
    year: "2024",
    tags: ["Portfolio", "L&D", "Showcase"],
    heroImage: "/portfolio/LnDTalent.jpg",
    images: ["/portfolio/LnDTalent.jpg"],
    features: ["Portfolio grid", "Case studies", "Project highlights", "Lightweight CMS"],
    technologies: ["Next.js", "Tailwind CSS"],
    challenges: "Organising diverse work cleanly.",
    solution: "Grid + consistent metadata.",
    results: "Clearer client conversations.",
    liveUrl: "https://ld-portfolio-two.vercel.app/",
  },
  {
    title: "Lafaek Children’s Book Library",
    description: "Digital library for tamariki in Timor-Leste — designed for low bandwidth.",
    longDescription:
      "A bilingual library (Tetum/Portuguese) with light pages, simple navigation, and offline-friendlier assets.",
    category: "Education",
    slug: "lafaek-childrens-book-library",
    year: "2024",
    tags: ["Education", "Children", "Library"],
    heroImage: "/portfolio/Lafaek.jpg",
    images: ["/portfolio/Lafaek.jpg"],
    features: ["Bilingual content", "Reader UI", "Audio narration", "Offline-aware media"],
    technologies: ["Next.js", "Tailwind CSS", "Supabase"],
    challenges: "Bandwidth + multilingual content.",
    solution: "Compressed media + simple UI patterns.",
    results: "Positive early feedback from schools.",
    liveUrl: "https://lafaek-childrens-book-library.vercel.app/",
  },
  {
    title: "Memoir Wizard",
    description: "AI-powered assistant for writing life stories.",
    longDescription:
      "Guided prompts, structure suggestions, and export options help users write and share their memoirs.",
    category: "AI Tools",
    slug: "memoir-wizard",
    year: "2024",
    tags: ["AI", "Writing", "Storytelling"],
    heroImage: "/portfolio/Memoir.jpg",
    images: ["/portfolio/Memoir.jpg"],
    features: ["Guided prompts", "Chapter templates", "Photo uploads", "Export to PDF/EPUB"],
    technologies: ["Next.js", "OpenAI", "Tailwind CSS"],
    challenges: "Reduce blank-page anxiety.",
    solution: "Conversational guidance + templates.",
    results: "High session completion.",
    liveUrl: "https://memoir-wizard.vercel.app/",
  },
  {
    title: "Timor Tourism & Booking",
    description: "Tour and operator booking prototype for Timor-Leste.",
    longDescription:
      "An operator-friendly booking flow with clear listings, lightweight pages, and multilingual support.",
    category: "Travel",
    slug: "timor-booking-site",
    year: "2024",
    tags: ["Travel", "Booking", "Timor-Leste"],
    heroImage: "/portfolio/TLTourism.jpg",
    images: ["/portfolio/TLTourism.jpg"],
    features: ["Tour listings", "Bookings", "Operator profiles", "Multilingual support"],
    technologies: ["Next.js", "Tailwind CSS"],
    challenges: "Trust + simplicity for first-time buyers.",
    solution: "Clear steps, no clutter, strong CTAs.",
    results: "Validated core booking flow.",
    liveUrl: "https://timor-booking.vercel.app/",
  },
  // Keep these two with placeholders until you add assets:
  {
    title: "Oracle Card Generator",
    description: "Create and share oracle decks — digital or print.",
    longDescription:
      "A creator tool for building custom decks with text, art, and AI-assisted interpretations.",
    category: "Creative Tools",
    slug: "oracle-card-generator",
    year: "2024",
    tags: ["Creative", "AI Art", "Cards"],
    heroImage: "/placeholder.svg?height=400&width=800",
    images: ["/placeholder.svg"],
    features: ["Deck builder", "AI meanings", "Download/share", "Interactive spreads"],
    technologies: ["Next.js", "Tailwind CSS", "OpenAI"],
    challenges: "Flexibility vs ease of use.",
    solution: "Opinionated flows with tidy defaults.",
    results: "Strong interest from creators.",
    liveUrl: "https://v0-oracle-card-app-design.vercel.app/",
  },
  {
    title: "ANATUR Homepage",
    description: "Concept homepage for Timor-Leste’s tourism authority.",
    longDescription:
      "A visual landing page concept that highlights natural beauty and travel themes.",
    category: "Travel",
    slug: "anatur-tourism-homepage",
    year: "2024",
    tags: ["Tourism", "Govt", "Timor-Leste"],
    heroImage: "/placeholder.svg?height=400&width=800",
    images: ["/placeholder.svg"],
    features: ["Image-led layout", "Highlights", "Government branding"],
    technologies: ["Next.js", "Tailwind CSS"],
    challenges: "Capturing national identity.",
    solution: "Clean hero + curated sections.",
    results: "Useful for stakeholder discussions.",
    liveUrl: "https://anatur-homepage.vercel.app/",
  },
]
