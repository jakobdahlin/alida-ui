import { notFound } from "next/navigation";
import { Button } from "@/app/ui/button";
import { Card } from "@/app/ui/card";
import { Input } from "@/app/ui/input";
import { Navbar } from "@/app/ui/navbar";
import { Badge } from "@/app/ui/badge";
import { Toggle } from "@/app/ui/toggle";
import { Tabs } from "@/app/ui/tabs";

export async function generateStaticParams() {
  return [
    { slug: "button" },
    { slug: "card" },
    { slug: "input" },
    { slug: "navbar" },
    { slug: "badge" },
    { slug: "toggle" },
    { slug: "tabs" },
  ];
}

const components = {
  button: <Button>Click me</Button>,
  card: (
    <Card>
      <div className="p-4 text-white/70">Card preview content</div>
    </Card>
  ),
  input: <Input placeholder="Type something..." />,
  navbar: <Navbar />,
  badge: (
    <div className="flex gap-2">
      <Badge>Default</Badge>
      <Badge variant="success">Live</Badge>
      <Badge variant="warning">Draft</Badge>
      <Badge variant="error">Error</Badge>
    </div>
  ),
  toggle: <Toggle />,
  tabs: (
    <Tabs
      tabs={[
        { label: "Overview", content: "Lightweight and flexible" },
        { label: "Code", content: "<Tabs /> component example" },
        { label: "Examples", content: "Custom tab layouts" },
      ]}
    />
  ),
};

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // ✅ Unwraps the Promise
  const component = components[slug as keyof typeof components];

  if (!component) return notFound();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-2xl font-semibold text-white mb-6 capitalize">
        {slug} Component
      </h1>

      <div className="w-full max-w-3xl border border-white/10 bg-white/5 p-6 rounded-2xl">
        {component}
      </div>

      <p className="text-white/40 mt-6 text-sm">
        Example preview of the <strong>{slug}</strong> component.
      </p>
    </div>
  );
}