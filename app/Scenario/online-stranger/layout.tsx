// app/Scenario/online-stranger/layout.tsx — route-specific metadata for the
// online-stranger scenario share link.
//
// page.tsx in this folder is a Client Component ("use client"), and Next
// doesn't allow a Client Component to export `metadata` — only Server
// Components can. A layout.tsx alongside it is a Server Component by
// default, so it can supply metadata for this route without touching
// page.tsx at all. It just needs to render {children}.

import type React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Online Stranger",
  description:
    "Someone she's only ever talked to online wants to meet up. Go alone, or bring someone into it? A digital-safety scenario for teens — three decisions, six endings.",
  openGraph: {
    type: "video.other",
    url: "/Scenario/online-stranger",
    title: "The Online Stranger — An Interactive Scenario",
    description:
      "Someone she's only ever talked to online wants to meet up. Go alone, or bring someone into it? Three decisions, six endings.",
    siteName: "CBI Learning Solutions",
    images: [
      {
        url: "/scenario/online-stranger-og.jpg",
        width: 1200,
        height: 630,
        alt: "The Online Stranger — an interactive scenario for teens",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Online Stranger — An Interactive Scenario",
    description: "Someone she's only ever talked to online wants to meet up. Go alone, or bring someone into it?",
    images: ["/scenario/online-stranger-og.jpg"],
  },
};

export default function OnlineStrangerLayout({ children }: { children: React.ReactNode }) {
  return children;
}
