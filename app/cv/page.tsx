import Navigation from "../components/Navigation"

const CV_PDF_URL="/cv/Cheryl-Tyler-CV-2026.pdf"

export const metadata={
  title:"CV | Cheryl Tyler",
  description:"Senior Learning Designer – online learning objects, Storyline, LMS, compliance-aligned learning."
}

export default function CVPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="px-4 py-14 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">CV</h1>
              <p className="text-gray-600 mt-2 max-w-2xl">
                Senior Learning Designer with over 20 years’ experience designing and delivering online and blended learning
                across government and regulated environments. Experienced in building Articulate Storyline and LMS-based learning
                objects from analysis through to deployment, working closely with subject matter experts to translate complex
                operational requirements into clear, usable digital learning.
              </p>
            </div>

            <div className="flex flex-col gap-3 w-full md:w-auto">
              <a
                href={CV_PDF_URL}
                className="inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-6 py-3 font-semibold hover:bg-gray-800 transition"
                download
              >
                Download PDF
              </a>

              <a
                href={CV_PDF_URL}
                className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white text-gray-900 px-6 py-3 font-semibold hover:bg-gray-50 transition"
                target="_blank"
                rel="noreferrer"
              >
                Open PDF in new tab
              </a>
            </div>
          </div>

          <div className="grid gap-8 mt-10 md:grid-cols-3">
            <div className="md:col-span-2 space-y-8">
              <section className="border border-gray-200 rounded-2xl p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3">Relevant Capabilities</h2>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Design and development of Articulate Storyline learning modules</li>
                  <li>Scenario-based and decision-focused learning design</li>
                  <li>Assessment design and feedback integration</li>
                  <li>SME collaboration in operational environments</li>
                  <li>LMS deployment, tracking and reporting</li>
                  <li>Compliance-aligned and defensible learning solutions</li>
                </ul>
              </section>

              <section className="border border-gray-200 rounded-2xl p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3">Experience Highlights</h2>

                <div className="space-y-5">
                  <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-bold text-gray-900">Education Advisor – Volunteer Service Abroad (VSA)</h3>
                      <span className="text-sm text-gray-500">2024 – Present</span>
                    </div>
                    <p className="text-gray-700 mt-1">Care International – Lafaek Learning Media (Timor-Leste)</p>
                    <ul className="list-disc pl-5 text-gray-700 mt-2 space-y-1">
                      <li>Delivered workshops and one-on-one mentoring for writers, designers, illustrators, and video teams</li>
                      <li>Pre-tested education materials with schools in remote areas</li>
                      <li>Created an interactive website and learning platform; contributed to a children’s book app</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-bold text-gray-900">Learning Designer – MITO</h3>
                      <span className="text-sm text-gray-500">2023</span>
                    </div>
                    <ul className="list-disc pl-5 text-gray-700 mt-2 space-y-1">
                      <li>Designed interactive digital learning resources for vocational learners</li>
                      <li>Wrote NZQA assessments; integrated feedback loops and assessment into Storyline modules</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-bold text-gray-900">Product Developer – Careerforce</h3>
                      <span className="text-sm text-gray-500">2016 – 2020</span>
                    </div>
                    <ul className="list-disc pl-5 text-gray-700 mt-2 space-y-1">
                      <li>Developed qualifications, unit standards, and assessments across healthcare and social services</li>
                      <li>Worked with stakeholders to ensure relevance and regulatory compliance</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="border border-gray-200 rounded-2xl p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3">PDF Preview</h2>
                <div className="rounded-xl overflow-hidden border border-gray-200 bg-gray-50">
                  <iframe
                    src={`${CV_PDF_URL}#view=FitH`}
                    className="w-full h-[900px]"
                    title="CV PDF Preview"
                  />
                </div>
                <p className="text-sm text-gray-500 mt-3">
                  If the preview doesn’t load on a device, use “Open PDF in new tab” or “Download PDF”.
                </p>
              </section>
            </div>

            <aside className="space-y-8">
              <section className="border border-gray-200 rounded-2xl p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3">Tools & Tech</h2>
                <ul className="text-gray-700 space-y-2">
                  <li>Totara / Moodle LMS</li>
                  <li>Articulate Storyline & Rise</li>
                  <li>Adobe Creative Suite</li>
                  <li>Canva, video editing</li>
                  <li>HTML & CSS, WalkMe</li>
                  <li>Microsoft Office, AI</li>
                </ul>
              </section>

              <section className="border border-gray-200 rounded-2xl p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3">Contact</h2>
                <p className="text-gray-700">
                  <span className="font-semibold">Email:</span> cheryl.tyler2020@gmail.com
                </p>
                <p className="text-gray-700 mt-2">
                  <span className="font-semibold">LinkedIn:</span>{" "}
                  <a className="underline" href="https://www.linkedin.com/cheryl-tyler/" target="_blank" rel="noreferrer">
                    www.linkedin.com/cheryl-tyler/
                  </a>
                </p>
              </section>
            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}
