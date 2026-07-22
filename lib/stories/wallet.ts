// lib/stories/wallet.ts — data for "The Wallet" branching scenario.
//
// To make a NEW story, copy this file's shape (see lib/stories/group-chat.ts
// for another example), point "video" paths at public/clips/<id>/, and
// register it on the landing page (app/Scenario/page.tsx).

import type { Story } from "./types";

export const wallet: Story = {
  id: "the-wallet",
  title: "The Wallet",
  subtitle:
    "A stranger's wallet, stuffed with cash, and no one watching. What would you do?",
  startNode: "0",
  nodes: {
    "0": {
      video: "/clips/wallet/0.mp4",
      label: "Start",
      description:
        "Maya is walking home when she spots a leather wallet stuffed with cash lying on the sidewalk. No one else is around. She picks it up and has to decide what to do.",
      choice: {
        text: "What should Maya do?",
        options: [
          { label: "Keep the wallet", next: "A" },
          { label: "Try to return it", next: "B" },
        ],
      },
    },
    A: {
      video: "/clips/wallet/A.mp4",
      label: "Keep the wallet",
      description:
        "Maya pockets the wallet. Her friend Jordan spots the cash and starts talking her into spending it, no questions asked.",
      choice: {
        text: "Jordan says: “Just keep it, no one will know.” What does Maya do?",
        options: [
          { label: "Spend it", next: "A1" },
          { label: "Decide to give it back", next: "A2" },
        ],
      },
    },
    A1: {
      video: "/clips/wallet/A1.mp4",
      label: "Spend it",
      description:
        "Maya spends the cash over the next few days — new clothes, takeout, small treats. Then, at the corner store, the cashier recognizes the wallet in her pocket and his expression changes.",
      ending: {
        title: "Ending 1: The Weight of a Lie",
        text: "A secret you have to keep is a debt that keeps compounding.",
      },
    },
    A2: {
      video: "/clips/wallet/A2.mp4",
      label: "Decide to give it back",
      description:
        "That night, Maya can't stop thinking about the elderly woman's photo on the ID inside the wallet. She decides she has to return it — she just has to figure out how.",
      choice: {
        text: "Maya decides to return it. How?",
        options: [
          { label: "Drop it off anonymously", next: "A2a" },
          { label: "Return it in person", next: "A2b" },
        ],
      },
    },
    A2a: {
      video: "/clips/wallet/A2a.mp4",
      label: "Drop it off anonymously",
      description:
        "Maya leaves the wallet on the porch, rings the bell, and hurries away before the door opens. She doesn't stay to see the woman's reaction.",
      ending: {
        title: "Ending 2: Drop & Run",
        text: "Doing the right thing quietly still counts. But some connections are worth staying for.",
      },
    },
    A2b: {
      video: "/clips/wallet/A2b.mp4",
      label: "Return it in person",
      description:
        "Maya knocks and waits. When the door opens, she hands the wallet back herself and owns up to almost keeping it.",
      ending: {
        title: "Ending 3: Face to Face",
        text: "Owning a mistake and making it right, in person, turns guilt into growth.",
      },
    },
    B: {
      video: "/clips/wallet/B.mp4",
      label: "Try to return it",
      description:
        "Maya opens the wallet and finds a driver's license with an address inside. She decides to try to get it back to its owner.",
      choice: {
        text: "What should Maya do next?",
        options: [
          { label: "Mail it back anonymously", next: "B1" },
          { label: "Deliver it in person", next: "B2" },
        ],
      },
    },
    B1: {
      video: "/clips/wallet/B1.mp4",
      label: "Mail it back anonymously",
      description:
        "Maya drops the wallet in a padded envelope at the mailbox and walks away, satisfied even though no one will ever know it was her.",
      ending: {
        title: "Ending 4: Quiet Integrity",
        text: "Nobody has to know you did the right thing for it to matter.",
      },
    },
    B2: {
      video: "/clips/wallet/B2.mp4",
      label: "Deliver it in person",
      description:
        "Maya knocks on the address from the ID. An elderly woman, Mrs. Whitfield, opens the door — and is overwhelmed with relief and gratitude at the sight of her wallet.",
      choice: {
        text: "Mrs. Whitfield offers a reward. What does Maya do?",
        options: [
          { label: "Accept the reward", next: "B2a" },
          { label: "Decline the reward", next: "B2b" },
        ],
      },
    },
    B2a: {
      video: "/clips/wallet/B2a.mp4",
      label: "Accept the reward",
      description:
        "Mrs. Whitfield insists on a cash reward. Maya accepts it and heads home.",
      ending: {
        title: "Ending 5: Take the Cash",
        text: "Honesty was rewarded here, but notice: she would have knocked on that door either way.",
      },
    },
    B2b: {
      video: "/clips/wallet/B2b.mp4",
      label: "Decline the reward",
      description:
        "Maya gently pushes the reward back. Mrs. Whitfield, touched, invites her inside instead — the start of an unexpected friendship.",
      ending: {
        title: "Ending 6: Beyond the Reward",
        text: "Some choices open doors money never could. Integrity is its own reward — and sometimes it's the start of something new.",
      },
    },
  },
};
