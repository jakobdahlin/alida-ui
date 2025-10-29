"use client";

import * as React from "react";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  delay?: number; // still optional in case you want to use it later
};

export function Card({
  className = "",
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

type CardContentProps = React.HTMLAttributes<HTMLDivElement> & {
  delay?: number;
};

export function CardContent({
  className = "",
  children,
  ...props
}: CardContentProps) {
  return (
    <div className={`p-4 text-white/90 ${className}`} {...props}>
      {children}
    </div>
  );
}