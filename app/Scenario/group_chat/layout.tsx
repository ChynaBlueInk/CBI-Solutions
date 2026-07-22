// app/Scenario/group_chat/layout.tsx — route-specific metadata for the
// group_chat scenario share link.
//
// page.tsx in this folder is a Client Component ("use client"), and Next
// doesn't allow a Client Component to export `metadata` — only Server
// Components can. A layout.tsx alongside it is a Server Component by
// default, so it can supply metadata for this route without touching
// page.tsx at all. It just needs to render {children}.

import type React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Group Chat",
  description:
    "A fake AI-generated image of a classmate lands in the group chat. Pile on, stay silent, or speak up? An interactive scenario for teens on deepfakes, consent, and the real laws around sharing this kind of image — three decisions, six endings.",
  openGraph: {
    type: "video.other",
    url: "/Scenario/group_chat",
    title: "The Group Chat — An Interactive Scenario",
    description:
      "A fake AI-generated image of a classmate lands in the group chat. Pile on, stay silent, or speak up? Three decisions, six endings.",
    siteName: "CBI Learning Solutions",
    images: [
      {
        url: "/scenario/group-chat-og.jpg",
        width: 1200,
        height: 630,
        alt: "The Group Chat — an interactive scenario for teens",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Group Chat — An Interactive Scenario",
    description:
      "A fake AI-generated image of a classmate lands in the group chat. Pile on, stay silent, or speak up?",
    images: ["/scenario/group-chat-og.jpg"],
  },
};

export default function GroupChatLayout({ children }: { children: React.ReactNode }) {
  return children;
}
