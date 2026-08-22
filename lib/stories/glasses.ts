// lib/stories/glasses.ts — data for "The Glasses" branching scenario.
// See lib/stories/wallet.ts for notes on the Story shape.
//
// Content note: a bystander-intervention story for teen boys, sibling to
// "Speak Up" (party). Ryan wears camera glasses and secretly films girls at
// a food court without asking; Eli decides whether to call it out. The
// story is explicit that the technology itself isn't the problem — one
// beat has Ryan deflect with "they're just glasses, my grandma's got a
// pair for her eyes," and the story rebuts that directly rather than
// treating the glasses themselves as the villain. Never show or linger on
// the girls being filmed; keep the camera on Ryan's glasses/phone and on
// Eli's reaction. See the Vidu prompt doc for full clip-by-clip direction.
//
// Revised per Ben Russell's "How to Talk to Teenagers About Smart Glasses"
// (Aug 2026): the core distinction the story now leans on is that a phone
// being lifted gives the person being filmed a moment to notice and
// object — glasses remove that moment entirely (see node "0"). Ryan's two
// deflections ("it was just a joke" / "I wasn't even recording") and the
// rebuttal line ("if you have to hope she doesn't find out, you already
// know what you're doing") are pulled close to the article's own framing
// because they're the actual lines teens will hear and use. B1's private
// intervention now uses the article's suggested bystander script ("turn
// them off, she doesn't know") instead of a paraphrase — it's meant to be
// rehearsable, not just narrated.
//
// Facilitator note (not in the video script, for discussion use): the
// article covers real, evolving legal exposure — Australia's statutory
// tort of serious invasion of privacy (in force since June 2025) lets a
// bystander sue over exactly this kind of covert filming, with under-18s
// currently exempt from that specific tort but not from school conduct
// rules. That's jurisdiction-specific enough that it isn't hardcoded into
// Eli and Ryan's dialogue, but it's strong material for a facilitator to
// bring in locally after watching — pair with the "start with being
// filmed, not with filming" opening technique from the same article: ask
// the room who's been filmed or photographed without wanting to be,
// before naming the device at all.

import type { Story } from "./types";

