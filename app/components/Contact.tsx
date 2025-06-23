import { Mail, MessageCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <section className="py-20 px-4 bg-[hsl(30,48%,94%)]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-teal-900 mb-6">
            Let's Collaborate on Something Beautiful
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Ready to bring your creative vision to life? We'd love to hear about your project and explore how we can
            work together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-bold text-teal-900 mb-6">Get in Touch</h3>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Whether you're looking to develop an online course, create AI-powered tools, or need consulting for your
              learning and development initiatives, we're here to help turn your ideas into reality.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-teal-700" />
                </div>
                <div>
                  <p className="font-semibold text-teal-900">Email Us</p>
                  <a href="mailto:hello@cbi-solutions.com" className="text-teal-700 hover:underline">
                    hello@cbi-solutions.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-2xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-teal-700" />
                </div>
                <div>
                  <p className="font-semibold text-teal-900">Let's Chat</p>
                  <p className="text-gray-700">Schedule a free consultation</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-yellow-50 rounded-3xl p-8 shadow-lg">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-teal-800 mb-2">First Name</label>
                  <Input type="text" placeholder="John" className="rounded-2xl border-0 bg-white shadow-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-teal-800 mb-2">Last Name</label>
                  <Input type="text" placeholder="Doe" className="rounded-2xl border-0 bg-white shadow-sm" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-teal-800 mb-2">Email</label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  className="rounded-2xl border-0 bg-white shadow-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-teal-800 mb-2">Project Details</label>
                <Textarea
                  placeholder="Tell us about your project..."
                  rows={4}
                  className="rounded-2xl border-0 bg-white shadow-sm resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-600 to-yellow-500 hover:from-teal-700 hover:to-yellow-600 text-white py-4 rounded-2xl text-lg font-semibold transition-all duration-300 hover:scale-105 group"
              >
                Send Message
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
