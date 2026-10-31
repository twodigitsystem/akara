import type { Metadata } from "next"
import { CatalogPage } from "./_components/catalog-page"

export const metadata: Metadata = {
    title: "Denim & Apparel Catalog",
    description:
        "Browse apparel product references and confirm specifications, minimums, and production details per inquiry.",
}

export default function Page() {
    return <CatalogPage />
}
