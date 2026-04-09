# Testing

## Current State
- **Automated Tests**: No automated tests (Unit, Integration, or E2E) were detected in the codebase.
- **Testing Frameworks**: No testing dependencies (`jest`, `vitest`, `cypress`, `playwright`) are currently initialized in `package.json`.

## Recommended Strategy
As the project grows, the following testing layers are recommended:
1. **Unit Testing (Vitest)**: For utility functions and isolated business logic, especially in `src/data/` parsers (if any).
2. **Component Testing (Vitest + React Testing Library)**: To verify that complex UI components (like `SubServiceDetail`) render correctly with different data inputs.
3. **End-to-End (E2E) Testing (Playwright)**: To verify core user flows, such as navigating through the service catalog and filling out the "Request a Demo" form.

## Manual Verification
Currently, verification is performed manually by:
- Navigating the local dev server (`npm run dev`).
- Inspecting the responsive behavior of the Tailwind 4 layout.
- Verifying accessibility and interactivity of animations.

---
*Last updated: 2026-04-09*
