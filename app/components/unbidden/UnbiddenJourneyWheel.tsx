"use client"

import Image from "next/image"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function UnbiddenJourneyWheel() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          aria-label="Open a larger view of the journey wheel"
          className="group relative h-96 w-96 overflow-hidden rounded-full border border-primary/30 shadow-sm transition-shadow hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <Image
            src="/unbidden/journey-wheel.png"
            alt="A circular illustration of the twelve stages of the Unbidden journey, grouped into three acts: The Constrained World, The Untethering, and Redefinition"
            fill
            sizes="384px"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            priority
          />
          <span className="absolute inset-0 flex items-center justify-center bg-black/0 text-sm font-medium text-transparent transition-colors group-hover:bg-black/20 group-hover:text-white">
            View larger
          </span>
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl border-none bg-transparent p-0 shadow-none sm:rounded-2xl">
        <DialogTitle className="sr-only">The Unbidden journey wheel, enlarged</DialogTitle>
        <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-card">
          <Image
            src="/unbidden/journey-wheel.png"
            alt="A circular illustration of the twelve stages of the Unbidden journey, grouped into three acts: The Constrained World, The Untethering, and Redefinition"
            fill
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-contain"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
