// app/portfolio/page.tsx
import type { Metadata } from "next"
import PortfolioClient from "./PortfolioClient"

export const metadata: Metadata = {
  title: "Portfolio – CBI Learning Solutions",
  description:
    "A selection of projects across AI, education, and digital publishing — built for real-world use in Aotearoa and the Pacific.",
}

export default function PortfolioPage() {
  return <PortfolioClient />
}