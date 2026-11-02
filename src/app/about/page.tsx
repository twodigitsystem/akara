import type { Metadata } from "next"
import { AboutPage } from "./_components/about-page"

export const metadata: Metadata = {
    title: "About",
    description:
        "Learn how to discuss apparel product requirements, specifications, production, and documentation with Akara.",
    openGraph: {
        title: "About Akara | Denim & Apparel Manufacturer",
        description: "Akara is a denim and apparel manufacturer based in Ahmedabad, India. Learn about our inquiry process and product capabilities.",
        url: "https://akara.co.in/about",
        images: [{
            url: "https://akara.co.in/cinematic_wide_commercial_banner_photography_for_akara_denim_and_apparel_converted.webp",
            width: 1200,
            height: 630,
            alt: "Akara denim and apparel manufacturer",
        }],
    },
}

export default function Page() {
    return <AboutPage />
}
