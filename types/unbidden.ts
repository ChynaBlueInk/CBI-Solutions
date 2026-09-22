export interface UnbiddenStage {
  id: number
  act?: string
  actDescription?: string
  title: string
  unbidden: string[]
  universalTruth: string[]
  myVoice: string[]
  prompt: string
  chapterIds?: string[]
  authorNote?: string[]
  epilogue?: string[]
}

export interface UnbiddenReflection {
  stageId: number
  text: string
  updatedAt: string
}

export interface UnbiddenIntroSection {
  id: string
  heading: string
  subtitle?: string
  paragraphs: string[]
  refrain?: string[]
  coda?: string
  signature?: string[]
}

export interface UnbiddenChapterSection {
  id: string
  heading: string | null
  subtitle?: string
  paragraphs: string[]
}

export interface UnbiddenChapter {
  id: string
  number: number
  title: string
  sections: UnbiddenChapterSection[]
  coda?: string
}
