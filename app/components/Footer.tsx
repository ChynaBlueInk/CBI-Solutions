import Link from "next/link"
import { Heart, Twitter, Linkedin, Instagram, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold">CBI</span>
              </div>
              <span className="text-xl font-bold">CBI Solutions</span>
            </Link>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Empowering creatives and educators with innovative digital solutions. Let's build something amazing
              together.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/services/course-development" className="hover:text-white transition-colors">
                  Course Development
                </Link>
              </li>
              <li>
                <Link href="/services/ai-tools" className="hover:text-white transition-colors">
                  AI Tools
                </Link>
              </li>
              <li>
                <Link href="/services/digital-publishing" className="hover:text-white transition-colors">
                  Digital Publishing
                </Link>
              </li>
              <li>
                <Link href="/services/consulting" className="hover:text-white transition-colors">
                  Consulting
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-white transition-colors">
                  Live Events
                </Link>
              </li>
              <li>
                <Link href="/recordings" className="hover:text-white transition-colors">
                  Recordings
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              <a
                href="https://twitter.com/cbisolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/cbi-solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/cbisolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <Link
                href="/contact"
                className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">© 2024 Chyna Blue Ink. All rights reserved.</p>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            Made with <Heart className="w-4 h-4 text-red-500" /> for creatives everywhere
          </div>
        </div>
      </div>
    </footer>
  )
}
