import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Image from "next/image";
import {Users,Target,Lightbulb,Award,BookOpen,Bot,Film,FileText,Camera,Heart,Globe,GraduationCap,Palette} from "lucide-react";

export default function AboutPage(){
  const team=[
    {
      name:"Cheryl Tyler",
      role:"Founder & Learning Technologist",
      description:"Leads product vision, learning design, and the tech stack. Builds templates, automations, and AI workflows so courses ship fast, look great, and work offline when needed.",
      image:"/about/cheryl.jpg"
    },
    {
      name:"Susan Tyler",
      role:"Learning Operations & Producer",
      description:"Runs project ops, briefs, schedules, QA sign-off, and launch comms. Keeps stakeholders aligned and turns feedback into a tidy, actionable backlog.",
      image:"/about/susan.jpg"
    }
  ];

  const values=[
    {icon:Lightbulb,title:"Innovation",description:"We push boundaries to create practical, cutting-edge solutions that transform how people learn and create."},
    {icon:Users,title:"Collaboration",description:"We work as one team with our clients and partners to ship the right thing, not just the shiny thing."},
    {icon:Target,title:"Purpose-Driven",description:"Every project has a clear learner outcome and a way to measure whether it worked."},
    {icon:Award,title:"Excellence",description:"From design to delivery, we hold a high bar—especially for accessibility and performance."}
  ];

  const coreValues=[
    {icon:Palette,label:"Creative"},
    {icon:Heart,label:"Ethical"},
    {icon:Globe,label:"Remote-Ready"},
    {icon:GraduationCap,label:"Education-Driven"}
  ];

  const services=[
    {icon:BookOpen,title:"Online Course Development",description:"Interactive course content and lightweight delivery that works in low-bandwidth contexts."},
    {icon:Bot,title:"AI Writing Tools",description:"Assistants and workflows to speed up drafting, localisation, and QA without losing quality."},
    {icon:Film,title:"Animation & Storytelling",description:"Compelling visual narratives to make ideas stick."},
    {icon:FileText,title:"Digital Publishing",description:"Books, oracle cards, and digital publications for modern audiences."},
    {icon:Users,title:"Remote L&D Consulting",description:"Lean L&D systems for distributed teams and organisations."},
    {icon:Camera,title:"Print on Demand",description:"Photography and art with seamless POD integration."}
  ];

  return(
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation/>

      {/* Hero */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">CBI Learning Solutions</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            A lean team pairing technology and operations to deliver practical learning solutions—fast, accessible, and measurable.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2020 by <span className="font-semibold">Cheryl Tyler</span>, CBI Learning Solutions began with a simple aim:
                bridge creativity and technology in education. What started as a passion project to help educators build engaging online content
                has grown into a suite of lightweight, scalable learning tools.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At <span className="font-semibold">Chyna Blue Ink</span>, we believe creativity can transform learning and business. Our mission is to provide
                innovative digital solutions that help educators, creatives, and entrepreneurs share their knowledge with the world.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Today we partner with teams worldwide to design practical learning experiences, AI-powered content workflows,
                and digital publishing that make knowledge more accessible.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We’re remote-first and values-led—ethical, inclusive, and focused on sustainable growth.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <Image src="/placeholder.svg?height=250&width=350" alt="CBI Learning Solutions" width={350} height={250} className="w-full h-48 object-cover rounded-xl mb-4"/>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Since 2020</h3>
                    <p className="text-gray-600">Creativity × Technology for education</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Principles that shape every project and partnership.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {coreValues.map((value)=>(
              <div key={value.label} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:shadow-lg transition-shadow">
                  <value.icon className="w-8 h-8 text-white"/>
                </div>
                <p className="font-semibold text-gray-900">{value.label}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value)=>(
              <div key={value.title} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-white"/>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">A practical suite of creative and educational services.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service)=>(
              <div key={service.title} className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white"/>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Two roles, clear lanes—so nothing falls in the gaps.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member)=>(
              <div key={member.name} className="text-center group">
                <div className="relative mb-6 group-hover:scale-105 transition-transform duration-300">
                  <Image src={member.image||"/placeholder.svg"} alt={member.name} width={200} height={200} className="w-32 h-32 object-cover rounded-full mx-auto shadow-lg"/>
                  <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:opacity-0 transition-opacity duration-300"/>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer/>
    </main>
  );
}
