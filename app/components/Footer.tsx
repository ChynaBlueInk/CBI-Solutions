import Link from "next/link"
import Image from "next/image"
import { Heart, Linkedin, Instagram, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo + About */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/brand/cbi-logo.png" // ✅ save your logo here
                alt="CBI Learning Solutions"
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="text-xl font-bold">CBI Learning Solutions</span>
            </Link>
            <p className="text-[hsl(var(--muted))] leading-relaxed max-w-md">
              Guiding storytellers, educators, and businesses from tradition to innovation with AI and creative tools.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-[hsl(var(--muted))]">
              <li><Link href="/services/course-development" className="hover:text-[hsl(var(--primary-foreground))]">Course Development</Link></li>
              <li><Link href="/services/ai-tools" className="hover:text-[hsl(var(--primary-foreground))]">AI Tools</Link></li>
              <li><Link href="/services/digital-publishing" className="hover:text-[hsl(var(--primary-foreground))]">Digital Publishing</Link></li>
              <li><Link href="/services/consulting" className="hover:text-[hsl(var(--primary-foreground))]">Consulting</Link></li>
              <li><Link href="/events" className="hover:text-[hsl(var(--primary-foreground))]">Live Events</Link></li>
              <li><Link href="/recordings" className="hover:text-[hsl(var(--primary-foreground))]">Recordings</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com/company/cbi-solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[hsl(var(--accent))] rounded-xl flex items-center justify-center hover:bg-[hsl(var(--primary-foreground))] hover:text-[hsl(var(--primary))] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/cbisolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[hsl(var(--accent))] rounded-xl flex items-center justify-center hover:bg-[hsl(var(--primary-foreground))] hover:text-[hsl(var(--primary))] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <Link
                href="/contact"
                className="w-10 h-10 bg-[hsl(var(--accent))] rounded-xl flex items-center justify-center hover:bg-[hsl(var(--primary-foreground))] hover:text-[hsl(var(--primary))] transition-colors"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[hsl(var(--accent))] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[hsl(var(--muted))] text-sm">
            © 2024 CBI Learning Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-[hsl(var(--muted))] text-sm">
            Made with <Heart className="w-4 h-4 text-red-400" /> for creatives everywhere
          </div>
        </div>
      </div>
    </footer>
  )
}
