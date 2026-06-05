'use client'

import { useState, useCallback, useEffect } from 'react'

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

interface AppState {
  ctx: string[]; pri: string[]; vals: string[]; strs: string[]; ints: string[]
  vt: string; st: string; it: string
  o1: string; o2: string; o3: string; o4: string
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
  "Freedom","Creativity","Family","Adventure","Security","Learning",
  "Helping others","Independence","Connection","Achievement",
  "Spirituality","Nature","Justice","Simplicity","Fun","Health",
  "Leadership","Authenticity","Contribution","Beauty",
]

const STRS = [
  "Listening and empathy","Organising and planning","Teaching and explaining",
  "Problem-solving","Creativity and ideas","Leading and motivating",
  "Writing and storytelling","Making things with my hands","Caring for others",
  "Building relationships","Adapting to change","Calm under pressure",
  "Entrepreneurial thinking","Working with numbers","Visual creativity",
  "Research and analysis",
]

const INTS = [
  "Travel and exploration","Writing or journalling","Cooking and food",
  "Art, craft or making","Gardening and nature","Fitness and movement",
  "Learning new things","Mentoring others","Starting a business",
  "Community and volunteering","Music or performance","Photography or film",
  "Spirituality or mindfulness","History and culture",
]

const emptyState = (): AppState => ({
  ctx:[], pri:[], vals:[], strs:[], ints:[],
  vt:'', st:'', it:'', o1:'', o2:'', o3:'', o4:'',
})

// ─── Styles injected as a real stylesheet ────────────────────────────────────
// This guarantees mobile responsiveness regardless of Tailwind config

