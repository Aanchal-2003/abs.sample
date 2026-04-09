# Directory Structure

```text
abs-website/
├── .planning/              # GSD project documentation
│   └── codebase/           # Codebase map (current focus)
├── public/                 # Static assets (favicons, etc.)
├── src/
│   ├── assets/             # Images and design assets
│   │   ├── illustrations/  # High-quality PNG illustrations for services
│   │   └── lotties/        # Lottie animation JSON files
│   ├── components/         # Reusable UI components
│   │   ├── illustrations/  # Component-specific sub-illustrations
│   │   ├── Navbar.jsx      # Global navigation
│   │   ├── Footer.jsx      # Global footer
│   │   └── ...             # Interactive UI elements (Graphs, Buttons, etc.)
│   ├── data/               # Static data files (Sources of truth)
│   │   ├── services.js     # Main service catalog
│   │   ├── serviceSections.js
│   │   └── subServiceDetails.js
│   ├── pages/              # Top-level page components
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── ServiceDetail.jsx
│   │   └── ...
│   ├── App.jsx             # Root component with routing
│   ├── index.css           # Global styles and Tailwind 4 theme
│   └── main.jsx            # Application entry point
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite build configuration
└── eslint.config.js        # Linting rules
```

## Key File Responsibilities
- **`src/data/services.js`**: Defines the data structure for all services, including slugs, icons, descriptions, and FAQs.
- **`src/pages/ServiceDetail.jsx`**: A template page that renders data based on the URL slug.
- **`src/index.css`**: The design system's source of truth, containing customized Tailwind 4 tokens.

---
*Last updated: 2026-04-09*
