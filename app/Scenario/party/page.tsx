"use client";

// app/Scenario/party/page.tsx — "Speak Up" scenario.
// Metadata for this route lives in layout.tsx (see the note there for why).

import BranchingPlayer from "@/components/scenario/branching-player";
import { party } from "@/lib/stories/party";

export default function PartyPage() {
  return <BranchingPlayer story={party} />;
}