const globalStyles = `
  .nc-shell {
    min-height: 100vh;
    background: radial-gradient(ellipse at center, #1a0d00 0%, #0d0600 100%);
    padding: 2rem 1rem 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Lato, sans-serif;
  }

  .nc-outer {
    width: 100%;
    max-width: 760px;
    position: relative;
  }

  /* Gold frame */
  .nc-frame {
    position: absolute;
    inset: -9px;
    border: 3px solid #8b6534;
    border-radius: 3px;
    box-shadow: inset 0 0 0 2px #3d2200, inset 0 0 0 5px #8b6534, inset 0 0 0 7px #3d2200;
    pointer-events: none;
    z-index: 20;
  }

  .nc-corner {
    position: absolute;
    font-size: 22px;
    color: #8b6534;
    font-family: serif;
    line-height: 1;
    pointer-events: none;
    z-index: 25;
  }

  /* Book spread — two columns on desktop */
  .nc-book {
    display: flex;
    flex-direction: row;
    filter: drop-shadow(0 12px 50px rgba(0,0,0,.85));
  }

  /* Each page */
  .nc-page {
    flex: 1;
    position: relative;
    overflow: hidden;
    padding: 22px 22px 28px 28px;
    min-height: 500px;
    display: flex;
    flex-direction: column;
  }

  .nc-page-left {
    background: radial-gradient(ellipse at 30% 40%, #f7efd8 0%, #f2e8c9 50%, #e3d4a5 100%);
    border-radius: 2px 0 0 2px;
    border: 1px solid #b8a06a;
    border-right: none;
  }

  .nc-page-right {
    background: radial-gradient(ellipse at 70% 60%, #f9f1dc 0%, #f2e8c9 50%, #e3d4a5 100%);
    border-radius: 0 2px 2px 0;
    padding: 22px 28px 28px 22px;
    border: 1px solid #b8a06a;
    border-left: none;
  }

  /* Parchment texture */
  .nc-page::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background:
      repeating-linear-gradient(180deg, transparent 0px, transparent 23px, rgba(139,101,52,.07) 23px, rgba(139,101,52,.07) 24px),
      radial-gradient(ellipse at 10% 85%, rgba(139,101,52,.14) 0%, transparent 50%),
      radial-gradient(ellipse at 90% 10%, rgba(139,101,52,.09) 0%, transparent 40%);
  }

  .nc-page-content {
    position: relative;
    z-index: 10;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  /* Spine */
  .nc-spine {
    width: 26px;
    flex-shrink: 0;
    background: linear-gradient(180deg, #3d2200 0%, #5a3410 10%, #2a1500 20%, #4a2c08 35%, #1e1000 50%, #3d2200 60%, #2a1500 75%, #5a3410 90%, #3d2200 100%);
    box-shadow: inset -3px 0 8px rgba(0,0,0,.6), inset 3px 0 8px rgba(0,0,0,.6);
    position: relative;
    z-index: 10;
  }

  /* Shelf */
  .nc-shelf {
    height: 20px;
    background: #1a0f07;
    border-top: 3px solid #5a3820;
    border-radius: 0 0 4px 4px;
  }

  /* Progress bar */
  .nc-progress {
    display: flex;
    gap: 5px;
    margin-bottom: 14px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(139,101,52,.3);
  }

  .nc-pdot {
    height: 3px;
    flex: 1;
    border-radius: 1px;
    background: rgba(139,101,52,.3);
    transition: background .4s ease;
  }

  .nc-pdot.done { background: #1a7a5a; }

  /* Page divider shown on mobile between top and bottom sections */
  .nc-mobile-divider {
    display: none;
    align-items: center;
    gap: 10px;
    padding: 10px 0;
  }
  .nc-mobile-divider-line {
    flex: 1;
    height: 1px;
    background: rgba(139,101,52,.3);
  }
  .nc-mobile-divider-text {
    font-family: 'IM Fell English', Georgia, serif;
    font-style: italic;
    font-size: 11px;
    color: rgba(139,101,52,.6);
  }

  /* Page numbers */
  .nc-pgnum {
    position: absolute;
    bottom: 10px;
    font-family: 'IM Fell English', Georgia, serif;
    font-style: italic;
    font-size: 10px;
    color: rgba(139,101,52,.55);
    z-index: 10;
  }
  .nc-pgnum-left  { left: 18px; }
  .nc-pgnum-right { right: 18px; }

  /* Footer */
  .nc-footer {
    margin-top: 1.25rem;
    font-family: 'IM Fell English', Georgia, serif;
    font-style: italic;
    font-size: 12px;
    color: rgba(201,160,122,.35);
    text-align: center;
  }

  /* Typography */
  .nc-label {
    font-family: 'IM Fell English', Georgia, serif;
    font-size: 10px;
    letter-spacing: .14em;
    text-transform: uppercase;
    color: #8b6534;
    margin-bottom: 5px;
  }

  .nc-title {
    font-family: 'IM Fell English', Georgia, serif;
    font-size: 20px;
    color: #2c1a06;
    margin-bottom: 6px;
    line-height: 1.25;
  }

  .nc-title-large {
    font-size: 26px;
  }

  .nc-sub {
    font-family: Lato, sans-serif;
    font-size: 13px;
    color: #5a3e1a;
    line-height: 1.65;
    margin-bottom: 9px;
  }

  .nc-note {
    font-family: 'IM Fell English', Georgia, serif;
    font-style: italic;
    font-size: 13px;
    color: #5a3e1a;
    line-height: 1.6;
    margin-bottom: 7px;
  }

  .nc-ornament {
    text-align: center;
    color: #8b6534;
    font-family: serif;
    font-size: 16px;
    margin: 6px 0 12px;
    letter-spacing: 4px;
    opacity: .8;
  }

  .nc-rule {
    border: none;
    border-top: 1px solid rgba(139,101,52,.35);
    margin: 9px 0;
  }

  /* Chips */
  .nc-chip-wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    margin-bottom: 9px;
  }

  .nc-chip {
    border: 1px solid #b8a06a;
    border-radius: 2px;
    padding: 4px 10px;
    font-size: 12px;
    font-family: Lato, sans-serif;
    color: #5a3e1a;
    cursor: pointer;
    background: rgba(255,255,255,.3);
    transition: all .15s;
    line-height: 1.4;
  }
  .nc-chip:hover { border-color: #1a7a5a; color: #1a7a5a; background: #d4efe5; }
  .nc-chip.on    { border-color: #1a7a5a; background: #d4efe5; color: #1a7a5a; font-weight: 700; }

  /* Boxes */
  .nc-box-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6px;
    margin-bottom: 9px;
  }

  .nc-box {
    border: 1px solid #b8a06a;
    border-radius: 2px;
    padding: 8px 10px;
    font-size: 12px;
    font-family: Lato, sans-serif;
    color: #2c1a06;
    cursor: pointer;
    background: rgba(255,255,255,.25);
    text-align: left;
    line-height: 1.35;
    transition: all .15s;
  }
  .nc-box:hover { border-color: #1a7a5a; color: #1a7a5a; background: #d4efe5; }
  .nc-box.on    { border-color: #1a7a5a; background: #d4efe5; color: #1a7a5a; font-weight: 700; }

  /* Textareas */
  .nc-textarea {
    width: 100%;
    border: 1px solid rgba(139,101,52,.5);
    border-radius: 2px;
    padding: 8px 10px;
    font-size: 13px;
    font-family: 'IM Fell English', Georgia, serif;
    color: #2c1a06;
    background: rgba(255,255,255,.2);
    resize: vertical;
    line-height: 1.7;
    margin-bottom: 8px;
    transition: border-color .2s;
    box-sizing: border-box;
  }
  .nc-textarea:focus { outline: none; border-color: #1a7a5a; background: rgba(255,255,255,.35); }
  .nc-textarea-main { min-height: 72px; }
  .nc-textarea-open {
    min-height: 56px;
    border-style: dashed;
    border-color: rgba(139,101,52,.4);
    font-style: italic;
    font-size: 12px;
    background: rgba(255,255,255,.1);
    color: #5a3e1a;
  }
  .nc-textarea-open::placeholder { color: rgba(139,101,52,.45); }
  .nc-textarea-open:focus { border-style: solid; font-style: normal; color: #2c1a06; }

  /* Open field */
  .nc-open-wrap {
    border-top: 1px dashed rgba(139,101,52,.4);
    margin-top: 8px;
    padding-top: 9px;
  }
  .nc-open-label {
    font-family: 'IM Fell English', Georgia, serif;
    font-size: 10.5px;
    color: #8b6534;
    margin-bottom: 3px;
  }
  .nc-open-opt { font-style: italic; color: rgba(139,101,52,.5); }
  .nc-open-hint {
    font-family: 'IM Fell English', Georgia, serif;
    font-style: italic;
    font-size: 11px;
    color: #8b6534;
    line-height: 1.5;
    margin-bottom: 5px;
  }

  /* Buttons */
  .nc-btn-primary {
    background: #1a7a5a;
    color: #fff;
    border: none;
    border-radius: 2px;
    padding: 9px 18px;
    font-size: 13px;
    font-family: Lato, sans-serif;
    font-weight: 700;
    cursor: pointer;
    letter-spacing: .03em;
    transition: background .2s;
    box-shadow: 0 2px 6px rgba(0,0,0,.3);
  }
  .nc-btn-primary:hover    { background: #0f5c42; }
  .nc-btn-primary:disabled { background: #d4bf88; cursor: not-allowed; box-shadow: none; color: rgba(255,255,255,.7); }

  .nc-btn-secondary {
    background: transparent;
    color: #8b6534;
    border: 1px solid rgba(139,101,52,.5);
    border-radius: 2px;
    padding: 9px 14px;
    font-size: 12px;
    font-family: Lato, sans-serif;
    cursor: pointer;
    transition: all .2s;
  }
  .nc-btn-secondary:hover { border-color: #8b6534; color: #2c1a06; }

  .nc-btn-row {
    display: flex;
    gap: 8px;
    align-items: center;
    flex-wrap: wrap;
    margin-top: auto;
    padding-top: 12px;
  }

  /* Plan elements */
  .nc-ai-box {
    background: #d4efe5;
    border-left: 3px solid #1a7a5a;
    padding: 10px 14px;
    margin-bottom: 10px;
    border-radius: 0 3px 3px 0;
  }
  .nc-ai-box-head {
    font-family: 'IM Fell English', Georgia, serif;
    font-size: 14px;
    color: #0f5c42;
    margin-bottom: 3px;
    line-height: 1.45;
  }
  .nc-ai-box p {
    font-family: Lato, sans-serif;
    font-size: 12.5px;
    color: #0f5c42;
    line-height: 1.6;
    margin: 0;
  }

  .nc-plan-card {
    background: rgba(255,255,255,.25);
    border: 1px solid rgba(139,101,52,.4);
    border-radius: 2px;
    padding: 10px 12px;
    margin-bottom: 10px;
  }
  .nc-plan-lbl {
    font-family: 'IM Fell English', Georgia, serif;
    font-size: 10px;
    letter-spacing: .1em;
    text-transform: uppercase;
    color: #8b6534;
    margin-bottom: 5px;
  }
  .nc-plan-card p {
    font-family: Lato, sans-serif;
    font-size: 12.5px;
    color: #2c1a06;
    line-height: 1.65;
    margin: 0;
  }

  .nc-opp-item {
    padding-bottom: 8px;
    margin-bottom: 8px;
    border-bottom: 1px solid rgba(139,101,52,.25);
  }
  .nc-opp-item:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
  .nc-opp-title {
    font-family: 'IM Fell English', Georgia, serif;
    font-size: 13.5px;
    color: #2c1a06;
    margin-bottom: 2px;
  }
  .nc-opp-desc {
    font-family: Lato, sans-serif;
    font-size: 12px;
    color: #5a3e1a;
    line-height: 1.6;
  }

  .nc-act-row {
    display: flex;
    gap: 8px;
    align-items: flex-start;
    padding: 6px 0;
    border-bottom: 1px solid rgba(139,101,52,.2);
    font-family: Lato, sans-serif;
    font-size: 12px;
    color: #2c1a06;
    line-height: 1.5;
  }
  .nc-act-row:last-child { border-bottom: none; }
  .nc-act-num {
    width: 18px; height: 18px;
    border-radius: 50%;
    background: #1a7a5a;
    color: #fff;
    font-size: 10px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-top: 1px;
  }

  /* Loading dots */
  .nc-dots { display: inline-flex; gap: 4px; align-items: center; margin-left: 4px; }
  .nc-dot {
    width: 5px; height: 5px;
    border-radius: 50%;
    background: #1a7a5a;
    animation: nc-blink 1.2s infinite;
  }
  .nc-dot:nth-child(2) { animation-delay: .2s; }
  .nc-dot:nth-child(3) { animation-delay: .4s; }
  @keyframes nc-blink { 0%,80%,100%{opacity:.2} 40%{opacity:1} }

  /* Welcome step list */
  .nc-step-item {
    display: flex;
    gap: 10px;
    align-items: flex-start;
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(139,101,52,.2);
  }
  .nc-step-item:last-child { border-bottom: none; }
  .nc-step-num {
    width: 20px; height: 20px;
    border-radius: 50%;
    border: 1px solid rgba(139,101,52,.5);
    color: #8b6534;
    font-family: 'IM Fell English', Georgia, serif;
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  /* ── MOBILE: stack pages vertically ── */
  @media (max-width: 640px) {
    .nc-book { flex-direction: column; }
    .nc-spine { width: 100%; height: 12px; }
    .nc-page {
      border-radius: 0 !important;
      border-left: 1px solid #b8a06a !important;
      border-right: 1px solid #b8a06a !important;
      min-height: auto;
      padding: 18px 16px 22px;
    }
    .nc-page-right { padding: 18px 16px 22px; }
    .nc-page-left { border-bottom: none !important; }
    .nc-page-right { border-top: none !important; }
    .nc-mobile-divider { display: flex; }
    .nc-title { font-size: 18px; }
    .nc-title-large { font-size: 22px; }
    .nc-frame { display: none; }
    .nc-corner { display: none; }
    .nc-pgnum { display: none; }
    .nc-box-grid { grid-template-columns: 1fr; }
    .nc-shelf { border-radius: 0 0 3px 3px; }
  }

  @media print {
    .nc-shell { background: white; padding: 0; }
    .nc-frame, .nc-shelf, .nc-corner { display: none; }
    .nc-book { flex-direction: column; box-shadow: none; filter: none; }
    .nc-spine { display: none; }
    .nc-page { border: none; min-height: auto; }
    .nc-btn-row, .nc-progress, .nc-footer { display: none !important; }
  }
`

