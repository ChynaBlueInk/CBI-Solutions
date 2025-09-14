import { use } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Clock, Users, MapPin, Star, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// (keep your events constant exactly as you have it)
const events = { /* ...your existing event data... */ }

export default function EventDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const event = events[id as keyof typeof events]

  if (!event) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <section className="pt-24 pb-16 px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Event Not Found</h1>
          <p className="text-gray-600 mb-8">The event you're looking for doesn't exist.</p>
          <Button asChild><Link href="/events">Back to Events</Link></Button>
        </section>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Link href="/events" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Events
          </Link>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="relative rounded-3xl overflow-hidden mb-8">
                <Image src={event.image || "/placeholder.svg"} alt={event.title} width={800} height={400} className="w-full h-64 md:h-96 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-4 text-white mb-4">
                    <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30">{event.category}</Badge>
                    <Badge className="bg-green-500 text-white">{event.price}</Badge>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-white">{event.title}</h1>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {event.tags.map((tag, idx) => (<Badge key={idx} variant="outline" className="text-sm">{tag}</Badge>))}
              </div>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">{event.description}</p>

              <div className="bg-white rounded-3xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">About This Event</h2>
                <p className="text-gray-600 leading-relaxed mb-6">{event.longDescription}</p>

                <h3 className="text-xl font-bold text-gray-900 mb-4">What You'll Learn</h3>
                <ul className="space-y-2 mb-6">
                  {event.whatYouWillLearn.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4">Agenda</h3>
                <ul className="space-y-2 mb-6">
                  {event.agenda.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4">Requirements</h3>
                <ul className="space-y-2">
                  {event.requirements.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-3xl p-8 shadow-lg sticky top-24">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-gray-900 mb-2">{event.price}</div>
                  <p className="text-gray-600">per person</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Calendar className="w-5 h-5" />
                    <span>{new Date(event.date).toLocaleDateString("en-NZ", { weekday:"long", year:"numeric", month:"long", day:"numeric" })}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Clock className="w-5 h-5" />
                    <span>{event.time} • {event.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Users className="w-5 h-5" />
                    <span>{event.attendees}/{event.maxAttendees} registered</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="w-5 h-5" />
                    <span>Online Event</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Star className="w-5 h-5" />
                    <span>Level: {event.level}</span>
                  </div>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}></div>
                </div>
                <p className="text-sm text-gray-600 text-center mb-6">{event.maxAttendees - event.attendees} spots remaining</p>

                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl text-lg font-semibold mb-4">
                  <Link href={`/contact?subject=${encodeURIComponent(`Register interest: ${event.title}`)}`}>Dates TBC — Register your interest</Link>
                </Button>

                <p className="text-xs text-gray-500 text-center">We’ll email you when dates open.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
