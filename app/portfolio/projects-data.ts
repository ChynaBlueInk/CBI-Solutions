// app/portfolio/projects-data.ts
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
}

export const projects:Project[]=[
  {
    title:"AI Wiki Toolbox",
    description:"Resource hub for AI tools and practical ways to use them.",
    longDescription:
      "A reference site that helps people discover AI tools and apply them with practical guidance, examples, and scannable structure.",
    category:"Documentation",
    slug:"ai-wiki-toolbox",
    year:"2024",
    tags:["AI","Resources","Documentation"],
    heroImage:"/portfolio/AIWiki.png",
    images:["/portfolio/AIWiki.png"],
    features:["Tool discovery","Practical guidance structure","Scannable pages","Fast navigation"],
    technologies:["Next.js","React","Tailwind CSS"],
    challenges:"Balance quick scanning with depth and usefulness.",
    solution:"Clear categories and progressive detail (overview → specifics).",
    results:"A growing library designed for repeat visits.",
    liveUrl:"https://www.aiwikitoolbox.com"
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
  }
]