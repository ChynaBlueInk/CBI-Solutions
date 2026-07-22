// app/Scenario/wallet/layout.tsx — route-specific metadata for the wallet
// scenario share link.
//
// page.tsx in this folder is a Client Component ("use client"), and Next
// doesn't allow a Client Component to export `metadata` — only Server
// Components can. A layout.tsx alongside it is a Server Component by
// default, so it can supply metadata for this route without touching
// page.tsx at all. It just needs to render {children}.

import type React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Wallet",
  description:
    "Maya finds a stranger's wallet stuffed with cash. Keep it, or try to return it? An interactive ethics scenario for teens — three decisions, six endings.",
  openGraph: {
    type: "video.other",
    url: "/Scenario/wallet",
    title: "The Wallet — An Interactive Ethics Scenario",
    description:
      "Maya finds a stranger's wallet stuffed with cash. Keep it, or try to return it? Three decisions, six endings.",
    siteName: "CBI Learning Solutions",
    images: [
      {
        url: "/scenario/wallet-og.jpg",
        width: 1200,
        height: 630,
        alt: "The Wallet — an interactive ethics scenario for teens",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Wallet — An Interactive Ethics Scenario",
    description:
      "Maya finds a stranger's wallet stuffed with cash. Keep it, or try to return it?",
    images: ["/scenario/wallet-og.jpg"],
  },
};

export default function WalletLayout({ children }: { children: React.ReactNode }) {
  return children;
}
