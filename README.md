# Akara — Denim & Apparel Product References

Product-reference and RFQ website for Akara (S.Archana Garments), Ahmedabad, India. Catalog images are illustrative; product specifications, materials, minimums, production capabilities, timelines, certifications, and other commercial details are confirmed for each inquiry rather than represented as verified catalog facts.

## Tech Stack

- [Next.js 16](https://nextjs.org) — App Router with the `src/app` directory, Server Components, per-route Metadata API
- [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com) — via `@tailwindcss/postcss` (no separate Tailwind config file)
- [shadcn/ui](https://ui.shadcn.com) components (`base-luma` style) + [Lucide](https://lucide.dev) icons
- [Biome](https://biomejs.dev) — linting and formatting
- [jsPDF](https://github.com/parallax/jsPDF) — client-side PDF export for the Quote Deck
- Fonts via [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts): Hanken Grotesk, Space Grotesk, JetBrains Mono
- Package manager: **pnpm**

## Getting Started

Install dependencies and start the development server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Available Scripts

| Script          | Description                       |
| --------------- | --------------------------------- |
| `pnpm dev`      | Start the development server      |
| `pnpm build`    | Create a production build         |
| `pnpm start`    | Serve the production build        |
| `pnpm lint`     | Run Biome checks                  |
| `pnpm format`   | Format the codebase with Biome    |

## Environment Variables

Only one server-side variable is required, and only when RFQ delivery is configured:

| Variable          | Required | Description                                              |
| ----------------- | -------- | -------------------------------------------------------- |
| `RFQ_WEBHOOK_URL` | No       | HTTPS endpoint that receives validated RFQ payloads. Without it, the form returns an explicit unavailable response. |

Contact details (phone and email) are **not** environment variables — they live in `src/lib/constants.ts` and can be updated there directly.

### Deploying to Vercel

Add `RFQ_WEBHOOK_URL` under **Settings → Environment Variables** in your Vercel project when you are ready to enable form delivery. No other environment variables are needed.

## Routes

| Route             | Description                                                                 |
| ----------------- | --------------------------------------------------------------------------- |
| `/`               | Landing page with category links, facility strip, hardware details, and inquiry prompts |
| `/shop`           | Searchable catalog with category filter, name sorting, and saved filter presets |
| `/product/[id]`   | Product reference with image gallery, lightbox, specs, and related products |
| `/compare`        | Side-by-side comparison of up to 4 selected product references              |
| `/quote-deck`     | Review selected styles, edit quantities and notes, export PDF, submit RFQ   |
| `/infrastructure` | Facility overview with 9-image grid and production capability details       |
| `/about`          | Company overview, inquiry process steps, facility and hardware image strips |
| `/contact`        | RFQ form with category selection, quote deck pre-fill, and delivery status  |
| `/faq`            | Answers to common buyer questions                                           |
| `/sustainability` | Materials, dyeing, environmental practices, and compliance information      |
| `/privacy`        | Privacy policy for RFQ submissions                                          |
| `/terms`          | Quotation, sampling, and quality terms                                      |

Additional conventions: `/sitemap.xml` and `/robots.txt` are generated automatically. Unknown product IDs and unmatched URLs render a branded 404 page (`not-found.tsx`); runtime errors are caught by a branded `error.tsx` boundary.

## Project Structure

```
src/
├── app/                          # App Router routes and route-specific UI
│   ├── page.tsx                  # Home page
│   ├── layout.tsx                # Root layout, metadata, and JSON-LD
│   ├── api/rfq/                  # RFQ validation and webhook delivery
│   ├── shop/_components/         # Catalog browser, controls, and product cards
│   ├── product/[id]/             # Product reference route
│   ├── product/_components/      # Product gallery, lightbox, and print button
│   ├── contact/_components/      # Contact page and RFQ form
│   ├── about/_components/        # About page
│   ├── faq/_components/          # FAQ accordion
│   ├── infrastructure/_components/
│   ├── compare/, quote-deck/, sustainability/, privacy/, terms/
├── components/
│   ├── header.tsx                # Shared site header and responsive mobile nav
│   ├── footer.tsx                # Shared site footer
│   ├── home/                     # Home page sections (hero, segment grid, facility strip, hardware strip, sustainability panel, sample request)
│   └── ui/                       # shadcn/ui primitives (toast actively used)
├── hooks/
│   └── use-mobile.ts             # Mobile breakpoint hook (used by sidebar)
└── lib/
    ├── constants.ts              # Contact phone and email — edit here to update site-wide
    ├── products.ts               # Catalog data (10 products, 6 categories)
    ├── catalog-storage.ts        # Browser localStorage for quote deck and compare list
    └── utils.ts                  # Shared utilities
public/
├── akara-logo.svg                # Brand logo
├── products/                     # Product reference images (.jpg)
└── *.webp                        # Facility, lifestyle, and hardware images
```

## Product Catalog

10 products across 6 categories, all defined in `src/lib/products.ts`:

| Category          | Products                                      |
| ----------------- | --------------------------------------------- |
| `mens-denim`      | Men's Selvedge Denim, Tapered Denim, Relaxed Denim |
| `womens-denim`    | Women's Denim, Women's Fashion Denim          |
| `kids-jeans`      | Kids' Denim                                   |
| `cotton-apparels` | Utility Apparel, Formal Trousers & Chinos     |
| `jackets`         | Denim Jacket                                  |
| `overshirts`      | Overshirt                                     |

To add a product, append an entry to the `products` array in `src/lib/products.ts`. The catalog, sitemap, and product pages update automatically.

## Contact Details

Phone and email are defined once in `src/lib/constants.ts`:

```ts
export const CONTACT_PHONE = "+917817966192"
export const CONTACT_EMAIL = "chinmaysamanta@gmail.com"
```

These are imported wherever the values appear in the UI (footer, contact page, sample request section, privacy policy, terms, and API error messages). Update this file to change them site-wide.

## Notes

- All product and facility images are local `.webp` or `.jpg` files in `public/`. No remote image sources are used. `next.config.ts` can be simplified to remove `remotePatterns` if no external images are added.
- RFQ delivery requires `RFQ_WEBHOOK_URL` to be set server-side. The API validates the payload, forwards it to the webhook over HTTPS, and only acknowledges success after the endpoint accepts it. File attachments are not supported.
- The Quote Deck, Compare list, and saved filter presets are stored in browser `localStorage`. They are cleared when the user clears site data.
- `src/components/ui/` contains the full shadcn/ui scaffold. Only `toast.tsx` is actively imported by the application. The rest remain available but are unreferenced.
- Run `npx tsc --noEmit` for a TypeScript-only check; `pnpm lint` runs Biome.
- The Biome formatter uses 4-space indent and `asNeeded` semicolons. `src/components/ui/**` has rule overrides for intentional shadcn patterns.
