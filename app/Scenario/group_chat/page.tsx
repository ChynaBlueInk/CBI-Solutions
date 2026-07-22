"use client";

// app/Scenario/group_chat/page.tsx — "The Group Chat" scenario.
// Metadata for this route lives in layout.tsx (see the note there for why).

import BranchingPlayer from "@/components/scenario/branching-player";
import { groupChat } from "@/lib/stories/group-chat";

export default function GroupChatPage() {
  return <BranchingPlayer story={groupChat} />;
}
