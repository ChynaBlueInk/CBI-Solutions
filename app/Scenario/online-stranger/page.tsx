"use client";

// app/Scenario/online-stranger/page.tsx — "The Online Stranger" scenario.
// Metadata for this route lives in layout.tsx (see the note there for why).

import BranchingPlayer from "@/components/scenario/branching-player";
import { onlineStranger } from "@/lib/stories/online-stranger";

export default function OnlineStrangerPage() {
  return <BranchingPlayer story={onlineStranger} />;
}
