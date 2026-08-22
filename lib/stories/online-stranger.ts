// lib/stories/online-stranger.ts — data for "The Online Stranger" branching
// scenario. See lib/stories/wallet.ts for notes on the Story shape.
//
// Content note: a digital-safety story about grooming red flags and the
// value of telling a trusted adult before meeting someone from online. The
// stranger ("Alex_22") is never shown clearly in any clip — obscured,
// distant, or backlit only. Tension comes from pacing and framing, not
// depicted threat or violence. See the Vidu prompt doc's Story 2 for full
// clip-by-clip direction.

import type { Story } from "./types";

export const onlineStranger: Story = {
  id: "the-online-stranger",
  title: "The Online Stranger",
  subtitle: "Someone she's only ever talked to online wants to meet up. Go alone, or bring someone into it?",
  poster: "/scenario/online-stranger-thumb.jpg",
  discussion: [
    "Nothing about talking to someone online is against the rules. So what makes this situation risky rather than just exciting or new?",
    "Leah isn't doing anything wrong by wanting to meet \"Alex_22.\" Why might it still be a good idea to loop someone else in?",
    "In Ending 4, Leah sneaks out after her parent says no. What's the difference between disagreeing with a rule and breaking someone's trust to get around it?",
    "Blocking an account (Ending 5) protects Leah but not necessarily anyone else. Do you think there's a responsibility to report, not just protect yourself?",
    "How might Leah feel about herself in each ending — even in the ones where nothing bad actually happened?",
  ],
  startNode: "0",
  nodes: {
    "0": {
      video: "/clips/online-stranger/0.mp4",
      label: "Start",
      description:
        "Leah's been chatting with someone online who goes by “Alex_22” for weeks. Tonight they ask her to finally meet up in person — just the two of them, this weekend.",
      choice: {
        text: "What does Leah do?",
        options: [
          { label: "Agree to meet alone", next: "A" },
          { label: "Tell a trusted adult first", next: "B" },
        ],
      },
    },
    A: {
      video: "/clips/online-stranger/A.mp4",
      label: "Agree to meet alone",
      description:
        "Leah texts back “okay, this weekend.” The excitement is real, but so is a flicker of uncertainty she can't quite explain.",
      choice: {
        text: "Does Leah tell anyone where she's going?",
        options: [
          { label: "Tell no one", next: "A1" },
          { label: "Tell a friend the location only", next: "A2" },
        ],
      },
    },
    A1: {
      video: "/clips/online-stranger/A1.mp4",
      label: "Tell no one",
      description:
        "Leah goes to the park alone, telling no one. The person who shows up looks nothing like the photos — older, a stranger. She backs away fast and gets to a busy street safely.",
      ending: {
        title: "Ending 1: A Close Call",
        text: "Nobody knew where she was. She got away this time, but “this time” isn't a safety plan.",
        reflection:
          "Leah got away safely, so it's tempting to call this a win. What actually made this outcome mostly luck rather than a good decision?",
      },
    },
    A2: {
      video: "/clips/online-stranger/A2.mp4",
      label: "Tell a friend the location only",
      description:
        "Leah texts a friend the location, just in case. Her friend immediately replies: “wait WHAT, I'm coming with you.”",
      choice: {
        text: "Does Leah let her friend come along?",
        options: [
          { label: "Just tell her the location", next: "A2a" },
          { label: "Bring her along", next: "A2b" },
        ],
      },
    },
    A2a: {
      video: "/clips/online-stranger/A2a.mp4",
      label: "Just tell her the location",
      description:
        "Leah goes alone, with only her friend knowing where she is, miles away. A stranger lingers nearby, watching, while her phone buzzes with a text she can't act on fast enough.",
      ending: {
        title: "Ending 2: A Half-Measure",
        text: "Someone knowing where you are isn't the same as someone being there. Location pins don't step in.",
        reflection:
          "Telling a friend the location felt like enough of a safety net at the time. What does this ending say about the difference between someone knowing and someone being present?",
      },
    },
    A2b: {
      video: "/clips/online-stranger/A2b.mp4",
      label: "Bring her along",
      description:
        "Leah brings her friend Mia with her. The stranger who shows up hesitates the moment he sees two of them, then turns and walks away.",
      ending: {
        title: "Ending 3: Strength in Numbers",
        text: "Bringing someone changed everything about how safe that meeting actually was.",
        reflection:
          "Leah still went to meet a stranger from online — she just wasn't alone. Was bringing Mia a fully safe choice, or just a much safer one than going alone?",
      },
    },
    B: {
      video: "/clips/online-stranger/B.mp4",
      label: "Tell a trusted adult first",
      description:
        "Instead of replying, Leah shows her parent the messages at the kitchen table. Their expression shifts from calm to concerned as they read.",
      choice: {
        text: "Leah's parent says not to go. What does she do?",
        options: [
          { label: "Sneak out anyway", next: "B1" },
          { label: "Listen and don't go", next: "B2" },
        ],
      },
    },
    B1: {
      video: "/clips/online-stranger/B1.mp4",
      label: "Sneak out anyway",
      description:
        "Leah climbs out her window that night anyway, guilt gnawing at her. Her parent finds her room empty.",
      ending: {
        title: "Ending 4: Broken Trust",
        text: "Even if nothing happens tonight, ignoring a clear warning breaks something that takes a long time to rebuild.",
        reflection:
          "Sneaking out isn't illegal. So why does this ending focus on trust instead of danger or punishment?",
      },
    },
    B2: {
      video: "/clips/online-stranger/B2.mp4",
      label: "Listen and don't go",
      description:
        "Leah listens to her parent and messages “Alex_22” to decline. She feels disappointed and quietly relieved at the same time.",
      choice: {
        text: "What does Leah do about the account?",
        options: [
          { label: "Just block them", next: "B2a" },
          { label: "Report them with screenshots", next: "B2b" },
        ],
      },
    },
    B2a: {
      video: "/clips/online-stranger/B2a.mp4",
      label: "Just block them",
      description:
        "Leah blocks the account and moves on. Weeks later, she notices a near-identical message land in someone else's inbox from a brand new username.",
      ending: {
        title: "Ending 5: Blocked, Not Solved",
        text: "She was safe. But blocking only closes the door for you — the account can just knock on someone else's.",
        reflection:
          "Leah did everything right for herself in this ending. Why might that not feel like the full story once she sees the same message land in someone else's inbox?",
      },
    },
    B2b: {
      video: "/clips/online-stranger/B2b.mp4",
      label: "Report them with screenshots",
      description:
        "Leah screenshots the whole conversation and files a report on the platform, her parent looking over her shoulder, nodding supportively.",
      ending: {
        title: "Ending 6: Stopping It for Someone Else",
        text: "Reporting doesn't just protect you. It's the difference between one close call and preventing the next one.",
        reflection:
          "Reporting takes more effort than just blocking and moving on. What made that extra step worth it here?",
      },
    },
  },
};
