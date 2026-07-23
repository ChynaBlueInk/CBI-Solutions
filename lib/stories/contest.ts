// lib/stories/contest.ts — data for "The Contest" branching scenario.
// See lib/stories/wallet.ts for notes on the Story shape.
//
// Content note: unlike the other three scenarios, this one has no bright
// moral or legal line — it's about AI's environmental cost and
// training-data provenance, where informed people genuinely disagree. Every
// ending represents a defensible value system with a real cost, not a
// ranked "best answer." The actual hinge across the tree is honesty about
// the choice made (quiet vs. public), not which choice was made — see the
// Vidu prompt doc's Story 4 intro note for the full design rationale.

import type { Story } from "./types";

export const contest: Story = {
  id: "the-contest",
  title: "The Contest",
  subtitle:
    "A contest deadline, a shortcut she's not sure about, and no rule that tells her what's fair.",
  poster: "/scenario/contest-thumb.jpg",
  startNode: "0",
  nodes: {
    "0": {
      video: "/clips/contest/0.mp4",
      label: "Start",
      description:
        "Zoe's behind on her piece for a regional art contest — real prize money, a portfolio line for art school. A friend suggests an AI image generator to catch her up. Zoe's read that a favorite artist of hers doesn't want her work used to train these tools, and she's seen the energy-use numbers too. She's not sure what to do with either fact.",
      choice: {
        text: "What does Zoe do?",
        options: [
          { label: "Use AI to help", next: "A" },
          { label: "Work on it entirely by hand", next: "B" },
        ],
      },
    },
    A: {
      video: "/clips/contest/A.mp4",
      label: "Use AI to help",
      description: "Her friend pulls up an image generator. Zoe has to decide how far she's willing to lean on it.",
      choice: {
        text: "Does she generate the piece outright, or use it only for early sketches and draw the final herself?",
        options: [
          { label: "Generate the piece outright", next: "A1" },
          { label: "Use it only for sketches, draw the final by hand", next: "A2" },
        ],
      },
    },
    A1: {
      video: "/clips/contest/A1.mp4",
      label: "Generate the piece outright",
      description:
        "Zoe generates the final piece, enters it without mentioning how it was made, and wins. Staying quiet protected her from a fight she didn't choose to have — nobody ever asks, so nobody ever reacts.",
      ending: {
        title: "Ending 1: The Uneasy Win",
        text: "That's a legitimate reason to stay quiet. It just means she's the only one who has to sit with whether the trophy is actually hers.",
      },
    },
    A2: {
      video: "/clips/contest/A2.mp4",
      label: "Use it only for sketches, draw the final by hand",
      description:
        "Zoe uses the generator for a few early thumbnail ideas, then draws and paints the actual piece herself, start to finish. She's seen how brutal the reaction can get when someone admits to using AI at all — even just for this.",
      choice: {
        text: "Does she mention the AI-assisted sketches, or just call it her process?",
        options: [
          { label: "Just call it her process", next: "A2a" },
          { label: "Mention the AI-assisted sketches", next: "A2b" },
        ],
      },
    },
    A2a: {
      video: "/clips/contest/A2a.mp4",
      label: "Just call it her process",
      description:
        "She reasons it's no different from using a reference photo or a Pinterest board, and says nothing. It ships. It's fine. A friend later asks her, half-joking, where exactly the line is between \"reference\" and \"shortcut\" — and Zoe doesn't have a tidy answer waiting for her.",
      ending: {
        title: "Ending 2: A Tool Like Any Other",
        text: "Staying quiet let her avoid a fight she didn't want. Fair enough — but the question didn't actually get answered, just avoided.",
      },
    },
    A2b: {
      video: "/clips/contest/A2b.mp4",
      label: "Mention the AI-assisted sketches",
      description:
        "Zoe mentions the AI-assisted sketches to a couple of people. The reaction is exactly as mixed as she feared — some respect the honesty, some treat it as no different from generating the whole thing. She didn't get a clean outcome. She also didn't have to wonder afterward if she'd said what she actually meant.",
      ending: {
        title: "Ending 3: Naming the Process",
        text: "Some people are quiet about this, and that's a reasonable, protective choice. Zoe wasn't, and she got exactly the reaction she risked by not being quiet.",
      },
    },
    B: {
      video: "/clips/contest/B.mp4",
      label: "Work on it entirely by hand",
      description:
        "Zoe decides the piece has to be entirely hers, generator or not. That means she's not going to finish it the way she planned.",
      choice: {
        text: "Does she turn in something unfinished, or pull an all-nighter to finish the whole thing herself?",
        options: [
          { label: "Turn in something unfinished", next: "B1" },
          { label: "Pull an all-nighter to finish it herself", next: "B2" },
        ],
      },
    },
    B1: {
      video: "/clips/contest/B1.mp4",
      label: "Turn in something unfinished",
      description:
        "Zoe submits the piece as far as she got, unfinished corners and all. It places lower than some AI-assisted entries in the same contest. She's frustrated watching that happen — and she still wouldn't have made the piece any other way.",
      ending: {
        title: "Ending 4: Known Cost",
        text: "Holding a line for real means it sometimes actually costs you something. She didn't pretend it was free — she just decided it was worth paying.",
      },
    },
    B2: {
      video: "/clips/contest/B2.mp4",
      label: "Pull an all-nighter to finish it herself",
      description:
        "Zoe stays up finishing every last detail by hand. It's rough by morning, but it's entirely hers, start to finish.",
      choice: {
        text: "When she sees the AI-assisted entries later, does she judge them, or stay focused on her own standard?",
        options: [
          { label: "Judge the AI-assisted entries", next: "B2a" },
          { label: "Stay focused on her own standard", next: "B2b" },
        ],
      },
    },
    B2a: {
      video: "/clips/contest/B2a.mp4",
      label: "Judge the AI-assisted entries",
      description:
        "Zoe's proud of what she made — and can't resist a few comments about the AI-assisted entries around her. It costs her; a couple of friends who made a different, equally defensible call stop showing her their work.",
      ending: {
        title: "Ending 5: Righteous, but Alone",
        text: "Having a principle doesn't mean everyone who chose differently was wrong. Zoe held her line and lost some trust anyway — not because of the line, but because of what she did with it.",
      },
    },
    B2b: {
      video: "/clips/contest/B2b.mp4",
      label: "Stay focused on her own standard",
      description:
        "Zoe's proud of her piece and doesn't say a word about anyone else's choices. Some classmates used AI, some didn't; she doesn't need them to have made her call to respect her own.",
      ending: {
        title: "Ending 6: Her Own Standard",
        text: "This doesn't settle whether AI belongs in art, or what's fair to the people whose work trained it. It only settles what Zoe can live with. That might be the most anyone gets to walk away with here.",
      },
    },
  },
};
