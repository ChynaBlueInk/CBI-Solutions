// app/Scenario/glasses/layout.tsx — route-specific metadata for the
// glasses ("The Glasses") scenario share link.
//
// page.tsx in this folder is a Client Component ("use client"), and Next
// doesn't allow a Client Component to export `metadata` — only Server
// Components can. A layout.tsx alongside it is a Server Component by
// default, so it can supply metadata for this route without touching
// page.tsx at all. It just needs to render {children}.

import type React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Glasses",
  description:
    "A friend is secretly filming people with his camera glasses. Say nothing, or say something? A bystander-intervention scenario for teens on consent and covert recording — three decisions, six endings.",
  openGraph: {
    type: "video.other",
    url: "/Scenario/glasses",
    title: "The Glasses — An Interactive Scenario",
    description:
      "A friend is secretly filming people with his camera glasses. Say nothing, or say something? Three decisions, six endings.",
    siteName: "CBI Learning Solutions",
    images: [
      {
        url: "/scenario/glasses-og.jpg",
        width: 1200,
        height: 630,
        alt: "The Glasses — an interactive scenario for teens",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Glasses — An Interactive Scenario",
    description: "A friend is secretly filming people with his camera glasses. Say nothing, or say something?",
    images: ["/scenario/glasses-og.jpg"],
  },
};

export default function GlassesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
