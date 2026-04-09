# Technical Concerns

## 1. Maintenance & Scalability
- **Large Data Files**: `src/data/services.js` is ~374 lines. As the catalog grows, this file may become difficult to maintain.
- **Large Component Files**: `src/components/SketchIllustration.jsx` (~138kb) and `src/components/Illustrations.jsx` are very large. They bundle significant static SVG/Path data which increases the JS bundle size.

## 2. Performance
- **Image Formats**: The project relies heavily on PNG illustrations. Transitioning to WebP or optimized SVGs could significantly reduce page load times and improve LCP (Largest Contentful Paint).
- **Bundle Size**: Due to the large illustration components mentioned above, code-splitting (dynamic imports) or moving static SVG data to external files/CDN should be considered.

## 3. Functionality Gaps
- **Form Submission**: The `Contact.jsx` form is currently visual only. It lacks a submission handler or integration with a backend/serveless function.
- **Dynamic Content**: While the architecture is set up for it, the current implementation is purely static. Fetching from a CMS (e.g., Sanity, Strapi) might be better for long-term content management.

## 4. Quality & Testing
- **Lack of Tests**: Currently, there are no automated tests. This increases the risk of regression when refactoring core components or data structures.
- **TypeScript**: The project uses vanilla JavaScript. For a project of this complexity (many nested objects in `services.js`), TypeScript would add beneficial type safety and better IDE support.

---
*Last updated: 2026-04-09*
