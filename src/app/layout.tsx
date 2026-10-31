import type { Metadata } from "next"
import { Hanken_Grotesk, JetBrains_Mono, Space_Grotesk } from "next/font/google"
import { KeyboardShortcuts } from "@/components/keyboard-shortcuts"
import { OnboardingGuide } from "@/components/onboarding-guide"
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
        "denim manufacturing",
        "cotton trousers",
        "formal wear",
        "apparel manufacturing",
        "denim apparel",
        "apparel product references",
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
                url: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1200&q=80",
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
            "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1200&q=80",
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
    return (
        <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
            <body
                className={`${hanken.variable} ${spaceGrotesk.variable} ${jetBrains.variable} font-sans antialiased`}
            >
                <OnboardingGuide />
                <KeyboardShortcuts />
                {children}
                <Toaster />
            </body>
        </html>
    )
}
