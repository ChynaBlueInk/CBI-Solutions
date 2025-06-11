// app/layout.tsx
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CBI Solutions - Creative Solutions for Bold Thinkers",
  description: "Chyna Blue Ink offers digital products, workshops, and AI-powered tools for creatives and educators.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
