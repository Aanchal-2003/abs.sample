# Technology Stack

## Core
- **Framework**: React 19.2.4
- **Build Tool**: Vite 8.0.1
- **Styling**: Tailwind CSS 4.2.2 (using `@tailwindcss/vite` plugin)
- **Routing**: React Router DOM 7.13.2
- **Language**: JavaScript (ESM)

## Animation & UI
- **Framer Motion**: `motion` 12.38.0
- **Particles**: `@tsparticles/react` 3.0.0, `@tsparticles/engine` 3.9.1, `@tsparticles/slim` 3.9.1
- **Lottie**: `lottie-react` 2.4.1
- **Icons**: `lucide-react` 0.577.0

## Development
- **Linting**: ESLint 9.39.4 (with react-hooks, react-refresh plugins)
- **Type Checking**: `@types/react`, `@types/react-dom` (Prop-types or TypeScript not explicitly used in components yet)

## Configuration
- `vite.config.js`: React and Tailwind plugins configured.
- `eslint.config.js`: Modern ESLint flat config.
- `index.html`: Entry point with `<div id="root"></div>`.
- `main.jsx`: Mounts `App` to `#root`.

---
*Last updated: 2026-04-09*
