"use client";

import { useMemo, useState } from "react";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";

const trendData = [
  {
    id: "1",
    title: "AI Personal Trainers",
    region: "US",
    source: "Google Trends",
    searchVolume: 8400
  },
  {
    id: "2",
    title: "Eco-Friendly Travel Hacks",
    region: "EU",
    source: "YouTube",
    searchVolume: 7200
  },
  {
    id: "3",
    title: "Silent Vlogging Format",
    region: "Global",
    source: "TikTok",
    searchVolume: 9900
  },
  {
    id: "4",
    title: "Budget AI Tools",
    region: "US",
    source: "YouTube",
    searchVolume: 6500
  },
  {
    id: "5",
    title: "Productivity Playlists",
    region: "EU",
    source: "Google Trends",
    searchVolume: 5800
  },
  {
    id: "6",
    title: "Creator Monetization Tactics",
    region: "Global",
    source: "TikTok",
    searchVolume: 9100
  }
];

type Region = "US" | "EU" | "Global" | "All";

type SortKey = "title" | "searchVolume" | "source";

function TrendChart({ volume }: { volume: number }) {
  const data = [{ name: "", value: volume }];
  return (
    <ResponsiveContainer width="100%" height={40}>
      <BarChart data={data} layout="vertical" margin={{ top: 0, bottom: 0, left: 0, right: 0 }}>
        <XAxis type="number" hide domain={[0, 10000]} />
        <Tooltip
          cursor={false}
          wrapperStyle={{ outline: "none" }}
          contentStyle={{ borderRadius: 16, border: "1px solid #d1d8e0" }}
        />
        <Bar dataKey="value" fill="#3498db" radius={[8, 8, 8, 8]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default function TrendIdentificationSection() {
  const [region, setRegion] = useState<Region>("All");
  const [sortKey, setSortKey] = useState<SortKey>("searchVolume");
  const [sortAsc, setSortAsc] = useState<boolean>(false);

  const filtered = useMemo(() => {
    const scoped = region === "All" ? trendData : trendData.filter((trend) => trend.region === region);
    return [...scoped].sort((a, b) => {
      const direction = sortAsc ? 1 : -1;
      if (sortKey === "searchVolume") {
        return (a.searchVolume - b.searchVolume) * direction;
      }
      return a[sortKey].localeCompare(b[sortKey]) * direction;
    });
  }, [region, sortAsc, sortKey]);

  const handleSort = (key: SortKey) => {
    if (key === sortKey) {
      setSortAsc((prev) => !prev);
    } else {
      setSortKey(key);
      setSortAsc(false);
    }
  };

  return (
    <section id="trend" className="scroll-mt-20 space-y-6" aria-labelledby="trend-heading">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 id="trend-heading" className="text-2xl font-semibold text-neutral-900">
            Trend Identification
          </h2>
          <p className="text-sm text-neutral-500">
            Curated signals from Google Trends, TikTok, and YouTube surfaced in real-time for rapid activation.
          </p>
        </div>
        <div className="flex gap-2" role="radiogroup" aria-label="Region filter">
          {["All", "US", "EU", "Global"].map((label) => (
            <button
              key={label}
              type="button"
              role="radio"
              aria-checked={region === label}
              onClick={() => setRegion(label as Region)}
              className={
                region === label
                  ? "rounded-full bg-primary px-4 py-2 text-sm font-medium text-white shadow-card"
                  : "rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-600 hover:border-primary hover:text-primary"
              }
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-hidden rounded-3xl border border-neutral-200/80 bg-white shadow-soft">
        <table className="min-w-full divide-y divide-neutral-200" role="grid">
          <thead className="bg-neutral-100/60">
            <tr>
              <th scope="col" className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-neutral-500">
                Trend Title
              </th>
              <th scope="col" className="px-6 py-4">
                <button
                  type="button"
                  className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-neutral-500"
                  onClick={() => handleSort("searchVolume")}
                >
                  Search Volume
                  <ChevronUpDownIcon className="h-4 w-4" aria-hidden="true" />
                </button>
              </th>
              <th scope="col" className="px-6 py-4">
                <button
                  type="button"
                  className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-neutral-500"
                  onClick={() => handleSort("source")}
                >
                  Source
                  <ChevronUpDownIcon className="h-4 w-4" aria-hidden="true" />
                </button>
              </th>
              <th scope="col" className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wide text-neutral-500">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-200 bg-white">
            {filtered.map((trend) => (
              <tr key={trend.id} className="transition hover:bg-primary/5">
                <td className="px-6 py-4">
                  <div>
                    <p className="text-sm font-semibold text-neutral-800">{trend.title}</p>
                    <p className="text-xs text-neutral-500">{trend.region} • Last 24h momentum</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-neutral-700">{trend.searchVolume.toLocaleString()}</span>
                    <div className="h-10 w-32">
                      <TrendChart volume={trend.searchVolume} />
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-neutral-600">{trend.source}</td>
                <td className="px-6 py-4 text-right">
                  <button
                    type="button"
                    className="rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white shadow-card transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    Analyze
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
