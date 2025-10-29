"use client";

import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { AutoTypeInstall } from "../ui/auto-type-install";
import { Button } from "../ui/button";

const components = [
  { name: "Button", path: "src/button.tsx" },
  { name: "Card", path: "src/card.tsx" },
  { name: "Input", path: "src/input.tsx" },
  { name: "Navbar", path: "src/navbar.tsx" },
  { name: "Footer", path: "src/footer.tsx" },
  { name: "Badge", path: "src/badge.tsx" },
  { name: "Toggle", path: "src/toggle.tsx" },
  { name: "Tabs", path: "src/tabs.tsx" },
];

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-black text-white py-10 mt-10 px-6">
      <div className="max-w-[900px] mx-auto space-y-16">
        {/* HERO */}
        <section className="text-center space-y-6">
          <h1 className="text-3xl font-semibold">Alida UI Documentation</h1>
          <p className="text-white/60 max-w-[600px] mx-auto">
            A minimal, open-source design system for building modern interfaces
            with clarity and speed. Learn how to install, import, and customize
            each component below.
          </p>

          <div className="flex justify-center items-center gap-3 flex-wrap">
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


            <a
              href="https://github.com/jakobdahlin/alida-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-white/60 hover:text-white transition"
            >
              <Github size={16} /> View on GitHub
            </a>
          </div>
        </section>

        {/* USAGE */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 mt-6">Usage</h2>
          <p className="text-white/60 mb-4">
            Import components directly from the library and start building your
            UI immediately:
          </p>
          <pre className="bg-white/5 border border-white/10 rounded-xl p-4 text-sm text-white/70 text-left overflow-x-auto">
{`import { Button } from "alida-ui";

export default function Example() {
  return <Button>Click me</Button>;
}`}
          </pre>
        </section>

        {/* CUSTOMIZATION */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 mt-6">Customization</h2>
          <p className="text-white/60 mb-4">
            Alida UI is built with Tailwind CSS and uses neutral white opacity
            layers, ensuring seamless adaptation to any background. You can
            easily override styles using utility classes or pass custom class
            names to each component.
          </p>
          <pre className="bg-white/5 border border-white/10 rounded-xl p-4 text-sm text-white/70 text-left overflow-x-auto">
{`<Button className="border-white/40 bg-white/10 hover:bg-white/20">
  Custom Button
</Button>`}
          </pre>
        </section>

        {/* COMPONENTS TABLE */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 mt-6">Components</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-white/10 rounded-xl overflow-hidden text-left text-sm">
              <thead className="bg-white/5 border-b border-white/50">
                <tr>
                  <th className="py-2 px-4 text-white text-lg">Name</th>
                  <th className="py-2 px-4 text-white text-lg">File</th>
                  <th className="py-2 px-4 text-right text-white text-lg">
                    GitHub
                  </th>
                </tr>
              </thead>
              <tbody>
                {components.map((component) => (
                  <tr
                    key={component.name}
                    className="hover:bg-white/40 transition-colors border-b border-white/10"
                  >
                    <td className="py-3 px-4 font-medium text-white/90 text-s">
                      {component.name}
                    </td>
                    <td className="py-3 px-4 text-white/50 font-mono text-s">
                      {component.path}
                    </td>
                    <td className="py-3 px-4 text-right">
                      <a
                        href={`https://github.com/jakobdahlin/alida-ui/blob/main/packages/alida-ui/${component.path}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex py-1 items-center gap-1 text-white/60 hover:text-white transition 
                        text-s"
                      >
                        <Button className="px-6 flex">View<ArrowUpRight size={14} /></Button>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* CONTRIBUTION */}
        <section className="pt-6 border-t border-white/10">
          <h2 className="text-2xl font-semibold mb-4">Contribute</h2>
          <p className="text-white/60 mb-4">
            Alida UI is open source and evolving. You can help improve it by
            reporting issues, suggesting new components, or contributing code on
            GitHub.
          </p>
          <a
            href="https://github.com/jakobdahlin/alida-ui"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 transition"
          >
            <Github size={16} /> Contribute on GitHub
          </a>
        </section>
      </div>
    </div>
  );
}