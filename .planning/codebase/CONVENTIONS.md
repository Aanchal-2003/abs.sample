# Coding Conventions

## Component Patterns
- **Functional Components**: All components are implemented as functional components using arrow function syntax.
- **File Naming**: PascalCase for components (`Navbar.jsx`) and pages (`Home.jsx`). camelCase for data files (`services.js`).
- **Imports**: standard ESM imports. CSS is imported in `main.jsx`.

## Styling (Tailwind CSS 4)
- **Utility First**: Preference for Tailwind utility classes over custom CSS.
- **Theme Variables**: Use of custom theme variables (e.g., `text-brand-red`, `bg-brand-gold/5`) defined in `index.css`.
- **Glassmorphism**: Use of specialized utilities like `.glass-panel` for modern UI effects.

## Animation
- **Framer Motion**: Components use `motion` for entry animations (`initial`, `animate`) and hover effects.
- **Micro-interactions**: buttons often use the `group` class to trigger child animations on hover.

## Data Handling
- **Prop Injection**: Data is passed via props. In dynamic pages, data is filtered from a centralized array based on URL parameters.
- **Image handling**: Images are imported at the top of data files and associated with objects for easy consumption by components.

## Formatting & Linting
- **ESLint**: Standard flat-config is used to maintain code quality.
- **Indentation**: 2-space indentation is standard throughout the project.

---
*Last updated: 2026-04-09*
