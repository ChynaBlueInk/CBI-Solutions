// app/portfolio/projects-data.ts
export type ProjectDocument={
  title:string
  file:string
  type?:"pdf"|"docx"
}

export type Project={
  title:string
  description:string
  longDescription:string
  category:string
  slug:string
  year:string
  tags:string[]
  heroImage:string
  images:string[]
  features:string[]
  technologies:string[]
  challenges:string
  solution:string
  results:string
  liveUrl?:string
  githubUrl?:string
  documents?:ProjectDocument[]
}

export const projects:Project[]=[
 {
  title:"Consequence",
  description:"Branching video scenarios where every choice plays out — an interactive ethics lab for teens.",
  longDescription:
    "A youth ethics lab built around branching video: each scenario drops the viewer into someone else's split-second decision. There's no correct answer flashing on screen — you choose, the video plays out, and you see where it lands. Designed to be watched then discussed, not graded.",
  category:"Character Education",
  slug:"consequence",
  year:"2026",
  tags:["Ethics","Branching Video","Character Education"],
  heroImage:"/portfolio/consequence.png",
  images:["/portfolio/consequence.png"],
  features:[
    "Branching video, not multiple choice — every decision cuts to a different scene",
    "Six endings per scenario",
    "Built for classrooms and youth programs running character and ethics education",
    "Designed to be watched then discussed, not graded"
  ],
  technologies:["Next.js","React","Tailwind CSS","Video Production"],
  challenges:"Make an ethics lesson feel like a real moment, not a lecture — with no correct answer flashing on screen.",
  solution:"Branching video with three decision points and six possible endings per episode, built for discussion afterward rather than a graded right answer.",
  results:"Four episodes live (The Wallet, The Group Chat, Speak Up, The Contest), with a fifth in production.",
  liveUrl:"https://www.cbils.dev/Scenario"
},
{
  title:"SafeImage NZ",
  description:"AI-powered image safeguarding platform that flags what a bad actor could learn from a photo of a child — before it's published.",
  longDescription:
    "Schools and NGOs publish images of children constantly with almost no systematic safeguarding process behind it. SafeImage NZ analyses a photo before it goes out and explains, in plain language, exactly what it reveals — a school crest, GPS metadata, a visible timetable — then handles consent tracking, an audit trail, and safe-version generation in one workflow.",
  category:"AI Safety",
  slug:"safeimage-nz",
  year:"2026",
  tags:["AI","Child Safety","Privacy","Hackathon"],
  heroImage:"/portfolio/safeimage-nz.png",
  images:["/portfolio/safeimage-nz.png"],
  features:[
    "Threat Simulator — plain-language AI risk analysis",
    "Risk scoring (0–100) per image",
    "Consent tracking with missing/expired flags",
    "Audit trail of uploads and approvals",
    "Safe image generation — face blur, stripped metadata, smart crop",
    "Downloadable safeguarding report"
  ],
  technologies:["Next.js","React","Tailwind CSS","Anthropic API","Canvas API"],
  challenges:"Turn a compliance checkbox most schools and NGOs treat as a formality into something that actually catches real risk, without asking staff to become privacy experts.",
  solution:"An AI Threat Simulator that explains exactly what a bad actor could learn from a photo, paired with consent tracking, an audit trail, and one-click safe-image export — all processed client-side, so images are never sent to or stored on a server.",
  results:"A working prototype covering the full loop — upload, AI analysis, consent check, safe export, report — built and demoed solo in two days at the AI Hackathon Festival, after two teammates had to step back before the event."
},
{
  title:"NZSL Live",
  description:"Real-time NZSL support for everyday moments — live captions, hand-tracking, and an NZSL avatar, right in the browser.",
  longDescription:
    "There's rarely an NZSL interpreter on hand for spontaneous moments — the pharmacy, a lecture, an unplanned video call — and most accessibility tooling is built around English alone. NZSL Live is a web app and browser extension bringing live captions, real hand-tracking, and an NZSL avatar into everyday conversations, with te reo Māori words recognised alongside English.",
  category:"Accessibility",
  slug:"nzsl-live",
  year:"2026",
  tags:["Accessibility","NZSL","Computer Vision","Hackathon"],
  heroImage:"/portfolio/nzsl-live.png",
  images:["/portfolio/nzsl-live.png"],
  features:[
    "Live speech-to-text captions on a phone camera view",
    "Real 21-point hand-tracking",
    "NZSL avatar for common signed words",
    "Te reo Māori word recognition (whānau, aroha)",
    "Type-to-speak reply for two-way conversation",
    "Browser extension captions Zoom/Meet/Teams calls"
  ],
  technologies:["Next.js","React","Computer Vision","Browser Extension"],
  challenges:"Build something honest about a genuinely unsolved problem — automated sign-language recognition — without overclaiming or building something toothless.",
  solution:"A working proof of concept combining live captioning, real hand-tracking, and an NZSL avatar for common words, with anything not genuinely solved labelled 'coming soon' rather than faked for the demo.",
  results:"A working proof of concept demoed at the AI Hackathon Festival alongside SafeImage NZ, with a clear next step toward licensed NZSL content and Deaf-led review rather than pretending the hardest problem — sign recognition — is solved."
},
  {
    title:"Lafaek TL Website",
    description:"Lafaek public-facing site with admin-managed content updates.",
    longDescription:
      "A multi-page site supporting news, impact stories, and learning content for the Lafaek ecosystem, with admin workflows to manage content in a practical way.",
    category:"Education",
    slug:"lafaek-tl",
    year:"2024",
    tags:["Education","Content","Timor-Leste"],
    heroImage:"/portfolio/lafaek.png",
    images:["/portfolio/lafaek.png"],
    features:["News + impact content","Learning section structure","Admin update workflows","Responsive layout"],
    technologies:["Next.js","React","Tailwind CSS","AWS"],
    challenges:"Keep content easy to maintain while staying lightweight and reliable.",
    solution:"Clear page structure + simple admin flows for updating structured content.",
    results:"Faster publishing updates and a clearer public hub for stakeholders.",
    liveUrl:"https://lafaek-tl.vercel.app"
  },
  {
    title:"Tyler Family Tree",
    description:"Interactive family history site with timeline-style exploration.",
    longDescription:
      "A family tree web app focused on navigating people, relationships, and historical context — including a timeline view to make the story of a family easier to follow.",
    category:"Data & Storytelling",
    slug:"tyler-family-tree",
    year:"2024",
    tags:["Genealogy","Timeline","Data UI"],
    heroImage:"/portfolio/tyler-family-tree.png",
    images:["/portfolio/tyler-family-tree.png"],
    features:["Family tree browsing","Person detail pages","Timeline view","Search and navigation"],
    technologies:["Next.js","React","Tailwind CSS"],
    challenges:"Displaying complex relationships without overwhelming the user.",
    solution:"Simple navigation patterns with progressive disclosure.",
    results:"A usable, evolving family-history hub with strong timeline storytelling.",
    liveUrl:"https://tyler-family-tree.vercel.app"
  },
  {
    title:"HouseShare App",
    description:"House sharing / flatmate matching prototype (NZ-focused).",
    longDescription:
      "A house sharing prototype designed to support browsing profiles, comparing compatibility, and viewing match details in a clean, friendly UI.",
    category:"Web App",
    slug:"houseshare-app",
    year:"2024",
    tags:["Matching","Profiles","NZ"],
    heroImage:"/portfolio/houseshare.png",
    images:["/portfolio/houseshare.png"],
    features:["Browse profiles","Match details modal","Profile pages","Responsive layout"],
    technologies:["Next.js","React","Tailwind CSS"],
    challenges:"Make profile browsing feel safe, clear, and not cluttered.",
    solution:"Strong card layout + clear match-detail pattern.",
    results:"A working prototype suitable for iterative development.",
    liveUrl:"https://houseshare-app.vercel.app"
  },
  {
    title:"L&D Portfolio Hub (Legacy)",
    description:"Previous portfolio hub showcasing learning design work and services.",
    longDescription:
      "A compact showcase site for learning design capability, case studies, and project highlights.",
    category:"Portfolio",
    slug:"ld-portfolio-two",
    year:"2024",
    tags:["Portfolio","L&D","Showcase"],
    heroImage:"/portfolio/portfolio.png",
    images:["/portfolio/portfolio.png"],
    features:["Portfolio tiles","Service overview","Case study structure"],
    technologies:["Next.js","React","Tailwind CSS"],
    challenges:"Present diverse work clearly without clutter.",
    solution:"Consistent metadata + tidy grid layout.",
    results:"Clearer conversations with clients and collaborators.",
    liveUrl:"https://ld-portfolio-two.vercel.app"
  },
  {
    title:"Memoir Wizard",
    description:"AI-assisted memoir writing experience.",
    longDescription:
      "A memoir-writing assistant that helps users move from blank page to structured chapters using guided prompts and drafting support.",
    category:"AI Tools",
    slug:"memoir-wizard",
    year:"2024",
    tags:["AI","Writing","Storytelling"],
    heroImage:"/portfolio/memoir.png",
    images:["/portfolio/memoir.png"],
    features:["Guided prompts","Chapter structure","Draft flow","Export-friendly writing"],
    technologies:["Next.js","React","Tailwind CSS"],
    challenges:"Reduce blank-page anxiety.",
    solution:"Short staged prompts and structured flow.",
    results:"Encourages completion and momentum.",
    liveUrl:"https://memoir-wizard.vercel.app"
  },
  {
    title:"Timor-Leste Map",
    description:"Interactive map-style prototype for location discovery.",
    longDescription:
      "A map-focused prototype exploring how users can discover and navigate locations in Timor-Leste.",
    category:"Travel",
    slug:"timor-leste-map",
    year:"2024",
    tags:["Map","Discovery","Timor-Leste"],
    heroImage:"/portfolio/timor-map.png",
    images:["/portfolio/timor-map.png"],
    features:["Map exploration","Location discovery","Responsive layout"],
    technologies:["Next.js","React","Tailwind CSS"],
    challenges:"Keep map exploration usable on mobile.",
    solution:"Lean UI and readable info blocks.",
    results:"Strong base for future expansion.",
    liveUrl:"https://timor-leste-map.vercel.app"
  },
  {
    title:"Timor Tourism & Booking",
    description:"Booking prototype for Timor-Leste tours and operators.",
    longDescription:
      "A lightweight booking prototype designed to validate a clear flow for listings and booking requests.",
    category:"Travel",
    slug:"timor-booking",
    year:"2024",
    tags:["Travel","Booking","Prototype"],
    heroImage:"/portfolio/TLTourism.png",
    images:["/portfolio/TLTourism.png"],
    features:["Listings layout","Booking request flow","Operator-friendly structure"],
    technologies:["Next.js","React","Tailwind CSS"],
    challenges:"Create trust for first-time online bookings.",
    solution:"Clear steps and strong CTAs.",
    results:"Validated core booking flow.",
    liveUrl:"https://timor-booking.vercel.app"
  },
  {
    title:"ANATUR Homepage",
    description:"Concept homepage for Timor-Leste’s tourism authority.",
    longDescription:
      "A visual landing page concept highlighting Timor-Leste’s natural beauty and travel themes.",
    category:"Travel",
    slug:"anatur-homepage",
    year:"2024",
    tags:["Tourism","Timor-Leste","Landing Page"],
    heroImage:"/portfolio/anatur.png",
    images:["/portfolio/anatur.png"],
    features:["Image-led hero","Highlights sections","Mobile-first layout"],
    technologies:["Next.js","React","Tailwind CSS"],
    challenges:"Capture national identity in a clean layout.",
    solution:"Strong visual hierarchy and simple structure.",
    results:"Useful prototype for stakeholder discussions.",
    liveUrl:"https://anatur-homepage.vercel.app"
  },
  {
    title:"AI Learning PDFs",
    description:"Downloadable AI, eLearning, and EdTech resource documents.",
    longDescription:
      "A portfolio collection of downloadable learning design, AI, Moodle, gamification, and eLearning planning documents that show practical content development work.",
    category:"Courses & Learning Design",
    slug:"ai-learning-pdfs",
    year:"2026",
    tags:["AI","eLearning","EdTech","Learning Design"],
    heroImage:"/portfolio/portfolio.png",
    images:[],
    features:[
      "Downloadable learning resources",
      "AI and education topics",
      "eLearning planning and best practice samples",
      "Portfolio evidence of content development work"
    ],
    technologies:["Learning Design","AI","Moodle","EdTech","Content Development"],
    challenges:"Present downloadable resource samples without cluttering the portfolio.",
    solution:"Grouped the documents into one clean portfolio item with direct file access.",
    results:"A simple project page that lets visitors browse and open supporting documents.",
    documents:[
      {
        title:"AI Adaptive Learning 2026",
        file:"/portfolio/PDF/ai_adaptive_learning_2026.docx",
        type:"docx"
      },
      {
        title:"AI Gamification Learning 2026",
        file:"/portfolio/PDF/ai_gamification_learning_2026.docx",
        type:"docx"
      },
      {
        title:"AI Moodle Teachers 2026",
        file:"/portfolio/PDF/ai_moodle_teachers_2026.docx",
        type:"docx"
      },
      {
        title:"eLearning Best Practices 2026",
        file:"/portfolio/PDF/elearning_best_practices_2026.docx",
        type:"docx"
      },
      {
        title:"Learning Systems EdTech 2026",
        file:"/portfolio/PDF/learning_systems_edtech_2026.docx",
        type:"docx"
      },
      {
        title:"PM eLearning 2026",
        file:"/portfolio/PDF/pm_elearning_2026.docx",
        type:"docx"
      }
    ]
  }
]