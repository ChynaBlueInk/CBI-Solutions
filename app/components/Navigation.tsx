// app/components/Navigation.tsx
"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Events", href: "/events" },
    { name: "Recordings", href: "/recordings" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[hsl(30,48%,94%)]/90 backdrop-blur-md border-b border-[hsl(30,20%,80%)]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo + Brand */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/brand/cbi-logo.png" // ✅ save your new logo here
              alt="CBI Learning Solutions"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
            <span className="text-xl font-bold text-gray-800">
              CBI Learning Solutions
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-teal-700 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-full">
              <Link href="/contact?intent=start">Contact us</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-teal-700 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="w-full mt-4 bg-teal-600 hover:bg-teal-700 text-white rounded-full">
              <Link href="/contact?intent=start" onClick={() => setIsOpen(false)}>
                Get Started
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
