// app/layout.tsx
import type React from "react"
import type {Metadata} from "next"
import {Inter} from "next/font/google"
import "./globals.css"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"

const inter=Inter({subsets:["latin"]})

// IMPORTANT:
// 1) Replace siteUrl with your real live domain (https://...)
// 2) Add /public/og.png (1200x630) for the preview image
const siteUrl="https://yourdomain.com"

export const metadata:Metadata={
  metadataBase:new URL(siteUrl),
  title:{
    default:"CBI Learning Solutions",
    template:"%s | CBI Learning Solutions",
  },
  description:"Creative solutions for bold thinkers.",
  icons:{
    icon:"/favicon.png",
    shortcut:"/favicon.png",
    apple:"/favicon.png",
  },
  openGraph:{
    type:"website",
    url:"/",
    title:"CBI Learning Solutions",
    description:"Creative solutions for bold thinkers.",
    siteName:"CBI Learning Solutions",
    images:[
      {
        url:"/og.png",
        width:1200,
        height:630,
        alt:"CBI Learning Solutions",
      },
    ],
  },
  twitter:{
    card:"summary_large_image",
    title:"CBI Learning Solutions",
    description:"Creative solutions for bold thinkers.",
    images:["/og.png"],
  },
}

export default function RootLayout({children}:{children:React.ReactNode}){
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation/>
        <main className="pt-16">{children}</main>
        <Footer/>
      </body>
    </html>
  )
}