// app/challenge/page.tsx
import ChallengeHub from "../components/challenge-hub";

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
