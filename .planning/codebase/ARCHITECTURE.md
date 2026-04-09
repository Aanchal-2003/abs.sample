# Architecture

## Overview
The codebase is a modern React single-page application (SPA) focused on providing a high-fidelity, interactive marketing presence for ABS Projects (Tally Partner). It follows a component-based architecture with centralized static data.

## Key Patterns
- **Centralized Data**: All business logic and content (services, sub-services, sections) are stored as JavaScript objects in `src/data/`. This allows for easy content updates without modifying core components.
- **Dynamic Routing**: `react-router-dom` is used to handle navigation. Service detail pages are dynamic, using `slugs` to fetch the relevant data from `src/data/services.js`.
- **Atomic-ish Components**: UI is broken down into reusable components in `src/components/`, ranging from simple wrappers like `HighlightText` to complex interactive elements like `Illustrations`.

## Data Flow
1. **Entry**: `main.jsx` renders `App.jsx`.
2. **Routing**: `App.jsx` uses `Routes` to switch between `Home`, `About`, `Services`, `ServiceDetail`, and `SubServiceDetail`.
3. **Data Injection**:
    - `ServiceDetail.jsx` uses `useParams` to get the service slug.
    - It searches `src/data/services.js` for the matching object.
    - It passes this data down to child components for rendering.
4. **State Management**: Local React state (`useState`) is used for UI-specific tasks (e.g., mobile menu toggle in `Navbar.jsx`). Global state management (Redux/Zustand) is currently not present, as the app is content-heavy rather than state-heavy.

## Styling Architecture
- **Tailwind CSS 4**: Uses the new CSS-first configuration in `index.css`.
- **Design Tokens**: Custom colors (`brand-red`, `brand-gold`, `brand-black`) and animations (`animate-float`) are defined in the `@theme` block of `index.css`.
- **Utility Layers**: Custom utility classes like `.glass-panel` and `.text-glow` are defined in `@layer utilities`.

---
*Last updated: 2026-04-09*
