// app/services/ai-training/page.tsx
import Link from "next/link"

const PACE_URL="https://learn.cbils.dev/courses/pace"
const PACE_STARTER_URL="https://learn.cbils.dev/courses/pace-starter"
const GAME_URL="https://learn.cbils.dev/courses/everyday-matters"

export default function AiTrainingPage(){
  return(
    <main className="min-h-screen bg-white">
      <section className="px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-semibold text-gray-600">
            <Link href="/services" className="hover:underline">Services</Link>
            {" / "}AI Training
          </p>

          <div className="mt-6 rounded-3xl border border-gray-200 bg-gradient-to-br from-slate-50 to-blue-50 p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              AI training that starts with the job, not the tool
            </h1>
            <p className="mt-4 text-xl text-gray-700">
              Safe, practical and built around real workplace tasks.
            </p>
            <p className="mt-6 text-gray-800 leading-relaxed max-w-3xl">
              Your staff are already using AI. The question is whether they use it well and safely. I help teams decide when AI
              fits a task, use it for everyday work, and check what it produces before it goes anywhere that matters.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={PACE_URL}
                className="inline-flex items-center justify-center rounded-xl bg-gray-900 text-white px-5 py-3 font-semibold hover:bg-gray-800 transition"
              >
                See the PACE online course
              </a>
              <a
                href="#workshops"
                className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white text-gray-900 px-5 py-3 font-semibold hover:bg-gray-50 transition"
              >
                Live workshops for teams
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 border-t border-gray-100">
        <div className="max-w-5xl mx-auto rounded-3xl bg-gray-900 text-white p-8 md:p-12">
          <p className="text-sm font-semibold text-gray-300">Self-paced online course</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold">PACE: Managing your workday with AI</h2>
          <p className="mt-4 text-gray-200 leading-relaxed max-w-3xl">
            A 60-minute course for public service and office teams. It follows four stages that fit any workday:
            Prioritise, Assist, Craft and Evaluate. Learners finish with a 7-day practice plan and a certificate.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="rounded-2xl bg-white/10 p-5">
              <p className="text-lg font-bold">Prioritise</p>
              <p className="mt-1 text-sm text-gray-300">Decide what matters first.</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-5">
              <p className="text-lg font-bold">Assist</p>
              <p className="mt-1 text-sm text-gray-300">Hand the right tasks to AI.</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-5">
              <p className="text-lg font-bold">Craft</p>
              <p className="mt-1 text-sm text-gray-300">Protect the work only you can do.</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-5">
              <p className="text-lg font-bold">Evaluate</p>
              <p className="mt-1 text-sm text-gray-300">Check, reset and improve.</p>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={PACE_URL}
              className="inline-flex items-center justify-center rounded-xl bg-white text-gray-900 px-5 py-3 font-semibold hover:bg-gray-100 transition"
            >
              Start PACE
            </a>
            <a
              href={PACE_STARTER_URL}
              className="inline-flex items-center justify-center rounded-xl border border-white/40 text-white px-5 py-3 font-semibold hover:bg-white/10 transition"
            >
              Try the free 15-minute starter
            </a>
            <a
              href={GAME_URL}
              className="inline-flex items-center justify-center rounded-xl border border-white/40 text-white px-5 py-3 font-semibold hover:bg-white/10 transition"
            >
              Play the free game
            </a>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 border-t border-gray-100">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Most teams are already using AI quietly</h2>
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
            <h2 className="text-2xl font-bold text-gray-900">After training, your team will</h2>
            <ul className="mt-5 space-y-3 text-gray-800">
              <li>• Know what AI can safely be used for</li>
              <li>• Avoid common data and privacy mistakes</li>
              <li>• Work faster on everyday writing, summarising and planning</li>
              <li>• Check AI output before it goes anywhere that matters</li>
              <li>• Share one consistent approach across the team</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="workshops" className="px-4 py-14 border-t border-gray-100 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900">Live workshops for teams</h2>
          <p className="mt-3 text-gray-700 max-w-3xl">
            Prefer to learn together? I run PACE as a live session over Zoom or in person, with exercises built around your team’s real tasks.
          </p>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl bg-white border border-gray-200 p-7">
              <h3 className="text-xl font-bold text-gray-900">Part 1: AI in plain English</h3>
              <ul className="mt-4 space-y-2 text-gray-800">
                <li>• What AI can and cannot do</li>
                <li>• Where it fits in your work</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white border border-gray-200 p-7">
              <h3 className="text-xl font-bold text-gray-900">Part 2: Practical use</h3>
              <ul className="mt-4 space-y-2 text-gray-800">
                <li>• Writing and documentation</li>
                <li>• Research and summarising</li>
                <li>• Planning and brainstorming</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white border border-gray-200 p-7">
              <h3 className="text-xl font-bold text-gray-900">Part 3: Risk, ethics and security</h3>
              <ul className="mt-4 space-y-2 text-gray-800">
                <li>• Data protection and privacy</li>
                <li>• Bias and accuracy</li>
                <li>• Intellectual property</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white border border-gray-200 p-7">
              <h3 className="text-xl font-bold text-gray-900">Part 4: Responsible use and prompting</h3>
              <ul className="mt-4 space-y-2 text-gray-800">
                <li>• When AI is appropriate, and when it isn’t</li>
                <li>• Human oversight and sign-off</li>
                <li>• Writing prompts and checking results</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-gray-200 bg-white p-8">
            <h3 className="text-xl font-bold text-gray-900">Optional add-ons</h3>
            <ul className="mt-4 space-y-2 text-gray-800">
              <li>• AI use policy template for your organisation</li>
              <li>• Follow-up implementation session</li>
              <li>• AI readiness review</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 border-t border-gray-100 bg-white">
        <div className="max-w-5xl mx-auto rounded-3xl border border-gray-200 bg-slate-50 p-8">
          <h2 className="text-2xl font-bold text-gray-900">About</h2>
          <p className="mt-4 text-gray-800 leading-relaxed max-w-3xl">
            I’m Cheryl Tyler, a learning designer with more than 30 years’ experience, much of it inside New Zealand government
            departments. I design learning around the job people actually do, and I build the tools that deliver it.
          </p>
        </div>
      </section>

      <section id="contact" className="px-4 py-16 border-t border-gray-100 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900">Talk to me about training your team</h2>
          <p className="mt-4 text-gray-800 max-w-3xl">
            Tell me your team size, how they use AI now, and your main concern. I’ll reply with options and a price.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="/contact?intent=ai-training"
              className="inline-flex items-center justify-center rounded-xl bg-gray-900 text-white px-5 py-3 font-semibold hover:bg-gray-800 transition"
            >
              Request a quote
            </a>
            <a
              href={PACE_URL}
              className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white text-gray-900 px-5 py-3 font-semibold hover:bg-gray-50 transition"
            >
              Or start PACE online
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
