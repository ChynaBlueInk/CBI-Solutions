"use client";

// app/Scenario/contest/page.tsx — "The Contest" scenario.
// Metadata for this route lives in layout.tsx (see the note there for why).

import BranchingPlayer from "@/components/scenario/branching-player";
import { contest } from "@/lib/stories/contest";

export default function ContestPage() {
  return <BranchingPlayer story={contest} />;
}
