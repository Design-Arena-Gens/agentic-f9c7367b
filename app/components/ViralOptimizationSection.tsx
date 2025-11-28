"use client";

import { useMemo, useState } from "react";
import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { LightBulbIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";

const performance = [
  { label: "Mon", views: 12000, likes: 3500, shares: 640 },
  { label: "Tue", views: 17800, likes: 4400, shares: 950 },
  { label: "Wed", views: 21000, likes: 5600, shares: 1180 },
  { label: "Thu", views: 25500, likes: 6100, shares: 1320 },
  { label: "Fri", views: 29500, likes: 7200, shares: 1580 },
  { label: "Sat", views: 33100, likes: 7800, shares: 1790 },
  { label: "Sun", views: 36000, likes: 8200, shares: 1990 }
];

const keywordIdeas = [
  { term: "AI workout planner", score: 95 },
  { term: "smart training assistant", score: 88 },
  { term: "personal trainer tech", score: 82 },
  { term: "fitness automation", score: 79 }
];

const experiments = [
  { id: "title-a", variant: "Title A", uplift: 18, winner: true },
  { id: "title-b", variant: "Title B", uplift: 0, winner: false },
  { id: "thumb-a", variant: "Thumbnail A", uplift: 11, winner: true },
  { id: "thumb-b", variant: "Thumbnail B", uplift: -4, winner: false }
];

export default function ViralOptimizationSection() {
  const [selectedMetric, setSelectedMetric] = useState<"views" | "likes" | "shares">("views");

  const summary = useMemo(() => {
    const totals = performance.reduce(
      (acc, metric) => ({
        views: acc.views + metric.views,
        likes: acc.likes + metric.likes,
        shares: acc.shares + metric.shares
      }),
      { views: 0, likes: 0, shares: 0 }
    );
    return {
      views: totals.views.toLocaleString(),
      likes: totals.likes.toLocaleString(),
      shares: totals.shares.toLocaleString()
    };
  }, []);

  return (
    <section id="viral" className="scroll-mt-20 space-y-6" aria-labelledby="viral-heading">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 id="viral-heading" className="text-2xl font-semibold text-neutral-900">
            Viral Optimization
          </h2>
          <p className="text-sm text-neutral-500">
            Optimize assets before they launch. Monitor performance lift, keyword packs, and run rapid A/B loops on titles and thumbnails.
          </p>
        </div>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-card"
        >
          <RocketLaunchIcon className="h-5 w-5" aria-hidden="true" />
          Boost Next Drop
        </button>
      </div>

      <div className="grid gap-6 xl:grid-cols-[3fr,2fr]">
        <div className="rounded-3xl border border-neutral-200/80 bg-white p-6 shadow-soft">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="text-lg font-semibold text-neutral-900">Performance Lens</h3>
              <p className="text-xs text-neutral-500">Views, likes, and shares trajectories vs. baseline.</p>
            </div>
            <div className="flex gap-2" aria-label="Metric toggle" role="radiogroup">
              {["views", "likes", "shares"].map((metric) => (
                <button
                  key={metric}
                  type="button"
                  role="radio"
                  aria-checked={selectedMetric === metric}
                  onClick={() => setSelectedMetric(metric as typeof selectedMetric)}
                  className={
                    selectedMetric === metric
                      ? "rounded-full bg-primary px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white"
                      : "rounded-full border border-neutral-300 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-neutral-500 hover:border-primary hover:text-primary"
                  }
                >
                  {metric}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-6 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={performance}>
                <defs>
                  <linearGradient id="colorViews" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#3498db" stopOpacity={0.6} />
                    <stop offset="100%" stopColor="#3498db" stopOpacity={0.1} />
                  </linearGradient>
                  <linearGradient id="colorLikes" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#2ecc71" stopOpacity={0.6} />
                    <stop offset="100%" stopColor="#2ecc71" stopOpacity={0.1} />
                  </linearGradient>
                  <linearGradient id="colorShares" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#f1c40f" stopOpacity={0.6} />
                    <stop offset="100%" stopColor="#f1c40f" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e9f2" />
                <XAxis dataKey="label" stroke="#a0aec0" fontSize={12} tickLine={false} />
                <YAxis stroke="#a0aec0" fontSize={12} width={60} tickLine={false} />
                <Tooltip
                  contentStyle={{ borderRadius: 16, border: "1px solid #d1d8e0" }}
                  itemStyle={{ fontSize: 12 }}
                />
                <Legend wrapperStyle={{ fontSize: 12 }} />
                <Area type="monotone" dataKey="views" stroke="#3498db" strokeWidth={2} fill="url(#colorViews)" hide={selectedMetric !== "views"} />
                <Area type="monotone" dataKey="likes" stroke="#2ecc71" strokeWidth={2} fill="url(#colorLikes)" hide={selectedMetric !== "likes"} />
                <Area type="monotone" dataKey="shares" stroke="#f1c40f" strokeWidth={2} fill="url(#colorShares)" hide={selectedMetric !== "shares"} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <dl className="mt-6 grid gap-4 sm:grid-cols-3 text-sm text-neutral-500">
            <div className="rounded-2xl bg-neutral-100/70 p-4">
              <dt className="text-xs uppercase tracking-wide text-neutral-500">Total Views</dt>
              <dd className="mt-1 text-lg font-semibold text-neutral-900">{summary.views}</dd>
            </div>
            <div className="rounded-2xl bg-neutral-100/70 p-4">
              <dt className="text-xs uppercase tracking-wide text-neutral-500">Total Likes</dt>
              <dd className="mt-1 text-lg font-semibold text-neutral-900">{summary.likes}</dd>
            </div>
            <div className="rounded-2xl bg-neutral-100/70 p-4">
              <dt className="text-xs uppercase tracking-wide text-neutral-500">Total Shares</dt>
              <dd className="mt-1 text-lg font-semibold text-neutral-900">{summary.shares}</dd>
            </div>
          </dl>
        </div>

        <div className="space-y-4">
          <div className="rounded-3xl border border-neutral-200/80 bg-white p-6 shadow-soft">
            <div className="flex items-center gap-3">
              <LightBulbIcon className="h-6 w-6 text-primary" aria-hidden="true" />
              <h3 className="text-lg font-semibold text-neutral-900">Optimization Lab</h3>
            </div>
            <div className="mt-4 space-y-3">
              {keywordIdeas.map((idea) => (
                <div
                  key={idea.term}
                  className="flex items-center justify-between rounded-2xl border border-neutral-200/60 bg-white px-4 py-3 text-sm text-neutral-700"
                >
                  <span>{idea.term}</span>
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {idea.score}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-neutral-200/80 bg-white p-6 shadow-soft">
            <h4 className="text-sm font-semibold text-neutral-700">A/B Testing Matrix</h4>
            <div className="mt-4 space-y-3">
              {experiments.map((experiment) => (
                <div
                  key={experiment.id}
                  className={
                    "flex items-center justify-between rounded-2xl border px-4 py-3 text-sm " +
                    (experiment.winner
                      ? "border-success/50 bg-success/10 text-success"
                      : "border-neutral-200/70 bg-white text-neutral-600")
                  }
                >
                  <span>{experiment.variant}</span>
                  <span className="font-semibold">{experiment.uplift}% uplift</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-neutral-200/80 bg-white p-6 shadow-soft">
            <h4 className="text-sm font-semibold text-neutral-700">Action Queue</h4>
            <ul className="mt-3 space-y-2 text-xs text-neutral-500">
              <li>• Apply winning title variant to TikTok queue</li>
              <li>• Update thumbnail B with stronger focal point</li>
              <li>• Deploy #AITraffic keyword cluster on next three uploads</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
