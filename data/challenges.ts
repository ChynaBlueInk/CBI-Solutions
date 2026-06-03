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
 
  // ─────────────────────────────────────────────
  // MAY — Microlearning Video
  // ─────────────────────────────────────────────
  {
    id: "may",
    month: "May",
    title: "Microlearning Video",
    theme: "Create a short, snappy learning video that explains an L&D or AI concept in under 60 seconds",
    isLive: true,
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
        purpose:
          "Write a clear, focused script before you touch any video tool. The script is 80% of the work. If your script is muddy, your video will be muddy too. This step gives you a tight 30–60 second script and a simple shot-by-shot visual plan.",
        tools: "ChatGPT",
        prompt: `Act as an instructional designer and video script writer.

I want to create a 30–60 second microlearning video about a topic in L&D or AI.

First, ask me:
– What topic or concept do I want to explain?
– Who is my audience (their role, what they already know)?
– What should they be able to DO or UNDERSTAND after watching?
– Where will this video be shared or used?

Then write:

1. A final script formatted like this:
   [VISUAL: brief description of what's on screen]
   VOICEOVER: "The words I'll say out loud"
   — for each of 5–7 scenes, max 60 seconds of spoken text at natural pace

2. A storyboard summary — one sentence per scene describing what the viewer sees

3. Flagging for me:
   – anything that's too complex to show in 60 seconds (so I can simplify)
   – any jargon that needs replacing with plain language
   – the single most important sentence in the whole script

Rules:
– No more than 120 spoken words total
– One idea per scene
– Conversational tone, not academic
– No introduction longer than one sentence ("Hi, I'm X and today we'll...": skip it)`,
        miniOutput: "60–90 word script with 5–6 visual scene descriptions",
      },
      {
        number: 2,
        title: "Visuals & Voiceover",
        purpose:
          "Generate the visual content and record or create your voiceover separately, so you have clean assets to combine. You don't need a perfect voice or expensive equipment — AI voiceover tools sound professional and take minutes.",
        tools: "Google Veo or Runway (visuals), Descript or ElevenLabs (voiceover)",
        prompt: `I have my video script and storyboard from last week. Now I need to create:
1. AI-generated visuals for each scene
2. A voiceover audio track

PART 1 — VISUAL PROMPTS (use in Google Veo or Runway)

For each scene in my script, help me write an image or video generation prompt.

Follow this format for each:
Scene [number]: [VISUAL description from my script]
→ Prompt: [clean, specific prompt for Veo or Runway]

Rules for every visual prompt:
– professional, clean, modern style
– no text overlaid (I'll add that in editing)
– avoid stock-photo clichés (no handshakes, no pointing at whiteboards)
– consistent visual style throughout (specify a style word like: "flat illustration", "soft 3D render", "clean minimal animation", or "documentary-style footage")
– max 2 sentences per prompt

PART 2 — VOICEOVER

Option A: I'll record myself.
Give me 3 tips for recording clear voiceover on a phone or laptop.

Option B: I'll use AI voiceover (ElevenLabs free tier or Descript's AI voice).
Tell me:
– how to paste my script in
– which voice type suits a professional L&D video
– how to export as MP3

Tell me which part to do first and why.`,
        miniOutput: "Visuals and voiceover audio ready to combine",
      },
      {
        number: 3,
        title: "Edit & Export",
        purpose:
          "Combine your visuals and voiceover into one finished video, add captions, and export a clean MP4. Descript makes this straightforward even with no editing experience.",
        tools: "Descript (primary), Runway (optional polish)",
        prompt: `I have my visual clips and voiceover audio. Now I need to assemble, caption, and export my microlearning video.

Help me work through this in Descript:

STEP 1 — ASSEMBLY
Tell me exactly how to:
– start a new project in Descript
– import my audio voiceover
– import my video or image clips
– place each clip to match each section of the voiceover

STEP 2 — CAPTIONS
– How do I auto-generate captions from my voiceover in Descript?
– How do I clean up any errors in the transcript?
– What caption style looks clean and professional (font size, position, colour)?

STEP 3 — EXPORT
– What export settings should I use for a 30–60 second video I'll share on LinkedIn or embed in a course?
– What file format and resolution?

STEP 4 — REVIEW CHECKLIST
Before I export, help me check:
– Does the voiceover match the visuals in timing?
– Are captions readable on mobile?
– Is there a hard cut or rough edit anywhere?
– Does it open and close strongly?

Give me a yes/no checklist I can run through before exporting.

My video topic is: [paste your topic]
My script is: [paste your script]`,
        miniOutput: "Finished MP4 video with subtitles ready to share",
      },
    ],
    closingNote:
      "Microlearning is all about saying one thing clearly in a short time. Resist the urge to cover everything. Pick one idea and do it well.",
  },

  // ─────────────────────────────────────────────
  // JUNE — Animated Clip
  // ─────────────────────────────────────────────
  {
    id: "june",
    month: "June",
    title: "Animated Clip",
    theme: "Create a short, eye-catching animation that explains a scenario, process, or concept",
    isLive: true,
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
        purpose:
          "Plan your animation before generating anything. Animation tools work best when you give them specific, visual instructions — so a clear storyboard saves you time and gets much better results.",
        tools: "ChatGPT",
        prompt: `Act as a learning experience designer and animation director.

I want to create a short 6–10 second animated clip for learning purposes.

First, ask me:
– What scenario, process, or concept am I animating?
– Is this a workplace scenario (characters), a process (steps/flow), or an abstract concept (shapes/motion)?
– Where will it be used — training intro, LinkedIn post, portfolio piece?
– What tone: professional, warm, slightly playful, or neutral?

Then create:

1. A CONCEPT SUMMARY — 2 sentences describing exactly what the viewer will see and feel

2. A STORYBOARD — 4–6 frames described like this:
   Frame [number] — [time: e.g. 0–2 sec]
   What's visible: [describe shapes, characters, text, movement]
   What's changing: [describe the animation or transition]
   Text overlay (if any): "[exact words]"

3. ANIMATION STYLE — recommend one consistent style for all frames:
   e.g. "flat 2D vector characters, clean lines, muted professional palette"
   or "abstract shapes and smooth morphing transitions, no characters"
   or "minimal line animation on white background"
   Explain why this style suits my use case.

4. COLOUR & MOOD — suggest 2–3 HEX colours and explain what feeling they create

Keep the storyboard achievable in a free AI tool. No complex physics, no crowds, no photorealism.`,
        miniOutput: "Storyboard with 4–6 frames and animation flow described",
      },
      {
        number: 2,
        title: "Generate Animations",
        purpose:
          "Use your storyboard to prompt Vidu or Pika Labs to generate the individual clips. You'll likely need 2–3 attempts per frame — this is normal. Save every clip that works.",
        tools: "Vidu or Pika Labs",
        prompt: `I have my storyboard from last week. Help me turn each frame into an AI animation prompt.

My storyboard:
[paste your storyboard from Week 1]

My animation style: [paste style from Week 1]

For each frame, write a clean prompt I can paste into Vidu or Pika Labs.

Follow this format:
Frame [number] prompt:
"[Describe what the animation shows. Start with the visual scene, then describe the motion, then the mood. End with style and technical notes.]"

Rules for every prompt:
– Describe motion explicitly: "slides in from the left", "fades to reveal", "a figure walks towards camera", "text appears one word at a time"
– Specify style at the end of every prompt: [paste your style line]
– Keep each clip to 2–4 seconds (they combine better)
– No text within the AI-generated clip (I'll overlay text in editing)
– If a frame is complex, split it into two simpler ones

After the prompts, give me:
– A warning about anything that might not render well in free-tier tools
– A tip for what to do if a clip looks wrong (prompt adjustments, not just "try again")`,
        miniOutput: "3–4 animation clips ready to combine",
      },
      {
        number: 3,
        title: "Combine & Polish",
        purpose:
          "String your clips together, add any text overlays or sound, and export a finished animation. Canva's video editor is the simplest way to do this — no experience needed.",
        tools: "Canva (free), optional: Descript for sound",
        prompt: `I have my individual animation clips and want to combine them into one finished 6–10 second animated clip.

I'm using Canva Free to assemble everything.

Help me work through this:

STEP 1 — SETUP
– What video dimensions should I use for [LinkedIn / training module / portfolio]?
– How do I start a video project in Canva and import my clips?

STEP 2 — ASSEMBLY
– How do I place clips in sequence on the Canva timeline?
– How do I trim the start or end of a clip if it's slightly too long?
– What's the simplest transition between clips that looks professional (not cheesy)?

STEP 3 — TEXT OVERLAYS
Based on my storyboard, these are the text overlays I planned:
[paste any text overlay notes from your storyboard]

For each one:
– where should the text appear on screen (top, bottom, centre)?
– what font style suits my animation style: [paste your style]?
– how do I animate the text in Canva so it doesn't just appear flat?

STEP 4 — SOUND (optional)
– Where can I find a free, royalty-free background sound or music sting that suits a [professional / warm / energetic] tone?
– How do I add it in Canva without it overpowering the visuals?

STEP 5 — EXPORT
– What export settings for a short animation I'll share on LinkedIn or embed in a slide deck?

Give me a final checklist to check before exporting.`,
        miniOutput: "Finished 6–10 second animation with transitions",
      },
    ],
    closingNote:
      "Animation catches attention. Even a simple clip can make a learning moment more memorable. Keep it short and punchy.",
  },

  // ─────────────────────────────────────────────
  // JULY — AI Notebook / Workbook
  // ─────────────────────────────────────────────
  {
    id: "july",
    month: "July",
    title: "AI Notebook / Workbook",
    theme:
      "Create a practical workbook or notebook that guides learners through a topic with prompts, templates, and checklists",
    isLive: true,
    intro: [
      "This month you're building a workbook — either as a PDF or Notion template — that people can actually use in their learning or work.",
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
        purpose:
          "Choose a topic you genuinely know and care about, then design a workbook structure that guides learners through it — not just information, but action and reflection. A good workbook structure is worth more than polished content written too early.",
        tools: "ChatGPT",
        prompt: `Act as an instructional designer specialising in self-directed learning resources.

I want to create a practical workbook that learners can fill in, work through, or use as a reference during learning or on the job.

First, ask me:
– What topic or skill is this workbook for?
– Who will use it — their role, experience level, and context?
– Will they use it during a workshop, independently, or as a follow-up resource?
– Should it feel structured (step-by-step) or more exploratory (open-ended prompts)?
– Do I have a preferred format — PDF, Notion, or printed?

Then design a workbook outline:

1. TITLE — working title for the workbook (specific, not generic)

2. PURPOSE STATEMENT — 2 sentences: what problem this solves and what learners will walk away with

3. SECTION OUTLINE — 4–6 sections, each with:
   – Section heading
   – One-sentence purpose (why this section exists)
   – 2–3 content types to include (e.g. reflection prompt, template, checklist, how-to steps, example, space to write)
   – Estimated time to complete

4. LEARNING FLOW — a brief note on how the sections connect and build on each other

5. ONE THING TO AVOID — common workbook mistake that makes this topic harder to use

Keep it practical. This should feel like something a real person will pick up and use, not a corporate training handout.`,
        miniOutput: "Workbook outline with 4–6 sections and learning flow",
      },
      {
        number: 2,
        title: "Content & Activities",
        purpose:
          "Write the actual content for each section — but resist the urge to write too much. Workbooks work because they give people space to think. Your job is to prompt reflection and action, not fill every page with information.",
        tools: "ChatGPT",
        prompt: `I have my workbook outline. Now I want to write the content for each section.

My workbook topic: [paste topic]
My audience: [paste audience]
My outline: [paste outline from Week 1]

For each section, write the following:

1. A SHORT INTRO (2–4 sentences) — what this section is about and why it matters

2. ONE CORE CONCEPT or KEY IDEA — explained simply, in 3–5 bullet points or a short paragraph

3. A REAL EXAMPLE — a brief workplace scenario or case that makes the concept concrete (not hypothetical, not academic)

4. ONE REFLECTION PROMPT — an open question that makes the learner apply it to their own situation
   Format: "Think about [context]. What would you [do / say / notice / change]?"

5. ONE TEMPLATE, TOOL, OR CHECKLIST — something practical they can use or fill in
   This could be: a 3-column table, a yes/no checklist, a planning grid, or a fill-in-the-blank worksheet

Rules:
– Each section should take no more than 5–7 minutes to read and complete
– Use plain language, no buzzwords
– Leave visual space — note "[space for writing]" where the learner should fill something in
– If a section is getting long, split it into two
– Do not summarise everything at the end — let the activities do the work`,
        miniOutput: "Draft content for all sections with reflection activities",
      },
      {
        number: 3,
        title: "Design & Delivery",
        purpose:
          "Format your workbook so it looks professional and is easy to use. You don't need to be a designer — Canva's templates do the heavy lifting. Focus on readability and usability over visual complexity.",
        tools: "Canva Free (PDF) or Notion (digital template)",
        prompt: `I have all my workbook content and want to format it into a finished, shareable workbook.

I'm using [Canva Free / Notion — delete as appropriate].

OPTION A — CANVA (for a PDF workbook)

Help me format this in Canva:

1. What Canva template type should I start with? (Give me the exact search term to use in Canva's template search)

2. LAYOUT GUIDANCE — for each section type, tell me:
   – Intro text: font size, weight, spacing
   – Key concept or bullet list: how to format so it's scannable
   – Reflection prompt: how to make it visually distinct (box, background colour, icon)
   – Templates/checklists: how to create simple tables or grid layouts in Canva
   – "[Space for writing]" sections: how to create a clean, lined or boxed area

3. COVER PAGE — what to include (title, subtitle, my name/brand, a simple visual element)

4. EXPORT — settings for a PDF that looks sharp on screen and when printed

OPTION B — NOTION (for a digital interactive workbook)

Help me set up this in Notion:

1. How do I create a shareable Notion page others can duplicate as a template?
2. How do I structure each section with toggles, callout blocks, and tables?
3. How do I add reflection prompts so they stand out visually?
4. How do I add a checklist that people can tick off as they go?
5. How do I make the page shareable — a link anyone can open?

EITHER FORMAT — give me a final review checklist:
– Is the workbook easy to navigate?
– Is there enough white space?
– Can someone complete it in 20–30 minutes?
– Would a real person pick this up and use it?`,
        miniOutput: "Finished workbook ready to share or download",
      },
    ],
    closingNote:
      "A good workbook guides learning without overwhelming the reader. Give people space to think and write their own answers.",
  },

  // ─────────────────────────────────────────────
  // AUGUST — Branching Scenario / Case Study
  // ─────────────────────────────────────────────
  {
    id: "august",
    month: "August",
    title: "Branching Scenario / Case Study",
    theme: "Create an interactive scenario where learners make decisions and see the consequences of their choices",
    isLive: true,
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
        purpose:
          "Design a situation that feels real and puts learners in the middle of a genuine decision — not a knowledge quiz dressed up as a story. Good branching scenarios are grounded in real workplace tension, not obvious right-and-wrong choices.",
        tools: "ChatGPT",
        prompt: `Act as an instructional designer specialising in scenario-based learning.

I want to create a branching scenario where learners face realistic workplace decisions and experience different outcomes based on their choices.

First, ask me:
– What workplace situation or skill am I building this around?
– Who is the learner (role, experience level)?
– What bad habits or wrong assumptions does this scenario need to challenge?
– How long should the scenario take — 5 minutes or 15 minutes?
– Will this be used in a tool like Brancher.ai, Twine, or as a simple PDF/slide flow?

Then design:

1. THE OPENING SITUATION — 3–4 sentences that drop the learner into a realistic moment:
   – Name the character (learner plays as them or observes them)
   – Describe the specific setting (not "a manager" — "a team leader on their third month in the role")
   – Create genuine tension — something where the right move isn't obvious
   – End with a clear decision point

2. THE BRANCH MAP — a visual outline like this:
   Opening situation → Decision Point 1
   Choice A: [label] → [brief consequence + next decision or end]
   Choice B: [label] → [brief consequence + next decision or end]
   Choice C: [label] → [brief consequence + next decision or end]
   [Continue for 2–3 layers minimum, 4–6 branches total]

3. WHAT MAKES EACH BRANCH REALISTIC — a note on why each choice is plausible (not "only an idiot would choose this")

4. THE LEARNING MOMENT — where in the scenario does the key insight land, and for which branch?

Rule: no choice should be obviously stupid. Learners should hesitate, not cruise.`,
        miniOutput: "Scenario premise with 4–6 decision branches mapped out",
      },
      {
        number: 2,
        title: "Dialogue & Feedback",
        purpose:
          "Write the actual words — what characters say, what happens after each choice, and the feedback that explains the consequence. Good scenario dialogue sounds human. Good feedback explains the 'why', not just the 'wrong'.",
        tools: "ChatGPT",
        prompt: `I have my branching scenario structure. Now I need to write the dialogue and consequence feedback for each branch.

My scenario overview: [paste your opening situation and branch map from Week 1]

For EACH branch in my scenario, write:

1. THE CHOICE TEXT — how the option appears to the learner
   Format: "You decide to..." or "[Character name] chooses to..."
   Keep it to one sentence. Make it sound like a real decision, not a textbook option.

2. WHAT HAPPENS NEXT — 3–4 sentences of realistic consequence
   – Describe what immediately happens (dialogue, reaction, situation change)
   – Include one specific sensory or emotional detail that makes it feel real
   – Don't resolve things too quickly — let some tension sit

3. CONSEQUENCE FEEDBACK — what the learner sees after the scene plays out
   Keep this to 3–4 sentences:
   – Name what happened and why it matters
   – Avoid "Great choice!" or "Wrong answer!"
   – Explain the real-world logic: "In most workplaces, this kind of response..."
   – If it's a poor choice, acknowledge what was understandable about it before explaining the impact

4. WHERE TO NEXT — does this branch:
   – Lead to a new decision point? (describe it briefly)
   – End the scenario? (write a 2-sentence closing)
   – Loop back to try again? (note which point)

TONE RULES:
– Dialogue should sound like real people, not training actors
– Avoid "This is an example of poor communication." — show the impact instead
– Never shame a learner for a wrong choice — help them understand`,
        miniOutput: "Complete dialogue and feedback for all branches",
      },
      {
        number: 3,
        title: "Build & Test",
        purpose:
          "Assemble your scenario in Brancher.ai or Twine and walk through every single path before sharing it. Broken links and dead ends kill the learner experience — testing takes 10 minutes and catches everything.",
        tools: "Brancher.ai or Twine (free)",
        prompt: `I have my complete scenario text and want to build it in [Brancher.ai / Twine — delete as appropriate].

OPTION A — BRANCHER.AI (recommended for beginners)

Walk me through building my scenario:
1. How do I create a new scenario and set up the opening scene?
2. How do I add a decision point with multiple choices?
3. How do I link each choice to the correct consequence scene?
4. How do I add the feedback text after each consequence?
5. How do I mark an endpoint so the scenario knows it's finished?
6. How do I preview and test every path?
7. How do I get a shareable link when it's ready?

OPTION B — TWINE (more flexible, slightly more technical)

Walk me through building my scenario:
1. Which Twine story format should I use (Harlowe, Sugarcube, Chapbook)?
2. How do I create passages and link them with [[choice text]]?
3. How do I add feedback text that appears after a choice is made?
4. How do I style it simply so it looks readable (not the default plain text)?
5. How do I export it as a playable HTML file?
6. How do I host it for free so I can share a link?

TESTING CHECKLIST (for either tool):
Before sharing, check:
– Does every choice lead somewhere? (no dead ends)
– Do all the feedback messages appear correctly?
– Does every ending feel resolved, not cut off?
– Is the opening situation clear enough for someone with no context?
– Have you played the "worst path" all the way through?

If I find something broken, help me fix it.`,
        miniOutput: "Playable, tested branching scenario ready to share",
      },
    ],
    closingNote:
      "Good scenarios feel real and respect learner choice. Avoid 'gotcha' feedback. Help learners understand why each outcome happened.",
  },

  // ─────────────────────────────────────────────
  // SEPTEMBER — Micro-Course
  // ─────────────────────────────────────────────
  {
    id: "september",
    month: "September",
    title: "Micro-Course",
    theme: "Build a complete, self-contained mini-course with lessons, assessments, and one multimedia component",
    isLive: true,
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
        purpose:
          "Design your micro-course structure before writing a single word of content. The structure is the learning strategy. Get this right and everything else follows. Get it wrong and you end up with a long document dressed as a course.",
        tools: "ChatGPT",
        prompt: `Act as an instructional designer.

I want to create a short, self-paced micro-course with 3–5 lessons on a topic I know well.

First, ask me:
– What is the topic?
– Who is the learner — their role, what they already know, and why they're doing this?
– What should learners be able to DO after completing this course (not just "understand")?
– How long should the whole course take — 20 minutes or 45 minutes?
– Where will this live — a website (V0.dev), Notion, or a shared document?

Then design:

1. COURSE TITLE — clear, specific, outcome-focused (avoid "Introduction to X")

2. COURSE OVERVIEW — 3 sentences:
   – Who it's for
   – What they'll be able to do by the end
   – Why this matters right now

3. 3–5 LESSON OUTLINE — for each lesson:
   Lesson [number]: [Title]
   Learning outcome: one measurable thing learners can do
   Key content: 3–4 bullet points (what is actually taught)
   Learning activity: one thing learners do (not just read)
   Estimated time: X minutes

4. ASSESSMENT PLAN — one short quiz or reflection activity per lesson, plus a final check at the end

5. ONE MULTIMEDIA MOMENT — identify which lesson would benefit most from a short video or animation (from your May or June challenge outputs, or a new one)

6. PACING NOTE — is the difficulty level appropriate? Does anything need splitting or combining?

Flag if any lesson is trying to do too much.`,
        miniOutput: "Course outline with 3–5 lessons and learning objectives",
      },
      {
        number: 2,
        title: "Lesson Content & Build",
        purpose:
          "Write all your lesson content and start building the course in your chosen platform. Write content first, build second — it's much faster than writing directly inside a tool.",
        tools: "ChatGPT (content), V0.dev or Notion (build)",
        prompt: `I have my course outline. Now I need to write the lesson content and begin building the course.

My course outline: [paste from Week 1]

PART 1 — WRITE THE LESSONS (in ChatGPT)

For each lesson, write:

1. LESSON INTRO — 2–3 sentences that explain what this lesson covers and why it matters. No filler.

2. CORE CONTENT — the 3–4 key points from my outline, written as:
   – Short heading
   – 2–4 sentences of clear explanation
   – One concrete example (real or realistic)

3. LEARNING ACTIVITY — write the specific task or question learners do during this lesson
   Format: "Before moving on, [do this specific thing]."
   Keep it to 1–2 minutes. No multi-step projects here.

4. LESSON SUMMARY — 3 bullet points: the three things to remember

5. QUIZ QUESTION — one multiple choice or true/false question that checks the core point
   Include: the question, 3–4 answer options, the correct answer, and a 1-sentence explanation of why it's correct

PART 2 — BUILD THE COURSE

OPTION A — V0.dev
Paste this prompt into V0.dev:
"Build a clean, minimal course page for a self-paced micro-course called [TITLE].

Include:
– A course header with title and overview
– A lesson navigation sidebar (lessons listed as links)
– A lesson content area showing one lesson at a time
– A progress indicator
– A simple quiz component with multiple choice options and a reveal-answer button
– Clean, professional design, generous white space, readable typography"

Then paste your lesson content section by section.

OPTION B — Notion
Create a Notion page with:
– Course title and overview at the top
– One sub-page per lesson
– Each lesson page following the structure: Intro → Content → Activity → Summary → Quiz
– A progress checklist on the main page learners can tick off

Tell me which option you're using and I'll give you specific next steps.`,
        miniOutput: "Lesson drafts with content and platform structure created",
      },
      {
        number: 3,
        title: "Assessments, Media & Polish",
        purpose:
          "Add a final assessment, embed your multimedia component, and review the whole course as if you're a learner taking it for the first time. The goal is a course someone would actually finish.",
        tools: "ChatGPT, Canva Free, V0.dev or Notion",
        prompt: `My course content and structure are built. Now I need to add the final assessment, embed media, and polish everything.

STEP 1 — FINAL ASSESSMENT

Based on my course learning outcomes: [paste outcomes]

Write a final assessment with:
– 5–8 questions (mix of multiple choice, true/false, and one short-answer reflection)
– Questions that test application, not just memory
– For multiple choice: 3–4 options, one clearly correct, others plausible
– For reflection: one open question that asks learners to connect the content to their own work
– A passing benchmark suggestion (e.g. "4/5 correct to continue")

STEP 2 — MULTIMEDIA

I want to embed [a short video / an animation clip] into lesson [number].

If I already have an MP4 from a previous challenge:
– How do I embed it in V0.dev / Notion?
– What dimensions or aspect ratio works best?

If I need to create a short visual:
– Write me a 30-second explainer script for this lesson concept: [paste concept]
– Give me a Canva or Veo prompt to create a simple supporting visual

STEP 3 — POLISH & REVIEW

Review my full course as a learner would. I'll paste the content below.
[paste course content]

Tell me:
– Is the learning flow logical — does each lesson build on the previous?
– Is anything over-explained or under-explained?
– Which lesson is most likely to lose a learner's attention, and why?
– Does the final assessment actually test the learning outcomes?
– One thing I should change before sharing this

STEP 4 — SHARE IT
How do I get a shareable link for [V0.dev / Notion] that anyone can open without needing an account?`,
        miniOutput: "Complete, functional micro-course ready to launch",
      },
    ],
    closingNote:
      "A micro-course doesn't need to be complex. Clear structure, one idea per lesson, and one good assessment is enough. Quality over quantity.",
  },

  // ─────────────────────────────────────────────
  // OCTOBER — Personal Dashboard / Career Compass
  // ─────────────────────────────────────────────
  {
    id: "october",
    month: "October",
    title: "Personal Dashboard / Career Compass",
    theme: "Build a personalised tracking tool to monitor your L&D growth, learning goals, and AI skill development",
    isLive: true,
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
        purpose:
          "Before building anything, get clear on what you actually want to track and why. Most dashboards fail because people track everything and use nothing. This step keeps it simple and purposeful.",
        tools: "ChatGPT",
        prompt: `Act as a personal development and learning strategy coach.

I want to create a personal tracker or dashboard to monitor my L&D career growth, AI skill development, and professional projects.

First, ask me:
– What am I trying to get better at this year?
– What do I currently track (if anything) and what's working or not?
– How much time do I realistically want to spend on maintaining this — 5 minutes a week or 20?
– Do I want to track goals, habits, projects, skills, reflections, or a mix?
– Would I use this privately or share parts of it with a manager, coach, or community?

Then design:

1. DASHBOARD PURPOSE — one sentence: what problem does this solve for me?

2. CORE TRACKING AREAS — 3–5 categories I should track. For each:
   – Category name
   – What I'm tracking (specific, not vague)
   – Why it matters
   – How often I'll update it (daily, weekly, monthly)

3. WHAT TO LEAVE OUT — 2–3 things that might seem useful but would add noise or drop off after a week

4. STRUCTURE RECOMMENDATION — for each category, recommend the best format:
   e.g. simple table, progress bar, kanban view, log/journal, checklist, rating scale

5. TOOL RECOMMENDATION — based on my needs, should I use:
   – Notion (more flexible, visual, shareable)
   – Airtable (more database-style, good for filtering)
   – Google Sheets (simple, no new tool to learn)
   Explain the tradeoff for my specific use case.

One rule: start with the minimum. I can add more later.`,
        miniOutput: "Dashboard structure and tracking categories defined",
      },
      {
        number: 2,
        title: "Build Templates",
        purpose:
          "Create the database structure, views, and input forms in your chosen tool. This is the technical build step — follow the instructions methodically and don't try to perfect the design at this stage.",
        tools: "Notion, Airtable, or Google Sheets",
        prompt: `I've decided on my dashboard structure. Now I want to build it.

My categories and structure: [paste from Week 1]
My chosen tool: [Notion / Airtable / Google Sheets]

FOR NOTION:

Help me build each tracking area:

1. For [Category 1 — paste name]:
   – What database type should I use (table, gallery, board, list, calendar)?
   – What properties/fields do I need and what types (text, select, date, number, checkbox, etc.)?
   – What views should I create (e.g. "Active", "This month", "Completed")?
   – Write me the exact steps to create this from scratch

2. Repeat for each other category.

3. DASHBOARD PAGE — how do I create a main "home" page that shows linked views from all my databases in one place?

4. ENTRY TEMPLATE — for my most important category, how do I create a button or template so adding a new entry takes under 30 seconds?

FOR AIRTABLE:

1. Should I use one base with multiple tables or separate bases?
2. For [Category 1], what fields do I need and what field types?
3. How do I create a filtered view that shows only "this week" or "in progress" records?
4. How do I create a simple form so I can add entries from my phone quickly?

FOR GOOGLE SHEETS:

1. How do I structure the sheets — one tab per category or one master sheet?
2. For [Category 1], what columns do I need?
3. How do I add a simple dropdown for status or category fields?
4. How do I create a summary view at the top that auto-updates?

After building: give me a 5-minute weekly check-in routine I can follow to keep this up to date.`,
        miniOutput: "Dashboard template with all fields and views created",
      },
      {
        number: 3,
        title: "Polish & Populate",
        purpose:
          "Add visual clarity to your dashboard, populate it with real starting data, and write yourself a short guide so you actually use it. A dashboard you don't use is just a planning exercise.",
        tools: "Notion, Airtable, or Google Sheets",
        prompt: `My dashboard structure is built. Now I want to polish it, add real data, and make it a habit.

My tool: [Notion / Airtable / Google Sheets]
My categories: [paste from Week 1]

STEP 1 — POLISH FOR USABILITY

For Notion:
– How do I add icons or cover images to make categories visually distinct?
– How do I reorder sections so the most-used categories are at the top?
– How do I add a callout block as a "weekly intention" prompt at the top of the home page?

For Airtable:
– How do I colour-code records by status?
– How do I hide fields that I don't need to see in the default view?
– How do I add a summary bar that counts completed vs in-progress items?

For Google Sheets:
– How do I use conditional formatting to colour-code status columns?
– How do I freeze the header row and first column so they stay visible?
– How do I add a simple chart that updates as I log data?

STEP 2 — POPULATE WITH REAL DATA

Help me fill in my dashboard with:
– 3 real goals I want to track right now
– My current AI challenge outputs as portfolio or project entries
– My current skills to develop and a simple self-rating (1–5)
– One reflection for this month that I can look back on in December

STEP 3 — MAKE IT SHAREABLE

How do I:
– Share a view-only version with someone (a manager or coach)?
– Duplicate it as a template others can copy?
– Export a simple snapshot as a PDF if I ever need to?

STEP 4 — THE USAGE HABIT

Write me a 5-minute weekly routine for using this dashboard.
Format it as a simple checklist I can copy into my calendar as a recurring event.`,
        miniOutput: "Finished, polished dashboard ready to use and share",
      },
    ],
    closingNote:
      "The best tracker is the one you'll actually use. Start simple with 3–4 key metrics. You can always add more later.",
  },

  // ─────────────────────────────────────────────
  // NOVEMBER — AI Portfolio
  // ─────────────────────────────────────────────
  {
    id: "november",
    month: "November",
    title: "AI Portfolio",
    theme: "Compile all your year's work into a cohesive portfolio that tells the story of your AI-in-L&D journey",
    isLive: true,
    intro: [
      "This month you're curating the best pieces from the past year into a portfolio that showcases your growth and skills.",
      "You'll create case studies, an optional showcase reel, and a reflective narrative about what you've learned.",
      "This is your 'My AI Year' portfolio — proof that you've learned, built, and experimented.",
    ],
    tools: ["All tools from the year", "Notion or Canva", "Video editing (Descript)"],
    project:
      "Compile your best work from the past 11 months into a cohesive 'My AI Year' portfolio with case studies and reflections",
    timeCommitment: "~50 minutes per week",
    outputs: [
      "One portfolio page or document",
      "3–4 case studies of your favourite projects",
      "An optional 15–30 second reel showcasing your best work",
      "A reflective narrative about your year",
    ],
    weeks: [
      {
        number: 1,
        title: "Curate & Choose",
        purpose:
          "You've made a lot this year. This step is about choosing the best 4–5 pieces — not all of them. Curation is a skill. A portfolio with 3 great pieces beats a portfolio with 11 average ones. Be honest about what you're actually proud of.",
        tools: "Notion, Google Drive, or your portfolio page from March",
        prompt: `Act as a career coach and portfolio reviewer with expertise in Learning & Development.

I've completed a series of AI-assisted L&D challenges over the past year and I want to curate my best work into a final portfolio.

Here's a summary of everything I produced this year:
[Paste a brief description of each project you completed — even just the month and what you made. Include the ones you're unsure about.]

First, ask me:
– Who is this portfolio for — hiring managers, clients, peers, or personal reflection?
– Do I want to show range (different skills and tools) or depth (mastery in one area)?
– What do I want people to remember about me after seeing this portfolio?

Then:

1. RECOMMEND 4–5 PIECES TO INCLUDE
   For each, explain:
   – Why this piece is worth including (what it demonstrates)
   – What kind of viewer or opportunity it's best suited for
   – Any gap it leaves that another piece could fill

2. FLAG WHAT TO LEAVE OUT — and why (not good enough, too similar to another piece, doesn't fit the story)

3. PORTFOLIO STORY — write 2–3 sentences describing the thread that connects these pieces:
   "This portfolio shows someone who..."
   This becomes the basis for your portfolio intro.

4. GAPS — is there anything obviously missing that I should consider adding or creating this month?

5. ORDER — what order should these pieces appear in and why?`,
        miniOutput: "Your best projects selected and organised by month",
      },
      {
        number: 2,
        title: "Write Case Studies",
        purpose:
          "Turn your selected projects into short case studies that explain what you did, why, and what you learned. Case studies are how portfolio pieces become evidence of thinking, not just output.",
        tools: "ChatGPT, Canva Free",
        prompt: `I've selected my 4–5 portfolio pieces. Now I want to write a short case study for each one.

My pieces: [paste the list of selected projects]
My portfolio is for: [paste audience from Week 1]

For EACH piece, write a case study using this structure:

PROJECT TITLE
[4–7 words, specific and clear — not "May Challenge"]

THE BRIEF (2–3 sentences)
What was the challenge, gap, or goal this project addressed?
Who was it for, and what context were they in?

WHAT I DID (3–4 sentences)
What tools and approaches did I use?
What decisions did I make and why?
What was the hardest part?

THE RESULT (2–3 sentences)
What was created or produced?
What happened, changed, or improved?
If there's no clean "outcome", say what you learned instead.

WHAT THIS SHOWS (1–2 sentences)
What skill, capability, or mindset does this demonstrate?
Write this in the third person, as if a reviewer is describing you.

AI TOOL(S) USED
List the tools. One sentence on how AI contributed (not replaced) your thinking.

TONE RULES:
– Write in first person, clear and direct
– Avoid "I leveraged" — say "I used"
– Avoid "impactful" — say what the impact actually was
– Don't oversell. Let the work speak.
– Keep the whole case study under 200 words

After writing all case studies, give me:
– A one-paragraph portfolio intro that ties them together
– One sentence that describes what makes my approach to L&D distinctive`,
        miniOutput: "3–4 completed case studies with context and learnings",
      },
      {
        number: 3,
        title: "Compile & Reflect",
        purpose:
          "Bring everything together into a final portfolio, create an optional short showcase clip, and write a reflective note about your year. The reflection is what turns a collection of projects into a story of growth.",
        tools: "Notion or March portfolio page, optional Descript for reel, Canva Free",
        prompt: `I have my case studies, selected projects, and portfolio intro. Now I want to compile everything into a final 'My AI Year' portfolio and add a reflection.

STEP 1 — ASSEMBLE THE PORTFOLIO

If I'm using my March portfolio page (website):
– How do I update my Work Samples section with new cards for each case study?
– Each new card should have: title, 2-sentence description, and a link to the case study
– Write me the updated card text for each project: [paste project list]

If I'm building a new Notion page:
– Create a "My AI Year" Notion page structure with:
  → A header section: portfolio intro paragraph
  → 4–5 case study cards (each linking to a sub-page)
  → A tools section: names of all tools I used this year
  → A reflections section at the bottom

STEP 2 — OPTIONAL SHOWCASE REEL (15–20 seconds)

If I want to make a short video reel of my work:
– What screen recordings or screenshots should I include and in what order?
– Write me a 15-second voiceover script that narrates the year:
  "[Name]'s AI year in L&D — from [Month 1 project] to [Month 11 project]..."
– How do I stitch clips together in Descript and export as MP4?

STEP 3 — THE REFLECTIVE NARRATIVE

Help me write a short "Year in Review" narrative (200–300 words).

Ask me:
– What tool or output surprised me most this year?
– What was harder than I expected?
– What's one thing I now do differently at work because of this?
– What do I want to do more of in the year ahead?

Then write the narrative in my voice — first person, honest, not a performance.
This goes at the bottom of my portfolio. It's what makes the whole thing human.

STEP 4 — FINAL PORTFOLIO REVIEW

Paste my final portfolio content and tell me:
– Does the story feel coherent from beginning to end?
– Is there anything that feels out of place or weakens the overall impression?
– What's the one sentence someone will remember after reading this?`,
        miniOutput: "Complete 'My AI Year' portfolio ready to share",
      },
    ],
    closingNote:
      "Your portfolio tells the story of your growth. Make sure it shows not just what you built, but what you learned and how you changed.",
  },
]
