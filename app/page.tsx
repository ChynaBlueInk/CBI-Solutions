import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      <Hero />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  )
}
