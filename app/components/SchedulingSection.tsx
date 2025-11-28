"use client";

import { useMemo, useState } from "react";
import { CalendarDaysIcon, DocumentTextIcon, CloudArrowUpIcon } from "@heroicons/react/24/outline";

const scheduled = [
  { id: "1", date: 6, platform: "TikTok", time: "09:30", title: "AI Trainer Hook", status: "Queued" },
  { id: "2", date: 6, platform: "YouTube Shorts", time: "19:00", title: "AI Trainer Proof", status: "Queued" },
  { id: "3", date: 9, platform: "TikTok", time: "11:30", title: "Budget AI Tools", status: "Uploaded" },
  { id: "4", date: 12, platform: "YouTube Shorts", time: "20:15", title: "Creator Monetization", status: "Ready" },
  { id: "5", date: 14, platform: "TikTok", time: "09:00", title: "Silent Vlog Playbook", status: "Queued" }
];

const days = Array.from({ length: 30 }, (_, index) => index + 1);

export default function SchedulingSection() {
  const [selectedDay, setSelectedDay] = useState<number>(6);

  const dayItems = useMemo(() => scheduled.filter((entry) => entry.date === selectedDay), [selectedDay]);

  return (
    <section id="scheduling" className="scroll-mt-20 space-y-6" aria-labelledby="scheduling-heading">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 id="scheduling-heading" className="text-2xl font-semibold text-neutral-900">
            Scheduling &amp; Uploading
          </h2>
          <p className="text-sm text-neutral-500">
            Align output with upload cadences. Sync to Google Sheets, auto-populate metadata, and orchestrate cross-platform drops.
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-success/60 bg-success/10 px-4 py-2 text-success">
          <DocumentTextIcon className="h-5 w-5" aria-hidden="true" />
          <span className="text-xs font-semibold">Google Sheets • Synced 3 minutes ago</span>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[2fr,3fr]">
        <div className="rounded-3xl border border-neutral-200/80 bg-white p-6 shadow-soft">
          <div className="flex items-center gap-3">
            <CalendarDaysIcon className="h-6 w-6 text-primary" aria-hidden="true" />
            <div>
              <h3 className="text-lg font-semibold text-neutral-900">Upload Cadence</h3>
              <p className="text-xs text-neutral-500">Twice daily drops • Optimized for 9:30 AM &amp; 7:00 PM slots</p>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-7 gap-2" role="grid" aria-label="Scheduling calendar">
            {days.map((day) => {
              const isSelected = selectedDay === day;
              const isScheduled = scheduled.some((entry) => entry.date === day);
              return (
                <button
                  key={day}
                  type="button"
                  role="gridcell"
                  aria-selected={isSelected}
                  onClick={() => setSelectedDay(day)}
                  className={
                    "flex h-14 flex-col items-center justify-center rounded-2xl border text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 " +
                    (isSelected
                      ? "border-primary bg-primary text-white shadow-card"
                      : isScheduled
                      ? "border-success/50 bg-success/10 text-success"
                      : "border-neutral-200 bg-white text-neutral-500 hover:border-primary/80 hover:text-primary")
                  }
                >
                  <span>{day}</span>
                  {isScheduled && !isSelected ? <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-success" /> : <span className="mt-1 h-1.5 w-1.5" />}
                </button>
              );
            })}
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-3xl border border-neutral-200/80 bg-white p-6 shadow-soft">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-neutral-900">Day Planner</h3>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-card"
              >
                <CloudArrowUpIcon className="h-4 w-4" aria-hidden="true" />
                Push to Queue
              </button>
            </div>
            <div className="mt-4 space-y-3">
              {dayItems.length === 0 ? (
                <div className="rounded-2xl border border-neutral-200/70 bg-neutral-100/80 p-4 text-sm text-neutral-500">
                  No uploads scheduled. Drag selections here to keep cadence.
                </div>
              ) : (
                dayItems.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-2xl border border-neutral-200/60 bg-white p-4 shadow-sm"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-neutral-800">{item.title}</p>
                        <p className="text-xs text-neutral-500">{item.platform} • {item.time}</p>
                      </div>
                      <span
                        className={
                          "rounded-full px-3 py-1 text-xs font-semibold " +
                          (item.status === "Uploaded"
                            ? "bg-success/10 text-success"
                            : item.status === "Ready"
                            ? "bg-primary/10 text-primary"
                            : "bg-neutral-100 text-neutral-500")
                        }
                      >
                        {item.status}
                      </span>
                    </div>
                    <div className="mt-3 grid gap-3 sm:grid-cols-2 text-xs text-neutral-500">
                      <div className="rounded-xl bg-neutral-100/70 px-3 py-2">Hashtags optimized • 86/100</div>
                      <div className="rounded-xl bg-neutral-100/70 px-3 py-2">Thumbnail locked • v3</div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="rounded-3xl border border-neutral-200/80 bg-white p-6 shadow-soft">
            <h4 className="text-sm font-semibold text-neutral-700">Metadata Panel</h4>
            <div className="mt-3 grid gap-3 text-xs text-neutral-500">
              <div className="rounded-2xl border border-neutral-200/70 bg-white p-3">
                <p className="font-semibold text-neutral-700">Video Title</p>
                <p className="mt-1 text-neutral-500">AI Trainer Playbook: Copy this 3-step routine</p>
              </div>
              <div className="rounded-2xl border border-neutral-200/70 bg-white p-3">
                <p className="font-semibold text-neutral-700">Description</p>
                <p className="mt-1 text-neutral-500">
                  Highlights the trend insight, value proposition, and CTA. Auto-synced with Google Sheets row 12.
                </p>
              </div>
              <div className="rounded-2xl border border-neutral-200/70 bg-white p-3">
                <p className="font-semibold text-neutral-700">Tags</p>
                <p className="mt-1 text-neutral-500">#AITrainer #CreatorStack #ViralPlaybook #Shorts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
