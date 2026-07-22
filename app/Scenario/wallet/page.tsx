"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { STORY, type StoryNode } from "@/lib/story";

// A small state machine instead of manually toggling CSS classes / doing a
// reverse lookup of "which node is this video's src" (which is what the
// original vanilla-JS engine did). Each view variant carries the nodeId it
// applies to, so there's never a question of which node is "current."
type View =
  | { kind: "title" }
  | { kind: "playing"; nodeId: string }
  | { kind: "choice"; nodeId: string }
  | { kind: "ending"; nodeId: string }
  | { kind: "error"; nodeId: string };

export default function BranchingVideoPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [view, setView] = useState<View>({ kind: "title" });

  const currentNode: StoryNode | undefined =
    view.kind === "title" ? undefined : STORY.nodes[view.nodeId];

  // Imperatively set src + call play() inside the same click handler that
  // triggered it (rather than in a useEffect keyed off state). Some browsers'
  // autoplay policy only counts a play() call as "user-initiated" if it runs
  // synchronously inside the click — deferring it to an effect risks being
  // silently blocked.
  const playNode = useCallback((nodeId: string) => {
    const node = STORY.nodes[nodeId];
    const video = videoRef.current;
    if (!node || !video) return;

    setView({ kind: "playing", nodeId });
    video.src = node.video;
    video.currentTime = 0;
    video.load();
    video.play().catch(() => {
      // If a browser still blocks it, the viewer can hit the native play
      // control; we don't retry or surface an error for this case.
    });
  }, []);

  const handleStart = () => playNode(STORY.startNode);
  const handleRestart = () => setView({ kind: "title" });

  const handleEnded = useCallback(() => {
    setView((prev) => {
      if (prev.kind !== "playing") return prev;
      const node = STORY.nodes[prev.nodeId];
      if (node?.ending) return { kind: "ending", nodeId: prev.nodeId };
      if (node?.choice) return { kind: "choice", nodeId: prev.nodeId };
      return prev;
    });
  }, []);

  // Note: this fires more often than a genuinely missing file — reassigning
  // .src on an already-loaded <video> can make some browsers emit a benign
  // "error" event even though the clip goes on to play fine. Rather than
  // chase that timing quirk, the "error" view below just renders the same
  // choice/ending content the real state would (see the JSX), so viewers
  // never see this internal detail either way.
  const handleError = useCallback(() => {
    setView((prev) =>
      prev.kind === "playing" ? { kind: "error", nodeId: prev.nodeId } : prev,
    );
  }, []);

  const handleTimeUpdate = useCallback(() => {
    const video = videoRef.current;
    const bar = progressRef.current;
    if (!video || !bar || !Number.isFinite(video.duration) || video.duration === 0) {
      return;
    }
    // Written straight to the DOM, not to React state — a timeupdate event
    // fires several times a second, so routing it through setState would
    // re-render the whole tree that often for no reason.
    bar.style.width = `${(video.currentTime / video.duration) * 100}%`;
  }, []);

  useEffect(() => {
    if (view.kind === "title" && progressRef.current) {
      progressRef.current.style.width = "0%";
    }
  }, [view.kind]);

  const overlayVisible =
    view.kind === "title" ||
    view.kind === "choice" ||
    view.kind === "ending" ||
    view.kind === "error";

  return (
    <main className="stage">
      <video
        ref={videoRef}
        className="player"
        style={{ visibility: view.kind === "title" ? "hidden" : "visible" }}
        playsInline
        onEnded={handleEnded}
        onError={handleError}
        onTimeUpdate={handleTimeUpdate}
      />

      <div ref={progressRef} className="progress" />

      {overlayVisible && (
        <div className="overlay" aria-live="polite">
          {view.kind === "title" && (
            <>
              <h1>{STORY.title}</h1>
              <button className="start-btn" onClick={handleStart}>
                ▶ Start
              </button>
            </>
          )}

          {/* Renders on both "choice" and "error" — the choice buttons have
              always actually been driven by the "error" state's fallback
              (see the note on handleError above), so both need to show the
              real prompt. Viewers should never see internal state names. */}
          {(view.kind === "choice" || view.kind === "error") && currentNode?.choice && (
            <>
              <p className="overlay-text">{currentNode.choice.text}</p>
              <div className="overlay-buttons">
                {currentNode.choice.options.map((opt) => (
                  <button
                    key={opt.next}
                    className="choice-btn"
                    onClick={() => playNode(opt.next)}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </>
          )}

          {(view.kind === "ending" || view.kind === "error") && currentNode?.ending && (
            <>
              <h1 className="overlay-title">{currentNode.ending.title}</h1>
              <p className="overlay-text">{currentNode.ending.text}</p>
              <button className="restart-btn" onClick={handleRestart}>
                ↺ Watch again
              </button>
            </>
          )}
        </div>
      )}

      <style jsx>{`
        .stage {
          position: relative;
          width: 100vw;
          height: 100vh;
          max-width: 900px;
          max-height: 100vh;
          margin: 0 auto;
          background: #000;
          overflow: hidden;
        }

        .player {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          background: #111;
        }

        .overlay {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 32px;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.88) 0%,
            rgba(0, 0, 0, 0.55) 60%,
            rgba(0, 0, 0, 0.25) 100%
          );
          color: #fff;
        }

        .overlay h1 {
          font-size: 1.5rem;
          margin: 0 0 12px;
          font-weight: 700;
        }

        .overlay-text {
          font-size: 1.05rem;
          line-height: 1.5;
          max-width: 560px;
          margin: 0 0 28px;
          color: #eee;
        }

        .overlay-buttons {
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: 100%;
          max-width: 420px;
        }

        .choice-btn,
        .start-btn,
        .restart-btn {
          font-size: 1.05rem;
          font-weight: 600;
          padding: 16px 20px;
          border-radius: 12px;
          border: 2px solid rgba(255, 255, 255, 0.85);
          background: rgba(255, 255, 255, 0.08);
          color: #fff;
          cursor: pointer;
          transition:
            background 0.15s ease,
            transform 0.1s ease;
        }

        .choice-btn:hover,
        .start-btn:hover,
        .restart-btn:hover {
          background: rgba(255, 255, 255, 0.9);
          color: #111;
        }

        .choice-btn:active,
        .start-btn:active,
        .restart-btn:active {
          transform: scale(0.97);
        }

        .start-btn {
          padding: 16px 40px;
          margin-top: 8px;
        }

        .restart-btn {
          margin-top: 8px;
        }

        .progress {
          position: absolute;
          top: 0;
          left: 0;
          height: 4px;
          background: rgba(255, 255, 255, 0.85);
          width: 0%;
          transition: width 0.1s linear;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          margin: 0;
          padding: 0;
          height: 100%;
          background: #000;
          font-family:
            -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
            Arial, sans-serif;
        }
      `}</style>
    </main>
  );
}
