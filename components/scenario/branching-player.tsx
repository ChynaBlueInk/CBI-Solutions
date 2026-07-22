"use client";

// components/scenario/branching-player.tsx — shared player for every
// branching-video scenario (The Wallet, The Group Chat, ...).
//
// Pass it a Story (see lib/stories/types.ts) and it handles everything:
// title screen, video playback, breadcrumb trail, the recap text under each
// clip, choice buttons, ending cards, and a "jump to an ending" panel for
// classroom/discussion use.
//
// To add a new scenario: build a Story object in lib/stories/, then render
// <BranchingPlayer story={yourStory} /> from a page. No changes needed here.

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { Story } from "@/lib/stories/types";

type View =
  | { kind: "title" }
  | { kind: "playing"; nodeId: string }
  | { kind: "choice"; nodeId: string }
  | { kind: "ending"; nodeId: string }
  | { kind: "error"; nodeId: string };

export default function BranchingPlayer({ story }: { story: Story }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const [view, setView] = useState<View>({ kind: "title" });
  const [path, setPath] = useState<string[]>([]);
  const [choicesRevealed, setChoicesRevealed] = useState(false);
  const [mapOpen, setMapOpen] = useState(false);

  const currentNode = view.kind === "title" ? undefined : story.nodes[view.nodeId];

  // Imperatively set src + call play() inside the same click handler that
  // triggered it (rather than in a useEffect keyed off state). Some browsers'
  // autoplay policy only counts a play() call as "user-initiated" if it runs
  // synchronously inside the click — deferring it to an effect risks being
  // silently blocked.
  const playNode = useCallback((nodeId: string) => {
    const node = story.nodes[nodeId];
    const video = videoRef.current;
    if (!node || !video) return;

    setView({ kind: "playing", nodeId });
    setChoicesRevealed(false);
    video.src = node.video;
    video.currentTime = 0;
    video.load();
    video.play().catch(() => {
      // If a browser still blocks it, the viewer can hit the native play
      // control; we don't retry or surface an error for this case.
    });
  }, [story]);

  const handleStart = () => {
    setPath([story.startNode]);
    playNode(story.startNode);
  };

  const handleChoose = (nextId: string) => {
    setPath((prev) => [...prev, nextId]);
    playNode(nextId);
  };

  const handleRestart = () => {
    setPath([]);
    setMapOpen(false);
    setView({ kind: "title" });
  };

  const handleJumpToEnding = (nodeId: string) => {
    setPath([nodeId]);
    setMapOpen(false);
    playNode(nodeId);
  };

  const handleEnded = useCallback(() => {
    setView((prev) => {
      if (prev.kind !== "playing") return prev;
      const node = story.nodes[prev.nodeId];
      if (node?.ending) return { kind: "ending", nodeId: prev.nodeId };
      if (node?.choice) return { kind: "choice", nodeId: prev.nodeId };
      return prev;
    });
    setChoicesRevealed(true);
  }, [story]);

  // Note: this fires more often than a genuinely missing file — reassigning
  // .src on an already-loaded <video> can make some browsers emit a benign
  // "error" event even though the clip goes on to play fine. Rather than
  // chase that timing quirk, the "error" view just renders the same
  // choice/ending content the real state would (see the JSX below), so
  // viewers never see this internal detail either way.
  const handleError = useCallback(() => {
    setView((prev) => (prev.kind === "playing" ? { kind: "error", nodeId: prev.nodeId } : prev));
    setChoicesRevealed(true);
  }, []);

  const handleTimeUpdate = useCallback(() => {
    const video = videoRef.current;
    const bar = progressRef.current;
    if (!video || !bar || !Number.isFinite(video.duration) || video.duration === 0) return;
    // Written straight to the DOM, not React state — timeupdate fires several
    // times a second, so routing it through setState would re-render the
    // whole tree that often for no reason.
    bar.style.width = `${(video.currentTime / video.duration) * 100}%`;
  }, []);

  useEffect(() => {
    if (view.kind === "title" && progressRef.current) {
      progressRef.current.style.width = "0%";
    }
  }, [view.kind]);

  const showPanel =
    view.kind === "choice" || view.kind === "ending" || view.kind === "error";

  const endingEntries = Object.entries(story.nodes).filter(([, n]) => n.ending);

  return (
    <div className="scenarioWrap">
      <div className="topBar">
        <Link href="/Scenario" className="backLink">
          &larr; Back to Scenarios
        </Link>
        {view.kind !== "title" && <span className="topBarTitle">{story.title}</span>}
      </div>

      {view.kind === "title" && (
        <header className="head">
          <h1>{story.title}</h1>
          <p>{story.subtitle}</p>
        </header>
      )}

      <div className="card">
        <div className="videoFrame">
          <video
            ref={videoRef}
            className="player"
            style={{ visibility: view.kind === "title" ? "hidden" : "visible" }}
            playsInline
            controls={view.kind !== "title"}
            onEnded={handleEnded}
            onError={handleError}
            onTimeUpdate={handleTimeUpdate}
          />
          <div ref={progressRef} className="progress" />
        </div>

        {view.kind === "title" && (
          <div className="content startContent">
            <p className="description">
              There are three decision points and six different endings. Press play to
              begin, and choose after each clip.
            </p>
            <button className="btn primary" onClick={handleStart}>
              ▶ Begin the story
            </button>
          </div>
        )}

        {path.length > 0 && view.kind !== "title" && (
          <div className="breadcrumb">
            {path.map((id, i) => (
              <span key={`${id}-${i}`}>{story.nodes[id]?.label ?? id}</span>
            ))}
          </div>
        )}

        {(view.kind === "playing" || showPanel) && currentNode && (
          <div className="content">
            {currentNode.ending && (view.kind === "ending" || view.kind === "error") ? (
              <>
                <span className="badge">Ending</span>
                <h2 className="endingTitle">{currentNode.ending.title}</h2>
                <p className="description">{currentNode.description}</p>
                <p className="moral">{currentNode.ending.text}</p>
                <div className="actions">
                  <button className="btn primary" onClick={handleRestart}>
                    ↺ Start over
                  </button>
                  <button className="btn" onClick={() => setMapOpen((v) => !v)}>
                    See all endings
                  </button>
                </div>
              </>
            ) : currentNode.choice ? (
              <>
                <p className="description">{currentNode.description}</p>
                {(view.kind === "choice" || view.kind === "error") ? (
                  <>
                    <p className="promptLabel">{currentNode.choice.text}</p>
                    <div className="choices">
                      {currentNode.choice.options.map((opt) => (
                        <button
                          key={opt.next}
                          className="choiceBtn"
                          onClick={() => handleChoose(opt.next)}
                        >
                          <span>{opt.label}</span>
                          <span className="arrow">&rarr;</span>
                        </button>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <p className="promptLabel dim">{currentNode.choice.text}</p>
                    <div className="choices">
                      {currentNode.choice.options.map((opt) => (
                        <button key={opt.next} className="choiceBtn" disabled>
                          <span>{opt.label}</span>
                          <span className="arrow">&rarr;</span>
                        </button>
                      ))}
                    </div>
                    <div className="actions">
                      <button className="btn" onClick={() => setChoicesRevealed(true)}>
                        Show choices now
                      </button>
                    </div>
                  </>
                )}
              </>
            ) : null}
          </div>
        )}
      </div>

      {mapOpen && (
        <div className="mapPanel">
          <h3>Jump to an ending</h3>
          <div className="mapList">
            {endingEntries.map(([id, n]) => (
              <button key={id} onClick={() => handleJumpToEnding(id)}>
                {n.ending!.title}
              </button>
            ))}
          </div>
        </div>
      )}

      <footer className="footNote">
        Made a choice you didn&rsquo;t mean to? Use &ldquo;Start over&rdquo; anytime to
        try a different path.
      </footer>

      <style jsx>{`
        .scenarioWrap {
          --bg: #14161c;
          --panel: #1e212b;
          --panel-border: #2c3040;
          --text: #f2f0e9;
          --text-dim: #a9adba;
          --accent: #e8b04b;
          --radius: 14px;

          background: var(--bg);
          color: var(--text);
          border-radius: 20px;
          padding: 20px 20px 32px;
          max-width: 860px;
          margin: 0 auto;
        }

        .topBar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 14px;
          min-height: 28px;
        }

        .backLink {
          display: inline-flex;
          align-items: center;
          color: var(--text-dim);
          text-decoration: none;
          font-size: 0.85rem;
          white-space: nowrap;
          padding: 8px 4px;
          margin: -8px -4px;
        }

        .backLink:hover {
          color: var(--accent);
        }

        .topBarTitle {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-dim);
          text-align: right;
        }

        .head {
          text-align: center;
          margin-bottom: 18px;
        }

        .head h1 {
          font-size: 1.6rem;
          margin: 0 0 6px;
          letter-spacing: 0.01em;
        }

        .head p {
          color: var(--text-dim);
          margin: 0;
          font-size: 0.92rem;
        }

        .card {
          background: var(--panel);
          border: 1px solid var(--panel-border);
          border-radius: var(--radius);
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
        }

        .videoFrame {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          /* Capped so the choice/ending panel below never gets pushed off
             screen on shorter viewports (laptops, phones in landscape) —
             object-fit: cover on the <video> crops instead of distorting. */
          max-height: min(42vh, 420px);
          margin: 0 auto;
          background: #000;
        }

        .player {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          background: #000;
        }

        .progress {
          position: absolute;
          top: 0;
          left: 0;
          height: 4px;
          background: rgba(232, 176, 75, 0.9);
          width: 0%;
          transition: width 0.1s linear;
        }

        .breadcrumb {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          padding: 10px 20px 0;
          font-size: 0.76rem;
          color: var(--text-dim);
        }

        .breadcrumb span {
          background: #262a37;
          border: 1px solid var(--panel-border);
          border-radius: 999px;
          padding: 3px 10px;
        }

        .content {
          padding: 14px 20px 20px;
        }

        .startContent {
          text-align: center;
        }

        .description {
          font-size: 0.96rem;
          line-height: 1.45;
          margin: 0 0 12px;
        }

        .badge {
          display: inline-block;
          background: var(--accent);
          color: #20222b;
          font-weight: 700;
          font-size: 0.75rem;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 6px;
          margin-bottom: 10px;
        }

        .endingTitle {
          font-size: 1.3rem;
          margin: 0 0 8px;
        }

        .moral {
          font-style: italic;
          color: var(--text-dim);
          border-left: 3px solid var(--accent);
          padding-left: 14px;
          margin: 0 0 4px;
        }

        .promptLabel {
          font-size: 0.82rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--text-dim);
          margin: 0 0 8px;
        }

        .promptLabel.dim {
          opacity: 0.6;
        }

        .choices {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .choiceBtn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          width: 100%;
          text-align: left;
          background: #262a37;
          border: 1px solid var(--panel-border);
          color: var(--text);
          padding: 12px 16px;
          border-radius: 10px;
          font-size: 0.98rem;
          min-height: 44px;
          cursor: pointer;
          transition: background 0.15s ease, transform 0.1s ease, border-color 0.15s ease;
          -webkit-tap-highlight-color: transparent;
        }

        .choiceBtn:hover:not(:disabled) {
          background: #2f3444;
          border-color: var(--accent);
          transform: translateY(-1px);
        }

        .choiceBtn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .arrow {
          color: var(--accent);
          font-size: 1.1rem;
        }

        .actions {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 16px;
        }

        .btn {
          border: 1px solid var(--panel-border);
          background: #262a37;
          color: var(--text);
          padding: 10px 16px;
          min-height: 42px;
          border-radius: 8px;
          font-size: 0.9rem;
          cursor: pointer;
          -webkit-tap-highlight-color: transparent;
        }

        .btn:hover {
          filter: brightness(1.08);
        }

        .btn.primary {
          background: var(--accent);
          color: #20222b;
          border-color: var(--accent);
          font-weight: 600;
        }

        .mapPanel {
          margin-top: 18px;
          padding: 16px 20px;
          background: var(--panel);
          border: 1px solid var(--panel-border);
          border-radius: var(--radius);
        }

        .mapPanel h3 {
          margin: 0 0 10px;
          font-size: 1rem;
          color: var(--text-dim);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .mapList {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }

        @media (max-width: 520px) {
          .mapList {
            grid-template-columns: 1fr;
          }
        }

        .mapList button {
          text-align: left;
          background: #262a37;
          border: 1px solid var(--panel-border);
          color: var(--text);
          padding: 10px 12px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 0.88rem;
        }

        .mapList button:hover {
          border-color: var(--accent);
        }

        .footNote {
          text-align: center;
          color: var(--text-dim);
          font-size: 0.8rem;
          margin-top: 20px;
        }

        /* Phones: trim padding further and let the video shrink a bit more
           so the choice panel comfortably fits without scrolling even with
           a mobile browser's address bar eating into viewport height. */
        @media (max-width: 480px) {
          .scenarioWrap {
            padding: 14px 12px 24px;
            border-radius: 14px;
          }

          .videoFrame {
            max-height: 34vh;
          }

          .content {
            padding: 12px 16px 16px;
          }

          .head h1 {
            font-size: 1.35rem;
          }

          .head p {
            font-size: 0.86rem;
          }

          .endingTitle {
            font-size: 1.12rem;
          }
        }

        /* Short/landscape viewports (phones rotated, small laptop windows
           with the browser chrome eating vertical space): the video is the
           first thing to give up room. */
        @media (max-height: 700px) {
          .videoFrame {
            max-height: 32vh;
          }
        }
      `}</style>
    </div>
  );
}
