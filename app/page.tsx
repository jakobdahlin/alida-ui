"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Copy, Expand, Minimize, Code, Diamond, Layers, Rocket } from "lucide-react";
import { AutoTypeInstall } from "@/app/ui/auto-type-install";
import { Button } from "@/app/ui/button";
import { Card, CardContent } from "@/app/ui/card";
import { PreviewGrid } from "@/app/ui/preview-grid";

type CodeType = "component" | "call"; // ✅ define this union type

export default function Home() {
  const [showCode, setShowCode] = useState(false);
  const [expanded, setExpanded] = useState<Record<CodeType, boolean>>({
    component: false,
    call: false,
  });
  const [copiedComponent, setCopiedComponent] = useState(false);
  const [copiedCall, setCopiedCall] = useState(false);

  const toggleExpand = (key: CodeType) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const copyToClipboard = (text: string, type: CodeType) => {
    navigator.clipboard.writeText(text);
    if (type === "component") {
      setCopiedComponent(true);
      setTimeout(() => setCopiedComponent(false), 2000);
    } else {
      setCopiedCall(true);
      setTimeout(() => setCopiedCall(false), 2000);
    }
  };

  // ==================
  // Example Code Blocks
  // ==================
  const componentCode = `
"use client";

import * as React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

type CardProps = HTMLMotionProps<"div"> & { delay?: number };

export function Card({ className = "", delay = 0, children, ...props }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ opacity: { duration: 0.8, ease: "easeOut", delay } }}
      className={\`rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden \${className}\`}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type CardContentProps = HTMLMotionProps<"div"> & { delay?: number };

export function CardContent({ className = "", delay = 0.1, children, ...props }: CardContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ opacity: { duration: 0.8, ease: "easeOut", delay } }}
      className={\`p-4 text-white/90 \${className}\`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
`.trim();

  const callCode = `
import { Card, CardContent } from "@/components/ui/card";

<div className="w-full lg:w-1/2 flex justify-center">
  <Card delay={0.1} className="w-full max-w-sm">
    <div className="relative h-40 w-full">
      <Image
        src="PLACE IMAGE URL HERE"
        alt="Placeholder"
        fill
        className="object-cover opacity-90"
        sizes="(max-width: 768px) 100vw, 600px"
      />
    </div>
    <CardContent delay={0.2}>
      <h3 className="text-xl font-semibold mb-2 text-white/95">Demo Card</h3>
      <p className="text-white/50 mb-4">
        This is a sample card using white layers and opacity.
      </p>
      <Button className="w-full">Action</Button>
    </CardContent>
  </Card>
</div>
`.trim();

  // ==================
  // MAIN JSX RETURN
  // ==================
  return (
    <main className="relative flex min-h-screen flex-col text-white overflow-hidden px-4">
      {/* Hero Section */}
      <section className="w-full max-w-6xl mx-auto px-6 py-32 flex flex-col lg:flex-row items-center gap-16">
        <div className="relative z-10 flex flex-col items-center space-y-6 w-full max-w-[1100px] mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight leading-tight">
            Minimal UI for fast-moving teams
          </h1>

          <p className="text-white/50 max-w-[900px] mx-auto leading-relaxed text-sm sm:text-base px-2 sm:px-0">
            <span className="block mb-3">
              Alida Design System is a minimalist, open-source foundation for
              building modern interfaces with clarity and speed.
            </span>
          </p>

          <div className="pt-4 flex justify-center items-center">
  {/* Wrapper keeps both centered as one unit */}
  <div className="relative flex items-center justify-center gap-2 sm:gap-3">
    {/* Get Started button stays fixed */}
    <Link href="/docs" className="inline-block">
    <Button className="text-md px-3 py-2 flex gap-2 items-center whitespace-nowrap">
      Get Started <ArrowRight className="h-4 w-4" />
    </Button>
    </Link>

    {/* Autotype container */}
    <div className="relative">
      {/* Ghost placeholder keeps layout perfectly centered */}
      <div className="invisible select-none px-4 py-2 border border-transparent rounded-md min-w-[230px] sm:min-w-[250px]">
        npm install alida-ui
      </div>

      {/* Real animated version overlays the ghost */}
      <div className="absolute inset-0 flex items-center">
        <div className="overflow-hidden whitespace-nowrap">
          <AutoTypeInstall />
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
      </section>

      {/* Component Section */}
      <section className="w-full max-w-6xl mx-auto px-6 py-10 flex flex-col lg:flex-row items-center gap-16 ">
        {/* Demo Card */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Card delay={0.1} className="w-full max-w-sm">
            <div className="relative h-40 w-full">
              <Image
                src="https://res.cloudinary.com/dj10sb6gx/image/upload/v1757629852/IMG_0267-copy_fpsqrw.jpg"
                alt="Placeholder"
                fill
                className="object-cover opacity-90"
                sizes="(max-width: 768px) 100vw, 600px"
              />
            </div>

            <CardContent delay={0.2}>
              <h3 className="text-xl font-semibold mb-2 text-white/95">
                Demo Card
              </h3>
              <p className="text-white/50 mb-4">
                This is a sample card using white layers and opacity.
              </p>
              <Button className="w-full">Action</Button>
            </CardContent>
          </Card>
        </div>

        {/* Info Section */}
        <div className="w-full lg:w-1/2 text-left">
          <h2 className="text-3xl font-semibold mb-4 text-white/95">
            Card Component
          </h2>
          <p className="text-white/50 mb-6 leading-relaxed">
            The <span className="text-white/90">Card</span> component provides a
            flexible, minimalist surface that can hold any type of content.
          </p>

          <ul className="text-white/50 space-y-2 mb-6 list-disc list-inside">
            <li>Use for grouping content or media blocks</li>
            <li>
              Comes with an optional <code>CardContent</code> wrapper
            </li>
            <li>Works seamlessly with Tailwind spacing utilities</li>
            <li>Ideal for documentation and dashboards</li>
          </ul>

          {/* Get Code Button */}
          <Button
            onClick={() => setShowCode(!showCode)}
            className="flex items-center gap-2 px-10 py-2.5 rounded-lg bg-white/10 text-white hover:bg-white/20 transition"
          >
            {showCode ? (
              <>
                Hide code <Code className="w-4 h-4" />
              </>
            ) : (
              <>
                Get code <Code className="w-4 h-4" />
              </>
            )}
          </Button>
        </div>
      </section>

      {/* Conditional Code Section */}
      {showCode && (
        <section className="w-full max-w-6xl mx-auto px-6 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {(["component", "call"] as CodeType[]).map((type) => {
            const title =
              type === "component" ? "Component Code" : "Call Code";
            const code =
              type === "component" ? componentCode : callCode;
            const copied =
              type === "component" ? copiedComponent : copiedCall;

            return (
              <div
                key={type}
                className="relative rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm p-5"
              >
                {/* Controls */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <Button
                    onClick={() => copyToClipboard(code, type)}
                    className="flex items-center gap-2 px-3 py-1.5 text-xs "
                  >
                    <Copy className="w-3.5 h-3.5" />
                    {copied ? "Copied" : "Copy"}
                  </Button>

                  <Button
                  onClick={() => toggleExpand(type)}
                  className="flex items-center justify-center gap-2">
                  {expanded[type] ? (
                    <>
                    <Minimize className="w-4 h-4 text-white" />
                    </>
                  ) : (
                    <>
                    <Expand className="w-4 h-4 text-white" />
                    </>
                  )}
                  </Button>
                </div>

                <h3 className="text-white/80 text-sm font-semibold mb-3 flex items-center gap-2">
                  <Code className="w-4 h-4" /> {title}
                </h3>

                <div
                  className={`relative overflow-hidden rounded-lg transition-all duration-500 ${
                    expanded[type] ? "max-h-[1000px]" : "max-h-[150px]"
                  }`}
                >
                  <pre className="text-sm text-white/80 overflow-x-auto whitespace-pre-wrap">
                    {code}
                  </pre>

                  {!expanded[type] && (
                    <div className="absolute bottom-0 left-0 w-full h-16 bg-linear-to-t from-black/60 to-transparent pointer-events-none" />
                  )}
                </div>
              </div>
            );
          })}
        </section>
      )}
{/* Preview Grid */}
<PreviewGrid />


{/* Learn More */}
<section className="w-full max-w-6xl mx-auto px-6 py-24 text-center space-y-10">
  {/* Heading */}
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="text-3xl font-semibold text-white/95"
  >
    Design without distractions
  </motion.h2>

  {/* Intro paragraph */}
  <motion.p
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
    className="text-white/60 max-w-3xl mx-auto leading-relaxed"
  >
    Alida was built on the idea that clarity outlasts trends. Every component 
    is transparent, modular, and adaptable — allowing developers to layer their 
    own color, typography, and motion without breaking consistency.
  </motion.p>

  {/* Three philosophy pillars */}
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-10 text-left">
    {/* Minimal Core */}
    <motion.div
  initial={false} 
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, ease: "easeOut" }}
      className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:bg-white/10 transition"
    >
      <Diamond className="w-6 h-6 text-white/80 mb-3" />
      <h3 className="text-white/90 font-semibold mb-2">Minimal Core</h3>
      <p className="text-white/60 text-sm leading-relaxed">
        Each component begins with neutral white opacity and a single border. 
        Simplicity is the foundation — clarity in every layer.
      </p>
    </motion.div>

    {/* Adaptable System */}
    <motion.div
  initial={false} 
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, ease: "easeOut" }}
      className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:bg-white/10 transition"
    >
      <Layers className="w-6 h-6 text-white/80 mb-3" />
      <h3 className="text-white/90 font-semibold mb-2">Adaptable System</h3>
      <p className="text-white/60 text-sm leading-relaxed">
        Layer on brand identity instantly. Alida’s design logic flexes with 
        any palette, type system, or motion language.
      </p>
    </motion.div>

    {/* Built for Flow */}
    <motion.div
  initial={false} 
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, ease: "easeOut" }}
      className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:bg-white/10 transition"
    >
      <Rocket className="w-6 h-6 text-white/80 mb-3" />
      <h3 className="text-white/90 font-semibold mb-2">Built for Flow</h3>
      <p className="text-white/60 text-sm leading-relaxed">
        Zero friction between design and code. Predictable, consistent, and 
        fast — built for teams that move quickly.
      </p>
    </motion.div>
  </div>
</section>
    
    </main>
  );
}