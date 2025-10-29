"use client";
import * as React from "react";

type ToggleProps = {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
};

export function Toggle({ checked = false, onChange }: ToggleProps) {
  const [isOn, setIsOn] = React.useState(checked);

  return (
    <button
      onClick={() => {
        setIsOn(!isOn);
        onChange?.(!isOn);
      }}
      className={`relative w-12 h-6 rounded-full border transition-all duration-300 ${
        isOn
          ? "border-white/60 bg-white/20 shadow-lg shadow-white/50 text-white"
          : "border-white/20 bg-white/5 text-white/60 hover:text-white"
      }`}
    >
      <span
        className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform duration-300 ${
          isOn ? "translate-x-6" : "translate-x-0"
        }`}
      />
    </button>
  );
}

/**
 * 🧲 Toggle Component
 * A clean on/off switch with white opacity and smooth transitions.
 *
 * 💡 Example usage:
 * <Toggle />
 * <Toggle checked onChange={(v) => console.log("Toggle is:", v)} />
 */