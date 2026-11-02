import type { Metadata } from "next"
import { CatalogPage } from "./_components/catalog-page"

export const metadata: Metadata = {
    title: "Denim & Apparel Catalog",
    description:
        "Browse apparel product references and confirm specifications, minimums, and production details per inquiry.",
    openGraph: {
        title: "Denim & Apparel Catalog | Akara",
        description: "Browse apparel product references and confirm specifications, minimums, and production details per inquiry.",
        url: "https://akara.co.in/shop",
        images: [{
            url: "https://akara.co.in/cinematic_wide_fashion_catalog_editorial_banner_stylish_indian_models_converted.webp",
            width: 1200,
            height: 630,
            alt: "Akara denim and apparel catalog",
        }],
    },
}

export default function Page() {
    return <CatalogPage />
}
