import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-between px-4 py-20 overflow-hidden bg-background">
        {/* Text Content */}
        <div className="relative z-10 text-left max-w-2xl mx-auto animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-secondary text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Welcome to CBI Learning Solutions
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Creative Solutions for <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Bold Thinkers
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Empowering storytellers, educators, and innovators with AI tools and digital creativity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary text-white hover:bg-primary/80 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg group"
            >
              <Link href="/portfolio">
                Explore Our Work
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              <Link href="/events">Join Our Events</Link>
            </Button>
          </div>
        </div>

        {/* Banner Image */}
        <div className="hidden lg:block relative w-1/2 max-w-xl">
          <Image
            src="/banner-ink-to-ai.png"
            alt="Feather to AI Illustration"
            width={600}
            height={600}
            className="rounded-3xl object-contain"
          />
        </div>
      </section>
    </>
  )
}
