//data/challenges.ts
import type { Challenge } from "@/types/challenge"

export const challenges: Challenge[] = [
  {
    id: "december",
    month: "December",
    title: "AI-Assisted L&D Profile",
    theme: "Clarify and update your professional story as an L&D practitioner",
        isLive: true, // 👈 visible

    intro: [
      "We're starting the December challenge lightly. This month is about clarity and credibility, not personal branding polish. It's something to refresh your brand and how you want to be seen going into 2026.",
      "Everything is broken into 4 small steps (~30 mins each). You can follow weekly, or batch the whole thing into one 1.5–2 hour session.",
      "You'll need a download of your current LinkedIn PDF and a current copy of your CV to get started.",
    ],
    tools: ["ChatGPT", "GravityWrite"],
    project:
      "Use AI to refresh your L&D profile and create one simple intro slide that reflects how you describe your work",
    timeCommitment: "~30 minutes per week",
    outputs: [
      "Updated LinkedIn About section",
      "Short professional tagline",
      "Clear strengths summary",
      "Optional: CV wording aligned to your new positioning",
    ],
    weeks: [
      {
        number: 1,
        title: "Clarify Your Position",
        purpose:
          "Define how you want to be understood now as an L&D professional. This step is about sense-making, not wordsmithing.",
        tools: "ChatGPT",
        prompt: `Act as an L&D career coach.

Ask me 5 questions to clarify how I should position myself as an L&D professional today.

Focus on:
– the work I do most
– the problems I enjoy solving
– where AI fits into my work
– the kind of opportunities I want more of
– what I want people to understand about my value

Do not write my LinkedIn profile yet.`,
        miniOutput: "Clarity on your positioning and L&D strengths",
      },
      {
        number: 2,
        title: "Write the Language",
        purpose:
          "Turn that clarity into language that sounds human, professional, and grounded. This is where your positioning becomes usable.",
        tools: "ChatGPT",
        prompt: `Act as a specialist in Learning & Development branding and professional storytelling.

Help me refresh my L&D profile so it sounds credible, human, and future-focused — not buzzword-heavy.

First, ask clarifying questions about:
– my role and context
– my strengths
– the impact of my work
– the direction I want to grow into

Then:
– write a 2–3 paragraph LinkedIn \'About\' section
– create 3 tagline options (6–8 words)
– summarise my strengths in 4–6 grounded bullet points
– use NZ English
– avoid clichés like "passionate", "empowering", and "dynamic"

Prioritise clarity over polish.`,
        miniOutput: "LinkedIn About section, 3 tagline options, and 4–6 strength bullet points",
      },
      {
        number: 3,
        title: "Presence & Reach",
        purpose:
          "Decide how you want to show up on LinkedIn in the new year and create a light, realistic plan to match.",
        tools: "ChatGPT or GravityWrite",
        prompt: `Based on my updated L&D positioning and LinkedIn About section:

1. Ask me 4–5 questions to understand:
   – how comfortable I am with visibility on LinkedIn
   – how much time I realistically want to spend there
   – what I\'d like to be known for (3 key themes)
   – whether I prefer to be mostly passive, selectively engaging, or more actively sharing

2. Help me choose ONE of these modes for the next few months:
   – Passive observer (read, learn, occasionally react)
   – Selective engager (comment and connect now and then)
   – Active sharer (post occasionally with intention)

3. Based on the mode I choose, create a simple LinkedIn presence plan that is achievable for me, including:
   – what I\'ll focus on (topics and types of interaction)
   – how often I might realistically show up
   – what I should ignore so it stays sustainable

4. Draft three things I can use straight away:
   – one thoughtful comment I could leave on a relevant post
   – one short LinkedIn post (4–6 lines) aligned to my L&D + AI themes
   – one short, friendly connection message I can send when I add someone

5. Turn all of this into a short checklist I can follow monthly.

Keep the tone professional, human, and grounded. Avoid influencer-style advice or pressure to "post every day".`,
        miniOutput: "One-page LinkedIn presence plan, one comment, one post, and one connection message",
      },
      {
        number: 4,
        title: "Review, Align & Reflect",
        purpose:
          "Refine your language and sense-check how it lands. Use this for reflection and comparison, not editing.",
        tools: "ChatGPT",
        prompt: `I will paste my LinkedIn headline, About section, and (optionally) my CV text below.

Review these as an L&D professional.

For LinkedIn:
– suggest clearer positioning
– identify vague or generic language
– propose one stronger opening line
– propose one future-focused closing line

For my CV:
– check alignment with my LinkedIn positioning
– tighten role descriptions
– improve action-based language
– keep it ATS-friendly
– do not redesign or reformat the CV

Do not rewrite everything. Explain why each suggestion improves clarity or credibility.`,
        miniOutput: "Refined positioning and aligned CV language",
      },
    ],
    closingNote:
      "Progress over perfection. Share your updated profile if you would like, or complete it privately. Either way, you will start 2026 with a clearer picture of who you are and how you want to be seen.",
  },
  {
    id: "january",
    month: "January",
    title: "Logo + Brand Kit (AI-Assisted)",
    theme: "Create a simple, distinctive personal brand identity you can actually use",
    isLive: true,
    intro: [
      "This challenge helps you build a lightweight personal brand for your L&D work — something consistent, usable, and flexible.",
      "You do not need to have completed December’s challenge. You’ll start from whatever you already have (or don’t have).",
      "Each week introduces one new AI-based step, using ChatGPT, Ideogram or Leonardo AI, and Canva Free. Plan ~30 minutes per week (or 1.5–2 hours total)."
    ],
    tools: ["ChatGPT","Ideogram","Leonardo AI","Canva Free"],
    project: "Turn existing ideas into a simple, reusable brand system",
    timeCommitment: "~30 minutes per week",
    outputs: [
      "Personal L&D logo (text + symbol)",
      "Colour palette (2–3 colours with hex codes)",
      "Readable font pairing",
      "Simple brand guide (1 page)",
      "One branded asset (LinkedIn banner, slide background, or document header)"
    ],
    weeks: [
      {
        number: 1,
        title: "Brand Direction & Inputs",
        purpose: "Clarify what your brand should feel like before creating anything visual.",
        tools: "ChatGPT",
        prompt: `Act as a brand and learning design advisor.

I want to create a simple personal brand for my Learning & Development work.

First, ask me questions to understand:
– whether I already have any colours, visuals, or branding
– what I like and dislike visually
– whether my work feels more:
  calm / bold / playful / practical / reflective / modern
– where I plan to use this brand (LinkedIn, slides, documents, website)
– how “visible” I want my brand to be

If I upload screenshots or references, analyse them.
If I don’t, help me clarify preferences through questions.

Then:
– summarise my brand direction in plain language (2–3 sentences)
– list 3–5 brand personality words
– describe the overall tone my brand should convey

Keep this practical and grounded.
Avoid marketing jargon or over-the-top praise.`,
        miniOutput: "Clear brand direction + personality summary"
      },
      {
        number: 2,
        title: "Logo Concepts",
        purpose: "Use ChatGPT to define logo ideas, then generate simple logo images with Ideogram or Leonardo AI.",
        tools: "ChatGPT + Ideogram or Leonardo AI",
        prompt: `Act as a brand and learning design advisor.

I’m designing a simple logo for my personal Learning & Development brand.

Here is my brand direction and personality from Week 1:
[paste your Week 1 brand summary + personality words]

Help me turn this into 3 different logo concept descriptions that I can use in image tools like Ideogram or Leonardo AI.

Constraints:
– professional and minimal
– suitable for education or learning work
– text-based or text with a simple symbol
– no mascots or cartoon characters
– no heavy effects or gradients
– limited colour palette (neutrals plus my main brand colours)

For each concept, give me:
– a short concept name
– a 2–3 sentence description of the layout and elements
– an image-generation prompt I can paste into Ideogram or Leonardo AI (include “flat vector logo, no gradients, clean lines, white or light background” at the end).

Keep the concepts simple and readable.`,
        miniOutput: "3 logo concept prompts + logo images to choose from or refine"
      },
      {
        number: 3,
        title: "Colour & Visual Style",
        purpose: "Use ChatGPT to refine a calm, professional colour palette, then create a simple visual mood reference with image AI.",
        tools: "ChatGPT + Ideogram or Leonardo AI",
        prompt: `I want a 2–3 colour palette and a visual style reference for my Learning & Development personal brand.

Here is my brand direction and personality from Week 1:
[paste your Week 1 summary + personality words]

First:
– Give me 2 palette options.
For each option, provide:
– colour roles (primary, secondary, neutral)
– HEX codes
– a one-line suggestion for where to use each colour (background, headings, accents).

Constraints:
– calm, professional mood
– suitable for education, workshops, and learning materials
– clean, modern, readable
– not very corporate-heavy
– not playful or gimmicky

Then, using my chosen palette, write ONE image-generation prompt I can paste into Ideogram or Leonardo AI to create a simple visual style reference (no text). It should look like a clean, modern moodboard with blocks of colour and simple shapes only. No photos of people, no text, no gradients.`,
        miniOutput: "Chosen 2–3 colour palette + one visual mood image"
      },
      {
        number: 4,
        title: "Brand Kit & Application",
        purpose: "Turn your logo, colours, and fonts into a simple one-page brand guide and one usable asset.",
        tools: "ChatGPT + Canva Free",
        prompt: `Help me assemble a simple one-page personal brand guide for my Learning & Development work.

Here is my logo concept or chosen logo:
[describe your chosen logo or paste the prompt you used in Ideogram/Leonardo]

Here is my colour palette:
[paste your final HEX codes and colour roles]

Here are my fonts (or how I want fonts to feel):
[e.g. “modern sans serif for headings, simple sans serif for body; Canva options like Montserrat + Open Sans are fine.”]

First, give me:
– a clear section structure for a one-page brand guide (logo, colours, typography, imagery, simple do/don’t rules)
– short, practical notes on how to use my logo, colours, and fonts consistently (no long paragraphs).

Then, give me step-by-step instructions for creating ONE practical asset in Canva Free using this brand guide:
– choose ONE: a LinkedIn banner, a simple slide background, or a document header / cover page
– explain exactly what size to create
– what background colour to use
– where to place the logo
– which colours to use where
– which fonts and approximate sizes to use
– basic spacing tips so it looks clean and professional.

Assume I am not a designer and need clear, simple steps.`,
        miniOutput: "One-page brand guide + one branded asset you can use straight away"
      }
    ],
    closingNote:
      "A strong personal brand doesn’t need to be complicated. It just needs to be consistent and recognisable. Let this evolve as your work evolves."
  },


 {
  id: "february",
  month: "February",
  title: "AI Course Sprint",
  theme: "Build the same short course in three AI tools and compare the results",
  isLive: true, // 👈 visible

  intro: [
    "This month you're testing three AI course-generation platforms using the same shared prompt.",
    "The goal isn't to replace instructional design. It's to see what these tools produce, compare outputs, and strengthen your professional judgement.",
    "Think of it as a structured AI tool check — practical, hands-on, and grounded in real L&D thinking.",
  ],

  tools: ["Coassemble", "ProProfs", "SafetyCulture Training"],

  project:
    "Generate the same 10–15 minute training module in three different AI tools, compare the outputs, and create one improved final version.",

  timeCommitment: "30–45 minutes total (~15 minutes per tool)",

  outputs: [
    "3 mini-course drafts (one per tool)",
    "1 comparison scorecard",
    "1 improved 'best version' course outline",
  ],

  weeks: [
    {
      number: 1,
      title: "Choose Your Topic",
      purpose:
        "Select one topic you could genuinely teach or support at work so your comparison is realistic and useful.",
      tools: "Your choice of topic",
      prompt: `Choose ONE topic you could genuinely teach or support at work.

Optional ideas:
– Giving & Receiving Constructive Feedback
– Onboarding New Staff: First Week Essentials
– Handling Difficult Conversations (Customer Service)
– AI Use at Work: Responsible Basics
– Respectful Workplace Communication

Keep it simple. The goal is comparison, not complexity.`,
      miniOutput: "One clearly defined topic to use in all three tools",
    },

    {
      number: 2,
      title: "Generate the Course in 3 Tools",
      purpose:
        "Use the same prompt in Coassemble, ProProfs, and SafetyCulture to create comparable drafts.",
      tools: "Coassemble, ProProfs, SafetyCulture",
      prompt: `Copy and paste this SAME prompt into each platform:

Create a short, practical training module for adult learners.

Topic: [INSERT TOPIC]
Audience: [INSERT ROLE / CONTEXT]
Time: 10–15 minutes total
Format: simple, clear, real-world, not academic

Include:
1) A short course title (clear and specific)
2) 3 learning outcomes written in plain language
3) A mini lesson structure with 4 short sections (headings + key points)
4) One scenario example learners can relate to
5) A 5-question knowledge check (mix of multiple choice and true/false)
6) One short reflection question
7) A takeaway checklist learners can use immediately

Tone:
– professional and human
– avoid buzzwords and filler
– keep it actionable and beginner-friendly

Capture:
– 1 screenshot of the outline
– 1 screenshot of the quiz
– 1 short note on what felt strong or weak`,
      miniOutput: "3 generated course drafts ready for comparison",
    },

    {
      number: 3,
      title: "Compare & Improve",
      purpose:
        "Evaluate the outputs critically and combine the best elements into one improved version.",
      tools: "Your judgement + optional ChatGPT",
      prompt: `Rate each tool from 1–5 on:
– Clarity of outcomes
– Lesson structure
– Scenario realism
– Quiz quality
– Ease of editing
– Would you use it at work?

Then combine the best elements into ONE improved course outline:
– strongest structure
– best scenario
– clearest questions
– tightened language

Optional: Use ChatGPT to merge the best parts into a refined final outline.`,
      miniOutput: "One improved, practical course outline you'd actually use",
    },
  ],

  closingNote:
    "AI course generators do not replace good instructional design. They can speed up drafting, but they do not automatically provide learning strategy, meaningful practice, accessibility, or behaviour change. This challenge is a tool check — your professional judgement remains the engine behind quality learning.",
},
{
  id: "march",
  month: "March",
  title: "Your AI Portfolio Page",
  theme: "Use AI at every step to build a live portfolio that grows with every future challenge you complete",
  isLive: true,

  intro: [
    "This month you're building a real, live portfolio page — and AI is your co-pilot for every step.",
    "You'll use AI to figure out what to showcase, write all your content, and then drop it straight into an AI site builder that does the design for you. No coding, no design skills needed.",
    "Your portfolio has three cards: your CV, an achievement story, and a live example of your work. Future challenge outputs plug straight in — so your portfolio keeps growing automatically.",
    "One page. A real URL. Done in around 90 minutes."
  ],

  tools: [
    "Claude / ChatGPT / Gemini (free — writes all your content)",
    "Your CV as a PDF (optional but recommended — speeds everything up)",
    "Readdy.ai / Framer / Trickle.so / V0.app (free tiers — builds and hosts your live portfolio page)"
  ],

  project:
    "Build a live one-page portfolio with Hero, About, Work Samples, and Contact sections — AI writes the content, an AI site builder handles the design. Then keep it growing by adding new challenge outputs each month.",

  timeCommitment: "~90 minutes total (flexible — do it all at once or spread across a few sessions)",

  outputs: [
    "A live portfolio URL you can share immediately",
    "Hero section — your name, role, and one-line positioning statement",
    "About section — 3 short paragraphs in your own voice, written with AI",
    "Work Samples section — 3 cards: your CV, an achievement story, and a live project or tool",
    "Contact section — email, LinkedIn, and optional booking link"
  ],

  weeks: [
    {
      number: 1,
      title: "Let AI Help You Decide What Goes In",
      purpose: "Before you open any tool, use AI to figure out what your portfolio should actually show. Most people skip this and then struggle to write anything. Don't skip it. Upload your CV if you have it — it saves time and gets you sharper questions straight away. Save the conversation — it's your raw material for everything that follows.",
      tools: "Claude / ChatGPT / Gemini",
      prompt: `OPTION A — IF YOU HAVE YOUR CV (recommended)
Upload your CV as a PDF, then paste this:

"I'm uploading my CV and building a portfolio page as part of an AI challenge. Read my CV, then ask me 5 questions to help figure out what to include and how to position myself — focus on anything my CV doesn't fully capture, like my working style, what I'm proudest of, or where I want to take my career next.

Once I've answered, give me:
– What are the 5–6 strongest things I could showcase?
– What's the one thing about my work that makes me different from other L&D people?
– What should I NOT include — things that might confuse the story?
– If my portfolio could only say one thing about me, what should it be?"

---

OPTION B — NO CV TO HAND
Paste this and fill in the brackets:

"I'm building a portfolio page as part of an AI challenge. Here's some background about me:

My job title / role: [e.g. L&D Specialist, Learning Designer, Training Manager]
How long I've been in L&D: [e.g. 3 years]
The kinds of things I work on: [e.g. onboarding, compliance training, leadership programmes]
Industries or organisations I've worked in: [e.g. retail, NHS, local government]
Tools I use: [e.g. PowerPoint, Articulate, Canva, LMS admin]
One thing I'm proud of that I've made or done: [describe it briefly]

Ask me 5 questions that will help me decide what to include and how to position myself.

Once I've answered, give me:
– What are the 5–6 strongest things I could showcase?
– What's the one thing about my work that makes me different from other L&D people?
– What should I NOT include — things that might confuse the story?
– If my portfolio could only say one thing about me, what should it be?"`,
      miniOutput: "A rough list of 5–6 portfolio items and a clear sense of how you want to position yourself"
    },

    {
      number: 2,
      title: "Write All Your Content with AI",
      purpose: "Use your Step 1 conversation to generate everything in one go — your hero statement, about section, and all three portfolio cards. Write everything before you touch the site builder. The more specific you are, the better the output. Review everything once it's done and change any line that doesn't sound like you before moving on.",
      tools: "Claude / ChatGPT / Gemini",
      prompt: `Paste this into the same conversation from Step 1:

"Using everything I've just told you, write all the content for my portfolio page ready to paste into a website builder. Include:

1. HERO SECTION
My name, job title, and a one-line positioning statement.
Tone: warm, human, not corporate. 2 lines maximum.

2. ABOUT SECTION
Exactly 3 short paragraphs:
Paragraph 1 — My background: where I've worked and what I've focused on
Paragraph 2 — My approach: how I think about learning, what I care about
Paragraph 3 — Right now: what I'm exploring or excited about
Tone: warm, direct, first person. No buzzwords. No 'passionate about' or 'results-driven'. 120–160 words total.

3. THREE PORTFOLIO CARDS

Card 1 — CV Card
A simple card linking to my CV. Write a title (4–7 words), a 1-sentence description, and a button label ('View my CV').

Card 2 — Achievement Story
I want to showcase this piece of work: [describe it — what it was, who it was for, what problem it solved, what you actually did].
Write it as a mini case study with:
- A title (4–7 words)
- Challenge: 2–3 sentences on the context and problem
- Approach: 2–3 sentences on what I did
- Outcome: 2–3 sentences on what was built or changed
Button label: 'Read the story'

Card 3 — Live Project or Tool
[Describe it: what it is, where it lives, what it shows about your skills]
Write a title (4–7 words), a 1–2 sentence description, and a button label.

4. CONTACT SECTION
One sentence inviting people to get in touch, with placeholders for email and LinkedIn.

Tone throughout: warm, direct, confident. No jargon."`,
      miniOutput: "Hero statement, About section, and three portfolio cards — all written and ready to paste"
    },

    {
      number: 3,
      title: "Build Your Site with an AI Site Builder",
      purpose: "You have your content — now use AI to turn it into a site builder prompt, then paste it into your chosen tool and let it handle the design. Pick the builder that suits you best from the options below.",
      tools: "Readdy.ai / Framer / Trickle.so / V0.app",
      prompt: `STEP 1 — GENERATE YOUR SITE BUILDER PROMPT
Paste this into your AI tool (continuing the same conversation from Steps 1 and 2 — your content is already there, so AI fills everything in for you):

"Using all the content we've created together in this conversation, write me a complete, ready-to-paste prompt for an AI site builder. Fill in every section with my actual content — don't leave any placeholders except for the three button links, which I'll add myself.

Use this structure:

'Build a clean, modern one-page portfolio website for an L&D professional. Warm but professional colour palette. Generous white space. Mobile responsive. No stock photo hero image.

HERO
[fill in from our conversation]

ABOUT
[fill in from our conversation]

WORK SAMPLES
Three cards displayed side by side.

Card 1 — CV
[fill in title, description, and button label from our conversation]
Button links to: PLACEHOLDER — I will add my Google Drive CV link

Card 2 — Achievement Story
[fill in title, Challenge, Approach, Outcome, and button label from our conversation]
Button links to: PLACEHOLDER — I will add my link (or ask the builder to open this as an expanded section on the same page)

Card 3 — Live Project or Tool
[fill in title, description, and button label from our conversation]
Button links to: PLACEHOLDER — I will add the live URL

CONTACT
[fill in from our conversation]'

Once you've written the prompt, I'll swap the three PLACEHOLDER spots for my real links, then paste the whole thing into the site builder."

---

STEP 2 — CHOOSE YOUR SITE BUILDER AND PASTE YOUR PROMPT

• Readdy.ai — fastest. Paste your prompt and it builds the full page instantly. Best for getting live quickly.
• Framer — most design-forward. Great if you want a polished, creative look.
• Trickle.so — most conversational. Describe what you want in plain language and refine as you go.
• V0.app — most powerful. Generates clean code you can deploy to Vercel. Best if you're comfortable with a slightly more technical tool.

All are free to start. Pick one and paste your prompt into it.

---

STUCK? Ask your AI tool:
"I'm building a portfolio page in [tool name] and I'm stuck on: [describe exactly what you're trying to do]. Tell me step by step what to click. Assume I'm a complete beginner."

---

STEP 3 — AI REVIEW BEFORE PUBLISHING
Paste this before you hit publish:

"Here's my portfolio content:
Hero: [paste]
About: [paste]
Work samples: [paste titles and descriptions]

Give me honest feedback:
1. Does the overall story feel clear and consistent?
2. Is anything vague, jargony, or confusing?
3. What's the strongest thing on this page?
4. What's the one thing I should fix before publishing?"

Make the fixes. Then publish and share your live URL in the group.`,
      miniOutput: "A live URL — open it, click every link, check it on your phone, share it in the group"
    },

    {
      number: 4,
      title: "Keep It Growing After Every Challenge",
      purpose: "Every future AI challenge you complete can become a new portfolio card in about 2 minutes. Make something, get the shareable link, run the prompt below, add the card, republish. Done.",
      tools: "Your site builder + Claude / ChatGPT / Gemini",
      prompt: `Paste this into your AI tool:

"I've just completed an AI challenge and created this:
[Describe what you made: the tool you used, what it does, who it's for, what problem it solves or skill it demonstrates]

Write a portfolio card with:
- A title (4–7 words)
- A 1–2 sentence description explaining what it is and what it shows about my skills
- A button label (3–4 words)

Tone: specific and confident. Show that I built this intentionally, not by accident."

`,
      miniOutput: "New card added and portfolio republished — 2 minutes once the habit is in place"
    }
  ],

  closingNote:
    "Don't wait for it to be perfect. A live, real portfolio beats a perfect one that never gets published. Publish something real this month — then let it grow with every challenge that follows. AI drafts, you decide: edit every output until it genuinely sounds like you."
},
 {
  id:"april",
  month:"April",
  title:"Create Your AI Theme Song",
  theme:"A quick, fun one-off challenge to create a personal theme song or intro sting using AI",
  isLive:true,

  intro:[
    "This month is a one-off challenge — quick, simple, and a bit of fun.",
    "Use AI to generate your own theme song, intro sting, or audio signature.",
    "No pressure, no polish required. Even a 20-second track is enough."
  ],

  tools:["Suno AI (free)","Udio (free)","Optional: Canva (cover image)"],

  project:
    "Create a short AI-generated theme song or intro sting that reflects your work, personality, or sense of humour.",

  timeCommitment:"15–30 minutes total",

  outputs:[
    "One short audio track (link or MP3)",
    "Optional: title or concept",
    "Optional: simple cover image"
  ],

  weeks:[
    {
      number:1,
      title:"Pick a Vibe",
      purpose:"Decide what your theme song represents — serious, calm, quirky, dramatic, or completely random.",
      tools:"ChatGPT (optional)",
      prompt:`Help me create a short theme song.

Ask me 3 quick questions about:
– my work or role
– my personality or vibe
– how I want the song to feel

Then generate:
– a short title
– simple lyrics OR a music description
– suggested style for Suno/Udio

Keep it natural, not overproduced, and a bit creative.`,
      miniOutput:"A clear theme, tone, and music direction"
    },
    {
      number:2,
      title:"Generate Your Track",
      purpose:"Use Suno or Udio to create one or two versions and choose your favourite.",
      tools:"Suno AI or Udio",
      prompt:`Using the title, lyrics, or music description you created, generate a short theme song or intro sting.

Keep it:
– short
– simple
– easy to listen to
– aligned to the vibe you chose

Try one or two versions only, then pick your favourite.`,
      miniOutput:"One short AI-generated track"
    },
    {
      number:3,
      title:"Share It (Optional)",
      purpose:"Give your track a title, optionally create a simple cover image, and share if you want to.",
      tools:"Optional: Canva",
      prompt:`Help me finish my AI theme song challenge.

Based on my track, suggest:
– a final title
– a one-line description
– an optional simple cover image idea I could make in Canva

Keep it light, clean, and not overdesigned.`,
      miniOutput:"Final track link or MP3, plus optional title or cover image"
    }
  ],

  closingNote:
    "This is about trying something new, not getting it perfect. If it makes you laugh or slightly uncomfortable, you're probably doing it right. This challenge is about experimenting with AI tools for fun. It’s not intended to replace musicians, composers, or the craft of making music. Creating meaningful music takes skill, experience, and creativity — this is simply a playful way to explore what these tools can do.",
},
  {
    id: "may",
    month: "May",
    title: "Microlearning Video",
    theme: "Create a short, snappy learning video that explains an L&D or AI concept in under 60 seconds",
            isLive: false, // 👈 visible
intro: [
      "This month you're making a short, shareable microlearning video using AI-generated visuals, voiceover, and subtitles.",
      "Using Google Veo, Runway, and Descript, you'll take a script and turn it into a professional-looking explainer video.",
      "Perfect for training materials, social media, or your portfolio.",
    ],
    tools: ["Google Veo (free)", "Descript (free tier)", "Runway (free tier)"],
    project:
      "Create a 30–60 second microlearning video explaining an L&D or AI concept with script, visuals, and voiceover",
    timeCommitment: "~45 minutes per week",
    outputs: [
      "One 30–60 second MP4 video",
      "Script with voiceover",
      "AI-generated visuals",
      "Subtitles or captions",
      "Ready to share or embed",
    ],
    weeks: [
      {
        number: 1,
        title: "Script & Storyboard",
        purpose: "Write a short script and plan what visuals you'll need.",
        tools: "ChatGPT",
        prompt: `[Content to be added]`,
        miniOutput: "60–90 second script with 5–6 visual scene descriptions",
      },
      {
        number: 2,
        title: "Visuals & Voiceover",
        purpose: "Generate AI visuals and record or generate voiceover.",
        tools: "Google Veo, Descript, ElevenLabs",
        prompt: `[Content to be added]`,
        miniOutput: "Visuals and voiceover audio ready to combine",
      },
      {
        number: 3,
        title: "Edit & Export",
        purpose: "Combine visuals, audio, and subtitles into a finished video.",
        tools: "Descript, Runway",
        prompt: `[Content to be added]`,
        miniOutput: "Finished MP4 video with subtitles ready to share",
      },
    ],
    closingNote:
      "Microlearning is all about saying one thing clearly in a short time. Resist the urge to cover everything. Pick one idea and do it well.",
  },
  {
    id: "june",
    month: "June",
    title: "Animated Clip",
    theme: "Create a short, eye-catching animation that explains a scenario, process, or concept",
            isLive: false, // 👈 visible
intro: [
      "This month you're using AI video generation to create an animated clip or scenario animation.",
      "Using tools like Vidu, Pika Labs, or Canva Animation, you'll turn a storyboard and prompts into a moving visual.",
      "These clips work great for training intros, scenario practice, or portfolio pieces.",
    ],
    tools: ["Vidu (free tier)", "Pika Labs (free)", "Canva Animation"],
    project: "Create a 6–10 second animated clip showing a scenario, process, or learning concept",
    timeCommitment: "~40 minutes per week",
    outputs: ["One 6–10 second animated MP4", "Storyboard", "AI prompts used", "Optional: multiple animation styles"],
    weeks: [
      {
        number: 1,
        title: "Concept & Storyboard",
        purpose: "Choose your scenario and sketch out 4–6 visual frames.",
        tools: "ChatGPT, Pen & Paper",
        prompt: `[Content to be added]`,
        miniOutput: "Storyboard with 4–6 frames and animation flow described",
      },
      {
        number: 2,
        title: "Generate Animations",
        purpose: "Create AI-generated animation clips for each frame.",
        tools: "Vidu, Pika Labs",
        prompt: `[Content to be added]`,
        miniOutput: "3–4 animation clips ready to combine",
      },
      {
        number: 3,
        title: "Combine & Polish",
        purpose: "String animations together, add transitions and sound.",
        tools: "Canva Animation, Descript",
        prompt: `[Content to be added]`,
        miniOutput: "Finished 6–10 second animation with transitions",
      },
    ],
    closingNote:
      "Animation catches attention. Even a simple clip can make a learning moment more memorable. Keep it short and punchy.",
  },
  {
    id: "july",
    month: "July",
    title: "AI Notebook / Workbook",
    theme:
      "Create a practical workbook or notebook that guides learners through a topic with prompts, templates, and checklists",
            isLive: false, // 👈 visible
intro: [
      "This month you're building a workbook—either as a PDF or Notion template—that people can actually use in their learning or work.",
      "It'll include reflection prompts, templates, checklists, how-to cards, and resources they can fill in, copy, or adapt.",
      "A solid workbook is an evergreen portfolio piece that demonstrates your instructional design thinking.",
    ],
    tools: ["ChatGPT", "Canva Free", "Notion"],
    project: "Create a learner workbook on a topic of your choice with activities, prompts, templates, and resources",
    timeCommitment: "~45 minutes per week",
    outputs: [
      "One complete workbook (PDF or Notion)",
      "4–6 sections with activities and prompts",
      "Reflection templates",
      "Downloadable checklists or toolkits",
      "Professional formatting and branding",
    ],
    weeks: [
      {
        number: 1,
        title: "Topic & Outline",
        purpose: "Choose your topic and design the workbook structure.",
        tools: "ChatGPT",
        prompt: `[Content to be added]`,
        miniOutput: "Workbook outline with 4–6 sections and learning flow",
      },
      {
        number: 2,
        title: "Content & Activities",
        purpose: "Write activities, prompts, and templates for each section.",
        tools: "ChatGPT, Canva Free",
        prompt: `[Content to be added]`,
        miniOutput: "Draft content for all sections with reflection activities",
      },
      {
        number: 3,
        title: "Design & Delivery",
        purpose: "Format the workbook professionally and export as PDF or Notion.",
        tools: "Canva Free or Notion",
        prompt: `[Content to be added]`,
        miniOutput: "Finished workbook ready to share or download",
      },
    ],
    closingNote:
      "A good workbook guides learning without overwhelming the reader. Give people space to think and write their own answers.",
  },
  {
    id: "august",
    month: "August",
    title: "Branching Scenario / Case Study",
    theme: "Create an interactive scenario where learners make decisions and see the consequences of their choices",
            isLive: false, // 👈 visible
intro: [
      "This month you're building a branching scenario or interactive case study that simulates real decisions learners face in their role.",
      "Using tools like Brancher.ai, Twine, or ChatGPT, you'll create multiple pathways, dialogue, and feedback based on learner choices.",
      "Scenarios are powerful learning tools and strong portfolio pieces.",
    ],
    tools: ["ChatGPT", "Claude Free", "Brancher.ai (free)", "Twine (free)"],
    project:
      "Create a branching scenario where learners make decisions and experience different outcomes based on their choices",
    timeCommitment: "~45 minutes per week",
    outputs: [
      "One playable branching scenario",
      "4–6 decision branches minimum",
      "Feedback statements for each choice",
      "Optional assessment questions",
      "Scenario file or PDF",
    ],
    weeks: [
      {
        number: 1,
        title: "Scenario & Structure",
        purpose: "Design the scenario situation and plan the decision branches.",
        tools: "ChatGPT, Pen & Paper",
        prompt: `[Content to be added]`,
        miniOutput: "Scenario premise with 4–6 decision branches mapped out",
      },
      {
        number: 2,
        title: "Dialogue & Feedback",
        purpose: "Write realistic dialogue and consequence feedback for each path.",
        tools: "ChatGPT",
        prompt: `[Content to be added]`,
        miniOutput: "Complete dialogue and feedback for all branches",
      },
      {
        number: 3,
        title: "Build & Test",
        purpose: "Assemble the scenario using Brancher or Twine and test all paths.",
        tools: "Brancher.ai or Twine",
        prompt: `[Content to be added]`,
        miniOutput: "Playable, tested branching scenario ready to share",
      },
    ],
    closingNote:
      "Good scenarios feel real and respect learner choice. Avoid 'gotcha' feedback. Help learners understand why each outcome happened.",
  },
  {
    id: "september",
    month: "September",
    title: "Micro-Course",
    theme: "Build a complete, self-contained mini-course with lessons, assessments, and one multimedia component",
            isLive: false, // 👈 visible
intro: [
      "This month you're assembling all your skills into a complete micro-course: 3–5 lessons on a topic you care about.",
      "Using V0.dev (or Notion), ChatGPT, and Canva, you'll create structured lessons, quick assessments, and at least one video or animation.",
      "A finished course is one of the strongest portfolio pieces you can have.",
    ],
    tools: ["V0.dev", "ChatGPT", "Canva Free"],
    project:
      "Create a 3–5 lesson micro-course with lessons, assessments, and at least one video or animation component",
    timeCommitment: "~50 minutes per week",
    outputs: [
      "One complete mini-course (3–5 lessons)",
      "Course outline and structure",
      "Individual lesson content",
      "Quick assessment or quiz",
      "One embedded video or animation",
      "Downloadable worksheet or resource",
    ],
    weeks: [
      {
        number: 1,
        title: "Course Design",
        purpose: "Choose your topic and design the course flow and learning outcomes.",
        tools: "ChatGPT",
        prompt: `[Content to be added]`,
        miniOutput: "Course outline with 3–5 lessons and learning objectives",
      },
      {
        number: 2,
        title: "Lesson Content & Build",
        purpose: "Write lesson content and begin building the course platform.",
        tools: "ChatGPT, V0.dev or Notion",
        prompt: `[Content to be added]`,
        miniOutput: "Lesson drafts with content and platform structure created",
      },
      {
        number: 3,
        title: "Assessments, Media & Polish",
        purpose: "Add assessments, embed video/animation, and finalize the course.",
        tools: "ChatGPT, Canva Free, V0.dev",
        prompt: `[Content to be added]`,
        miniOutput: "Complete, functional micro-course ready to launch",
      },
    ],
    closingNote:
      "A micro-course doesn't need to be complex. Clear structure, one idea per lesson, and one good assessment is enough. Quality over quantity.",
  },
  {
    id: "october",
    month: "October",
    title: "Personal Dashboard / Career Compass",
    theme: "Build a personalised tracking tool to monitor your L&D growth, learning goals, and AI skill development",
            isLive: false, // 👈 visible
intro: [
      "This month you're creating a dashboard or template that helps you track your own L&D journey throughout the year.",
      "Using Notion, Airtable, or Google Sheets with AI assistance, you'll design a system to monitor goals, skills, projects, and reflections.",
      "It's both useful for you and a strong demonstration of data design and personal knowledge management.",
    ],
    tools: ["Notion", "Airtable", "Google Sheets"],
    project: "Create a personal L&D tracker, career dashboard, or learning compass you can use to monitor your growth",
    timeCommitment: "~40 minutes per week",
    outputs: [
      "One Notion or Airtable template",
      "Career or learning tracking dashboard",
      "AI habit tracker",
      "Content or skill planner",
      "Sharable template others can use",
    ],
    weeks: [
      {
        number: 1,
        title: "Define & Plan",
        purpose: "Decide what you want to track and how to organize it.",
        tools: "ChatGPT, Pen & Paper",
        prompt: `[Content to be added]`,
        miniOutput: "Dashboard structure and tracking categories defined",
      },
      {
        number: 2,
        title: "Build Templates",
        purpose: "Create database structure, views, and input forms.",
        tools: "Notion or Airtable",
        prompt: `[Content to be added]`,
        miniOutput: "Dashboard template with all fields and views created",
      },
      {
        number: 3,
        title: "Polish & Populate",
        purpose: "Add styling, populate with initial data, and create instructions.",
        tools: "Notion or Airtable",
        prompt: `[Content to be added]`,
        miniOutput: "Finished, polished dashboard ready to use and share",
      },
    ],
    closingNote:
      "The best tracker is the one you'll actually use. Start simple with 3–4 key metrics. You can always add more later.",
  },
  {
    id: "november",
    month: "November",
    title: "AI Portfolio",
    theme: "Compile all your year's work into a cohesive portfolio that tells the story of your AI-in-L&D journey",
            isLive: false, // 👈 visible
intro: [
      "This month you're curating the best pieces from the past year into a portfolio that showcases your growth and skills.",
      "You'll create case studies, a 30-second reel, workflow diagrams, and a reflective narrative about what you've learned.",
      "This is your 'My AI Year' portfolio—proof that you've learned, built, and experimented.",
    ],
    tools: ["All tools from the year", "Notion or Canva", "Video editing (Descript)"],
    project:
      "Compile your best work from the past 11 months into a cohesive 'My AI Year' portfolio with case studies and reflections",
    timeCommitment: "~50 minutes per week",
    outputs: [
      "One portfolio page or document",
      "3–4 case studies of your favourite projects",
      "A 30-second reel showcasing your best work",
      "A simple workflow diagram showing your process",
      "A reflective blog post or narrative",
    ],
    weeks: [
      {
        number: 1,
        title: "Curate & Choose",
        purpose: "Review all your work from the year and choose your best 4–5 pieces.",
        tools: "Notion or Google Drive",
        prompt: `[Content to be added]`,
        miniOutput: "Your best projects selected and organised by month",
      },
      {
        number: 2,
        title: "Write Case Studies",
        purpose: "Write 1-page case studies for 3–4 of your favourite projects.",
        tools: "ChatGPT, Canva Free",
        prompt: `[Content to be added]`,
        miniOutput: "3–4 completed case studies with context and learnings",
      },
      {
        number: 3,
        title: "Compile & Reflect",
        purpose: "Create your portfolio page, reel, and reflective narrative.",
        tools: "Notion, Descript, Canva Free",
        prompt: `[Content to be added]`,
        miniOutput: "Complete 'My AI Year' portfolio ready to share",
      },
    ],
    closingNote:
      "Your portfolio tells the story of your growth. Make sure it shows not just what you built, but what you learned and how you changed.",
  },
]
