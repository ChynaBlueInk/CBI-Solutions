'use client'

import { useState, useCallback, useEffect, useRef } from 'react'

// ─── Types ────────────────────────────────────────────────────────────────────

interface Opportunity {
  title: string
  description: string
}

interface Plan {
  headline: string
  strengths_summary: string
  energy_purpose: string
  opportunities: Opportunity[]
  actions: string[]
  closing: string
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const CTXS = [
  "My children have grown up and left home",
  "I'm approaching or thinking about retirement",
  "I've recently changed careers or lost my job",
  "I've been through a separation or divorce",
  "I've experienced a bereavement",
  "A health diagnosis has changed my perspective",
  "I'm facing financial change or hardship",
  "Life has started to feel routine and flat",
  "I'm healthy and active — ready for something new",
  "I feel like there's something more out there for me",
  "I'm not sure — I just know something needs to change",
]

const PRIS = [
  "Finding more purpose and meaning",
  "Earning income or financial independence",
  "Connection and community",
  "Adventure and new experiences",
  "Creative expression",
  "Health, wellbeing and a slower pace",
]

const VALS = [
  "Freedom", "Creativity", "Family", "Adventure", "Security", "Learning",
  "Helping others", "Independence", "Connection", "Achievement",
  "Spirituality", "Nature", "Justice", "Simplicity", "Fun", "Health",
  "Leadership", "Authenticity", "Contribution", "Beauty",
]

const STRS = [
  "Listening and empathy", "Organising and planning", "Teaching and explaining",
  "Problem-solving", "Creativity and ideas", "Leading and motivating",
  "Writing and storytelling", "Making things with my hands", "Caring for others",
  "Building relationships", "Adapting to change", "Calm under pressure",
  "Entrepreneurial thinking", "Working with numbers", "Visual creativity",
  "Research and analysis",
]

const INTS = [
  "Travel and exploration", "Writing or journalling", "Cooking and food",
  "Art, craft or making", "Gardening and nature", "Fitness and movement",
  "Learning new things", "Mentoring others", "Starting a business",
  "Community and volunteering", "Music or performance", "Photography or film",
  "Spirituality or mindfulness", "History and culture",
]

// ─── Shared state type ────────────────────────────────────────────────────────

interface AppState {
  ctx: string[]
  pri: string[]
  vals: string[]
  strs: string[]
  ints: string[]
  vt: string
  st: string
  it: string
  o1: string
  o2: string
  o3: string
  o4: string
}

const emptyState = (): AppState => ({
  ctx: [], pri: [], vals: [], strs: [], ints: [],
  vt: '', st: '', it: '', o1: '', o2: '', o3: '', o4: '',
})

// ─── Sub-components ───────────────────────────────────────────────────────────

function Chip({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-2.5 py-1 rounded-sm text-[11px] border transition-all duration-150 text-left leading-snug font-['Lato',sans-serif] ${
        selected
          ? 'border-teal-700 bg-teal-50 text-teal-800 font-bold'
          : 'border-amber-400 bg-white/30 text-amber-900 hover:border-teal-600 hover:text-teal-700 hover:bg-teal-50'
      }`}
    >
      {label}
    </button>
  )
}

function Box({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-2.5 py-2 rounded-sm text-[11.5px] border transition-all duration-150 text-left leading-snug font-['Lato',sans-serif] ${
        selected
          ? 'border-teal-700 bg-teal-50 text-teal-800 font-bold'
          : 'border-amber-400 bg-amber-100/40 text-amber-900 hover:border-teal-600 hover:text-teal-700 hover:bg-teal-50'
      }`}
    >
      {label}
    </button>
  )
}

