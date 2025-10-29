# Alida UI

Minimal UI for fast-moving teams 
Beautiful, minimal, open-source React components built with Tailwind CSS — designed for clarity, speed, and flexibility.

Docs￼ · GitHub￼ · NPM (alida-ui)￼

⸻

## 🚀 Installation

npm install alida-ui
# or
yarn add alida-ui
# or
pnpm add alida-ui

Peer dependencies: react and react-dom (v18+).
Alida UI is styled with Tailwind CSS utility classes. You don’t need special configuration, but your app should include Tailwind (or you can use the default styles as-is).

⸻

## 🧱 Quick Start

### Import the components you need:
import { Button, Card } from "alida-ui";

### Example usage:
Use  and  inside your React component to quickly prototype UI elements.

### Exports include:
Button, Card, Input, Navbar, Badge, Toggle, Tabs

⸻

## 🔸 Components & Usage

Each example is small, composable, and ready to paste into your project.
All components accept className to extend styling.

* Button – Minimal, accessible button with hover and active states.
* Card – Flexible container for any type of content.
* Input – Styled input field with optional label.
* Navbar – Lightweight, responsive navigation bar.
* Badge – Small status labels with variants such as success, warning, and error.
* Toggle – Simple controlled on/off switch.
* Tabs – Horizontal content switcher.

⸻

## 📦 Design Goals

* Minimal by default — clean, neutral, and adaptable to any background.
* Fast — small, optimized components with lightweight DOM structure.
* Themeable — extendable via className or custom design tokens.
* Typed — fully written in TypeScript, exported in both ESM and CJS formats.

⸻

## 🛠️ Local Development

### Clone the repository and set up locally:

git clone https://github.com/jakobdahlin/alida-ui
cd alida-ui
npm install

### Build the package:
npm –workspace packages/alida-ui run build

### Run in development mode:
npm –workspace packages/alida-ui run dev

⸻

## 📄 License

MIT © Jakob Dahlin