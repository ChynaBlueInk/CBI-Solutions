// app/components/Services.tsx
import {BookOpen,Film,FileText,Users,ClipboardCheck,Workflow}from "lucide-react"

export default function Services(){
  const services=[
    {
      icon:BookOpen,
      title:"Learning Design & Course Development",
      description:
        "Story-led learning journeys, microlearning, and blended programmes that make complex topics clear and usable.",
    },
    {
      icon:Film,
      title:"Scenario Design & Storytelling",
      description:
        "Decision-based scenarios, scripts, and narratives that reflect real-world work — designed to change behaviour, not just tick boxes.",
    },
    {
      icon:ClipboardCheck,
      title:"Assessment, QA & Learning Evidence",
      description:
        "Defensible assessment design, feedback loops, and quality checks so your learning holds up in regulated and high-stakes environments.",
    },
    {
      icon:Workflow,
      title:"Learning Systems & Digital Delivery",
      description:
        "LMS setup and optimisation, content structures, templates, and rollout support — including low-bandwidth-friendly approaches when needed.",
    },
    {
      icon:Users,
      title:"Capability Uplift & Team Enablement",
      description:
        "Workshops and mentoring for SMEs and teams to improve how they write, design, and maintain learning content (including sensible AI use where it helps).",
    },
    {
      icon:FileText,
      title:"Content Editing & Plain-Language Rewrite",
      description:
        "Clear, human writing for learning, policy, and product content — improving readability, tone, and structure without losing accuracy or voice.",
    },
  ]

  return(
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Services</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Practical learning design and digital delivery — grounded in real-world performance, with storytelling at the centre.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service)=>(
            <div
              key={service.title}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white"/>
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