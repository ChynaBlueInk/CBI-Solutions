//app/components/Hero.tsx
"use client"

import Image from "next/image"
import Link from "next/link"

export default function Hero(){
  return(
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div
          className="
            grid items-center gap-8
            md:grid-cols-2
            pt-10 md:pt-14 lg:pt-16
            pb-8 md:pb-10 lg:pb-12
            min-h-[62vh] md:min-h-[58vh]
          "
        >
          {/* Left: copy */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center rounded-full bg-[hsl(var(--primary))] px-3 py-1 text-xs font-medium text-[hsl(var(--primary-foreground))] ring-1 ring-inset ring-[hsl(var(--border))]">
              Practical learning design & digital delivery
            </div>

            {/* Headline */}
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-[hsl(var(--foreground))] leading-tight">
              Learning design built on{" "}
              <span className="text-[hsl(var(--primary))]">story, structure</span>{" "}
              and real-world use
            </h1>

            {/* Subheadline */}
            <p className="mt-4 md:mt-5 max-w-xl text-base md:text-lg text-[hsl(var(--muted-foreground))]">
              Learning design that helps organisations modernise how they build capability by combining strong narrative, clear assessment, and practical digital delivery.
            </p>

            {/* Credibility line */}
            <p className="mt-3 max-w-xl text-sm text-[hsl(var(--muted-foreground))]">
              20+ years across government, vocational education, and international development contexts.
            </p>

            {/* CTAs */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/portfolio"
                className="inline-flex items-center rounded-full bg-[hsl(var(--primary))] px-5 py-3 text-sm font-semibold text-[hsl(var(--primary-foreground))] shadow-sm hover:bg-[hsl(var(--accent))] transition"
              >
                View Portfolio
                <span aria-hidden className="ml-2">→</span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-[hsl(var(--border))] px-5 py-3 text-sm font-semibold text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))] transition"
              >
                Contact Me
              </Link>
            </div>
          </div>

          {/* Right: hero image */}
          <div className="relative h-[34vh] md:h-[44vh] lg:h-[48vh]">
            <Image
              src="/banner-ink-to-ai.png"
              alt="Learning design and digital delivery"
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