"use client";

import { Layers, Square, MousePointerClick, SwitchCamera, PanelsTopLeft } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/app/ui/badge";
import { Toggle } from "@/app/ui/toggle";
import { Tabs } from "@/app/ui/tabs";
import { Button } from "@/app/ui/button";
import { Card, CardContent } from "@/app/ui/card";
import { Input } from "@/app/ui/input";
import { Navbar } from "@/app/ui/navbar";

export function PreviewGrid() {
  return (
    <section className="w-full max-w-[1100px] mx-auto px-6 py-10">

      {/* Component cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Buttons */}
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 text-center transition-all duration-300">
          <div className="flex justify-center mb-3">
            <MousePointerClick className="w-6 h-6 text-white/70" />
          </div>
          <h3 className="text-white/90 mb-2 text-lg font-medium">Buttons</h3>
          <p className="text-white/50 text-sm mb-4">
            Minimal, responsive, and themeable — built with motion in mind.
          </p>
          <Button className="px-4 py-2">
            Click me
          </Button>
        </div>

        {/* Cards */}
        <div className="w-full flex justify-center">
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


        {/* Inputs */}
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 text-center transition-all duration-300">
          <div className="flex justify-center mb-3">
            <Layers className="w-6 h-6 text-white/70" />
          </div>
          <h3 className="text-white/90 mb-2 text-lg font-medium">Inputs</h3>
          <p className="text-white/50 text-sm mb-4">
            Clean, accessible fields that blend with any UI.
          </p>
          <Input
            className="bg-transparent border border-white/20 rounded-md px-3 py-2 w-full"
            placeholder="Type something..."
          />
        </div>
      </div>

      <div className="my-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm 
      p-6 text-center transition-all duration-300">
  <div className="flex justify-center mb-3">
    <Layers className="w-6 h-6 text-white/70" />
  </div>
  <h3 className="text-white mb-2 text-lg font-medium">Navbar</h3>
  <p className="text-white/50 text-sm mb-4 py-4 max-w-3xl mx-auto leading-relaxed">
    A lightweight, sticky navigation bar built for clarity and speed.
    It adapts seamlessly across breakpoints and supports internal
    routing with <code className="text-white/70">next/link</code>.
    No clutter—just the essentials, rendered beautifully over any
    background.
  </p>
  <div className="border border-white/10 rounded-xl overflow-hidden">
    <Navbar />
  </div>
</div>

        {/* Utility Components */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Badge */}
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 text-center transition-all duration-300">
          <div className="flex justify-center mb-3">
            <Layers className="w-6 h-6 text-white/70" />
          </div>
          <h3 className="text-white/90 mb-2 text-lg font-medium">Badge</h3>
          <p className="text-white/50 text-sm mb-4">
            Reusable, subtle indicators for status or categories.
          </p>
          <div className="flex justify-center gap-2">
            <Badge>Default</Badge>
            <Badge variant="success">Live</Badge>
            <Badge variant="warning">Draft</Badge>
            <Badge variant="error">Error</Badge>
          </div>
        </div>

        {/* Toggle */}
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 text-center transition-all duration-300">
          <div className="flex justify-center mb-3">
            <SwitchCamera className="w-6 h-6 text-white/70" />
          </div>
          <h3 className="text-white/90 mb-2 text-lg font-medium">Toggle</h3>
          <p className="text-white/50 text-sm mb-4">
            Minimal, responsive on/off control with soft transitions.
          </p>
          <div className="flex justify-center">
            <Toggle />
          </div>
        </div>

        {/* Tabs */}
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 text-center transition-all duration-300">
          <div className="flex justify-center mb-3">
            <PanelsTopLeft className="w-6 h-6 text-white/70" />
          </div>
          <h3 className="text-white/90 mb-2 text-lg font-medium">Tabs</h3>
          <p className="text-white/50 text-sm mb-4">
            Horizontal navigation for switching between content sections.
          </p>
          <Tabs
            tabs={[
              { label: "Overview", content: "Lightweight and flexible" },
              { label: "Code", content: "Built for clarity and speed" },
              { label: "Examples", content: "Easy to adapt anywhere" },
            ]}
          />
        </div>
      </div>

    </section>

    
  );
}