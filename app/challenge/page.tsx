// app/challenge/page.tsx
import ChallengeHub from "../components/challenge-hub";
import type {Metadata} from "next"

export const metadata:Metadata={
  title:"Monthly AI Challenge",
  description:"A practical, hands-on AI challenge for learning professionals and curious thinkers. Build something real. Share what you learn.",
  openGraph:{
    title:"Monthly AI Challenge | CBI Learning Solutions",
    description:"A practical, hands-on AI challenge for learning professionals and curious thinkers. Build something real. Share what you learn.",
    url:"https://www.cbils.dev/challenge",
    type:"website",
    images:[
      {
        url:"/og-challenge.png",
        width:1200,
        height:630,
        alt:"CBI Monthly AI Challenge",
      },
    ],
  },
  twitter:{
    card:"summary_large_image",
    title:"Monthly AI Challenge",
    description:"Build something real with AI this month.",
    images:["/og-challenge.png"],
  },
}
export default function ChallengePage(){
  return(
    <main className="min-h-screen bg-background text-foreground">
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
          AI Challenges Hub
        </h1>
        <p className="text-muted-foreground mb-8">
          Join monthly and weekly challenges to explore how AI can support real learning,
          not just shiny demos. Each challenge gives you prompts, practice ideas, and
          suggested outputs you can share with your team or community.
        </p>
        <ChallengeHub/>
      </section>
    </main>
  );
}
