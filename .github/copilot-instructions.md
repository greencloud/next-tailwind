# Copilot Instructions for next-tailwind

## Project Overview
- **Framework:** Next.js (App Router, TypeScript, Tailwind CSS)
- **UI:** Uses MUI (Material UI) and custom components
- **API:** Custom API routes in `src/app/api/` proxy to a backend via environment variables (`API_URL`, `API_JWT`)
- **Structure:**
  - `src/app/` — App routes, pages, and API endpoints
  - `src/components/` — UI components (Header, Footer, Layout, Forms)
  - `src/lib/` — (reserved for utilities, currently empty)

## Key Patterns & Conventions
- **API Layer:**
  - All API routes under `src/app/api/` forward requests to a backend using `fetch` and env vars.
  - Example: `POST /api/products` → `${API_URL}/api/create-product` with `x-api-jwt` header.
  - API responses are always JSON.
- **UI Layer:**
  - Pages import shared layout/components (Header, Footer, Banner).
  - Forms use `react-hook-form` for validation and state.
  - MUI components are used for buttons and icons.
  - Tailwind CSS is used for styling, with some custom CSS in `globals.css`.
- **Routing:**
  - Uses Next.js App Router (`src/app/`).
  - Dynamic API routes: `[id]/route.ts` for per-item operations.
- **TypeScript:**
  - All code is TypeScript (`.ts`, `.tsx`).
  - Strict mode enabled in `tsconfig.json`.
- **Imports:**
  - Use relative imports for components (e.g., `../../components/Header/Header`).
  - `@/*` alias is configured for `src/*` (see `jsconfig.json`).

## Developer Workflows
- **Development:**
  - Start: `npm run dev`
  - Build: `npm run build`
  - Lint: `npm run lint` (uses Biome)
  - Format: `npm run format` (Biome)
- **Testing:**
  - No test framework is set up by default.
- **Debugging:**
  - Use browser/Next.js error overlays. API errors are logged to the console.
- **Environment:**
  - Set `API_URL` and `API_JWT` in `.env` (not committed).

## Examples
- **API Route:** `src/app/api/products/route.ts` (handles POST/GET, proxies to backend)
- **Form:** `src/components/Forms/ProductCreate.tsx` (uses react-hook-form, posts to `/api/products`)
- **Page:** `src/app/products/page.tsx` (fetches product(s), displays with error/loading states)

## Special Notes
- **Biome** is used for linting/formatting (see `biome.json`).
- **No test or storybook setup** by default.
- **Custom fonts** loaded via `next/font` in `layout.tsx`.
- **Banner images** referenced in CSS (`/public/banner.webp`).

---

For new features, follow the patterns in `src/app/` and `src/components/`. For API changes, update the proxy logic in `src/app/api/` and ensure correct backend integration.
