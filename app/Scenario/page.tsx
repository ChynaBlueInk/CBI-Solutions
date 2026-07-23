// app/Scenario/page.tsx — landing page for the branching-scenario series.
//
// Edit SERIES / PILLARS / SCENARIOS below to change copy or add episodes.
// No other file needs to change to add a new "coming soon" slot — just push
// another object into SCENARIOS. Once an episode's clips exist, flip its
// status to "live" and add slug + href.
//
// Styling lives in page.module.css (a CSS Module) rather than styled-jsx —
// styled-jsx requires a Client Component, which conflicts with the
// `metadata` export below (metadata is only allowed in Server Components).

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Bungee, Orbitron } from "next/font/google";
import { Lock, Radio, ShieldAlert, Zap } from "lucide-react";
import styles from "./page.module.css";

const bungee = Bungee({ subsets: ["latin"], weight: "400" });
const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "600", "800"] });

export const metadata: Metadata = {
  title: "Ethical Scenarios",
  description:
    "An interactive ethics lab for teens — branching video scenarios where every choice plays out.",
};

const SERIES = {
  eyebrow: "CBI LEARNING SOLUTIONS // YOUTH ETHICS LAB",
  name: "CONSEQUENCE",
  tagline: "Choose. Watch it land.",
  blurb:
    "Every scenario drops you into someone else's split-second decision. You pick what they do next, and the video plays out — no correct answer flashing on screen, no do-overs. Just the kind of choice that shows up in real life, and where it actually leads.",
};

const PILLARS = [
  {
    icon: Zap,
    title: "Real choices",
    body: "Branching video, not multiple choice. Every decision cuts to a different scene.",
  },
  {
    icon: ShieldAlert,
    title: "Real consequences",
    body: "Six endings per scenario. Some feel fine. Some don't. That's the point, not a bug.",
  },
  {
    icon: Radio,
    title: "Built for the room",
    body: "Designed for classrooms and youth programs running character and ethics education.",
  },
];

type ScenarioEntry = {
  episode: string;
  title: string;
  status: "live" | "soon";
  teaser?: string;
  href?: string;
  thumb?: string;
};

const SCENARIOS: ScenarioEntry[] = [
  {
    episode: "EP. 01",
    title: "The Wallet",
    status: "live",
    teaser:
      "Maya finds a stranger's wallet stuffed with cash. Keep it, or try to return it? Three decisions, six endings.",
    href: "/Scenario/wallet",
    thumb: "/scenario/wallet-thumb.jpg",
  },
  {
    episode: "EP. 02",
    title: "The Group Chat",
    status: "live",
    teaser:
      "A fake AI-generated image of a classmate lands in the group chat. Pile on, stay silent, or speak up? Three decisions, six endings.",
    href: "/Scenario/group_chat",
    thumb: "/scenario/group-chat-thumb.jpg",
  },
  {
    episode: "EP. 03",
    title: "Speak Up",
    status: "live",
    teaser:
      "A friend crosses a line with a girl at a party. Say nothing, or step in? Three decisions, six endings.",
    href: "/Scenario/party",
    thumb: "/scenario/party-thumb.jpg",
  },
  {
    episode: "EP. 04",
    title: "The Contest",
    status: "live",
    teaser:
      "A contest deadline, a shortcut she's not sure about, and no rule that tells her what's fair. Three decisions, six endings — no single right answer.",
    href: "/Scenario/contest",
    thumb: "/scenario/contest-thumb.jpg",
  },
  { episode: "EP. 05", title: "Transmission Locked", status: "soon" },
];

export default function ScenarioLandingPage() {
  return (
    <div className={`${styles.scenarioRoot} ${orbitron.className}`}>
      {/* ---- background layers ---- */}
      <div className={styles.bgGrid} aria-hidden />
      <div className={`${styles.bgBlob} ${styles.bgBlobPink}`} aria-hidden />
      <div className={`${styles.bgBlob} ${styles.bgBlobCyan}`} aria-hidden />
      <div className={`${styles.bgBlob} ${styles.bgBlobAcid}`} aria-hidden />
      <svg className={styles.bgNoise} aria-hidden xmlns="http://www.w3.org/2000/svg">
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>
      <div className={styles.bgScanlines} aria-hidden />

      {/* ---- hero ---- */}
      <section className={styles.hero}>
        <p className={styles.eyebrow}>
          <span className={styles.eyebrowDot} /> {SERIES.eyebrow}
        </p>

        <h1 className={`${styles.title} ${bungee.className}`} data-text={SERIES.name}>
          {SERIES.name}
        </h1>

        <p className={styles.tagline}>{SERIES.tagline}</p>

        <p className={styles.blurb}>{SERIES.blurb}</p>

        <a href="#scenarios" className={styles.jumpLink}>
          Jump to scenarios <span className={styles.jumpArrow}>↓</span>
        </a>
      </section>

      {/* ---- hazard divider ---- */}
      <div className={styles.hazard}>
        <span>⚠ CONTAINS DIFFICULT CHOICES — DISCUSS AFTER WATCHING ⚠</span>
      </div>

      {/* ---- scenario grid ---- */}
      <section id="scenarios" className={styles.gridSection}>
        <h2 className={`${styles.gridHeading} ${bungee.className}`}>PICK A SCENARIO</h2>

        <div className={styles.scenarioGrid}>
          {SCENARIOS.map((s) => {
            if (s.status === "live" && s.href) {
              return (
                <Link key={s.episode} href={s.href} className={`${styles.card} ${styles.cardLive}`}>
                  <span className={styles.cardEpisode}>{s.episode}</span>
                  <span className={styles.cardLivePill}>
                    <span className={styles.cardLiveDot} /> LIVE
                  </span>
                  {s.thumb && (
                    <div className={styles.cardThumb}>
                      <Image
                        src={s.thumb}
                        alt={`${s.title} thumbnail`}
                        fill
                        sizes="(max-width: 768px) 90vw, 320px"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  )}
                  <h3 className={`${styles.cardTitle} ${bungee.className}`}>{s.title}</h3>
                  <p className={styles.cardTeaser}>{s.teaser}</p>
                  <span className={styles.cardCta}>▶ PLAY</span>
                </Link>
              );
            }

            return (
              <div key={s.episode} className={`${styles.card} ${styles.cardLocked}`} aria-disabled>
                <span className={styles.cardEpisode}>{s.episode}</span>
                <div className={styles.cardLockedBody}>
                  <Lock className={styles.lockIcon} strokeWidth={1.5} />
                  <h3 className={`${styles.cardTitle} ${styles.cardTitleLocked}`}>{s.title}</h3>
                  <p className={`${styles.cardTeaser} ${styles.cardTeaserLocked}`}>In production</p>
                </div>
                <span className={styles.cardStatic} aria-hidden />
              </div>
            );
          })}
        </div>
      </section>

      {/* ---- pillars ---- */}
      <section className={styles.pillars}>
        {PILLARS.map((p) => (
          <div key={p.title} className={styles.pillarCard}>
            <p.icon className={styles.pillarIcon} strokeWidth={1.5} />
            <h3>{p.title}</h3>
            <p>{p.body}</p>
          </div>
        ))}
      </section>

      {/* ---- footer note ---- */}
      <section className={styles.footnote}>
        <p>Part of CBI Learning Solutions&rsquo; character-education initiative for teens.</p>
      </section>
    </div>
  );
}
