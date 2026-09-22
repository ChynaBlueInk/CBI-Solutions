import { use } from "react"
import { notFound } from "next/navigation"
import UnbiddenChapter from "@/app/components/unbidden/UnbiddenChapter"
import { unbiddenChapters } from "@/data/unbidden-chapters"

export const metadata = {
  title: "Unbidden",
}

export default function ChapterPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)
  const exists = unbiddenChapters.some((c) => c.id === id)
  if (!exists) notFound()
  return <UnbiddenChapter chapterId={id} />
}
