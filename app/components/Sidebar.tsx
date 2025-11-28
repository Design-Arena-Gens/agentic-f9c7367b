"use client";

import { useState } from "react";
import {
  ChartBarIcon,
  SparklesIcon,
  ScissorsIcon,
  CalendarDaysIcon,
  FireIcon
} from "@heroicons/react/24/outline";
import clsx from "clsx";

const navItems = [
  { id: "trend", label: "Trend Identification", icon: ChartBarIcon },
  { id: "content", label: "Content Creation", icon: SparklesIcon },
  { id: "clipping", label: "Video Clipping", icon: ScissorsIcon },
  { id: "scheduling", label: "Scheduling & Uploading", icon: CalendarDaysIcon },
  { id: "viral", label: "Viral Optimization", icon: FireIcon }
];

export default function Sidebar() {
  const [active, setActive] = useState<string>("trend");

  return (
    <nav
      className="w-full md:w-72 lg:w-80 xl:w-88 sticky top-0 h-screen overflow-y-auto border-r border-neutral-300/60 bg-white"
      aria-label="Primary"
    >
      <div className="p-6 pb-4 flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary font-semibold">
          VA
        </span>
        <div>
          <p className="text-lg font-semibold">Viral Architect</p>
          <p className="text-sm text-neutral-500">Automation Control Center</p>
        </div>
      </div>
      <ul className="px-4 pb-8 space-y-2" role="list">
        {navItems.map(({ id, label, icon: Icon }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              onClick={() => setActive(id)}
              className={clsx(
                "flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium outline-none transition focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                active === id
                  ? "bg-primary text-white shadow-card"
                  : "bg-neutral-100 hover:bg-primary/10 text-neutral-700"
              )}
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
              <span>{label}</span>
            </a>
          </li>
        ))}
      </ul>
      <div className="px-6">
        <div className="rounded-3xl bg-primary/10 p-5">
          <p className="text-sm font-semibold text-primary">Automation Score</p>
          <p className="mt-2 text-3xl font-bold text-neutral-900">92%</p>
          <p className="mt-2 text-sm text-neutral-500">
            Almost fully automated. Review optimization insights to reach 100% efficiency.
          </p>
        </div>
      </div>
    </nav>
  );
}
