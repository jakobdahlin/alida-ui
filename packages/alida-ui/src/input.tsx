import * as React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className = "", ...props }: InputProps) {
  return (
    <input
      className={`w-full px-3 py-2 rounded-lg
        border border-white/10 text-white/90 placeholder-white/20 
        focus:outline-none focus:ring-2 focus:ring-black/5 ${className}`}
      {...props}
    />
  );
}