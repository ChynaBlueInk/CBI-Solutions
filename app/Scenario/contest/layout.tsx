// app/Scenario/contest/layout.tsx — route-specific metadata for the contest
// ("The Contest") scenario share link.
//
// page.tsx in this folder is a Client Component ("use client"), and Next
// doesn't allow a Client Component to export `metadata` — only Server
// Components can. A layout.tsx alongside it is a Server Component by
// default, so it can supply metadata for this route without touching
// page.tsx at all. It just needs to render {children}.

import type React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Contest",
  description:
    "A contest deadline, a shortcut she's not sure about, and no rule that tells her what's fair. An interactive scenario for teens on AI's environmental cost and training-data ethics — three decisions, six endings, no single right answer.",
  openGraph: {
    type: "video.other",
    url: "/Scenario/contest",
    title: "The Contest — An Interactive Scenario",
    description:
      "A contest deadline, a shortcut she's not sure about, and no rule that tells her what's fair. Three decisions, six endings. Sometimes there is no clear right and wrong",
    siteName: "CBI Learning Solutions",
    images: [
      {
        url: "/scenario/contest-og.jpg",
        width: 1200,
        height: 630,
        alt: "The Contest — an interactive scenario for teens",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Contest — An Interactive Scenario",
    description: "A contest deadline, a shortcut she's not sure about, and no rule that tells her what's fair.",
    images: ["/scenario/contest-og.jpg"],
  },
};

export default function ContestLayout({ children }: { children: React.ReactNode }) {
  return children;
}
