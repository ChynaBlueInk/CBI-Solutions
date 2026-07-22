// lib/stories/types.ts — shared types for the branching-video scenario player.
//
// Each scenario (wallet, group_chat, ...) is a Story: a small tree of nodes,
// one video clip per node. A node is either a "choice" node (branches to
// other nodes) or an "ending" node (terminal, shows a Restart option) — never
// both at once, though TS doesn't enforce that structurally; the player just
// treats "ending" as authoritative when both would be present.
//
// Every node also carries:
//   - "label": the short phrase for the choice that led here, shown as a
//     breadcrumb chip ("Start" for the root node).
//   - "description": a plain-language recap of what's happening in the clip,
//     shown under the video in case the clip alone isn't enough context.

export interface ChoiceOption {
  label: string;
  next: string;
}

export interface Choice {
  text: string;
  options: ChoiceOption[];
}

export interface Ending {
  title: string;
  text: string;
}

export interface StoryNode {
  video: string;
  label: string;
  description: string;
  choice?: Choice;
  ending?: Ending;
}

export interface Story {
  id: string;
  title: string;
  subtitle: string;
  startNode: string;
  nodes: Record<string, StoryNode>;
  /** Shown as the video's poster image on the title screen, before the first
   * clip has played. Optional — falls back to a plain black frame if unset. */
  poster?: string;
}
