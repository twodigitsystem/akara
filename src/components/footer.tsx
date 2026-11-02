import { ArrowUpRight, Mail, Package, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const exploreLinks = [
    { href: "/shop", label: "Product catalog" },
    { href: "/quote-deck", label: "Quote Deck" },
    { href: "/about", label: "About Akara" },
    { href: "/infrastructure", label: "Capabilities" },
]

const supportLinks = [
    { href: "/faq", label: "Frequently asked questions" },
    { href: "/sustainability", label: "Materials & compliance" },
    { href: "/privacy", label: "Privacy policy" },
    { href: "/terms", label: "Terms of service" },
]

export function SiteFooter() {
    return (
        <footer className="print:hidden bg-[#0f1c2f] text-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <section className="flex flex-col gap-6 border-b border-white/15 py-9 sm:flex-row sm:items-center sm:justify-between sm:py-11">
                    <div className="max-w-2xl">
                        <p className="text-sm font-semibold text-[#b8c5ff]">
                            Start a conversation
                        </p>
                        <h2 className="mt-2 text-2xl font-semibold leading-tight tracking-[-0.03em] sm:text-3xl">
                            Have a product in mind?
                        </h2>
                        <p className="mt-2 text-sm leading-6 text-white/70 sm:text-base">
                            Share your brief and our team can help confirm the
                            details for your project.
                        </p>
                    </div>
                    <Link
                        href="/contact"
                        className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded bg-[#4059aa] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#526dc4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                        Talk to our team
                        <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                    </Link>
                </section>

                <div className="grid gap-10 py-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr] lg:gap-12 lg:py-12">
                    <div>
                        <Link
                            href="/"
                            aria-label="Akara home"
                            className="inline-flex rounded bg-[#faf9f6] p-2"
                        >
                            <Image
                                src="/akara-logo.svg"
                                alt="Akara Denim & Apparel Mfg"
                                width={210}
                                height={48}
                                style={{ height: "auto" }}
                                className="w-[180px] sm:w-[200px]"
                            />
                        </Link>
                        <p className="mt-5 max-w-sm text-sm leading-6 text-white/70">
                            Explore apparel references and contact us to confirm
                            specifications, materials, production details, and
                            applicable documentation.
                        </p>
                    </div>

                    <nav aria-label="Explore">
                        <h3 className="flex items-center gap-2 text-sm font-semibold text-white">
                            <Package
                                aria-hidden="true"
                                className="h-4 w-4 text-[#b8c5ff]"
                            />
                            Explore
                        </h3>
                        <ul className="mt-4 space-y-3">
                            {exploreLinks.map(({ href, label }) => (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        className="text-sm text-white/70 transition-colors hover:text-white"
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <nav aria-label="Buyer support">
                        <h3 className="text-sm font-semibold text-white">
                            Buyer support
                        </h3>
                        <ul className="mt-4 space-y-3">
                            {supportLinks.map(({ href, label }) => (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        className="text-sm text-white/70 transition-colors hover:text-white"
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div>
                        <h3 className="text-sm font-semibold text-white">
                            Contact
                        </h3>
                        <p className="mt-4 text-sm leading-6 text-white/70">
                            Discuss product development, samples, and production
                            requirements with our team.
                        </p>
                        <p className="mt-3 text-sm leading-6 text-white/70">
                            S.Archana Garments<br />
                            Ahmedabad, India
                        </p>
                        <a
                            href={`tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE}`}
                            className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-white transition-colors hover:text-[#b8c5ff]"
                        >
                            <Phone
                                aria-hidden="true"
                                className="h-4 w-4 text-[#b8c5ff]"
                            />
                            {process.env.NEXT_PUBLIC_CONTACT_PHONE}
                        </a>
                        <a
                            href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
                            className="mt-1 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-white transition-colors hover:text-[#b8c5ff]"
                        >
                            <Mail
                                aria-hidden="true"
                                className="h-4 w-4 text-[#b8c5ff]"
                            />
                            {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
                        </a>
                        <Link
                            href="/contact"
                            className="mt-1 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-white transition-colors hover:text-[#b8c5ff]"
                        >
                            <Mail
                                aria-hidden="true"
                                className="h-4 w-4 text-[#b8c5ff]"
                            />
                            Send an inquiry
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col gap-3 border-t border-white/15 py-5 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        © {new Date().getFullYear()} Akara (S.Archana Garments).
                        All rights reserved.
                    </p>
                    <p>
                        Specifications and order details are confirmed per
                        inquiry.
                    </p>
                </div>
            </div>
        </footer>
    )
}
