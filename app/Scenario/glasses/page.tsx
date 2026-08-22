"use client";

// app/Scenario/glasses/page.tsx — "The Glasses" scenario.
// Metadata for this route lives in layout.tsx (see the note there for why).

import BranchingPlayer from "@/components/scenario/branching-player";
import { glasses } from "@/lib/stories/glasses";

export default function GlassesPage() {
  return <BranchingPlayer story={glasses} />;
}
