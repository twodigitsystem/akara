import type { Metadata } from "next"
import { SiteFooter } from "@/components/footer"
import { SiteHeader } from "@/components/header"
import { HomePage } from "@/components/home/home-page"

export const metadata: Metadata = {
    title: "Akara | Denim & Apparel",
    description:
        "Explore denim and apparel product references. Confirm specifications, materials, and production details per inquiry.",
}

export default function Page() {
    return (
        <div className="bg-[#f5f3ee] text-[#1b1d1f]">
            <SiteHeader />
            <HomePage />
            <SiteFooter />
        </div>
    )
}