// ─── Mock plan ────────────────────────────────────────────────────────────────

function buildMockPlan(s: AppState): Plan {
  const v   = s.vals.slice(0,3).join(', ')    || 'your values'
  const str = s.strs.slice(0,2).join(' and ') || 'your strengths'
  const i0  = s.ints[0]                       || 'your interests'
  const i12 = s.ints.slice(0,2).join(' and ') || 'your interests'
  const hasCtx = !!s.o1
  const hasCon = !!s.o4

  return {
    headline: hasCtx
      ? `What you have been through has changed you — and that depth of experience is exactly the foundation your next chapter is built on.`
      : `This is your moment to step forward with confidence — your experience, wisdom, and passion for ${i12} are the foundation of something genuinely exciting.`,
    strengths_summary: `You bring a powerful combination of ${str} to everything you do. These are not just skills — they are the qualities that have shaped every meaningful thing you have built so far, and they are exactly what your next chapter needs.`,
    energy_purpose: `You come alive when you are connected to ${v}. Your next stage is not about slowing down — it is about channelling your energy into things that truly matter to you.`,
    opportunities: [
      { title: 'Start a small coaching or consulting practice', description: `Your strength in ${str} makes you a natural guide for others. ${hasCon ? 'This can be structured to fit around your current commitments.' : 'Many women have built meaningful income streams from exactly this kind of knowledge-sharing.'}` },
      { title: `Pursue a creative project around ${i0}`, description: `${hasCon ? 'Even with practical constraints, this can begin small.' : 'This is the time to treat your creative life seriously.'} A blog, community class, or online course could connect you with others who share your passion.` },
      { title: 'Build or join a community of like-minded women', description: `Your values around ${v} suggest you thrive in connection. Seek out or create a group of women asking the same questions — in person or online.` },
      { title: 'Travel or volunteer with intention', description: `Purposeful travel or local volunteering aligns with your desire for meaning and new experience. ${hasCon ? 'Even short or local involvement can be deeply transformative.' : 'The world is waiting for what you bring to it.'}` },
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

// ─── Main component ───────────────────────────────────────────────────────────

export default function NextChapter() {
  const [stage, setStage] = useState(0)
  const [s, setS] = useState<AppState>(emptyState())
  const [plan, setPlan] = useState<Plan | null>(null)
  const [loading, setLoading] = useState(false)

  // Inject stylesheet once
  useEffect(() => {
    const id = 'nc-styles'
    if (!document.getElementById(id)) {
      const el = document.createElement('style')
      el.id = id
      el.textContent = globalStyles
      document.head.appendChild(el)
    }
    return () => {
      const el = document.getElementById(id)
      if (el) el.remove()
    }
  }, [])

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

If she shared personal context (grief, illness, divorce, financial hardship), acknowledge it warmly and let it shape the opportunities and actions. If she mentioned constraints, keep suggestions realistic.

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

  // ── Shared layout wrapper ─────────────────────────────────────────────────────

  function Page({ left, right, pgL, pgR }: {
    left: React.ReactNode
    right: React.ReactNode
    pgL: string
    pgR: string
  }) {
    return (
      <div className="nc-shell">
        <div className="nc-outer">
          <div className="nc-frame" />
          <span className="nc-corner" style={{ top: -12, left: -12 }}>❧</span>
          <span className="nc-corner" style={{ top: -12, right: -12, transform: 'scaleX(-1)' }}>❧</span>
          <span className="nc-corner" style={{ bottom: -12, left: -12, transform: 'scaleY(-1)' }}>❧</span>
          <span className="nc-corner" style={{ bottom: -12, right: -12, transform: 'scale(-1)' }}>❧</span>

          <div className="nc-book">
            {/* Left page */}
            <div className="nc-page nc-page-left">
              <div className="nc-page-content">
                <div className="nc-progress">
                  {[0,1,2,3,4].map(i => (
                    <div key={i} className={`nc-pdot${i < stage ? ' done' : ''}`} />
                  ))}
                </div>
                {left}
              </div>
              <span className="nc-pgnum nc-pgnum-left">{pgL}</span>
            </div>

            {/* Spine */}
            <div className="nc-spine" />

            {/* Right page */}
            <div className="nc-page nc-page-right">
              <div className="nc-page-content">
                {/* Mobile divider shown between sections */}
                <div className="nc-mobile-divider">
                  <div className="nc-mobile-divider-line" />
                  <span className="nc-mobile-divider-text">continued</span>
                  <div className="nc-mobile-divider-line" />
                </div>
                {right}
              </div>
              <span className="nc-pgnum nc-pgnum-right">{pgR}</span>
            </div>
          </div>

          <div className="nc-shelf" />
        </div>
        <p className="nc-footer">Your answers are private and never stored.</p>
      </div>
    )
  }

  // ── Reusable bits ─────────────────────────────────────────────────────────────

  function OpenField({ label, hint, placeholder, value, onChange }: {
    label: string; hint: string; placeholder: string; value: string; onChange: (v: string) => void
  }) {
    return (
      <div className="nc-open-wrap">
        <p className="nc-open-label">{label} <span className="nc-open-opt">— optional</span></p>
        <p className="nc-open-hint">{hint}</p>
        <textarea
          className="nc-textarea nc-textarea-open"
          placeholder={placeholder}
          value={value}
          rows={3}
          onChange={e => onChange(e.target.value)}
        />
      </div>
    )
  }

  // ── Stage 0: Welcome ──────────────────────────────────────────────────────────

  if (stage === 0) return (
    <Page pgL="i" pgR="ii"
      left={
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '12px 0' }}>
          <p className="nc-label">Est. in this moment</p>
          <h1 className="nc-title nc-title-large">The Next<br />Chapter</h1>
          <p className="nc-ornament">— ❦ —</p>
          <p className="nc-note">A guided discovery journey<br />for women ready to write<br />something new.</p>
          <hr className="nc-rule" style={{ width: '100%' }} />
          <p className="nc-sub">In 10–15 minutes you will uncover what energises you, what you value, and what life chapter might truly light you up.</p>
          <p className="nc-note">No right or wrong answers —<br />just be honest and let yourself dream.</p>
          <div style={{ marginTop: 20 }}>
            <button className="nc-btn-primary" onClick={() => go(1)}>Open the book →</button>
          </div>
        </div>
      }
      right={
        <div>
          <p className="nc-label">What awaits you</p>
          <hr className="nc-rule" />
          <p className="nc-note" style={{ margin: '8px 0 10px' }}>This book will guide you through four pages of discovery:</p>
          {["Your life context and what matters most","Your values and what a life well lived means to you","Your strengths and what you bring to the world","Your interests and what lights you up"].map((t, i) => (
            <div key={i} className="nc-step-item">
              <div className="nc-step-num">{i + 1}</div>
              <p className="nc-note" style={{ margin: 0 }}>{t}</p>
            </div>
          ))}
          <hr className="nc-rule" style={{ marginTop: 12 }} />
          <p className="nc-note" style={{ marginTop: 8, textAlign: 'center' }}>At the end, your personalised<br /><em>Next Chapter Plan</em> awaits.</p>
        </div>
      }
    />
  )

  // ── Stage 1: About ────────────────────────────────────────────────────────────

  if (stage === 1) return (
    <Page pgL="1" pgR="2"
      left={
        <>
          <p className="nc-label">Page one — about you</p>
          <h2 className="nc-title">What has brought you here?</h2>
          <p className="nc-sub">Choose everything that feels true right now.</p>
          <div className="nc-chip-wrap">
            {CTXS.map(item => (
              <button key={item} type="button"
                className={`nc-chip${s.ctx.includes(item) ? ' on' : ''}`}
                onClick={() => toggleChip(s.ctx, 'ctx', item)}>
                {item}
              </button>
            ))}
          </div>
          <div style={{ marginTop: 'auto' }}>
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
          <p className="nc-label">Continued</p>
          <h2 className="nc-title">What matters most?</h2>
          <p className="nc-sub">Choose the one thing that matters most to you right now.</p>
          <div className="nc-box-grid">
            {PRIS.map(item => (
              <button key={item} type="button"
                className={`nc-box${s.pri.includes(item) ? ' on' : ''}`}
                onClick={() => selectOne('pri', item)}>
                {item}
              </button>
            ))}
          </div>
          <div className="nc-btn-row" style={{ marginTop: 'auto' }}>
            <button className="nc-btn-primary" disabled={!can1} onClick={() => go(2)}>Turn the page →</button>
          </div>
        </>
      }
    />
  )

  // ── Stage 2: Values ───────────────────────────────────────────────────────────

  if (stage === 2) return (
    <Page pgL="3" pgR="4"
      left={
        <>
          <p className="nc-label">Page two — your values</p>
          <h2 className="nc-title">What do you stand for?</h2>
          <p className="nc-sub">Choose up to 5 values that feel most like you.</p>
          <div className="nc-chip-wrap">
            {VALS.map(item => (
              <button key={item} type="button"
                className={`nc-chip${s.vals.includes(item) ? ' on' : ''}`}
                onClick={() => toggleChip(s.vals, 'vals', item, 5)}>
                {item}
              </button>
            ))}
          </div>
        </>
      }
      right={
        <>
          <p className="nc-label">Continued</p>
          <h2 className="nc-title">In your own words</h2>
          <p className="nc-note">&ldquo;A life well lived, for me, means...&rdquo;</p>
          <textarea className="nc-textarea nc-textarea-main"
            placeholder="Write whatever comes to mind."
            value={s.vt} rows={4}
            onChange={e => update({ vt: e.target.value })} />
          <OpenField
            label="Anything shaping your values?"
            hint="What we value becomes clearest after loss or hardship. Share anything that has shifted your perspective."
            placeholder="Only if it feels useful..."
            value={s.o2} onChange={v => update({ o2: v })}
          />
          <div className="nc-btn-row" style={{ marginTop: 'auto' }}>
            <button className="nc-btn-primary" disabled={!can2} onClick={() => go(3)}>Turn the page →</button>
            <button className="nc-btn-secondary" onClick={() => go(1)}>← Back</button>
          </div>
        </>
      }
    />
  )

  // ── Stage 3: Strengths ────────────────────────────────────────────────────────

  if (stage === 3) return (
    <Page pgL="5" pgR="6"
      left={
        <>
          <p className="nc-label">Page three — your strengths</p>
          <h2 className="nc-title">What do you bring to the world?</h2>
          <p className="nc-sub">What have people always come to you for? Choose up to 6.</p>
          <div className="nc-chip-wrap">
            {STRS.map(item => (
              <button key={item} type="button"
                className={`nc-chip${s.strs.includes(item) ? ' on' : ''}`}
                onClick={() => toggleChip(s.strs, 'strs', item, 6)}>
                {item}
              </button>
            ))}
          </div>
        </>
      }
      right={
        <>
          <p className="nc-label">Continued</p>
          <h2 className="nc-title">In your own words</h2>
          <p className="nc-note">&ldquo;Something I have done that I am quietly proud of...&rdquo;</p>
          <textarea className="nc-textarea nc-textarea-main"
            placeholder="It does not need to be a big achievement."
            value={s.st} rows={4}
            onChange={e => update({ st: e.target.value })} />
          <OpenField
            label="Strengths from difficulty"
            hint="Hard times reveal strengths we did not know we had. What did a recent challenge show you about yourself?"
            placeholder="You might surprise yourself..."
            value={s.o3} onChange={v => update({ o3: v })}
          />
          <div className="nc-btn-row" style={{ marginTop: 'auto' }}>
            <button className="nc-btn-primary" disabled={!can3} onClick={() => go(4)}>Turn the page →</button>
            <button className="nc-btn-secondary" onClick={() => go(2)}>← Back</button>
          </div>
        </>
      }
    />
  )

  // ── Stage 4: Interests ────────────────────────────────────────────────────────

  if (stage === 4) return (
    <Page pgL="7" pgR="8"
      left={
        <>
          <p className="nc-label">Page four — your interests</p>
          <h2 className="nc-title">What lights you up?</h2>
          <p className="nc-sub">Do not overthink it — pick what draws you in. Choose up to 6.</p>
          <div className="nc-chip-wrap">
            {INTS.map(item => (
              <button key={item} type="button"
                className={`nc-chip${s.ints.includes(item) ? ' on' : ''}`}
                onClick={() => toggleChip(s.ints, 'ints', item, 6)}>
                {item}
              </button>
            ))}
          </div>
        </>
      }
      right={
        <>
          <p className="nc-label">Continued</p>
          <h2 className="nc-title">In your own words</h2>
          <p className="nc-note">&ldquo;If money were no concern, I would spend my time...&rdquo;</p>
          <textarea className="nc-textarea nc-textarea-main"
            placeholder="Let yourself dream here."
            value={s.it} rows={4}
            onChange={e => update({ it: e.target.value })} />
          <OpenField
            label="Any constraints worth knowing?"
            hint="If budget, health, location, or caring responsibilities shape what is realistic, share that here. Your plan will be more useful for it."
            placeholder="Be honest — this helps us give practical suggestions..."
            value={s.o4} onChange={v => update({ o4: v })}
          />
          <div className="nc-btn-row" style={{ marginTop: 'auto' }}>
            <button className="nc-btn-primary" disabled={!can4} onClick={makePlan}>Write my Next Chapter Plan ✦</button>
            <button className="nc-btn-secondary" onClick={() => go(3)}>← Back</button>
          </div>
        </>
      }
    />
  )

  // ── Stage 5: Plan ─────────────────────────────────────────────────────────────

  return (
    <Page pgL="9" pgR="10"
      left={
        <>
          <p className="nc-label">Your next chapter</p>
          <h2 className="nc-title">Your Next Chapter Plan</h2>
          <p className="nc-sub" style={{ marginBottom: 10 }}>Based on everything you have shared, here is what we see for your next chapter.</p>

          {loading && (
            <div className="nc-ai-box">
              <p>Writing your personalised plan
                <span className="nc-dots">
                  <span className="nc-dot" />
                  <span className="nc-dot" />
                  <span className="nc-dot" />
                </span>
              </p>
            </div>
          )}

          {plan && (
            <>
              <div className="nc-ai-box">
                <p className="nc-ai-box-head">{plan.headline}</p>
              </div>
              <div className="nc-plan-card">
                <p className="nc-plan-lbl">Your strengths</p>
                <p>{plan.strengths_summary}</p>
              </div>
              <div className="nc-plan-card">
                <p className="nc-plan-lbl">What gives you energy and purpose</p>
                <p>{plan.energy_purpose}</p>
              </div>
            </>
          )}
        </>
      }
      right={
        <>
          {plan && (
            <>
              <div className="nc-plan-card">
                <p className="nc-plan-lbl" style={{ marginBottom: 7 }}>Your matched opportunities</p>
                {plan.opportunities.map((opp, i) => (
                  <div key={i} className="nc-opp-item">
                    <p className="nc-opp-title">{opp.title}</p>
                    <p className="nc-opp-desc">{opp.description}</p>
                  </div>
                ))}
              </div>

              <div className="nc-plan-card">
                <p className="nc-plan-lbl" style={{ marginBottom: 7 }}>Your 30-day action plan</p>
                {plan.actions.map((action, i) => (
                  <div key={i} className="nc-act-row">
                    <div className="nc-act-num">{i + 1}</div>
                    <span>{action}</span>
                  </div>
                ))}
              </div>

              <div className="nc-ai-box">
                <p>{plan.closing}</p>
              </div>
            </>
          )}

          <div className="nc-btn-row" style={{ marginTop: 'auto' }}>
            <button className="nc-btn-primary" onClick={() => window.print()}>⎙ Print or save as PDF</button>
            <button className="nc-btn-secondary" onClick={reset}>Start again</button>
          </div>
        </>
      }
    />
  )
}
