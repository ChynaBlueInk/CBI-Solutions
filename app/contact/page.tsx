import { Suspense } from "react"
import ContactClient from "./ContactClient"

export default function Page() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <section className="pt-24 pb-16 px-4 text-center">
          <p className="text-gray-600">Loading…</p>
        </section>
      </main>
    }>
      <ContactClient />
    </Suspense>
  )
}
