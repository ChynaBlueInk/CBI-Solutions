// app/components/Services.tsx
import { BookOpen, Bot, Film, FileText, Users, Camera } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: BookOpen,
      title: "Online Course Development",
      description:
        "Interactive learning and lightweight delivery that holds up well in low-connectivity environments.",
    },
    {
      icon: Bot,
      title: "AI Writing Tools",
      description:
        "Assistants and content workflows to speed up drafting, localisation, and QA — without losing voice or quality.",
    },
    {
      icon: Film,
      title: "Animation & Storytelling",
      description:
        "Compelling visual narratives that bring ideas to life — from concept to final cut.",
    },
    {
      icon: FileText,
      title: "Digital Publishing",
      description:
        "Books, oracle cards, and modern digital publications designed for today’s readers.",
    },
    {
      icon: Users,
      title: "Remote L&D Consulting",
      description:
        "Learning systems for distributed teams and organisations across Aotearoa and the Pacific.",
    },
    {
      icon: Camera,
      title: "Print on Demand",
      description:
        "Photography and artwork with seamless print-on-demand integration when you’re ready to sell.",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What We Do</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Practical creative and education services — built for real-world use here in Aotearoa and across the Pacific.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-700 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
