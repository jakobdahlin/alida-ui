"use client";

import { PreviewGrid } from "@/app/ui/preview-grid";

export default function ComponentsPage() {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4">
          Explore the Core Components
        </h1>
        <p className="text-white/60 max-w-xl mx-auto">
          Alida provides flexible, minimalist components that adapt to any
          background. Built for speed, clarity, and total creative control.
        </p>
      </div>

      <div className="w-full max-w-[1100px]">
        <PreviewGrid />
      </div>
    </section>
  );
}