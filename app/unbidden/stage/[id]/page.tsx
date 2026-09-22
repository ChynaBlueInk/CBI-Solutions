import { use } from "react"
import { notFound } from "next/navigation"
import UnbiddenStageDetail from "@/app/components/unbidden/UnbiddenStageDetail"
import { unbiddenStages } from "@/data/unbidden-stages"

export const metadata = {
  title: "Unbidden",
}

export default function StagePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)
  const stageId = Number(id)
  const exists = unbiddenStages.some((s) => s.id === stageId)
  if (!exists) notFound()
  return <UnbiddenStageDetail stageId={stageId} />
}
