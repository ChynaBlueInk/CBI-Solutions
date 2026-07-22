// lib/stories/party.ts — data for "Speak Up" branching scenario.
// See lib/stories/wallet.ts for notes on the Story shape.
//
// Content note: a bystander-intervention story for teen boys. Sofia's
// discomfort is conveyed through body language (leaning away, forced smile,
// a held arm) rather than anything explicit — every clip keeps the camera
// on reactions and framing, never anything graphic. See the Vidu prompt doc
// for full clip-by-clip direction.

import type { Story } from "./types";

export const party: Story = {
  id: "speak-up",
  title: "Speak Up",
  subtitle: "Marcus watches a friend cross a line at a party. Say nothing, or step in?",
  poster: "/scenario/party-thumb.jpg",
  startNode: "0",
  nodes: {
    "0": {
      video: "/clips/party/0.mp4",
      label: "Start",
      description:
        "At a party, Marcus notices his friend Dominic gripping Sofia's arm, pressuring her to stay while she leans away with a forced, uncomfortable smile.",
      choice: {
        text: "What does Marcus do?",
        options: [
          { label: "Say nothing", next: "A" },
          { label: "Step in", next: "B" },
        ],
      },
    },
    A: {
      video: "/clips/party/A.mp4",
      label: "Say nothing",
      description:
        "Marcus looks away, takes a sip of his drink, and turns back to his friends — glancing back once, uneasy, at the corner where Sofia is still being crowded.",
      choice: {
        text: "Later that night — does Marcus move on, or feel guilty and check on Sofia?",
        options: [
          { label: "Move on", next: "A1" },
          { label: "Text Sofia to check in", next: "A2" },
        ],
      },
    },
    A1: {
      video: "/clips/party/A1.mp4",
      label: "Move on",
      description:
        "A few weeks later, at a different party, Dominic is doing the same thing to another girl — and this time Marcus doesn't even notice, laughing with his friends across the room.",
      ending: {
        title: "Ending 1: Nothing Changes",
        text: "Staying quiet didn't just fail Sofia once. It told Dominic this was fine to keep doing.",
      },
    },
    A2: {
      video: "/clips/party/A2.mp4",
      label: "Text Sofia to check in",
      description:
        "That night, lying awake, Marcus finally texts Sofia: “hey, saw that earlier — you good?” — then hesitates before hitting send.",
      choice: {
        text: "Does Marcus just offer sympathy, or apologize and commit to speaking up next time?",
        options: [
          { label: "Just sympathy", next: "A2a" },
          { label: "Apologize and commit to doing better", next: "A2b" },
        ],
      },
    },
    A2a: {
      video: "/clips/party/A2a.mp4",
      label: "Just sympathy",
      description:
        "Sofia replies: “yeah, thanks for asking, but you were standing right there.” Marcus reads it and sets the phone down slowly, the weight of her words sinking in.",
      ending: {
        title: "Ending 2: Too Little, Too Late",
        text: "Checking in after the fact is kind. But Sofia needed someone in that moment, not after it.",
      },
    },
    A2b: {
      video: "/clips/party/A2b.mp4",
      label: "Apologize and commit to doing better",
      description:
        "The following week, Marcus catches up to Dominic in the hallway and actually says something. Dominic's defensiveness slowly gives way to reluctantly listening — and across the hall, Marcus and Sofia share a small nod of understanding.",
      ending: {
        title: "Ending 3: A Late Start",
        text: "He didn't get it right the first time. But going back and actually saying something to Dominic mattered — growth is still growth.",
      },
    },
    B: {
      video: "/clips/party/B.mp4",
      label: "Step in",
      description:
        "Marcus steps closer into the group, his body language shifting to alert and purposeful, eyes locked on Dominic.",
      choice: {
        text: "Does Marcus pull Dominic aside privately, or call him out in front of everyone?",
        options: [
          { label: "Pull him aside privately", next: "B1" },
          { label: "Call him out publicly", next: "B2" },
        ],
      },
    },
    B1: {
      video: "/clips/party/B1.mp4",
      label: "Pull him aside privately",
      description:
        "In a quieter hallway away from the party noise, Marcus puts a hand on Dominic's shoulder and speaks low and firm. Dominic is defensive at first, then his posture softens.",
      ending: {
        title: "Ending 4: Man to Man",
        text: "A private word worked, just slower and quieter. Dominic apologized to Sofia later that night — accountability doesn't always need an audience.",
      },
    },
    B2: {
      video: "/clips/party/B2.mp4",
      label: "Call him out publicly",
      description:
        "Marcus steps directly between Dominic and Sofia: “hey — that's not okay, let her go.” The room's noise seems to dip as several partygoers turn to look.",
      choice: {
        text: "Does the group back Marcus up, or mock him for it?",
        options: [
          { label: "The group mocks him", next: "B2a" },
          { label: "A friend backs him up", next: "B2b" },
        ],
      },
    },
    B2a: {
      video: "/clips/party/B2a.mp4",
      label: "The group mocks him",
      description:
        "A few nearby teens exchange smirks and mutter under their breath, the mood shifting awkwardly. Marcus stands his ground despite the side-eyes — and across the room, Sofia gives him a small, grateful nod before slipping away safely.",
      ending: {
        title: "Ending 5: The Uncomfortable Silence",
        text: "Doing the right thing wasn't popular in that room. It was still right — and Sofia knew exactly what he'd done for her.",
      },
    },
    B2b: {
      video: "/clips/party/B2b.mp4",
      label: "A friend backs him up",
      description:
        "Another friend steps up beside Marcus, backing him up. The room's energy shifts — a couple of others murmur agreement, and Dominic steps back, chastened.",
      ending: {
        title: "Ending 6: The Turning Point",
        text: "One voice became two, and the room's whole standard shifted with it. That's how a culture actually changes.",
      },
    },
  },
};
