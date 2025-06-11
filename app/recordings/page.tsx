"use client"

import { useState } from "react"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import Link from "next/link"
import Image from "next/image"
import { Play, Download, Calendar, Users, Search, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function RecordingsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("newest")

  const recordings = [
    {
      id: 1,
      title: "AI-Powered Content Creation Workshop",
      description:
        "Learn how to leverage AI tools for creating engaging educational content and streamline your workflow.",
      thumbnail: "/placeholder.svg?height=200&width=400",
      duration: "1h 32m",
      category: "Workshop",
      instructor: "Chyna Blue",
      recordedDate: "2024-01-15",
      views: 1250,
      rating: 4.8,
      tags: ["AI", "Content Creation", "Education"],
      downloadable: true,
      premium: false,
    },
    {
      id: 2,
      title: "Building Interactive Online Courses",
      description:
        "Discover best practices for creating engaging online learning experiences that keep students motivated.",
      thumbnail: "/placeholder.svg?height=200&width=400",
      duration: "2h 15m",
      category: "Masterclass",
      instructor: "Sarah Chen",
      recordedDate: "2024-01-08",
      views: 890,
      rating: 4.9,
      tags: ["Course Design", "Education", "Engagement"],
      downloadable: true,
      premium: true,
    },
    {
      id: 3,
      title: "Digital Publishing Strategies",
      description: "From concept to publication: A comprehensive guide to digital publishing in the modern landscape.",
      thumbnail: "/placeholder.svg?height=200&width=400",
      duration: "1h 18m",
      category: "Webinar",
      instructor: "Alex Johnson",
      recordedDate: "2023-12-20",
      views: 2100,
      rating: 4.7,
      tags: ["Publishing", "Digital", "Strategy"],
      downloadable: false,
      premium: false,
    },
    {
      id: 4,
      title: "Oracle Card Design Masterclass",
      description: "Learn the art and business of creating meaningful oracle card decks from concept to market.",
      thumbnail: "/placeholder.svg?height=200&width=400",
      duration: "3h 5m",
      category: "Masterclass",
      instructor: "Alex Johnson",
      recordedDate: "2023-12-10",
      views: 756,
      rating: 4.9,
      tags: ["Design", "Oracle Cards", "Business"],
      downloadable: true,
      premium: true,
    },
    {
      id: 5,
      title: "Remote Team Learning & Development",
      description: "Effective strategies for training and developing distributed teams in the digital age.",
      thumbnail: "/placeholder.svg?height=200&width=400",
      duration: "1h 45m",
      category: "Workshop",
      instructor: "Chyna Blue",
      recordedDate: "2023-11-28",
      views: 1420,
      rating: 4.6,
      tags: ["Remote Work", "Training", "Leadership"],
      downloadable: true,
      premium: false,
    },
    {
      id: 6,
      title: "Creative Writing with AI Assistance",
      description: "Explore how AI can enhance your creative writing process without replacing human creativity.",
      thumbnail: "/placeholder.svg?height=200&width=400",
      duration: "1h 28m",
      category: "Workshop",
      instructor: "Sarah Chen",
      recordedDate: "2023-11-15",
      views: 980,
      rating: 4.8,
      tags: ["Writing", "AI", "Creativity"],
      downloadable: false,
      premium: false,
    },
  ]

  const categories = ["all", "Workshop", "Webinar", "Masterclass"]

  const filteredRecordings = recordings.filter((recording) => {
    const matchesSearch =
      recording.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recording.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recording.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "all" || recording.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const sortedRecordings = [...filteredRecordings].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return new Date(b.recordedDate).getTime() - new Date(a.recordedDate).getTime()
      case "oldest":
        return new Date(a.recordedDate).getTime() - new Date(b.recordedDate).getTime()
      case "popular":
        return b.views - a.views
      case "rating":
        return b.rating - a.rating
      default:
        return 0
    }
  })

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Event{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Recordings
            </span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Access our library of recorded webinars, workshops, and masterclasses. Learn at your own pace.
          </p>

          {/* Search and Filter */}
          <div className="flex flex-col lg:flex-row gap-4 max-w-4xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search recordings..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 rounded-full border-gray-200"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full capitalize"
                >
                  {category === "all" ? "All" : category}
                </Button>
              ))}
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 rounded-full border border-gray-200 bg-white text-sm"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>
      </section>

      {/* Recordings Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredRecordings.length} Recording{filteredRecordings.length !== 1 ? "s" : ""} Found
            </h2>
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/events">View Upcoming Events</Link>
            </Button>
          </div>

          {sortedRecordings.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No recordings match your search criteria.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedRecordings.map((recording) => (
                <div
                  key={recording.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                >
                  <div className="relative group">
                    <Image
                      src={recording.thumbnail || "/placeholder.svg"}
                      alt={recording.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100 rounded-full">
                        <Link href={`/recordings/${recording.id}`}>
                          <Play className="w-6 h-6 mr-2" />
                          Watch Now
                        </Link>
                      </Button>
                    </div>
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                      <Badge variant="secondary" className="bg-white/90 text-gray-700">
                        {recording.category}
                      </Badge>
                      <div className="flex gap-2">
                        {recording.premium && <Badge className="bg-yellow-500 text-white">Premium</Badge>}
                        <Badge variant="outline" className="bg-white/90 text-gray-700">
                          {recording.duration}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{recording.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{recording.description}</p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4" />
                        {new Date(recording.recordedDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users className="w-4 h-4" />
                        {recording.views.toLocaleString()} views
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        {recording.rating} rating
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {recording.tags.map((tag, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">by {recording.instructor}</span>
                      <div className="flex gap-2">
                        {recording.downloadable && (
                          <Button size="sm" variant="outline" className="rounded-full">
                            <Download className="w-4 h-4" />
                          </Button>
                        )}
                        <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                          <Link href={`/recordings/${recording.id}`}>
                            <Play className="w-4 h-4 mr-1" />
                            Watch
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Upload Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Have Content to Share?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Upload your educational content to our platform and reach a wider audience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold"
            >
              <Link href="/recordings/upload">Upload Recording</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full text-lg font-semibold"
            >
              <Link href="/contact">Partner With Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
