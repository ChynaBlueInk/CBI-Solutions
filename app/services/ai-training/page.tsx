// app/services/ai-training/page.tsx
import Link from "next/link"

export default function AiTrainingPage(){
  return(
    <main className="min-h-screen bg-white">
      <section className="px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-semibold text-gray-600">
            <Link href="/services" className="hover:underline">Services</Link>
            {" / "}AI Training for Businesses
          </p>

          <div className="mt-6 rounded-3xl border border-gray-200 bg-gradient-to-br from-slate-50 to-blue-50 p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Practical AI Training for Your Business
            </h1>
            <p className="mt-4 text-xl text-gray-700">
              Safe. Ethical. Secure. Built for real workplace tasks — not hype.
            </p>
            <p className="mt-6 text-gray-800 leading-relaxed max-w-3xl">
              AI is already reshaping how teams write, plan, analyse, and create. The question is not whether your staff will use it —
              it’s whether they will use it responsibly and effectively. I help organisations build practical AI capability without
              compromising data security, quality, or ethics.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-gray-900 text-white px-5 py-3 font-semibold hover:bg-gray-800 transition"
              >
                Book a Consultation
              </a>
              <a
                href="/downloads/ai-training-session-outline.pdf"
                className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white text-gray-900 px-5 py-3 font-semibold hover:bg-gray-50 transition"
              >
                Download Session Outline
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 border-t border-gray-100">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Most Teams Are Already Using AI — Quietly</h2>
            <ul className="mt-5 space-y-3 text-gray-800">
              <li>• Staff experimenting without guidance</li>
              <li>• Sensitive information being pasted into public tools</li>
              <li>• Confusion about what is allowed</li>
              <li>• Inconsistent quality of AI-generated work</li>
              <li>• No internal policy or safeguards</li>
            </ul>
            <p className="mt-6 text-gray-700">
              Ignoring AI doesn’t stop it. Structured training reduces risk and improves outcomes.
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-8">
            <h2 className="text-2xl font-bold text-gray-900">Practical, Business-Focused AI Training</h2>
            <ul className="mt-5 space-y-3 text-gray-800">
              <li>• Hands-on workshops tailored to your organisation</li>
              <li>• Clear guidance on data security and privacy</li>
              <li>• Ethical use frameworks</li>
              <li>• Prompting techniques for better results</li>
              <li>• Development of internal AI guidelines</li>
            </ul>
            <p className="mt-6 text-gray-700">
              Delivered by an experienced learning designer and business advisor with hands-on experience implementing AI in real workplace environments.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 border-t border-gray-100 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900">Workshop Structure</h2>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl bg-white border border-gray-200 p-7">
              <h3 className="text-xl font-bold text-gray-900">Part 1 — Understanding AI in Plain English</h3>
              <ul className="mt-4 space-y-2 text-gray-800">
                <li>• What AI can and cannot do</li>
                <li>• Business use cases</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white border border-gray-200 p-7">
              <h3 className="text-xl font-bold text-gray-900">Part 2 — Practical Applications</h3>
              <ul className="mt-4 space-y-2 text-gray-800">
                <li>• Writing and documentation</li>
                <li>• Research and summarising</li>
                <li>• Process development</li>
                <li>• Brainstorming and planning</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white border border-gray-200 p-7">
              <h3 className="text-xl font-bold text-gray-900">Part 3 — Risk, Ethics & Security</h3>
              <ul className="mt-4 space-y-2 text-gray-800">
                <li>• Data protection</li>
                <li>• Intellectual property</li>
                <li>• Bias and accuracy</li>
                <li>• Organisational reputation</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white border border-gray-200 p-7">
              <h3 className="text-xl font-bold text-gray-900">Part 4 & 5 — Responsible Use + Prompting</h3>
              <ul className="mt-4 space-y-2 text-gray-800">
                <li>• When AI is appropriate</li>
                <li>• Human oversight and sign-off</li>
                <li>• Transparency practices</li>
                <li>• Writing effective prompts</li>
                <li>• Refining outputs and verifying information</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 border-t border-gray-100">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900">Transparent Pricing</h2>
            <div className="mt-6 rounded-3xl border border-gray-200 bg-white p-8">
              <p className="text-lg text-gray-900">
                <span className="font-bold">$250</span> per 2-hour session (up to 10 participants)
              </p>
              <p className="mt-2 text-gray-800">
                <span className="font-bold">$50</span> per additional participant
              </p>

              <h3 className="mt-8 text-xl font-bold text-gray-900">Optional Add-Ons</h3>
              <ul className="mt-4 space-y-2 text-gray-800">
                <li>• Custom AI Use Policy template</li>
                <li>• Follow-up implementation session</li>
                <li>• AI readiness audit</li>
              </ul>
            </div>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-slate-50 p-8">
            <h3 className="text-xl font-bold text-gray-900">Who This Is For</h3>
            <ul className="mt-5 space-y-2 text-gray-800">
              <li>• Small to medium businesses</li>
              <li>• NGOs transitioning to more efficient systems</li>
              <li>• Education providers</li>
              <li>• Teams exploring AI but unsure how to manage risk</li>
              <li>• Organisations without a formal AI policy</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 border-t border-gray-100 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="rounded-3xl border border-gray-200 bg-white p-8">
            <h2 className="text-2xl font-bold text-gray-900">After This Session, Your Team Will:</h2>
            <ul className="mt-5 space-y-2 text-gray-800">
              <li>• Understand what AI can safely be used for</li>
              <li>• Avoid common data and privacy mistakes</li>
              <li>• Improve efficiency in everyday tasks</li>
              <li>• Develop shared internal standards</li>
              <li>• Feel confident — not overwhelmed</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-slate-50 p-8">
            <h2 className="text-2xl font-bold text-gray-900">About</h2>
            <p className="mt-4 text-gray-800 leading-relaxed">
              Cheryl Tyler is a learning designer and education advisor with experience supporting teams through digital transformation.
              She specialises in practical AI literacy, ethical implementation, and capability building for organisations adapting to rapid technological change.
            </p>
            <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-5">
              <p className="text-sm font-semibold text-gray-900">Tip:</p>
              <p className="mt-1 text-sm text-gray-700">
                Add one strong testimonial here (even an internal one) to lift conversions without turning the page into a sales circus.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 py-16 border-t border-gray-100 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900">Start Building AI Capability the Right Way</h2>
          <p className="mt-4 text-gray-800 max-w-3xl">
            If your organisation is ready to move from curiosity to capability, let’s talk.
          </p>

          <div className="mt-8 grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 rounded-3xl border border-gray-200 bg-white p-8">
              <h3 className="text-xl font-bold text-gray-900">Quick Intake</h3>
              <p className="mt-2 text-sm text-gray-700">
                Use this to shape the session around your real risks and workflows.
              </p>

              <div className="mt-6 grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-gray-900">Industry</label>
                  <input className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3" placeholder="e.g., Education, Health, Local government"/>
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-900">Team size</label>
                  <input className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3" placeholder="e.g., 8, 25, 120"/>
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-900">Current AI use</label>
                  <input className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3" placeholder="e.g., Writing, policies, customer emails"/>
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-900">Main concern</label>
                  <input className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3" placeholder="Security, productivity, policy, accuracy…"/>
                </div>
              </div>

              <p className="mt-5 text-xs text-gray-600">
                This form is a front-end placeholder. Wire it to your contact flow (email or a backend endpoint) when ready.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-gray-900 text-white px-5 py-3 font-semibold hover:bg-gray-800 transition"
                >
                  Schedule a 20-Minute Call
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white text-gray-900 px-5 py-3 font-semibold hover:bg-gray-50 transition"
                >
                  Request a Proposal
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-8">
              <h3 className="text-xl font-bold text-gray-900">What you still need</h3>
              <ul className="mt-5 space-y-2 text-gray-800">
                <li>• A clean brand identity (safety + clarity)</li>
                <li>• One strong testimonial</li>
                <li>• A downloadable PDF version</li>
                <li>• A booking mechanism (Calendly or similar)</li>
                <li>• A simple intake form (these fields)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}