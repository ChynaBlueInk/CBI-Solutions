"use client"

import { useState } from "react"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, Users, MapPin, ArrowRight, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const events = [
    {
      id: 1,
      title: "AI-Powered Content Creation Workshop",
      description:
        "Learn how to leverage AI tools for creating engaging educational content and streamline your workflow.",
      date: "2024-02-15",
      time: "2:00 PM EST",
      duration: "90 minutes",
      category: "Workshop",
      level: "Beginner",
      instructor: "Chyna Blue",
      attendees: 45,
      maxAttendees: 100,
      price: "Free",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["AI", "Content Creation", "Education"],
      status: "upcoming",
    },
    {
      id: 2,
      title: "Building Interactive Online Courses",
      description:
        "Discover best practices for creating engaging online learning experiences that keep students motivated.",
      date: "2024-02-22",
      time: "1:00 PM EST",
      duration: "2 hours",
      category: "Masterclass",
      level: "Intermediate",
      instructor: "Sarah Chen",
      attendees: 78,
      maxAttendees: 150,
      price: "$29",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Course Design", "Education", "Engagement"],
      status: "upcoming",
    },
    {
      id: 3,
      title: "Digital Publishing Strategies",
      description: "From concept to publication: A comprehensive guide to digital publishing in the modern landscape.",
      date: "2024-01-28",
      time: "3:00 PM EST",
      duration: "75 minutes",
      category: "Webinar",
      level: "All Levels",
      instructor: "Alex Johnson",
      attendees: 120,
      maxAttendees: 200,
      price: "Free",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Publishing", "Digital", "Strategy"],
      status: "completed",
    },
    {
      id: 4,
      title: "Remote Team Learning & Development",
      description: "Effective strategies for training and developing distributed teams in the digital age.",
      date: "2024-03-05",
      time: "11:00 AM EST",
      duration: "2 hours",
      category: "Workshop",
      level: "Advanced",
      instructor: "Chyna Blue",
      attendees: 32,
      maxAttendees: 75,
      price: "$49",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Remote Work", "Training", "Leadership"],
      status: "upcoming",
    },
    {
      id: 5,
      title: "Creative Writing with AI Assistance",
      description: "Explore how AI can enhance your creative writing process without replacing human creativity.",
      date: "2024-03-12",
      time: "4:00 PM EST",
      duration: "90 minutes",
      category: "Workshop",
      level: "Beginner",
      instructor: "Sarah Chen",
      attendees: 15,
      maxAttendees: 50,
      price: "Free",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Writing", "AI", "Creativity"],
      status: "upcoming",
    },
    {
      id: 6,
      title: "Oracle Card Design Masterclass",
      description: "Learn the art and business of creating meaningful oracle card decks from concept to market.",
      date: "2024-02-08",
      time: "2:30 PM EST",
      duration: "3 hours",
      category: "Masterclass",
      level: "Intermediate",
      instructor: "Alex Johnson",
      attendees: 95,
      maxAttendees: 100,
      price: "$79",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Design", "Oracle Cards", "Business"],
      status: "completed",
    },
  ]

  const categories = ["all", "Workshop", "Webinar", "Masterclass"]

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "all" || event.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const upcomingEvents = filteredEvents.filter((event) => event.status === "upcoming")
  const completedEvents = filteredEvents.filter((event) => event.status === "completed")

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Live{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Events</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Join our interactive webinars, workshops, and masterclasses designed to enhance your creative and
            educational skills.
          </p>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 rounded-full border-gray-200"
              />
            </div>
            <div className="flex gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full capitalize"
                >
                  {category === "all" ? "All Events" : category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Upcoming Events</h2>

          {upcomingEvents.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No upcoming events match your search criteria.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                >
                  <div className="relative">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                      <Badge variant="secondary" className="bg-white/90 text-gray-700">
                        {event.category}
                      </Badge>
                      <Badge variant="outline" className="bg-white/90 border-green-500 text-green-700">
                        {event.price}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{event.description}</p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4" />
                        {new Date(event.date).toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        {event.time} • {event.duration}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users className="w-4 h-4" />
                        {event.attendees}/{event.maxAttendees} registered
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="w-4 h-4" />
                        Online • Level: {event.level}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {event.tags.map((tag, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">by {event.instructor}</span>
                      <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                        <Link href={`/events/${event.id}`}>
                          Register
                          <ArrowRight className="ml-1 w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Past Events</h2>
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/recordings">View All Recordings</Link>
            </Button>
          </div>

          {completedEvents.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No past events match your search criteria.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {completedEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 opacity-90"
                >
                  <div className="relative">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                      <Badge variant="secondary" className="bg-white/90 text-gray-700">
                        {event.category}
                      </Badge>
                      <Badge className="bg-gray-500 text-white">Completed</Badge>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{event.description}</p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4" />
                        {new Date(event.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users className="w-4 h-4" />
                        {event.attendees} attended
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {event.tags.map((tag, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">by {event.instructor}</span>
                      <Button asChild size="sm" variant="outline" className="rounded-full">
                        <Link href={`/recordings/${event.id}`}>Watch Recording</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Want to Host Your Own Event?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Partner with us to create and host educational webinars for your audience.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold"
          >
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
