"use client"

import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative">
      {/* HERO */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div
          className="
            grid items-center gap-8
            md:grid-cols-2
            pt-10 md:pt-14 lg:pt-16
            pb-8 md:pb-10 lg:pb-12
            min-h-[62vh] md:min-h-[58vh]   /* was 90–100vh; much tighter */
          "
        >
          {/* Left: copy */}
          <div>
            {/* small badge */}
          <div className="inline-flex items-center rounded-full bg-[hsl(var(--primary))] px-3 py-1 text-xs font-medium text-[hsl(var(--primary-foreground))] ring-1 ring-inset ring-[hsl(var(--border))]">
  Welcome to CBI Learning Solutions
</div>


            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-[hsl(var(--foreground))] leading-tight">
              Creative Solutions for{" "}
              <span className="text-[hsl(var(--primary))]">Bold Thinkers</span>
            </h1>

            <p className="mt-4 md:mt-5 max-w-xl text-base md:text-lg text-[hsl(var(--muted-foreground))]">
              Empowering storytellers, educators, and innovators with AI tools and digital creativity.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <Link
                href="/portfolio"
                className="inline-flex items-center rounded-full bg-[hsl(var(--primary))] px-5 py-3 text-sm font-semibold text-[hsl(var(--primary-foreground))] shadow-sm hover:bg-[hsl(var(--accent))] transition"
              >
                Explore Our Work
                <span aria-hidden className="ml-2">→</span>
              </Link>

              <Link
                href="/events"
                className="inline-flex items-center rounded-full border border-[hsl(var(--border))] px-5 py-3 text-sm font-semibold text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))] transition"
              >
                Join Our Events
              </Link>
            </div>
          </div>

          {/* Right: feather image */}
          <div className="relative h-[34vh] md:h-[44vh] lg:h-[48vh]">
            <Image
              src="../banner-ink-to-ai.png"   /* your asset path */
              alt="CBI feather"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 80vw"
              className="object-contain drop-shadow-sm"
            />
          </div>
        </div>
      </div>

      </section>
  )
}
