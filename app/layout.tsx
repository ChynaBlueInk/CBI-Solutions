// app/layout.tsx
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"


const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "CBI Learning Solutions",
  description: "Creative solutions for bold thinkers.",
  icons: {
    icon: "/favicon.png",          // default
    shortcut: "/favicon.png",      // browser shortcut
    apple: "/favicon.png",         // Apple touch icon
  },
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
