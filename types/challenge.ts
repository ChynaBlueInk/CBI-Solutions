// types/challenge.ts

export interface Week{
  number:number
  title:string
  purpose:string
  tools:string
  prompt:string
  miniOutput?:string
}

export interface SideQuest{
  title:string
  description:string
  tool:string
}

export interface Submission{
  id:string
  name:string
  email:string
  fileUrl:string
  fileName:string
  createdAt:Date
}

export interface Challenge{
  id:string
  month:string
  title:string
  theme:string
  intro:string[]
  tools:string[]
  project:string
  timeCommitment:string
  outputs:string[]
  weeks:Week[]
  sideQuests?:SideQuest[]
  closingNote:string
  submissions?:Submission[]
  isLive:boolean
}