function OpenField({
  label, hint, placeholder, value, onChange,
}: {
  label: string; hint: string; placeholder: string; value: string; onChange: (v: string) => void
}) {
  return (
    <div className="border-t border-dashed border-amber-400/50 mt-2 pt-3">
      <p className="text-[10px] font-bold tracking-widest uppercase text-amber-700 mb-1 font-['IM_Fell_English',serif]">
        {label} <span className="font-normal normal-case tracking-normal italic text-amber-500">— optional</span>
      </p>
      <p className="text-[11px] italic text-amber-700/80 leading-relaxed mb-1.5 font-['IM_Fell_English',serif]">{hint}</p>
      <textarea
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        rows={3}
        className="w-full border border-dashed border-amber-400/50 rounded-sm px-2.5 py-2 text-[11.5px] italic text-amber-800 placeholder-amber-400/60 bg-white/10 focus:outline-none focus:border-teal-600 focus:border-solid focus:not-italic resize-none leading-relaxed transition-all font-['IM_Fell_English',serif]"
      />
    </div>
  )
}

function AiBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-teal-50 border-l-4 border-teal-600 px-3.5 py-3 mb-2" style={{ borderRadius: '0 2px 2px 0' }}>
      {children}
    </div>
  )
}

function PlanCard({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="bg-white/25 border border-amber-400/40 rounded-sm px-3.5 py-3 mb-2">
      <p className="text-[10px] font-bold tracking-widest uppercase text-amber-700 mb-1.5 font-['IM_Fell_English',serif]">{label}</p>
      {children}
    </div>
  )
}

function LoadingDots() {
  return (
    <span className="inline-flex gap-1 items-center ml-1">
      {[0, 1, 2].map(i => (
        <span key={i} className="w-1.5 h-1.5 rounded-full bg-teal-600 animate-pulse"
          style={{ animationDelay: `${i * 0.2}s` }} />
      ))}
    </span>
  )
}

function BtnPrimary({ children, onClick, disabled = false }: {
  children: React.ReactNode; onClick?: () => void; disabled?: boolean
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="px-4 py-2 rounded-sm text-xs font-bold text-white bg-teal-700 hover:bg-teal-800 active:scale-95 disabled:bg-amber-300/80 disabled:cursor-not-allowed transition-all font-['Lato',sans-serif] shadow-md tracking-wide"
    >
      {children}
    </button>
  )
}

function BtnSecondary({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="px-3.5 py-2 rounded-sm text-xs text-amber-700 border border-amber-400/60 hover:border-amber-600 hover:text-amber-900 transition-all font-['Lato',sans-serif]"
    >
      {children}
    </button>
  )
}

function PageLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-[10px] font-bold tracking-widest uppercase text-amber-700 mb-1.5 font-['IM_Fell_English',serif]">{children}</p>
}

function PageTitle({ children, large }: { children: React.ReactNode; large?: boolean }) {
  return (
    <h2 className={`text-amber-950 mb-1.5 leading-tight font-['IM_Fell_English',serif] ${large ? 'text-2xl' : 'text-[19px]'}`}>
      {children}
    </h2>
  )
}

function Sub({ children, italic }: { children: React.ReactNode; italic?: boolean }) {
  return (
    <p className={`text-[12px] text-amber-900 leading-relaxed mb-2 font-['Lato',sans-serif] ${italic ? 'italic font-["IM_Fell_English",serif]' : ''}`}>
      {children}
    </p>
  )
}

function Note({ children }: { children: React.ReactNode }) {
  return <p className="text-[12.5px] italic text-amber-800 leading-relaxed mb-2 font-['IM_Fell_English',serif]">{children}</p>
}

function MainTextarea({ value, onChange, placeholder }: {
  value: string; onChange: (v: string) => void; placeholder: string
}) {
  return (
    <textarea
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      rows={4}
      className="w-full border border-amber-400/60 rounded-sm px-2.5 py-2 text-[12px] text-amber-950 bg-white/20 placeholder-amber-500/50 focus:outline-none focus:border-teal-600 resize-none leading-relaxed mb-2 transition-all font-['IM_Fell_English',serif]"
    />
  )
}

function SectionRule() {
  return <hr className="border-none border-t border-amber-400/40 my-2" style={{ borderTopWidth: 1 }} />
}

// ─── Progress bar ─────────────────────────────────────────────────────────────

