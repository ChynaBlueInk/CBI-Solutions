// lib/stories/group-chat.ts — data for "The Group Chat" branching scenario.
// See lib/stories/wallet.ts for notes on the Story shape.
//
// Content note: this scenario centers on an AI-generated ("deepfake") sexual
// image of a classmate circulating in a group chat. The image itself is
// never depicted or described in any node — every clip prompt (see the Vidu
// prompt doc) shows only phones, chat bubbles, and reactions, with the image
// itself rendered as a blurred/pixelated placeholder at most. The point of
// the scenario is the real legal exposure this creates (see each ending's
// "text"), not the image.

import type { Story } from "./types";

export const groupChat: Story = {
  id: "the-group-chat",
  title: "The Group Chat",
  subtitle:
    "A fake image of a classmate just landed in the chat. Pile on, stay quiet, or speak up?",
  startNode: "0",
  nodes: {
    "0": {
      video: "/clips/group_chat/0.mp4",
      label: "Start",
      description:
        "Ava is scrolling her phone before bed when a new post lands in the group chat: an AI-generated fake image of her classmate Priya, made with one of those “undress” apps that are all over social media right now. It's captioned with laughing emojis. Ava has to decide what to do next.",
      choice: {
        text: "What does Ava do?",
        options: [
          { label: "Forward it, it's funny", next: "A" },
          { label: "Speak up: “delete this now, that's illegal”", next: "B" },
        ],
      },
    },
    A: {
      video: "/clips/group_chat/A.mp4",
      label: "Forward it, nobody likes Priya anyway",
      description:
        "Ava's friends in the chat are egging her on, treating it like a joke. Her thumb hovers over the forward button.",
      choice: {
        text: "Does she add a caption, or just forward it?",
        options: [
          { label: "Add a mean caption", next: "A1" },
          { label: "Forward it silently", next: "A2" },
        ],
      },
    },
    A1: {
      video: "/clips/group_chat/A1.mp4",
      label: "Add a mean caption",
      description:
        "The fake image spreads fast with Ava's caption attached — screen after screen lighting up with laughter and re-shares. Within days, a parent sees it and calls the school. What started as a “joke” is now a police matter, and Ava's name is on the forward history.",
      ending: {
        title: "Ending 1: The Ripple You Can't Take Back",
        text: "AI-generated or not, a sexual image of someone underage is illegal to make, share, or even keep on your phone. Forwarding it isn't a joke — it's evidence, and now it has your name on it too.",
      },
    },
    A2: {
      video: "/clips/group_chat/A2.mp4",
      label: "Forward it silently",
      description:
        "Ava forwarded the image without comment — but that night, lying awake, the weight of what she just did starts to sink in.",
      choice: {
        text: "Does Ava do anything about it?",
        options: [
          { label: "Say nothing", next: "A2a" },
          { label: "Delete it and apologise privately", next: "A2b" },
        ],
      },
    },
    A2a: {
      video: "/clips/group_chat/A2a.mp4",
      label: "Say nothing",
      description:
        "Ava never deletes the image or says anything to Priya. Weeks later, when the school investigates how far it spread, Ava's forward shows up in the chain — she's implicated in something far more serious than she ever meant to be part of.",
      ending: {
        title: "Ending 2: Silence Isn't Innocence",
        text: "Not adding a caption doesn't make it not a crime. Once you forward something like that, having it and passing it along is part of the offense — deleting it and speaking up the moment you realise what it is isn't optional, it's the only way out.",
      },
    },
    A2b: {
      video: "/clips/group_chat/A2b.mp4",
      label: "Delete it and apologise privately",
      description:
        "Ava deletes the image from her phone and finds Priya to apologise, admitting she should have refused to forward it in the first place. It's an awkward, hard conversation — but an honest one.",
      ending: {
        title: "Ending 3: Owning It — Late, But Real",
        text: "A real apology matters. But notice: the right moment to delete it was the second she realised what it was, not after she'd already sent it on.",
      },
    },
    B: {
      video: "/clips/group_chat/B.mp4",
      label: "Speak up",
      description:
        "Instead of joining in, Ava types into the chat: “delete this now, that's illegal,” and hits send.",
      choice: {
        text: "Does Ava also reach out to Priya directly?",
        options: [
          { label: "Leave it at the public message", next: "B1" },
          { label: "DM Priya to give her a heads-up", next: "B2" },
        ],
      },
    },
    B1: {
      video: "/clips/group_chat/B1.mp4",
      label: "Leave it at the public message",
      description:
        "Ava's message lands — a few people delete their copies and the chat goes quiet. But she has no way of knowing how many phones the image is still sitting on, or whether it's already been sent somewhere she can't see.",
      ending: {
        title: "Ending 4: A Voice in the Chat",
        text: "Speaking up in the moment matters, and it's real courage. But a fake sexual image doesn't fully disappear just because one group chat calms down — this needed to go further.",
      },
    },
    B2: {
      video: "/clips/group_chat/B2.mp4",
      label: "DM Priya to give her a heads-up",
      description:
        "Ava sends Priya a private message: “hey, there's a fake image of you going around the group chat. I told them to delete it. are you okay?”",
      choice: {
        text: "Priya asks what to do next. Handle it privately, or report it together?",
        options: [
          { label: "Handle it privately", next: "B2a" },
          { label: "Report it together to a trusted adult", next: "B2b" },
        ],
      },
    },
    B2a: {
      video: "/clips/group_chat/B2a.mp4",
      label: "Handle it privately",
      description:
        "Ava and Priya talk it through quietly, and Priya feels less alone. But whoever made the image is never identified, and neither girl knows how many phones it's still circulating on.",
      ending: {
        title: "Ending 5: Support in the Shadows",
        text: "Comfort helps, but it doesn't make an illegal image stop existing. Something like this needs to be reported — to the school, and often to police — not just kept quietly between friends. It's possible it could appear again in her future",
      },
    },
    B2b: {
      video: "/clips/group_chat/B2b.mp4",
      label: "Report it together",
      description:
        "Ava and Priya sit down together with a school counselor, who loops in the administration and, because this involves a sexual image of a minor, the police. It's a harder step than staying quiet but until we report it there is nothing the authorities can do to actually stop it.",
      ending: {
        title: "Ending 6: Turning the Tide",
        text: "This was never about getting someone in trouble for a joke. Making or sharing a sexual image of someone underage — real or AI-generated — is a real crime under laws in many countries. Reporting it is what makes it stop, and it's what real accountability looks like.",
      },
    },
  },
};
