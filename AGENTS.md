# Repository Guidelines

## Project Structure & Module Organization

This repository is a Next.js 14 application using the `src/pages` router. Route entry points live in `src/pages` (including dynamic routes such as `post/[id].jsx`), reusable UI is split between `src/components` and feature-level `src/containers`, and shared state is in `src/context`. Utilities are in `src/utils`, theme setup is in `src/theme`, and global styles are in `src/global.css`. Static images, icons, fonts, and backgrounds belong in `public/`. Keep route-specific behavior close to its page or container and reuse shared behavior through components or utilities.

## Build, Test, and Development Commands

Install dependencies with `npm install`. Use:

- `npm run dev` — start the development server at `http://localhost:3001`.
- `npm run build` — create a production build and surface Next.js compilation errors.
- `npm start` — serve the production build at port 3001; run `npm run build` first.

There are no repository-defined test, lint, or formatting scripts. Verify UI changes manually in the development server and run a production build before submitting substantial changes.

## Coding Style & Naming Conventions

Use two-space indentation and the existing JSX/JavaScript style. Name React components and their directories in PascalCase (`ProfilePhoto`, `AddComment`); use camelCase for functions, variables, contexts, and utilities (`getDateFormat`). Preserve the project’s double-quoted JavaScript strings and semicolon usage. Avoid unrelated formatting changes. Use arrow functions for function declarations.

## Testing Guidelines

No automated test framework or coverage threshold is configured. When adding tests, keep them near the feature they cover and use descriptive names focused on observable behavior. Until a test runner is introduced, validate changed routes, loading/error states, authentication-sensitive flows, and responsive behavior manually, then run `npm run build`.

## Commit & Pull Request Guidelines

Recent commits use short, imperative-style subjects such as `fix config`, `Bug fixed`, and `Dark mode styles and last fixes`. Follow that concise convention, but make the subject specific (for example, `Fix profile image upload`). Keep commits focused. Pull requests should explain the user-visible change, identify affected routes or components, mention validation performed (including `npm run build`), link related issues when applicable, and include screenshots or a short recording for visual changes.

## Security & Configuration Tips

Runtime configuration is read from environment variables through `config.js`; set `NEXT_PUBLIC_API_URL` locally and do not commit secrets or `.env` files. Review changes to image host configuration in `next.config.js`, since remote image domains must match the configured API.
