import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import Image from "next/image"
import {
  Users,
  Target,
  Lightbulb,
  Award,
  BookOpen,
  Bot,
  Film,
  FileText,
  Camera,
  Heart,
  Globe,
  GraduationCap,
  Palette,
} from "lucide-react"

export default function AboutPage() {
  const team = [
    {
      name: "Chyna Blue",
      role: "Founder & Creative Director",
      description: "Passionate about merging creativity with technology to create meaningful educational experiences.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Alex Johnson",
      role: "AI Development Lead",
      description: "Expert in machine learning and AI tool development with a focus on creative applications.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Sarah Chen",
      role: "Learning Experience Designer",
      description: "Specializes in creating engaging online courses and educational content strategies.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We constantly push boundaries to create cutting-edge solutions that transform how people learn and create.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of working together, both within our team and with our clients.",
    },
    {
      icon: Target,
      title: "Purpose-Driven",
      description: "Every project we take on has a clear mission to make education and creativity more accessible.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from design to development to delivery.",
    },
  ]

  const coreValues = [
    { icon: Palette, label: "Creative" },
    { icon: Heart, label: "Ethical" },
    { icon: Globe, label: "Remote-Ready" },
    { icon: GraduationCap, label: "Education-Driven" },
  ]

  const services = [
    {
      icon: BookOpen,
      title: "Online Course Development",
      description: "Custom e-learning platforms and interactive course content that engages and educates.",
    },
    {
      icon: Bot,
      title: "AI Writing Tools",
      description: "Intelligent writing assistants and content generation tools powered by cutting-edge AI.",
    },
    {
      icon: Film,
      title: "Animation & Storytelling",
      description: "Compelling visual narratives and animated content that brings stories to life.",
    },
    {
      icon: FileText,
      title: "Digital Publishing",
      description: "Books, oracle cards, and digital publications designed for modern audiences.",
    },
    {
      icon: Users,
      title: "Remote L&D Consulting",
      description: "Learning and development strategies tailored for distributed teams and organizations.",
    },
    {
      icon: Camera,
      title: "Print on Demand",
      description: "Photography and art services with seamless print-on-demand integration.",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              CBI Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We're a team of creative technologists, educators, and innovators dedicated to transforming how people
            learn, create, and share knowledge in the digital age.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2020 by Chyna Blue, CBI Solutions emerged from a simple yet powerful vision: to bridge the
                gap between creativity and technology in education. What started as a passion project to help educators
                create more engaging online content has evolved into a comprehensive suite of digital solutions.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Chyna Blue Ink, we believe in the power of creativity to transform education and business. Our
                mission is to provide innovative digital solutions that empower educators, creatives, and entrepreneurs
                to share their knowledge and stories with the world.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Today, we work with educators, content creators, and organizations worldwide to develop innovative
                learning experiences, AI-powered creative tools, and digital publishing solutions that make knowledge
                more accessible and engaging.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our remote-first approach allows us to collaborate with the best talent globally while maintaining our
                commitment to ethical practices and sustainable growth.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <Image
                    src="/placeholder.svg?height=250&width=350"
                    alt="CBI Solutions Office"
                    width={350}
                    height={250}
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Since 2020</h3>
                    <p className="text-gray-600">Empowering creativity through technology</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do and shape how we approach every project and partnership.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {coreValues.map((value, index) => (
              <div key={value.label} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:shadow-lg transition-shadow">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <p className="font-semibold text-gray-900">{value.label}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive suite of creative and educational services designed to help you succeed in the
              digital age.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team brings together expertise in education, technology, design, and creative arts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={member.name} className="text-center group">
                <div className="relative mb-6 group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="w-32 h-32 object-cover rounded-full mx-auto shadow-lg"
                  />
                  <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:opacity-0 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
