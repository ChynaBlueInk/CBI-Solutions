import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Portfolio />
      <Contact />
    </main>
  )
}