export const glasses: Story = {
  id: "the-glasses",
  title: "The Glasses",
  subtitle: "Ryan's filming people at the food court without asking. Say nothing, or say something?",
  poster: "/scenario/glasses-thumb.jpg",
  discussion: [
    "In most places, filming someone in public isn't illegal — Ryan isn't breaking a clear law in this story. Does that mean what he's doing is okay?",
    "Ryan says \"they're just glasses, my grandma's got a pair for her eyes.\" Why doesn't that argument actually answer what Eli's upset about?",
    "The story draws a line between a phone (which gives someone a moment to notice and say no) and glasses (which don't). Why does that split-second moment matter so much?",
    "Ryan's defense is \"it was just a joke, I wasn't even really recording anything.\" What does it tell you when someone needs to say that?",
    "How do you think the girls at the table would feel if they found out later they'd been filmed — even if the clips were never shared anywhere?",
    "Nobody in this story gets in legal trouble. So what is it that actually changes between Ending 1 and Ending 6?",
  ],
  startNode: "0",
  nodes: {
    "0": {
      video: "/clips/glasses/0.mp4",
      label: "Start",
      description:
        "At the food court, Eli notices his friend Ryan — wearing a pair of sleek camera glasses — quietly zooming in and recording girls at a nearby table. If he'd lifted a phone, they'd have had a moment to notice and say no. The glasses never give them that moment. Ryan and the rest of the group are snickering about it.",
      choice: {
        text: "What does Eli do?",
        options: [
          { label: "Say nothing", next: "A" },
          { label: "Say something", next: "B" },
        ],
      },
    },
    A: {
      video: "/clips/glasses/A.mp4",
      label: "Say nothing",
      description:
        "Eli laughs along instead, telling himself it's not that deep. Ryan keeps filming, clearly encouraged by the reaction.",
      choice: {
        text: "Later — does Eli move on, or does it keep bothering him enough to bring up?",
        options: [
          { label: "Move on", next: "A1" },
          { label: "Bring it up later", next: "A2" },
        ],
      },
    },
    A1: {
      video: "/clips/glasses/A1.mp4",
      label: "Move on",
      description:
        "A few weeks later, Ryan's doing the same thing at school, except now he's posting the clips to a group chat with jokes attached. Eli sees it and scrolls past.",
      ending: {
        title: "Ending 1: Nothing Changes",
        text: "Laughing along didn't just let it happen once. It told Ryan this was funny enough to keep doing, and to start sharing.",
        reflection:
          "Eli didn't film anyone himself — he just laughed along. Why does that still make him part of what Ryan does next?",
      },
    },
    A2: {
      video: "/clips/glasses/A2.mp4",
      label: "Bring it up later",
      description: "Eli can't stop thinking about it and finally brings it up with Ryan a few days later.",
      choice: {
        text: "Does Eli just mention it was a bit weird, or actually push him to stop and delete the clips?",
        options: [
          { label: "Just mention it was weird", next: "A2a" },
          { label: "Push him to delete the clips and stop", next: "A2b" },
        ],
      },
    },
    A2a: {
      video: "/clips/glasses/A2a.mp4",
      label: "Just mention it was weird",
      description:
        "Eli says, offhand, “that was kind of weird, man,” and leaves it there. Ryan shrugs it off — “relax, it was just a joke, I wasn't even really recording anything” — and nothing actually changes.",
      ending: {
        title: "Ending 2: Too Little, Too Late",
        text: "Naming it after the fact is a start, but it's not the same as asking him to actually stop. Ryan heard “weird,” not “don't.”",
        reflection:
          "Eli said something, technically. Why wasn't \"that was kind of weird\" enough to actually change what Ryan does?",
      },
    },
    A2b: {
      video: "/clips/glasses/A2b.mp4",
      label: "Push him to delete the clips and stop",
      description:
        "Eli doesn't let the joke defense land this time: “if you have to hope she doesn't find out, you already know what you're doing.” Ryan's defensive for a second, then goes quiet, and actually deletes the clips in front of him.",
      ending: {
        title: "Ending 3: A Late Start",
        text: "It took longer than it should have. But going back and actually asking him to undo it — not just naming it — is what made it real.",
        reflection:
          "\"If you have to hope she doesn't find out, you already know what you're doing\" is what finally got through to Ryan. Why is that line more effective than just saying it was weird?",
      },
    },
    B: {
      video: "/clips/glasses/B.mp4",
      label: "Say something",
      description:
        "Eli looks over at the girls, then at Ryan's glasses, and says it loud enough for the group to hear: “they're a bit creepy aren't they?”",
      choice: {
        text: "Does Eli say it to Ryan privately, or in front of the whole group?",
        options: [
          { label: "Pull him aside privately", next: "B1" },
          { label: "Say it in front of everyone", next: "B2" },
        ],
      },
    },
    B1: {
      video: "/clips/glasses/B1.mp4",
      label: "Pull him aside privately",
      description:
        "Eli waits until it's just the two of them: “turn them off — she doesn't know.” Four words, no lecture. Ryan's defensive at first, then actually listens.",
      ending: {
        title: "Ending 4: Man to Man",
        text: "A private word worked, just slower and quieter. Ryan deleted the clips that night — accountability doesn't always need an audience.",
        reflection:
          "Eli said just four words — \"turn them off, she doesn't know\" — instead of a whole lecture. Why might a short, direct line work better than a longer argument?",
      },
    },
    B2: {
      video: "/clips/glasses/B2.mp4",
      label: "Say it in front of everyone",
      description:
        "Eli says it right there at the table: “they're a bit creepy aren't they?” Ryan laughs it off — “come on, they're just glasses, my grandma's got a pair for her eyes” — and looks around the table for backup.",
      choice: {
        text: "Does the group side with Ryan, or does someone back Eli up?",
        options: [
          { label: "The group sides with Ryan", next: "B2a" },
          { label: "A friend backs Eli up", next: "B2b" },
        ],
      },
    },
    B2a: {
      video: "/clips/glasses/B2a.mp4",
      label: "The group sides with Ryan",
      description:
        "Nobody says anything else. A couple of the guys smirk, and Eli's the one who ends up looking like he made it weird. He still doesn't take it back.",
      ending: {
        title: "Ending 5: The Uncomfortable Silence",
        text: "The glasses were never the problem, and everyone at that table knew it — they just didn't want to be the one to say it twice. Eli said it once, and meant it.",
        reflection:
          "Eli ends up looking like the one who \"made it weird,\" even though he wasn't the one filming anyone. Why does calling something out sometimes cost the person speaking up more than the person doing it?",
      },
    },
    B2b: {
      video: "/clips/glasses/B2b.mp4",
      label: "A friend backs Eli up",
      description:
        "Another friend at the table says, “nah, he's right, that's not the glasses' fault, that's just you being creepy about it.” Ryan's face changes. He puts the glasses down.",
      ending: {
        title: "Ending 6: The Turning Point",
        text: "One voice became two, and the table's whole standard shifted with it. The tech was never the issue — what he did with it was, and now the group actually agrees on that.",
        reflection:
          "It took a second person backing Eli up — \"that's not the glasses' fault, that's just you being creepy about it\" — to actually shift Ryan. What does that tell you about why bystanders speaking up together matters?",
      },
    },
  },
};
