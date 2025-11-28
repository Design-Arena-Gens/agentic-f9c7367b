import Sidebar from "./components/Sidebar";
import TrendIdentificationSection from "./components/TrendIdentificationSection";
import ContentCreationSection from "./components/ContentCreationSection";
import VideoClippingSection from "./components/VideoClippingSection";
import SchedulingSection from "./components/SchedulingSection";
import ViralOptimizationSection from "./components/ViralOptimizationSection";

export default function Page() {
  return (
    <div className="min-h-screen bg-surface">
      <div className="mx-auto flex max-w-[1440px] flex-col md:flex-row">
        <Sidebar />
        <main className="flex-1 overflow-hidden px-6 pb-16 pt-10 md:px-10">
          <header className="rounded-3xl border border-primary/30 bg-white px-8 py-7 shadow-card">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Dashboard</p>
            <h1 className="mt-2 text-3xl font-bold text-neutral-900">
              Video Automation Intelligence Hub
            </h1>
            <p className="mt-3 max-w-3xl text-sm text-neutral-500">
              Monitor leading indicators, orchestrate creative workflows, and operationalize viral strategy from a single control center. All components are automation-ready and built for cross-platform distribution.
            </p>
          </header>

          <div className="mt-10 space-y-16">
            <TrendIdentificationSection />
            <ContentCreationSection />
            <VideoClippingSection />
            <SchedulingSection />
            <ViralOptimizationSection />
          </div>
        </main>
      </div>
    </div>
  );
}
