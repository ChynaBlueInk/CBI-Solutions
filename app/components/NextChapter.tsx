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

interface DrillPlan {
  opportunity: string
  why: string
  first_steps: string
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

// ─── Styles ───────────────────────────────────────────────────────────────────

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
  .nc-book {
    display: flex;
    flex-direction: row;
    filter: drop-shadow(0 12px 50px rgba(0,0,0,.85));
  }
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
  .nc-spine {
    width: 26px;
    flex-shrink: 0;
    background: linear-gradient(180deg, #3d2200 0%, #5a3410 10%, #2a1500 20%, #4a2c08 35%, #1e1000 50%, #3d2200 60%, #2a1500 75%, #5a3410 90%, #3d2200 100%);
    box-shadow: inset -3px 0 8px rgba(0,0,0,.6), inset 3px 0 8px rgba(0,0,0,.6);
    position: relative;
    z-index: 10;
  }
  .nc-shelf {
    height: 20px;
    background: #1a0f07;
    border-top: 3px solid #5a3820;
    border-radius: 0 0 4px 4px;
  }
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
  .nc-mobile-divider {
    display: none;
    align-items: center;
    gap: 10px;
    padding: 10px 0;
  }
  .nc-mobile-divider-line { flex: 1; height: 1px; background: rgba(139,101,52,.3); }
  .nc-mobile-divider-text {
    font-family: 'IM Fell English', Georgia, serif;
    font-style: italic;
    font-size: 11px;
    color: rgba(139,101,52,.6);
  }
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
  .nc-footer {
    margin-top: 1.25rem;
    font-family: 'IM Fell English', Georgia, serif;
    font-style: italic;
    font-size: 12px;
    color: rgba(201,160,122,.35);
    text-align: center;
  }
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
  .nc-title-large { font-size: 26px; }
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
    display: block;
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

  /* Opportunity cards — selectable */
  .nc-opp-card {
    border: 1px solid rgba(139,101,52,.35);
    border-radius: 3px;
    padding: 10px 12px;
    margin-bottom: 8px;
    cursor: pointer;
    background: rgba(255,255,255,.2);
    transition: all .2s;
    position: relative;
  }
  .nc-opp-card:hover {
    border-color: #1a7a5a;
    background: rgba(212,239,229,.3);
  }
  .nc-opp-card.selected {
    border-color: #1a7a5a;
    background: #d4efe5;
    box-shadow: 0 0 0 1px #1a7a5a;
  }
  .nc-opp-card:last-child { margin-bottom: 0; }
  .nc-opp-title {
    font-family: 'IM Fell English', Georgia, serif;
    font-size: 13.5px;
    color: #2c1a06;
    margin-bottom: 3px;
    display: flex;
    align-items: flex-start;
    gap: 8px;
  }
  .nc-opp-badge {
    font-family: Lato, sans-serif;
    font-size: 9px;
    font-weight: 700;
    letter-spacing: .08em;
    text-transform: uppercase;
    background: #1a7a5a;
    color: #fff;
    padding: 2px 7px;
    border-radius: 10px;
    white-space: nowrap;
    margin-top: 2px;
    flex-shrink: 0;
  }
  .nc-opp-desc {
    font-family: Lato, sans-serif;
    font-size: 12px;
    color: #5a3e1a;
    line-height: 1.6;
  }
  .nc-opp-prompt {
    font-family: 'IM Fell English', Georgia, serif;
    font-style: italic;
    font-size: 11px;
    color: #1a7a5a;
    margin-top: 4px;
    display: none;
  }
  .nc-opp-card.selected .nc-opp-prompt { display: block; }

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

  /* Drill-down plan */
  .nc-drill-header {
    background: linear-gradient(135deg, #1a7a5a 0%, #0f5c42 100%);
    border-radius: 3px;
    padding: 12px 14px;
    margin-bottom: 10px;
  }
  .nc-drill-header p {
    font-family: 'IM Fell English', Georgia, serif;
    font-size: 13px;
    color: rgba(255,255,255,.9);
    line-height: 1.5;
    margin: 0;
  }
  .nc-drill-header strong {
    display: block;
    font-family: 'IM Fell English', Georgia, serif;
    font-size: 16px;
    color: #fff;
    margin-bottom: 4px;
  }

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

  /* Warning banner */
  .nc-warn-banner {
    background: #fffbeb;
    border: 1px solid #d4a017;
    border-radius: 3px;
    padding: 9px 13px;
    margin-bottom: 12px;
    display: flex;
    align-items: flex-start;
    gap: 9px;
  }
  .nc-warn-icon {
    font-size: 14px;
    flex-shrink: 0;
    margin-top: 1px;
  }
  .nc-warn-text {
    font-family: Lato, sans-serif;
    font-size: 11.5px;
    color: #7a5c00;
    line-height: 1.55;
    margin: 0;
  }

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
    .nc-page-left  { border-bottom: none !important; }
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
    /* Hide everything on the page first */
    body > * { display: none !important; }
    /* Then show only the app shell */
    body > #__next,
    body > #__next > * { display: block !important; }
    /* Clean up the app itself */
    .nc-shell {
      background: white !important;
      padding: 0 !important;
      min-height: auto !important;
      display: block !important;
    }
    .nc-outer { display: block !important; max-width: 100% !important; }
    .nc-frame, .nc-shelf, .nc-corner { display: none !important; }
    .nc-book { flex-direction: column !important; box-shadow: none !important; filter: none !important; display: block !important; }
    .nc-spine { display: none !important; }
    .nc-page { border: none !important; min-height: auto !important; background: white !important; display: block !important; }
    .nc-page::before { display: none !important; }
    .nc-btn-row, .nc-progress, .nc-footer,
    .nc-mobile-divider, .nc-pgnum,
    .nc-warn-banner { display: none !important; }
    .nc-page-content { display: block !important; }
    .nc-plan-card, .nc-ai-box, .nc-drill-header { break-inside: avoid; }
  }
`

// ─── Stable textarea component (fixes the one-letter bug) ────────────────────
// Uses a ref + defaultValue so React never re-renders the DOM element itself,
// only the surrounding component. The onBlur syncs the value back to state.

function StableTextarea({
  id,
  className,
  placeholder,
  rows,
  initialValue,
  onBlur,
}: {
  id: string
  className: string
  placeholder: string
  rows: number
  initialValue: string
  onBlur: (v: string) => void
}) {
  const ref = useRef<HTMLTextAreaElement>(null)

  // Sync if initialValue changes from outside (e.g. reset)
  useEffect(() => {
    if (ref.current && ref.current.value !== initialValue) {
      ref.current.value = initialValue
    }
  }, [initialValue])

  return (
    <textarea
      ref={ref}
      id={id}
      className={className}
      placeholder={placeholder}
      rows={rows}
      defaultValue={initialValue}
      onBlur={e => onBlur(e.target.value)}
    />
  )
}

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
      { title: 'Travel or volunteer with intention', description: `Purposeful travel or local volunteering aligns with your desire for meaning. ${hasCon ? 'Even short or local involvement can be deeply transformative.' : 'The world is waiting for what you bring to it.'}` },
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

function buildMockDrillPlan(opp: Opportunity, s: AppState): DrillPlan {
  const str  = s.strs.slice(0,2).join(' and ') || 'your strengths'
  const vals = s.vals.slice(0,2).join(' and ') || 'your values'
  const pri  = s.pri[0] || 'what matters most to you'

  // Match against both title and description so dynamic AI-generated titles work
  const text = (opp.title + ' ' + opp.description).toLowerCase()

  const isCoaching   = /coach|consult|mentor|guid|teach|facilitat|train/.test(text)
  const isCreative   = /creativ|blog|writ|art|photo|music|craft|paint|draw|film|podcast|story/.test(text)
  const isCommunity  = /communit|volunteer|connect|group|network|social|gather|circle|club/.test(text)
  const isTravel     = /travel|trip|journey|explor|abroad|overseas|tour|adventure/.test(text)
  const isBusiness   = /business|income|earn|revenue|sell|product|service|launch|startup|side/.test(text)
  const isLearning   = /learn|study|skill|course|qualif|certif|degree|educat|train/.test(text)
  const isWellbeing  = /health|wellb|fitness|movement|slow|pace|rest|balance|mindful/.test(text)

  // Build actions that directly reference the opportunity title
  const oppName = opp.title

  let actions: string[]

  if (isCoaching) {
    actions = [
      `Week 1: Write down the five things people most often come to you for advice on — these become the basis of your offer as ${oppName}`,
      `Week 2: Find three people already doing something similar to ${oppName} and study how they describe what they offer and who they help`,
      `Week 3: Have one informal conversation with someone who could benefit from your knowledge — listen for what they actually need, not what you assumed`,
      `Week 4: Write a simple one-paragraph description of ${oppName} — what it is, who it is for, and what someone gets from working with you`,
      `Month end: Offer ${oppName} to one person — paid, free, or in exchange for feedback — and treat whatever happens as your first data point`,
    ]
  } else if (isCreative) {
    actions = [
      `Week 1: Dedicate one hour to ${oppName} with no goal except to enjoy it — make something without any intention to share it yet`,
      `Week 2: Find three people who have built something creative in this space and look specifically at how they started, not where they are now`,
      `Week 3: Create one small piece of work related to ${oppName} and share it with one person you trust — ask for honest feedback`,
      `Week 4: Decide on your creative home base — the one platform, format, or outlet where ${oppName} will live — and set it up`,
      `Month end: Publish, post, or share one piece of work from ${oppName} publicly — the first one is always the hardest and the most important`,
    ]
  } else if (isCommunity) {
    actions = [
      `Week 1: Search for three existing groups or communities related to ${oppName} — local, national, and online — and note what draws you to each`,
      `Week 2: Attend or join one of them — just to observe and meet people — with no commitment required beyond showing up`,
      `Week 3: Reach out to one person you met or found through that community and have a genuine conversation about what brought you both here`,
      `Week 4: Decide whether you want to deepen your involvement in an existing group or whether ${oppName} calls you to start something yourself`,
      `Month end: Make one commitment — a regular slot, a membership, a role, or a date for your first gathering — something that puts ${oppName} in your calendar`,
    ]
  } else if (isTravel) {
    actions = [
      `Week 1: Write down the three experiences that have stayed with you most from your travels or from places you have always wanted to go — look for the pattern`,
      `Week 2: Research one specific version of ${oppName} that is realistic given your situation — a programme, a route, a timeframe — and request information`,
      `Week 3: Work through the practical reality — budget, timing, health, commitments — and identify what would need to be true for ${oppName} to happen in the next six months`,
      `Week 4: Tell someone close to you about ${oppName} — saying it out loud to another person changes your relationship with it`,
      `Month end: Take one concrete step that makes ${oppName} real — book a date, open a savings account, submit an expression of interest, or buy the first thing you need`,
    ]
  } else if (isBusiness) {
    actions = [
      `Week 1: Write ten possible versions of ${oppName} — different formats, different audiences, different price points — without filtering or judging any of them yet`,
      `Week 2: Research whether anyone is already doing the two or three versions that excite you most — this is validation, not competition`,
      `Week 3: Describe ${oppName} to one potential customer or someone in your target audience and listen carefully to their response — what do they ask about?`,
      `Week 4: Choose the simplest version of ${oppName} that you could test in 30 days — write down exactly what it involves and what a successful test looks like`,
      `Month end: Run your first test — a listing, a post, a proposal, a conversation with a real potential buyer — and document what you learn`,
    ]
  } else if (isLearning) {
    actions = [
      `Week 1: Define exactly what you want to be able to do or know at the end of ${oppName} — be specific, not general — this is your destination`,
      `Week 2: Research three different paths to that destination — a structured course, self-directed learning, a mentor, a community — and compare what suits you`,
      `Week 3: Begin with the smallest possible entry point into ${oppName} — one lesson, one chapter, one introductory session — just to see how it feels`,
      `Week 4: Find one other person pursuing something similar to ${oppName} — a study partner, a community, a forum — learning alongside others accelerates everything`,
      `Month end: Complete one concrete milestone within ${oppName} — a module, a skill practised, a project started — something that shows you have genuinely begun`,
    ]
  } else if (isWellbeing) {
    actions = [
      `Week 1: Write down what ${oppName} actually looks like day to day for you — not in theory, but in your real life with your real schedule`,
      `Week 2: Identify one small daily practice related to ${oppName} that you could start this week — something that takes under 20 minutes`,
      `Week 3: Research one approach, community, or resource that supports ${oppName} and try it — a class, a practice, a framework, a book`,
      `Week 4: Tell one person about your commitment to ${oppName} — accountability changes behaviour more than motivation does`,
      `Month end: Assess honestly — what is working within ${oppName}, what needs adjusting, and what one thing would make the biggest difference in the next 30 days`,
    ]
  } else {
    // Fallback uses the opportunity title directly throughout
    actions = [
      `Week 1: Write down everything you already know about ${oppName} and everything you still want to find out — this is your starting map`,
      `Week 2: Find three people or organisations doing something within ${oppName} that genuinely excites you — look at how they started, not just where they are`,
      `Week 3: Have one conversation with someone who has experience with ${oppName} — ask what they wish they had known at the beginning`,
      `Week 4: Identify the one action that, if you did it this week, would make the biggest difference to getting ${oppName} off the ground`,
      `Month end: Take one step that commits you to ${oppName} — book, apply, pay, post, or tell someone — something that makes it real`,
    ]
  }

  return {
    opportunity: opp.title,
    why: `${oppName} connects directly to your strength in ${str} and the values you hold around ${vals}. This is not just something that sounds appealing — it is something you are genuinely equipped for right now based on who you already are.`,
    first_steps: `Your focus on ${pri} tells us you are ready for something real, not just something to think about. The key with ${oppName} is to begin before everything feels figured out — small, consistent steps will show you more than any amount of planning.`,
    actions,
    closing: `${oppName} is yours to shape. The plan above is a starting point, not a prescription — adjust it as you learn more about what this path looks like for you specifically.`,
  }
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function NextChapter() {
  const [stage, setStage]               = useState(0)
  const [s, setS]                       = useState<AppState>(emptyState())
  const [plan, setPlan]                 = useState<Plan | null>(null)
  const [loading, setLoading]           = useState(false)
  const [selectedOpp, setSelectedOpp]   = useState<number | null>(null)
  const [drillPlan, setDrillPlan]       = useState<DrillPlan | null>(null)
  const [drillLoading, setDrillLoading] = useState(false)
  const [showDrill, setShowDrill]       = useState(false)
  const [drillError, setDrillError]     = useState<string | null>(null)
  // Cache drill plans by opportunity index so switching never regenerates
  const drillCache = useRef<Map<number, DrillPlan>>(new Map())

  useEffect(() => {
    const id = 'nc-styles'
    if (!document.getElementById(id)) {
      const el = document.createElement('style')
      el.id = id
      el.textContent = globalStyles
      document.head.appendChild(el)
    }
    return () => { document.getElementById(id)?.remove() }
  }, [])

  const update = useCallback((patch: Partial<AppState>) => {
    setS(prev => ({ ...prev, ...patch }))
  }, [])

  const go = useCallback((n: number) => {
    setStage(n)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  function toggleChip(list: string[], key: keyof AppState, item: string, max?: number) {
    const next = list.includes(item)
      ? list.filter(x => x !== item)
      : (max && list.length >= max) ? list : [...list, item]
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
    setSelectedOpp(null)
    setDrillPlan(null)
    setShowDrill(false)

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

If she shared personal context (grief, illness, divorce, financial hardship), acknowledge it warmly. Let it shape the opportunities and actions. If she mentioned constraints, keep suggestions realistic.

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
  "actions": ["General week 1 action", "General week 2 action", "General week 3 action", "General week 4 action", "Month-end action"],
  "closing": "2 warm personal sentences written just for her"
}

Tone: warm, grounded, practical. Specific to her actual answers — never generic.`

    try {
      const res = await fetch('/api/next-chapter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [{ role: 'user', content: prompt }] }),
      })
      if (!res.ok) throw new Error()
      const data = await res.json()
      const raw = data.content.map((b: { text?: string }) => b.text || '').join('')
      setPlan(JSON.parse(raw.replace(/```json|```/g, '').trim()))
    } catch {
      setPlan(buildMockPlan(s))
    } finally {
      setLoading(false)
    }
  }

  async function drillDown(opp: Opportunity, index: number) {
    setSelectedOpp(index)
    setShowDrill(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })

    // Clear old plan immediately so stale content never shows while loading
    setDrillPlan(null)

    // Return cached plan immediately — no regeneration needed
    if (drillCache.current.has(index)) {
      setDrillPlan(drillCache.current.get(index)!)
      setDrillLoading(false)
      return
    }

    setDrillLoading(true)
    setDrillError(null)

    const prompt = `You are a warm, practical life coach writing a personalised 30-day action plan for a woman aged 50+.

She has chosen to focus on this specific opportunity: "${opp.title}"
Description of why it was suggested: "${opp.description}"

Her personal profile:
- Core values: ${s.vals.join(', ')}
- Key strengths: ${s.strs.join(', ')}
- Main interests: ${s.ints.join(', ')}
- Most important to her right now: ${s.pri.join(', ')}
- What a good life means to her: "${s.vt}"
- Something she is quietly proud of: "${s.st}"
- Her dream: "${s.it}"
${s.o1 ? '- Her personal context: "' + s.o1 + '"' : ''}
${s.o4 ? '- Practical constraints: "' + s.o4 + '"' : ''}

Write a plan specifically for "${opp.title}". Every action must be about this opportunity — not generic life advice.

Use this exact JSON structure. Fill in the values — do not copy the descriptions as literal text:
{
  "opportunity": "the opportunity title",
  "why": "explain in 2-3 sentences exactly why this opportunity suits her — mention her actual values and strengths by name",
  "first_steps": "explain in 2-3 sentences how she should begin — be concrete and specific to this opportunity",
  "actions": [
    "a real week 1 action specific to this opportunity",
    "a real week 2 action that builds on week 1",
    "a real week 3 action that builds on week 2",
    "a real week 4 action that builds on week 3",
    "a real month-end commitment that makes this path concrete"
  ],
  "closing": "2 warm encouraging sentences written personally for her about this specific path"
}

Rules:
- Every action must be about "${opp.title}" specifically — if someone read just the actions, they would know exactly which opportunity was chosen
- Reference her actual strengths (${s.strs.slice(0,2).join(' and ')}) and values (${s.vals.slice(0,2).join(' and ')}) in why and first_steps
- Keep actions realistic given any constraints: ${s.o4 || 'none mentioned'}
- Do not use placeholder text — write real, usable actions she can start this week
- Return ONLY the JSON object, no markdown fences, no explanation before or after`

    try {
      const res = await fetch('/api/next-chapter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [{ role: 'user', content: prompt }] }),
      })
      if (!res.ok) {
        const errText = await res.text()
        console.error('Drill API error:', res.status, errText)
        throw new Error('API ' + res.status)
      }
      const data = await res.json()
      const raw = data.content.map((b: { text?: string }) => b.text || '').join('')
      const parsed = JSON.parse(raw.replace(/```json|```/g, '').trim())
      drillCache.current.set(index, parsed)
      setDrillPlan(parsed)
    } catch (err) {
      console.warn('Drill API failed, using tailored mock:', err)
      setDrillError('The AI plan could not be generated — showing a tailored template instead. Check your API key in Vercel environment variables if you expected a live plan.')
      const mock = buildMockDrillPlan(opp, s)
      drillCache.current.set(index, mock)
      setDrillPlan(mock)
    } finally {
      setDrillLoading(false)
    }
  }

  function reset() {
    setS(emptyState())
    setPlan(null)
    setLoading(false)
    setSelectedOpp(null)
    setDrillPlan(null)
    setDrillLoading(false)
    setShowDrill(false)
    drillCache.current.clear()
    setDrillError(null)
    go(0)
  }

  // ── Layout wrapper ────────────────────────────────────────────────────────────

  function Page({ left, right, pgL, pgR }: {
    left: React.ReactNode; right: React.ReactNode; pgL: string; pgR: string
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
            <div className="nc-spine" />
            <div className="nc-page nc-page-right">
              <div className="nc-page-content">
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

  // ── Open field using StableTextarea ──────────────────────────────────────────

  function OpenField({ fieldId, label, hint, placeholder, stateKey }: {
    fieldId: string; label: string; hint: string; placeholder: string; stateKey: keyof AppState
  }) {
    return (
      <div className="nc-open-wrap">
        <p className="nc-open-label">{label} <span className="nc-open-opt">— optional</span></p>
        <p className="nc-open-hint">{hint}</p>
        <StableTextarea
          id={fieldId}
          className="nc-textarea nc-textarea-open"
          placeholder={placeholder}
          rows={3}
          initialValue={s[stateKey] as string}
          onBlur={v => update({ [stateKey]: v } as Partial<AppState>)}
        />
      </div>
    )
  }

  // ── Stage 0: Welcome ──────────────────────────────────────────────────────────

  if (stage === 0) return (
    <Page pgL="i" pgR="ii"
      left={
        <div style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', textAlign:'center', padding:'12px 0' }}>
          <p className="nc-label">Est. in this moment</p>
          <h1 className="nc-title nc-title-large">The Next<br />Chapter</h1>
          <p className="nc-ornament">— ❦ —</p>
          <p className="nc-note">A guided discovery journey for women ready to write something new.</p>
          <hr className="nc-rule" style={{ width:'100%' }} />
          <p className="nc-sub">In 10–15 minutes you will uncover what energises you, what you value, and what life chapter might truly light you up.</p>
          <p className="nc-note">No right or wrong answers — just be honest and let yourself dream.</p>
          <div style={{ marginTop:20 }}>
            <button className="nc-btn-primary" onClick={() => go(1)}>Open the book →</button>
          </div>
        </div>
      }
      right={
        <div>
          <p className="nc-label">What awaits you</p>
          <hr className="nc-rule" />
          <p className="nc-note" style={{ margin:'8px 0 10px' }}>This book will guide you through four pages of discovery:</p>
          {["Your life context and what matters most","Your values and what a life well lived means to you","Your strengths and what you bring to the world","Your interests and what lights you up"].map((t,i) => (
            <div key={i} className="nc-step-item">
              <div className="nc-step-num">{i+1}</div>
              <p className="nc-note" style={{ margin:0 }}>{t}</p>
            </div>
          ))}
          <hr className="nc-rule" style={{ marginTop:12 }} />
          <p className="nc-note" style={{ marginTop:8, textAlign:'center' }}>At the end, your personalised<br /><em>Next Chapter Plan</em> awaits.</p>
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
          <div style={{ marginTop:'auto' }}>
            <OpenField fieldId="o1" label="In your own words"
              hint="If something specific brought you here — a loss, illness, financial change, or relationship ending — share it here. It will shape your plan."
              placeholder="Share as much or as little as you like..." stateKey="o1" />
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
          <div className="nc-btn-row" style={{ marginTop:'auto' }}>
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
          <StableTextarea id="vt" className="nc-textarea nc-textarea-main"
            placeholder="Write whatever comes to mind."
            rows={4} initialValue={s.vt}
            onBlur={v => update({ vt: v })} />
          <OpenField fieldId="o2" label="Anything shaping your values?"
            hint="What we value becomes clearest after loss or hardship. Share anything that has shifted your perspective."
            placeholder="Only if it feels useful..." stateKey="o2" />
          <div className="nc-btn-row" style={{ marginTop:'auto' }}>
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
          <StableTextarea id="st" className="nc-textarea nc-textarea-main"
            placeholder="It does not need to be a big achievement."
            rows={4} initialValue={s.st}
            onBlur={v => update({ st: v })} />
          <OpenField fieldId="o3" label="Strengths from difficulty"
            hint="Hard times reveal strengths we did not know we had. What did a recent challenge show you about yourself?"
            placeholder="You might surprise yourself..." stateKey="o3" />
          <div className="nc-btn-row" style={{ marginTop:'auto' }}>
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
          <StableTextarea id="it" className="nc-textarea nc-textarea-main"
            placeholder="Let yourself dream here."
            rows={4} initialValue={s.it}
            onBlur={v => update({ it: v })} />
          <OpenField fieldId="o4" label="Any constraints worth knowing?"
            hint="If budget, health, location, or caring responsibilities shape what is realistic, share that here."
            placeholder="Be honest — this helps us give practical suggestions..." stateKey="o4" />
          <div className="nc-btn-row" style={{ marginTop:'auto' }}>
            <button className="nc-btn-primary" disabled={!can4} onClick={makePlan}>Write my Next Chapter Plan ✦</button>
            <button className="nc-btn-secondary" onClick={() => go(3)}>← Back</button>
          </div>
        </>
      }
    />
  )

  // ── Stage 5: Plan ─────────────────────────────────────────────────────────────

  // Drill-down view
  if (showDrill && plan) {
    const opp = plan.opportunities[selectedOpp!]
    return (
      <Page pgL="11" pgR="12"
        left={
          <>
            <p className="nc-label">Your focused plan</p>
            <h2 className="nc-title">30 Days Into<br />{opp?.title}</h2>
            <p className="nc-sub" style={{ marginBottom:10 }}>Here is your focused action plan for this specific pathway.</p>
            <div className="nc-warn-banner">
              <span className="nc-warn-icon">&#9888;</span>
              <p className="nc-warn-text"><strong>Keep this page open while you need it.</strong> If you go back to explore another opportunity or navigate away, you will need to regenerate this plan — but you can do that as many times as you like.</p>
            </div>

            {drillLoading && (
              <div className="nc-ai-box">
                <p>Building your focused plan
                  <span className="nc-dots">
                    <span className="nc-dot" /><span className="nc-dot" /><span className="nc-dot" />
                  </span>
                </p>
              </div>
            )}

            {drillError && (
              <div style={{ background:'#fff8e1', border:'1px solid #f0c040', borderRadius:3, padding:'9px 13px', marginBottom:10 }}>
                <p style={{ fontFamily:'Lato, sans-serif', fontSize:11.5, color:'#7a5c00', lineHeight:1.55, margin:0 }}>
                  <strong>Note:</strong> {drillError}
                </p>
              </div>
            )}

            {drillPlan && (
              <>
                <div className="nc-drill-header">
                  <strong>{drillPlan.opportunity}</strong>
                  <p>Your focused 30-day plan</p>
                </div>
                <div className="nc-plan-card">
                  <p className="nc-plan-lbl">Why this path suits you</p>
                  <p>{drillPlan.why}</p>
                </div>
                <div className="nc-plan-card">
                  <p className="nc-plan-lbl">How to approach getting started</p>
                  <p>{drillPlan.first_steps}</p>
                </div>
              </>
            )}
          </>
        }
        right={
          <>
            {drillPlan && (
              <>
                <div className="nc-plan-card">
                  <p className="nc-plan-lbl" style={{ marginBottom:7 }}>Your 30-day action plan</p>
                  {drillPlan.actions.map((action, i) => (
                    <div key={i} className="nc-act-row">
                      <div className="nc-act-num">{i+1}</div>
                      <span>{action}</span>
                    </div>
                  ))}
                </div>
                <div className="nc-ai-box">
                  <p>{drillPlan.closing}</p>
                </div>
              </>
            )}
            <div className="nc-btn-row" style={{ marginTop:'auto' }}>
              <button className="nc-btn-primary" onClick={() => window.print()}>⎙ Print or save as PDF</button>
              <button className="nc-btn-secondary" onClick={() => { setShowDrill(false); setSelectedOpp(null); }}>← Back to opportunities</button>
              <button className="nc-btn-secondary" onClick={reset}>Start again</button>
            </div>
          </>
        }
      />
    )
  }

  // Main plan view
  return (
    <Page pgL="9" pgR="10"
      left={
        <>
          <p className="nc-label">Your next chapter</p>
          <h2 className="nc-title">Your Next Chapter Plan</h2>
          <p className="nc-sub" style={{ marginBottom:10 }}>Based on everything you have shared, here is what we see for your next chapter.</p>

          {loading && (
            <div className="nc-ai-box">
              <p>Writing your personalised plan
                <span className="nc-dots">
                  <span className="nc-dot" /><span className="nc-dot" /><span className="nc-dot" />
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
                <p className="nc-plan-lbl" style={{ marginBottom:4 }}>Your matched opportunities</p>
                <p className="nc-note" style={{ fontSize:11, marginBottom:8 }}>Tap any opportunity to get a focused 30-day plan for it →</p>
                {plan.opportunities.map((opp, i) => (
                  <div key={i}
                    className={`nc-opp-card${selectedOpp === i ? ' selected' : ''}`}
                    onClick={() => drillDown(opp, i)}>
                    <div className="nc-opp-title">
                      {opp.title}
                      {selectedOpp === i && <span className="nc-opp-badge">Selected</span>}
                    </div>
                    <p className="nc-opp-desc">{opp.description}</p>
                    <p className="nc-opp-prompt">Tap again to see your focused 30-day plan →</p>
                  </div>
                ))}
              </div>

              {selectedOpp === null && (
                <div className="nc-plan-card">
                  <p className="nc-plan-lbl" style={{ marginBottom:7 }}>General 30-day action plan</p>
                  {plan.actions.map((action, i) => (
                    <div key={i} className="nc-act-row">
                      <div className="nc-act-num">{i+1}</div>
                      <span>{action}</span>
                    </div>
                  ))}
                </div>
              )}

              {selectedOpp !== null && !showDrill && (
                <div className="nc-plan-card" style={{ textAlign:'center', padding:'14px' }}>
                  <p className="nc-note" style={{ marginBottom:10 }}>
                    {drillCache.current.has(selectedOpp)
                      ? <>Your focused plan for <em>{plan.opportunities[selectedOpp]?.title}</em> is ready.</>
                      : <>Ready to go deeper into <em>{plan.opportunities[selectedOpp]?.title}</em>?</>
                    }
                  </p>
                  <button className="nc-btn-primary"
                    onClick={() => drillDown(plan.opportunities[selectedOpp!], selectedOpp!)}>
                    {drillCache.current.has(selectedOpp) ? 'View my focused plan →' : 'Get my focused 30-day plan →'}
                  </button>
                </div>
              )}

              <div className="nc-ai-box" style={{ marginTop: selectedOpp === null ? 0 : 8 }}>
                <p>{plan.closing}</p>
              </div>
            </>
          )}

          <div className="nc-btn-row" style={{ marginTop:'auto' }}>
            <button className="nc-btn-primary" onClick={() => window.print()}>⎙ Print or save as PDF</button>
            <button className="nc-btn-secondary" onClick={reset}>Start again</button>
          </div>
        </>
      }
    />
  )
}
