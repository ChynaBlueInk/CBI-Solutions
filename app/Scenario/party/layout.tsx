// app/Scenario/party/layout.tsx — route-specific metadata for the party
// ("Speak Up") scenario share link.
//
// page.tsx in this folder is a Client Component ("use client"), and Next
// doesn't allow a Client Component to export `metadata` — only Server
// Components can. A layout.tsx alongside it is a Server Component by
// default, so it can supply metadata for this route without touching
// page.tsx at all. It just needs to render {children}.

import type React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Speak Up",
  description:
    "A friend crosses a line with a girl at a party. Say nothing, or step in? A bystander-intervention scenario for teens — three decisions, six endings.",
  openGraph: {
    type: "video.other",
    url: "/Scenario/party",
    title: "Speak Up — An Interactive Scenario",
    description:
      "A friend crosses a line with a girl at a party. Say nothing, or step in? Three decisions, six endings.",
    siteName: "CBI Learning Solutions",
    images: [
      {
        url: "/scenario/party-og.jpg",
        width: 1200,
        height: 630,
        alt: "Speak Up — an interactive scenario for teens",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Speak Up — An Interactive Scenario",
    description: "A friend crosses a line with a girl at a party. Say nothing, or step in?",
    images: ["/scenario/party-og.jpg"],
  },
};

export default function PartyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
