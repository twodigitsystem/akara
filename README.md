# Akara — Denim & Apparel Product References

Product-reference and RFQ website for Akara. Catalog images are illustrative; product specifications, materials, minimums, production capabilities, timelines, certifications, and other commercial details are confirmed for each inquiry rather than represented as verified catalog facts.

## Tech Stack

- [Next.js 16](https://nextjs.org) — App Router with the `src/app` directory, Server Components, per-route Metadata API
- [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com) — via `@tailwindcss/postcss` (no separate Tailwind config file)
- [shadcn/ui](https://ui.shadcn.com) components (`base-luma` style) + [Lucide](https://lucide.dev) icons
- [Biome](https://biomejs.dev) — linting and formatting
- Fonts via [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts): Hanken Grotesk, Space Grotesk, JetBrains Mono
- Package manager: **pnpm**

## Getting Started

Install dependencies and start the development server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

You can start editing any page under `src/app`; the page auto-updates as you edit.

### Available Scripts

| Script          | Description                       |
| --------------- | --------------------------------- |
| `pnpm dev`      | Start the development server      |
| `pnpm build`    | Create a production build         |
| `pnpm start`    | Serve the production build        |
| `pnpm lint`     | Run Biome checks                  |
| `pnpm format`   | Format the codebase with Biome    |

## Routes

| Route             | Description                                                                                                                                                              |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `/`               | Product-reference landing page with category links and inquiry prompts |
| `/shop`           | Searchable catalog with category selection, name sorting, and saved searches |
| `/product/[id]`   | Product reference with inquiry-confirmed specifications and a print-friendly view |
| `/compare`        | Compare selected product references |
| `/quote-deck`     | Review styles and project details before an inquiry |
| `/infrastructure` | Operations information; facility and production details are confirmed per inquiry |
| `/about`          | Overview of the product inquiry process |
| `/contact`        | RFQ form that submits to `/api/rfq` with validation, delivery status, and error states |
| `/faq`            | Answers to common buyer questions |
| `/privacy`        | Privacy policy for RFQ submissions |
| `/terms`          | Quotation, sampling, and quality terms |
| `/sustainability` | Materials, environmental practices, and compliance information available on request |

Additional conventions: `/sitemap.xml` and `/robots.txt` are generated; unknown product IDs and unmatched URLs render a branded 404 page (`not-found.tsx`), and runtime errors are caught by a branded `error.tsx` boundary.

Shared layout chrome (site header with responsive mobile menu and site footer) lives in `src/components/header.tsx` and `src/components/footer.tsx` and is composed into each page.

## Project Structure

```
src/
├── app/                          # App Router routes and route-specific UI
│   ├── page.tsx                  # Home page
│   ├── layout.tsx                # Root layout and metadata
│   ├── api/rfq/                  # RFQ validation and webhook delivery
│   ├── shop/_components/         # Catalog controls, product cards, catalog page
│   ├── product/[id]/             # Product reference route
│   ├── product/_components/      # Product gallery and print view
│   ├── contact/_components/      # Contact page and RFQ form
│   ├── about/_components/        # About page
│   ├── faq/_components/          # FAQ accordion
│   ├── infrastructure/_components/
│   ├── compare/, quote-deck/, sustainability/, privacy/, terms/
├── components/
│   ├── header.tsx                # Shared site header and navigation
│   ├── footer.tsx                # Shared site footer
│   ├── home/                     # Home page sections
│   └── ui/                       # Shared shadcn/ui primitives
├── hooks/                        # Shared React hooks
└── lib/
    ├── products.ts               # Catalog and product-reference data
    ├── catalog-storage.ts        # Browser storage for quote and compare lists
    └── utils.ts                  # Shared utilities
design/                           # Design references and source screenshots
public/
├── akara-logo.svg                # Brand logo
└── products/                     # Optimized local product-reference images
```

## Notes

- The product gallery uses optimized local reference images in `public/products/`; other illustrative product and lifestyle images are still loaded from remote sources. `next.config.ts` restricts `images.remotePatterns` to the required hosts. Replace illustrative references with approved product photography when available.
- Product data lives in a single module (`src/lib/products.ts`) shared by the catalog and spec-sheet pages — there is no database or CMS yet. The catalog and RFQ form preserve quote selections in browser storage. RFQ delivery requires the server-side `RFQ_WEBHOOK_URL` environment variable to point to an HTTPS endpoint; the API acknowledges a submission only after that endpoint accepts it. Without the variable, requests return an explicit unavailable response. File attachments are not supported.
- Route-specific components live beside their route; reusable site-wide components belong in `src/components/`. The catalog is split into browser state/orchestration, filter and saved-search controls, and individual product cards.
- `src/components/ui/` includes generated shadcn/ui primitives. In the latest dependency-graph audit, 13 of 61 modules were reachable from application imports; the rest appear unreferenced. They remain as a scaffold library, but check direct and transitive imports before removing one or adding another dependency.
- `design/` is a reference archive and is not served by the site. Production static assets belong in `public/`.
- Run `npx tsc --noEmit` for a TypeScript-only check; `pnpm lint` runs Biome.
- The Biome formatter is configured to the existing codebase style (4-space indent, `asNeeded` semicolons); `src/components/ui/**` has rule overrides for intentional shadcn patterns.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) — learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) — an interactive Next.js tutorial
- [Biome Documentation](https://biomejs.dev/lint/) — lint rules used by this project
