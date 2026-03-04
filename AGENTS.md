# Repository Guidelines

## Project Structure & Module Organization
This repository is a Next.js App Router project in TypeScript.
- `app/`: route segments and page entry points (e.g., `app/page.tsx`, `app/services/page.tsx`).
- `components/`: reusable UI and feature components (`layout/`, `sections/`, `forms/`, `ui/`).
- `lib/`: shared utilities and constants.
- `public/`: static assets and images served directly.
- `resources/`: reference content and migration/source artifacts.

Use the `@/*` import alias from `tsconfig.json` for internal imports.

## Build, Test, and Development Commands
- `npm run dev`: start local development server at `http://localhost:3000`.
- `npm run build`: create a production build.
- `npm run start`: run the production build locally.
- `npm run lint`: run ESLint with Next.js + TypeScript rules.

Run `npm install` once before using scripts.

## Coding Style & Naming Conventions
- Language: TypeScript (`.ts`/`.tsx`) with `strict` mode enabled.
- Indentation: 2 spaces; keep files formatted consistently with existing code.
- Components: PascalCase file names and exported component names (e.g., `ServiceCard.tsx`).
- Hooks/utilities/constants: camelCase exports; keep constants in `lib/constants.ts` when shared.
- Styling: follow existing Tailwind utility patterns in JSX and global styles in `app/globals.css`.
- Linting: resolve issues from `npm run lint` before opening a PR.

## Testing Guidelines
There is currently no dedicated automated test suite configured. For now:
- Treat `npm run lint` and `npm run build` as required pre-PR checks.
- Manually verify affected routes/components in `npm run dev`.
- When adding tests, colocate them near the feature (e.g., `ComponentName.test.tsx`) and document the new command in `package.json`.

## Commit & Pull Request Guidelines
Recent history follows Conventional Commit-style prefixes:
- `feat: ...`
- `fix: ...`

Keep commits focused and descriptive (imperative, present tense). For PRs:
- include a clear summary of changes,
- link related issue(s),
- add screenshots/GIFs for UI changes,
- note manual verification steps (routes tested, browsers, viewport checks),
- ensure lint/build pass locally.

## Assets & Content Notes
Optimize large images before committing (`public/images/` includes optimization helpers/backups). Avoid committing unnecessary generated files outside standard Next.js outputs.
