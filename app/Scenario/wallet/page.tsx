"use client";

// app/Scenario/wallet/page.tsx — "The Wallet" scenario.
// Metadata for this route lives in layout.tsx (see the note there for why).

import BranchingPlayer from "@/components/scenario/branching-player";
import { wallet } from "@/lib/stories/wallet";

export default function WalletPage() {
  return <BranchingPlayer story={wallet} />;
}
