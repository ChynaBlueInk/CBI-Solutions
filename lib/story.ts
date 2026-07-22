// lib/story.ts — typed data for the branching-video player.
//
// To make a NEW story for the series: copy this file, change STORY.id/title,
// and rewrite the "nodes" object. Each node is one video clip.
//   - "video": path to the clip file under /public (so "/clips/0.mp4" maps
//     to public/clips/0.mp4)
//   - "choice": shown after the clip ends, branches to other nodes
//   - "ending": shown after the clip ends, with a Restart button
// A node has EITHER "choice" OR "ending", never both — enforced by the
// StoryNode type below (only one of the two can be present at a time isn't
// enforced by TS structurally, but the player treats "ending" as the terminal
// case and only reads "choice" when "ending" is absent).
// The tree must start at the node id given in STORY.startNode.

export interface ChoiceOption {
  label: string;
  next: string;
}

export interface Choice {
  text: string;
  options: ChoiceOption[];
}

export interface Ending {
  title: string;
  text: string;
}

export interface StoryNode {
  video: string;
  choice?: Choice;
  ending?: Ending;
}

export interface Story {
  id: string;
  title: string;
  startNode: string;
  nodes: Record<string, StoryNode>;
}

export const STORY: Story = {
  id: "the-wallet",
  title: "The Wallet",
  startNode: "0",
  nodes: {
    "0": {
      video: "/clips/wallet/0.mp4",
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
      ending: {
        title: "Ending 1: The Weight of a Lie",
        text: "A secret you have to keep is a debt that keeps compounding.",
      },
    },
    A2: {
      video: "/clips/wallet/A2.mp4",
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
      ending: {
        title: "Ending 2: Drop & Run",
        text: "Doing the right thing quietly still counts. But some connections are worth staying for.",
      },
    },
    A2b: {
      video: "/clips/wallet/A2b.mp4",
      ending: {
        title: "Ending 3: Face to Face",
        text: "Owning a mistake and making it right, in person, turns guilt into growth.",
      },
    },
    B: {
      video: "/clips/wallet/B.mp4",
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
      ending: {
        title: "Ending 4: Quiet Integrity",
        text: "Nobody has to know you did the right thing for it to matter.",
      },
    },
    B2: {
      video: "/clips/wallet/B2.mp4",
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
      ending: {
        title: "Ending 5: Take the Cash",
        text: "Honesty was rewarded here, but notice: she would have knocked on that door either way.",
      },
    },
    B2b: {
      video: "/clips/wallet/B2b.mp4",
      ending: {
        title: "Ending 6: Beyond the Reward",
        text: "Some choices open doors money never could. Integrity is its own reward — and sometimes it's the start of something new.",
      },
    },
  },
};