function ProgressBar({ stage }: { stage: number }) {
  return (
    <div className="flex gap-1.5 mb-3 pb-2.5" style={{ borderBottom: '1px solid rgba(139,101,52,.3)' }}>
      {[0, 1, 2, 3, 4].map(i => (
        <div key={i} className="h-0.5 flex-1 rounded-sm transition-all duration-500"
          style={{ background: i < stage ? '#1a7a5a' : 'rgba(139,101,52,.3)' }} />
      ))}
    </div>
  )
}

// ─── Mock plan ────────────────────────────────────────────────────────────────

function buildMockPlan(s: AppState): Plan {
  const v = s.vals.slice(0, 3).join(', ') || 'your values'
  const str = s.strs.slice(0, 2).join(' and ') || 'your strengths'
  const i0 = s.ints[0] || 'your interests'
  const i12 = s.ints.slice(0, 2).join(' and ') || 'your interests'
  const hasCtx = !!s.o1
  const hasCon = !!s.o4

  return {
    headline: hasCtx
      ? `What you have been through has changed you — and that depth of experience is exactly the foundation your next chapter is built on.`
      : `This is your moment to step forward with confidence — your experience, wisdom, and passion for ${i12} are the foundation of something genuinely exciting.`,
    strengths_summary: `You bring a powerful combination of ${str} to everything you do. These are not just skills — they are the qualities that have shaped every meaningful thing you have built so far, and they are exactly what your next chapter needs.`,
    energy_purpose: `You come alive when you are connected to ${v}. Your next stage is not about slowing down — it is about channelling your energy into things that truly matter to you.`,
    opportunities: [
      {
        title: 'Start a small coaching or consulting practice',
        description: `Your strength in ${str} makes you a natural guide for others. ${hasCon ? 'This can be structured to fit around your current commitments.' : 'Many women have built meaningful income streams from exactly this kind of knowledge-sharing.'}`,
      },
      {
        title: `Pursue a creative project around ${i0}`,
        description: `${hasCon ? 'Even with practical constraints, this can begin small.' : 'This is the time to treat your creative life seriously.'} A blog, community class, or online course could connect you with others who share your passion.`,
      },
      {
        title: 'Build or join a community of like-minded women',
        description: `Your values around ${v} suggest you thrive in connection. Seek out or create a group of women asking the same questions — in person or online.`,
      },
      {
        title: 'Travel or volunteer with intention',
        description: `Purposeful travel or local volunteering aligns with your desire for meaning and new experience. ${hasCon ? 'Even short or local involvement can be deeply transformative.' : 'The world is waiting for what you bring to it.'}`,
      },
    ],
    actions: [
      'Write down your three most energising life moments and what they had in common — this is your compass',
      `Research one ${i0} community, course, or group and make contact this week`,
      'Have one honest conversation with someone whose life or work genuinely inspires you',
      'Draft a one-page vision of what your life looks like in 12 months if things go well',
      'Choose one small concrete action — a sign-up, a booking, a message sent — and do it today',
    ],
    closing: hasCtx
      ? `You have navigated something genuinely hard, and you are still here, still curious, still reaching for more. That is the best possible starting point for what comes next.`
      : `You have spent decades building skills, relationships, and wisdom that most people would envy. Your next chapter is not a question mark — it is an invitation, and you already have everything you need to accept it.`,
  }
}

// ─── Book layout wrapper ──────────────────────────────────────────────────────

