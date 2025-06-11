import { Star, Quote } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "CBI Solutions transformed our online learning platform. Their innovative approach to course development has increased student engagement by 300%.",
      author: "Sarah Johnson",
      role: "Education Director",
      company: "Learning Innovations Inc.",
    },
    {
      quote:
        "The AI writing tools developed by Chyna Blue Ink have revolutionized our content creation process. We're now producing higher quality content in half the time.",
      author: "Michael Chen",
      role: "Content Manager",
      company: "Creative Agency Pro",
    },
    {
      quote:
        "Working with CBI Solutions on our digital publishing project was exceptional. Their attention to detail and creative vision exceeded our expectations.",
      author: "Emily Rodriguez",
      role: "Author & Entrepreneur",
      company: "Independent Publisher",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What Our Partners Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients and partners have to say about working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative"
            >
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white" />
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed mb-6 italic">"{testimonial.quote}"</p>

              <div className="border-t pt-6">
                <p className="font-bold text-gray-900">{testimonial.author}</p>
                <p className="text-blue-600 font-medium">{testimonial.role}</p>
                <p className="text-gray-500 text-sm">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
