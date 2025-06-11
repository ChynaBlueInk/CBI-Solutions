import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-2000"></div>

          {/* Geometric shapes */}
          <div className="absolute top-32 right-1/4 w-16 h-16 border-2 border-blue-300 rounded-lg rotate-45 opacity-30"></div>
          <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-purple-300 rounded-full opacity-40"></div>
          <div className="absolute top-1/2 left-12 w-8 h-8 bg-pink-300 transform rotate-45 opacity-50"></div>
          <div className="absolute bottom-1/4 right-12 w-20 h-20 border-2 border-cyan-300 rounded-full opacity-30"></div>
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto mt-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            Welcome to CBI Solutions
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Creative Solutions for{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Bold Thinkers
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Empowering creatives and educators with innovative digital solutions, AI-powered tools, and transformative
            learning experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg group"
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
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              <Link href="/events">Join Our Events</Link>
            </Button>
          </div>

          {/* Floating elements */}
          <div className="absolute -top-4 left-1/4 w-6 h-6 bg-yellow-300 rounded-full opacity-60 animate-bounce delay-500"></div>
          <div className="absolute top-12 right-1/3 w-4 h-4 bg-green-300 rounded-full opacity-50 animate-bounce delay-1000"></div>
        </div>
      </section>

      {/* Banner Image Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/placeholder.svg?height=400&width=1200"
              alt="CBI Solutions - Creative workspace with modern technology"
              width={1200}
              height={400}
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-purple-600/80"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white max-w-4xl px-6">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Where Creativity Meets Innovation</h2>
                <p className="text-xl md:text-2xl mb-8 opacity-90">
                  Transforming ideas into digital reality through cutting-edge technology and creative excellence
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold"
                  >
                    <Link href="/about">Learn About Us</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full text-lg font-semibold"
                  >
                    <Link href="/contact">Start Your Project</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