function BookSpread({ left, right, stage }: {
  left: React.ReactNode
  right: React.ReactNode
  stage: number
}) {
  const parchLeft = 'radial-gradient(ellipse at 30% 40%, #f7efd8 0%, #f2e8c9 50%, #e3d4a5 100%)'
  const parchRight = 'radial-gradient(ellipse at 70% 60%, #f9f1dc 0%, #f2e8c9 50%, #e3d4a5 100%)'

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start py-8 px-3"
      style={{ background: 'radial-gradient(ellipse at center, #1a0d00 0%, #0d0600 100%)' }}
    >
      {/* Outer frame */}
      <div className="w-full max-w-3xl relative" style={{
        filter: 'drop-shadow(0 12px 40px rgba(0,0,0,.8))',
      }}>
        {/* Gold border frame */}
        <div className="absolute inset-0 pointer-events-none" style={{
          border: '3px solid #8b6534',
          borderRadius: 3,
          boxShadow: 'inset 0 0 0 2px #3d2200, inset 0 0 0 5px #8b6534, inset 0 0 0 7px #3d2200, 0 0 0 2px #3d2200',
          zIndex: 20,
          margin: -8,
        }} />

        {/* Corner flourishes */}
        {['tl','tr','bl','br'].map(pos => (
          <span key={pos} style={{
            position: 'absolute', zIndex: 25, fontSize: 22, color: '#8b6534',
            fontFamily: 'serif', lineHeight: 1, pointerEvents: 'none',
            top: pos.startsWith('t') ? -11 : undefined,
            bottom: pos.startsWith('b') ? -11 : undefined,
            left: pos.endsWith('l') ? -11 : undefined,
            right: pos.endsWith('r') ? -11 : undefined,
            transform: pos === 'tr' ? 'scaleX(-1)' : pos === 'bl' ? 'scaleY(-1)' : pos === 'br' ? 'scale(-1)' : undefined,
          }}>❧</span>
        ))}

        {/* Book spread */}
        <div className="flex">
          {/* Left page */}
          <div className="flex-1 flex flex-col relative overflow-hidden" style={{
            background: parchLeft,
            borderRadius: '2px 0 0 2px',
            padding: '20px 18px 20px 24px',
            minHeight: 520,
            borderTop: '1px solid #b8a06a',
            borderBottom: '1px solid #b8a06a',
            borderLeft: '1px solid #d4bf88',
          }}>
            {/* Page texture */}
            <div className="absolute inset-0 pointer-events-none" style={{
              background: 'repeating-linear-gradient(180deg, transparent 0px, transparent 23px, rgba(139,101,52,.07) 23px, rgba(139,101,52,.07) 24px)',
            }} />
            <div className="absolute inset-0 pointer-events-none" style={{
              background: 'radial-gradient(ellipse at 10% 85%, rgba(139,101,52,.15) 0%, transparent 50%), radial-gradient(ellipse at 90% 10%, rgba(139,101,52,.1) 0%, transparent 40%)',
            }} />
            {/* Right edge worn */}
            <div className="absolute top-0 right-0 bottom-0" style={{
              width: 3,
              background: 'linear-gradient(180deg, rgba(100,60,10,.3) 0%, rgba(60,30,5,.5) 30%, rgba(80,45,8,.3) 60%, rgba(60,30,5,.4) 100%)',
            }} />
            <div className="relative z-10 flex flex-col flex-1">
              <ProgressBar stage={stage} />
              {left}
            </div>
            {/* Page number */}
            <span className="absolute bottom-2.5 left-5 text-[10px] italic font-['IM_Fell_English',serif]" style={{ color: 'rgba(139,101,52,.6)' }}>
              {stage === 0 ? 'i' : stage === 1 ? '1' : stage === 2 ? '3' : stage === 3 ? '5' : stage === 4 ? '7' : '9'}
            </span>
          </div>

          {/* Spine */}
          <div style={{
            width: 24, flexShrink: 0,
            background: 'linear-gradient(180deg, #3d2200 0%, #5a3410 10%, #2a1500 20%, #4a2c08 35%, #1e1000 50%, #3d2200 60%, #2a1500 75%, #5a3410 90%, #3d2200 100%)',
            boxShadow: 'inset -3px 0 8px rgba(0,0,0,.6), inset 3px 0 8px rgba(0,0,0,.6)',
            position: 'relative', zIndex: 10,
          }} />

          {/* Right page */}
          <div className="flex-1 flex flex-col relative overflow-hidden" style={{
            background: parchRight,
            borderRadius: '0 2px 2px 0',
            padding: '20px 24px 20px 18px',
            minHeight: 520,
            borderTop: '1px solid #b8a06a',
            borderBottom: '1px solid #b8a06a',
            borderRight: '1px solid #d4bf88',
          }}>
            {/* Page texture */}
            <div className="absolute inset-0 pointer-events-none" style={{
              background: 'repeating-linear-gradient(180deg, transparent 0px, transparent 23px, rgba(139,101,52,.07) 23px, rgba(139,101,52,.07) 24px)',
            }} />
            <div className="absolute inset-0 pointer-events-none" style={{
              background: 'radial-gradient(ellipse at 90% 85%, rgba(139,101,52,.12) 0%, transparent 50%)',
            }} />
            {/* Left edge worn */}
            <div className="absolute top-0 left-0 bottom-0" style={{
              width: 3,
              background: 'linear-gradient(180deg, rgba(80,45,8,.3) 0%, rgba(60,30,5,.4) 30%, rgba(100,60,10,.2) 60%, rgba(80,45,8,.3) 100%)',
            }} />
            <div className="relative z-10 flex flex-col flex-1">
              {right}
            </div>
            {/* Page number */}
            <span className="absolute bottom-2.5 right-5 text-[10px] italic font-['IM_Fell_English',serif]" style={{ color: 'rgba(139,101,52,.6)' }}>
              {stage === 0 ? 'ii' : stage === 1 ? '2' : stage === 2 ? '4' : stage === 3 ? '6' : stage === 4 ? '8' : '10'}
            </span>
          </div>
        </div>

        {/* Shelf base */}
        <div style={{
          height: 20,
          background: '#1a0f07',
          borderTop: '3px solid #5a3820',
          borderRadius: '0 0 3px 3px',
        }} />
      </div>

      <p className="mt-4 text-xs italic opacity-30 font-['IM_Fell_English',serif]" style={{ color: '#c9a07a' }}>
        Your answers are private and never stored.
      </p>
    </div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function NextChapter() {
  const [stage, setStage] = useState(0)
  const [s, setS] = useState<AppState>(emptyState())
  const [plan, setPlan] = useState<Plan | null>(null)
  const [loading, setLoading] = useState(false)

  const update = useCallback((patch: Partial<AppState>) => {
    setS(prev => ({ ...prev, ...patch }))
  }, [])

  const go = useCallback((n: number) => {
    setStage(n)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  function toggleChip(list: string[], key: keyof AppState, item: string, max?: number) {
    let next: string[]
    if (list.includes(item)) {
      next = list.filter(x => x !== item)
    } else {
      if (max && list.length >= max) return
      next = [...list, item]
    }
    update({ [key]: next } as Partial<AppState>)
  }

  function selectOne(key: keyof AppState, item: string) {
    update({ [key]: [item] } as Partial<AppState>)
  }

  const can1 = s.ctx.length > 0 && s.pri.length > 0
  const can2 = s.vals.length > 0 && s.vt.trim().length >= 5
  const can3 = s.strs.length > 0 && s.st.trim().length >= 5
  const can4 = s.ints.length > 0 && s.it.trim().length >= 5

  async function makePlan() {
    go(5)
    setLoading(true)
    setPlan(null)

    const ctxBlock = [
      s.o1 ? `Personal context: "${s.o1}"` : '',
      s.o2 ? `Shaping her values: "${s.o2}"` : '',
      s.o3 ? `Strengths from difficulty: "${s.o3}"` : '',
      s.o4 ? `Practical constraints: "${s.o4}"` : '',
    ].filter(Boolean).join('\n')

    const prompt = `You are a warm, practical life coach writing a personalised "Next Chapter Plan" for a woman aged 50+.

She shared:
- Life context: ${s.ctx.join(', ')}
- Most important right now: ${s.pri.join(', ')}
- Top values: ${s.vals.join(', ')}
- A life well lived means: "${s.vt}"
- Key strengths: ${s.strs.join(', ')}
- Quietly proud of: "${s.st}"
- Key interests: ${s.ints.join(', ')}
- Dream life: "${s.it}"
${ctxBlock ? '\nAdditional context:\n' + ctxBlock : ''}

If she shared personal context (grief, illness, divorce, financial hardship), acknowledge it warmly — not clinically. Let it genuinely shape the opportunities and actions. If she shared constraints, suggest realistic, accessible pathways.

Return ONLY valid JSON, no markdown, no preamble:
{
  "headline": "One warm personal sentence about her unique chapter ahead",
  "strengths_summary": "2-3 sentences about her core strengths",
  "energy_purpose": "2-3 sentences about what energises her and her purpose",
  "opportunities": [
    { "title": "Opportunity name", "description": "2 sentences why it suits her specifically" },
    { "title": "Opportunity name", "description": "2 sentences" },
    { "title": "Opportunity name", "description": "2 sentences" },
    { "title": "Opportunity name", "description": "2 sentences" }
  ],
  "actions": ["Week 1 action", "Week 2 action", "Week 3 action", "Week 4 action", "Month-end action"],
  "closing": "2 warm personal sentences written just for her"
}

Tone: warm, grounded, practical. Specific to her actual answers — never generic.`

    try {
      const res = await fetch('/api/next-chapter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [{ role: 'user', content: prompt }] }),
      })
      if (!res.ok) throw new Error('API error')
      const data = await res.json()
      const raw = data.content.map((b: { text?: string }) => b.text || '').join('')
      setPlan(JSON.parse(raw.replace(/```json|```/g, '').trim()))
    } catch {
      setPlan(buildMockPlan(s))
    } finally {
      setLoading(false)
    }
  }

  function reset() {
    setS(emptyState())
    setPlan(null)
    setLoading(false)
    go(0)
  }

  // ── Page renders ─────────────────────────────────────────────────────────────

  if (stage === 0) return (
    <BookSpread stage={stage}
      left={
        <div className="flex flex-col items-center justify-center flex-1 text-center py-4">
          <PageLabel>Est. in this moment</PageLabel>
          <PageTitle large>The Next<br />Chapter</PageTitle>
          <p className="font-['IM_Fell_English',serif] text-amber-700 text-lg my-2 tracking-widest">— ❦ —</p>
          <p className="text-[13px] italic text-amber-800 leading-relaxed mb-3 font-['IM_Fell_English',serif]">
            A guided discovery journey<br />for women ready to write<br />something new.
          </p>
          <SectionRule />
          <Sub>In 10–15 minutes you will uncover what energises you, what you value, and what chapter might truly light you up.</Sub>
          <Note>No right or wrong answers — just be honest and let yourself dream.</Note>
          <div className="mt-4"><BtnPrimary onClick={() => go(1)}>Open the book →</BtnPrimary></div>
        </div>
      }
      right={
        <div>
          <PageLabel>What awaits you</PageLabel>
          <SectionRule />
          <Note>This book will guide you through four pages of discovery:</Note>
          {["Your life context and what matters most", "Your values and what a life well lived means to you", "Your strengths and what you bring to the world", "Your interests and what lights you up"].map((t, i) => (
            <div key={i} className="flex gap-2.5 items-start mb-2.5 pb-2.5" style={{ borderBottom: '1px solid rgba(139,101,52,.2)' }}>
              <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-[11px] font-['IM_Fell_English',serif]"
                style={{ border: '1px solid rgba(139,101,52,.5)', color: '#8b6534' }}>{i + 1}</div>
              <p className="text-[12.5px] italic text-amber-800 leading-snug font-['IM_Fell_English',serif] m-0">{t}</p>
            </div>
          ))}
          <SectionRule />
          <Note>At the end, your personalised <em>Next Chapter Plan</em> awaits.</Note>
        </div>
      }
    />
  )

  if (stage === 1) return (
    <BookSpread stage={stage}
      left={
        <>
          <PageLabel>Page one — about you</PageLabel>
          <PageTitle>What has brought you here?</PageTitle>
          <Sub>Choose everything that feels true right now.</Sub>
          <div className="flex flex-wrap gap-1.5 mb-2">
            {CTXS.map(item => (
              <Chip key={item} label={item} selected={s.ctx.includes(item)}
                onClick={() => toggleChip(s.ctx, 'ctx', item)} />
            ))}
          </div>
          <div className="mt-auto">
            <OpenField
              label="In your own words"
              hint="If something specific brought you here — a loss, illness, financial change, or relationship ending — share it here. It will shape your plan."
              placeholder="Share as much or as little as you like..."
              value={s.o1} onChange={v => update({ o1: v })}
            />
          </div>
        </>
      }
      right={
        <>
          <PageLabel>Continued</PageLabel>
          <PageTitle>What matters most?</PageTitle>
          <Sub>Choose the one thing that matters most to you right now.</Sub>
          <div className="grid grid-cols-2 gap-1.5 mb-3">
            {PRIS.map(item => (
              <Box key={item} label={item} selected={s.pri.includes(item)}
                onClick={() => selectOne('pri', item)} />
            ))}
          </div>
          <div className="mt-auto flex gap-2 pt-3">
            <BtnPrimary onClick={() => go(2)} disabled={!can1}>Turn the page →</BtnPrimary>
          </div>
        </>
      }
    />
  )

  if (stage === 2) return (
    <BookSpread stage={stage}
      left={
        <>
          <PageLabel>Page two — your values</PageLabel>
          <PageTitle>What do you stand for?</PageTitle>
          <Sub>Choose up to 5 values that feel most like you.</Sub>
          <div className="flex flex-wrap gap-1.5">
            {VALS.map(item => (
              <Chip key={item} label={item} selected={s.vals.includes(item)}
                onClick={() => toggleChip(s.vals, 'vals', item, 5)} />
            ))}
          </div>
        </>
      }
      right={
        <>
          <PageLabel>Continued</PageLabel>
          <PageTitle>In your own words</PageTitle>
          <Note>&ldquo;A life well lived, for me, means...&rdquo;</Note>
          <MainTextarea value={s.vt} onChange={v => update({ vt: v })} placeholder="Write whatever comes to mind." />
          <OpenField
            label="Anything shaping your values?"
            hint="What we value becomes clearest after loss or hardship. Share anything that has shifted your perspective."
            placeholder="Only if it feels useful..."
            value={s.o2} onChange={v => update({ o2: v })}
          />
          <div className="mt-auto flex gap-2 pt-3">
            <BtnPrimary onClick={() => go(3)} disabled={!can2}>Turn the page →</BtnPrimary>
            <BtnSecondary onClick={() => go(1)}>← Back</BtnSecondary>
          </div>
        </>
      }
    />
  )

  if (stage === 3) return (
    <BookSpread stage={stage}
      left={
        <>
          <PageLabel>Page three — your strengths</PageLabel>
          <PageTitle>What do you bring to the world?</PageTitle>
          <Sub>What have people always come to you for? Choose up to 6.</Sub>
          <div className="flex flex-wrap gap-1.5">
            {STRS.map(item => (
              <Chip key={item} label={item} selected={s.strs.includes(item)}
                onClick={() => toggleChip(s.strs, 'strs', item, 6)} />
            ))}
          </div>
        </>
      }
      right={
        <>
          <PageLabel>Continued</PageLabel>
          <PageTitle>In your own words</PageTitle>
          <Note>&ldquo;Something I have done that I am quietly proud of...&rdquo;</Note>
          <MainTextarea value={s.st} onChange={v => update({ st: v })} placeholder="It does not need to be a big achievement." />
          <OpenField
            label="Strengths from difficulty"
            hint="Hard times reveal strengths we did not know we had. What did a recent challenge show you about yourself?"
            placeholder="You might surprise yourself..."
            value={s.o3} onChange={v => update({ o3: v })}
          />
          <div className="mt-auto flex gap-2 pt-3">
            <BtnPrimary onClick={() => go(4)} disabled={!can3}>Turn the page →</BtnPrimary>
            <BtnSecondary onClick={() => go(2)}>← Back</BtnSecondary>
          </div>
        </>
      }
    />
  )

  if (stage === 4) return (
    <BookSpread stage={stage}
      left={
        <>
          <PageLabel>Page four — your interests</PageLabel>
          <PageTitle>What lights you up?</PageTitle>
          <Sub>Do not overthink it — pick what draws you in. Choose up to 6.</Sub>
          <div className="flex flex-wrap gap-1.5">
            {INTS.map(item => (
              <Chip key={item} label={item} selected={s.ints.includes(item)}
                onClick={() => toggleChip(s.ints, 'ints', item, 6)} />
            ))}
          </div>
        </>
      }
      right={
        <>
          <PageLabel>Continued</PageLabel>
          <PageTitle>In your own words</PageTitle>
          <Note>&ldquo;If money were no concern, I would spend my time...&rdquo;</Note>
          <MainTextarea value={s.it} onChange={v => update({ it: v })} placeholder="Let yourself dream here." />
          <OpenField
            label="Any constraints worth knowing?"
            hint="If budget, health, location, or caring responsibilities shape what is realistic, share that here. Your plan will be more useful for it."
            placeholder="Be honest — this helps us give you practical suggestions..."
            value={s.o4} onChange={v => update({ o4: v })}
          />
          <div className="mt-auto flex gap-2 pt-3">
            <BtnPrimary onClick={makePlan} disabled={!can4}>Write my Next Chapter Plan ✦</BtnPrimary>
            <BtnSecondary onClick={() => go(3)}>← Back</BtnSecondary>
          </div>
        </>
      }
    />
  )

  // Stage 5 — Plan
  return (
    <BookSpread stage={stage}
      left={
        <>
          <PageLabel>Your next chapter</PageLabel>
          <PageTitle>Your Next Chapter Plan</PageTitle>
          <Sub>Based on everything you have shared, here is what we see for your next chapter.</Sub>

          {loading && (
            <AiBox>
              <p className="text-sm text-teal-800 font-['Lato',sans-serif]">
                Writing your personalised plan <LoadingDots />
              </p>
            </AiBox>
          )}

          {plan && (
            <>
              <AiBox>
                <p className="text-[13.5px] font-['IM_Fell_English',serif] text-teal-900 leading-snug">{plan.headline}</p>
              </AiBox>
              <PlanCard label="Your strengths">
                <p className="text-[12px] text-amber-950 leading-relaxed font-['Lato',sans-serif]">{plan.strengths_summary}</p>
              </PlanCard>
              <PlanCard label="What gives you energy and purpose">
                <p className="text-[12px] text-amber-950 leading-relaxed font-['Lato',sans-serif]">{plan.energy_purpose}</p>
              </PlanCard>
            </>
          )}
        </>
      }
      right={
        <>
          {plan && (
            <>
              <PlanCard label="Your matched opportunities">
                {plan.opportunities.map((opp, i) => (
                  <div key={i} className={`${i < plan.opportunities.length - 1 ? 'pb-2 mb-2' : ''}`}
                    style={{ borderBottom: i < plan.opportunities.length - 1 ? '1px solid rgba(139,101,52,.25)' : 'none' }}>
                    <p className="text-[13px] text-amber-950 mb-0.5 font-['IM_Fell_English',serif]">{opp.title}</p>
                    <p className="text-[11.5px] text-amber-800 leading-relaxed font-['Lato',sans-serif]">{opp.description}</p>
                  </div>
                ))}
              </PlanCard>

              <PlanCard label="Your 30-day action plan">
                {plan.actions.map((action, i) => (
                  <div key={i} className={`flex gap-2 items-start py-1.5 font-['Lato',sans-serif] text-[11.5px] text-amber-950 leading-snug ${i < plan.actions.length - 1 ? '' : ''}`}
                    style={{ borderBottom: i < plan.actions.length - 1 ? '1px solid rgba(139,101,52,.2)' : 'none' }}>
                    <div className="w-4 h-4 rounded-full bg-teal-700 text-white text-[9px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</div>
                    <span>{action}</span>
                  </div>
                ))}
              </PlanCard>

              <AiBox>
                <p className="text-[12px] text-teal-800 leading-relaxed font-['Lato',sans-serif]">{plan.closing}</p>
              </AiBox>
            </>
          )}

          <div className="mt-auto flex gap-2 pt-3">
            <BtnPrimary onClick={() => window.print()}>⎙ Print or save as PDF</BtnPrimary>
            <BtnSecondary onClick={reset}>Start again</BtnSecondary>
          </div>
        </>
      }
    />
  )
}
