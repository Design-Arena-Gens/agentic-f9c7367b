"use client";

import { useState } from "react";
import { MagnifyingGlassIcon, PlayCircleIcon, BoltIcon } from "@heroicons/react/24/outline";

const sources = [
  {
    id: "mrbeast-challenge",
    title: "MrBeast - Extreme Challenge"
  },
  {
    id: "creator-lab",
    title: "Creator Lab Podcast - Viral Hooks"
  },
  {
    id: "future-tech",
    title: "Future Tech Daily - AI Surge"
  }
];

export default function VideoClippingSection() {
  const [keyword, setKeyword] = useState("AI Personal Trainers");
  const [startTime, setStartTime] = useState(2);
  const [endTime, setEndTime] = useState(18);

  return (
    <section id="clipping" className="scroll-mt-20 space-y-6" aria-labelledby="clipping-heading">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 id="clipping-heading" className="text-2xl font-semibold text-neutral-900">
            Video Clipping
          </h2>
          <p className="text-sm text-neutral-500">
            Pull micro-moments from top-performing videos, align them with trends, and export with captions plus compliance data.
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-4 py-2 shadow-sm">
          <BoltIcon className="h-5 w-5 text-primary" aria-hidden="true" />
          <span className="text-xs font-semibold text-neutral-500">Auto-pull latest MrBeast drops</span>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[2fr,3fr]">
        <div className="rounded-3xl border border-neutral-200/80 bg-white p-6 shadow-soft">
          <label htmlFor="clip-search" className="block text-sm font-medium text-neutral-600">
            Search Source Library
          </label>
          <div className="mt-2 flex items-center gap-2 rounded-2xl border border-neutral-300/80 bg-neutral-100/80 px-3 py-2">
            <MagnifyingGlassIcon className="h-5 w-5 text-neutral-400" aria-hidden="true" />
            <input
              id="clip-search"
              value={keyword}
              onChange={(event) => setKeyword(event.target.value)}
              className="w-full bg-transparent text-sm text-neutral-700 focus:outline-none"
              placeholder="Search by topic, creator, or keyword"
            />
          </div>

          <div className="mt-6 space-y-3" role="list">
            {sources.map((source) => (
              <div
                key={source.id}
                className="rounded-2xl border border-neutral-200/60 bg-white p-4 transition hover:border-primary hover:shadow-card"
                role="listitem"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-neutral-800">{source.title}</p>
                  <button
                    type="button"
                    className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
                  >
                    <PlayCircleIcon className="h-4 w-4" aria-hidden="true" />
                    Preview
                  </button>
                </div>
                <p className="mt-1 text-xs text-neutral-500">Matched 4 clips • 92% relevance • Safe for TikTok ads</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl bg-neutral-100/80 p-4">
            <h4 className="text-sm font-semibold text-neutral-700">Compliance Snapshot</h4>
            <ul className="mt-3 space-y-2 text-xs text-neutral-500">
              <li>✅ Creator terms reviewed (MrBeast - Jan 2024)</li>
              <li>✅ Attribution overlay auto-included</li>
              <li>⚠️ Verify brand-safe language before publishing</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-3xl border border-neutral-200/80 bg-white p-6 shadow-soft">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-neutral-900">Clip Assembly</h3>
                <p className="text-xs text-neutral-500">Precision trim with waveform zoom + auto caption layer.</p>
              </div>
              <span className="rounded-full bg-success/10 px-3 py-1 text-xs font-semibold text-success">Captioned</span>
            </div>
            <div className="mt-4 space-y-4">
              <video
                controls
                className="w-full rounded-2xl"
                aria-label="Clip preview"
                src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
              />
              <div className="rounded-2xl border border-neutral-200/80 bg-neutral-100/70 p-4">
                <div
                  className="h-20 rounded-xl bg-[radial-gradient(circle_at_1px,_#3498db_1px,_transparent_0)] [background-size:12px_32px]"
                  role="img"
                  aria-label="Waveform visualization"
                />
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <label className="flex flex-col text-xs font-medium text-neutral-600">
                    Start (s)
                    <input
                      type="range"
                      min={0}
                      max={30}
                      value={startTime}
                      onChange={(event) => setStartTime(Number(event.target.value))}
                      aria-label="Start time"
                    />
                    <span className="mt-1 text-neutral-500">{startTime}s</span>
                  </label>
                  <label className="flex flex-col text-xs font-medium text-neutral-600">
                    End (s)
                    <input
                      type="range"
                      min={startTime + 1}
                      max={60}
                      value={endTime}
                      onChange={(event) => setEndTime(Number(event.target.value))}
                      aria-label="End time"
                    />
                    <span className="mt-1 text-neutral-500">{endTime}s</span>
                  </label>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  className="rounded-full bg-primary px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-card transition hover:bg-primary/90"
                >
                  Export Clip
                </button>
                <button
                  type="button"
                  className="rounded-full border border-neutral-300 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-neutral-600 transition hover:border-primary hover:text-primary"
                >
                  Add Captions
                </button>
                <button
                  type="button"
                  className="rounded-full border border-neutral-300 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-neutral-600 transition hover:border-primary hover:text-primary"
                >
                  Add Effects
                </button>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-neutral-200/80 bg-white p-6 shadow-soft">
            <h4 className="text-sm font-semibold text-neutral-700">Attribution Checklist</h4>
            <dl className="mt-3 grid gap-3 text-xs text-neutral-500">
              <div className="flex items-center justify-between rounded-2xl bg-neutral-100/70 px-4 py-3">
                <dt>Source credit overlay</dt>
                <dd>Auto</dd>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-neutral-100/70 px-4 py-3">
                <dt>Usage rights window</dt>
                <dd>30 days remaining</dd>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-neutral-100/70 px-4 py-3">
                <dt>Brand safety score</dt>
                <dd>94%</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
