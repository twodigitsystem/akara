import type { Metadata } from "next"
import { Hanken_Grotesk, JetBrains_Mono, Space_Grotesk } from "next/font/google"
import { Toaster } from "@/components/ui/toast"
import "./globals.css"

const hanken = Hanken_Grotesk({
    subsets: ["latin"],
    variable: "--font-sans",
    weight: ["400", "500", "600", "700"],
})

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-headline",
    weight: ["500", "600", "700"],
})

const jetBrains = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
})

export const metadata: Metadata = {
    metadataBase: new URL("https://akara.co.in"),
    title: {
        default: "Akara | Denim & Apparel",
        template: "%s | Akara",
    },
    description:
        "Explore denim and apparel product references. Confirm specifications, materials, production details, and documentation per inquiry.",
    keywords: [
        "denim manufacturer Ahmedabad",
        "apparel manufacturer India",
        "private label denim",
        "denim manufacturing",
        "cotton trousers manufacturer",
        "formal wear manufacturer",
        "apparel manufacturing India",
        "denim apparel wholesale",
        "OEM apparel India",
        "ODM denim manufacturer",
        "kids apparel manufacturer",
        "jacket manufacturer India",
    ],
    openGraph: {
        title: "Akara | Denim & Apparel",
        description:
            "Explore denim and apparel product references. Confirm specifications and production details per inquiry.",
        type: "website",
        url: "https://akara.co.in",
        siteName: "Akara",
        images: [
            {
                url: "/cinematic_wide_fashion_catalog_editorial_banner_stylish_indian_models_converted.webp",
                width: 1200,
                height: 630,
                alt: "Illustrative apparel product reference",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Akara | Denim & Apparel",
        description:
            "Explore denim and apparel product references. Confirm specifications and production details per inquiry.",
        images: [
            "/cinematic_wide_fashion_catalog_editorial_banner_stylish_indian_models_converted.webp",
        ],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const orgJsonLd = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Akara (S.Archana Garments)",
        url: "https://akara.co.in",
        logo: "https://akara.co.in/akara-logo.svg",
        address: {
            "@type": "PostalAddress",
            addressLocality: "Ahmedabad",
            addressCountry: "IN",
        },
        telephone: process.env.NEXT_PUBLIC_CONTACT_PHONE,
        description: "Denim and apparel manufacturer based in Ahmedabad, India. Specialising in men's, women's and kids' denim, cotton trousers, jackets, and overshirts.",
    }).replace(/</g, "\\u003c")

    return (
        <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
            <body
                className={`${hanken.variable} ${spaceGrotesk.variable} ${jetBrains.variable} font-sans antialiased`}
            >
                <script
                    type="application/ld+json"
                    // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD is JSON-serialized and escapes `<` to prevent script termination.
                    dangerouslySetInnerHTML={{ __html: orgJsonLd }}
                />
                {children}
                <Toaster />
            </body>
        </html>
    )
}
