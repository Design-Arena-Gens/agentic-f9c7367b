"use client";

import { useId, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { SparklesIcon, AdjustmentsHorizontalIcon, PhotoIcon } from "@heroicons/react/24/outline";

const SyntaxHighlighter = dynamic(() => import("react-syntax-highlighter").then((mod) => mod.Prism), {
  ssr: false
});

const tones = ["Energetic", "Educational", "Witty", "Inspirational"];
const audiences = ["Gen Z Creators", "Entrepreneurs", "Fitness Enthusiasts", "Tech Explorers"];

function buildScript(trend: string, tone: string, length: string, audience: string) {
  return `Scene 1: Hook (0-${length === "Short" ? "0:05" : "0:07"})\n- On-screen text: "${trend} is exploding right now"\n- Voiceover (${tone.toLowerCase()} tone): "${audience}, here’s how you can ride the ${trend.toLowerCase()} wave today."\n\nScene 2: Proof & Insight\n- Cut to fast-paced b-roll with stat overlay (78% growth on ${trend})\n- Voiceover: "Creators seeing ${length === "Short" ? "2x" : "3.5x"} engagement are doing these two things differently."\n\nScene 3: CTA\n- Visual overlay of actionable checklist\n- Voiceover: "Save this playbook and drop a '🔥' if you want tomorrow’s trend before it breaks."`;
}

export default function ContentCreationSection() {
  const trendInputId = useId();
  const [trend, setTrend] = useState("AI Personal Trainers");
  const [tone, setTone] = useState(tones[0]);
  const [length, setLength] = useState("Short");
  const [audience, setAudience] = useState(audiences[0]);

  const script = useMemo(() => buildScript(trend, tone, length, audience), [trend, tone, length, audience]);

  return (
    <section id="content" className="scroll-mt-20 space-y-6" aria-labelledby="content-heading">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 id="content-heading" className="text-2xl font-semibold text-neutral-900">
            Content Creation
          </h2>
          <p className="text-sm text-neutral-500">
            Feed a trend into the GPT-powered writer, fine-tune tone and structure, then instantly preview video assembly.
          </p>
        </div>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full border border-primary px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <SparklesIcon className="h-5 w-5" aria-hidden="true" />
          Auto-draft Script
        </button>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-neutral-200/70 bg-white p-6 shadow-soft">
          <div className="flex items-center gap-3">
            <AdjustmentsHorizontalIcon className="h-6 w-6 text-primary" aria-hidden="true" />
            <h3 className="text-lg font-semibold text-neutral-900">Prompt Configuration</h3>
          </div>
          <form className="mt-6 space-y-5" aria-labelledby="content-heading">
            <div>
              <label htmlFor={trendInputId} className="block text-sm font-medium text-neutral-600">
                Trend Signal
              </label>
              <input
                id={trendInputId}
                name="trend"
                value={trend}
                onChange={(event) => setTrend(event.target.value)}
                placeholder="Ex: AI Personal Trainers"
                className="mt-2 w-full rounded-2xl border border-neutral-300/80 bg-white px-4 py-3 text-sm text-neutral-800 shadow-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-neutral-600">Tone</label>
                <div className="mt-2 grid gap-2" role="radiogroup" aria-label="Tone selection">
                  {tones.map((option) => (
                    <button
                      key={option}
                      type="button"
                      role="radio"
                      aria-checked={tone === option}
                      onClick={() => setTone(option)}
                      className={
                        tone === option
                          ? "rounded-2xl bg-primary px-3 py-2 text-left text-sm font-semibold text-white"
                          : "rounded-2xl border border-neutral-300 px-3 py-2 text-left text-sm text-neutral-600 hover:border-primary hover:text-primary"
                      }
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-600">Length</label>
                  <select
                    value={length}
                    onChange={(event) => setLength(event.target.value)}
                    className="mt-2 w-full rounded-2xl border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-700 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
                  >
                    <option>Short</option>
                    <option>Standard</option>
                    <option>Extended</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-600">Target Audience</label>
                  <select
                    value={audience}
                    onChange={(event) => setAudience(event.target.value)}
                    className="mt-2 w-full rounded-2xl border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-700 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
                  >
                    {audiences.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-neutral-200/70 bg-white p-6 shadow-soft">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-neutral-900">Generated Script</h3>
              <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-500">
                GPT-4 Turbo
              </span>
            </div>
            <div className="mt-4 rounded-2xl border border-neutral-200/80 bg-neutral-100/60">
              <SyntaxHighlighter
                language="markdown"
                wrapLines
                customStyle={{
                  borderRadius: "1.25rem",
                  padding: "1.5rem",
                  background: "transparent",
                  fontSize: "0.9rem"
                }}
              >
                {script}
              </SyntaxHighlighter>
            </div>
          </div>

          <div className="rounded-3xl border border-neutral-200/70 bg-white p-6 shadow-soft">
            <div className="flex items-center gap-3">
              <PhotoIcon className="h-6 w-6 text-primary" aria-hidden="true" />
              <h3 className="text-lg font-semibold text-neutral-900">LovoArt Assembly Preview</h3>
            </div>
            <p className="mt-3 text-sm text-neutral-500">
              Assets auto-populate based on script beats. Adjust overlays, scene pacing, and motion graphics before rendering.
            </p>
            <div className="mt-4 grid gap-4 md:grid-cols-3" role="list">
              {["Hook Shot", "Proof Overlay", "CTA Sequence"].map((label, index) => (
                <div key={label} className="gradient-border rounded-[17px] bg-white p-4">
                  <div className="aspect-video rounded-2xl bg-primary/10" />
                  <p className="mt-3 text-sm font-semibold text-neutral-700">{label}</p>
                  <p className="text-xs text-neutral-500">{index === 0 ? "Animated stencil + big impact text" : index === 1 ? "Stat overlay with kinetic typography" : "Dynamic outro with branded CTA"}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
