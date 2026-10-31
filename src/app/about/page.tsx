import type { Metadata } from "next"
import { AboutPage } from "./_components/about-page"

export const metadata: Metadata = {
    title: "About",
    description:
        "Learn how to discuss apparel product requirements, specifications, production, and documentation with Akara.",
}

export default function Page() {
    return <AboutPage />
}
