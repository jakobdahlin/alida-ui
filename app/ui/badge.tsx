import * as React from "react";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "default" | "success" | "warning" | "error";
  className?: string;
};

export function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  const colors = {
    default: "border-white/20 bg-white/5 text-white/80",
    success: "border-green-400/30 bg-green-400/10 text-green-300 animate-pulse",
    warning: "border-yellow-400/30 bg-yellow-400/10 text-yellow-300 animate-pulse",
    error: "border-red-400/30 bg-red-400/10 text-red-300 animate-[wiggle_1s_ease-in-out_infinite]",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs animate- font-medium backdrop-blur-sm ${colors[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

/**
 * 🧩 Badge Component
 * Minimal, reusable label for statuses or categories.
 *
 * 💡 Example usage:
 * <Badge>Default</Badge>
 * <Badge variant="success">Live</Badge>
 * <Badge variant="warning">Draft</Badge>
 * <Badge variant="error">Failed</Badge>
 */