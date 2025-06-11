import { Heart, Globe, GraduationCap, Palette } from "lucide-react"
import Image from "next/image"

export default function About() {
  const values = [
    { icon: Palette, label: "Creative" },
    { icon: Heart, label: "Ethical" },
    { icon: Globe, label: "Remote-Ready" },
    { icon: GraduationCap, label: "Education-Driven" },
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About CBI Solutions</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At Chyna Blue Ink, we believe in the power of creativity to transform education and business. Our mission
              is to provide innovative digital solutions that empower educators, creatives, and entrepreneurs to share
              their knowledge and stories with the world.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Founded on principles of creativity, ethics, and accessibility, we specialize in developing cutting-edge
              tools and resources that make learning engaging, storytelling compelling, and business growth sustainable.
            </p>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="CBI Solutions Team"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <h3 className="text-xl font-semibold text-center text-gray-900">Chyna Blue Ink</h3>
                <p className="text-center text-gray-600 mt-2">Creative Solutions Team</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Our Core Values</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={value.label} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:shadow-lg transition-shadow">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <p className="font-semibold text-gray-900">{value.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
