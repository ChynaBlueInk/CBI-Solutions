import Link from "next/link"
import { Heart, Twitter, Linkedin, Instagram, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[hsl(180,30%,15%)] text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-yellow-400 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold">CBI</span>
              </div>
              <span className="text-xl font-bold">CBI Learning Solutions</span>
            </Link>
            <p className="text-gray-300 leading-relaxed max-w-md">
              Guiding storytellers, educators, and businesses from tradition to innovation with AI and creative tools.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/services/course-development" className="hover:text-white">Course Development</Link></li>
              <li><Link href="/services/ai-tools" className="hover:text-white">AI Tools</Link></li>
              <li><Link href="/services/digital-publishing" className="hover:text-white">Digital Publishing</Link></li>
              <li><Link href="/services/consulting" className="hover:text-white">Consulting</Link></li>
              <li><Link href="/events" className="hover:text-white">Live Events</Link></li>
              <li><Link href="/recordings" className="hover:text-white">Recordings</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              <a href="https://twitter.com/cbisolutions" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-teal-800 rounded-xl flex items-center justify-center hover:bg-yellow-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/company/cbi-solutions" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-teal-800 rounded-xl flex items-center justify-center hover:bg-yellow-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/cbisolutions" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-teal-800 rounded-xl flex items-center justify-center hover:bg-yellow-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <Link href="/contact"
                className="w-10 h-10 bg-teal-800 rounded-xl flex items-center justify-center hover:bg-yellow-500 transition-colors">
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-teal-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">© 2024 Chyna Blue Ink. All rights reserved.</p>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            Made with <Heart className="w-4 h-4 text-red-500" /> for creatives everywhere
          </div>
        </div>
      </div>
    </footer>
  )
}
