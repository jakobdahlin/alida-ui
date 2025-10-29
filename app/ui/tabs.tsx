"use client";
import * as React from "react";

type Tab = {
  label: string;
  content: React.ReactNode;
};

type TabsProps = {
  tabs: Tab[];
};

export function Tabs({ tabs }: TabsProps) {
  const [active, setActive] = React.useState(0);

  return (
    <div className="w-full">
      <div className="flex justify-center gap-4 mb-4">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`px-4 py-2 rounded-lg text-sm border transition-all duration-300 ${
              active === i
                ? "border-white/60 bg-white/20 shadow-lg shadow-white/50 text-white"
                : "border-white/20 bg-white/5 text-white/60 hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="text-white/80 text-center">{tabs[active].content}</div>
    </div>
  );
}

/**
 * 🧭 Tabs Component
 * A minimal tab switcher for docs, dashboards, or content navigation.
 *
 * 💡 Example usage:
 * <Tabs
 *   tabs={[
 *     { label: "Overview", content: "Tab 1 content" },
 *     { label: "Code", content: "Tab 2 content" },
 *     { label: "Examples", content: "Tab 3 content" },
 *   ]}
 * />
 */