import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Video Automation Intelligence",
  description: "Comprehensive automation suite for trend-driven short-form video production."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-surface text-neutral-900">
        {children}
      </body>
    </html>
  );
}
