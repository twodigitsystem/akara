"use client"

import { ArrowUpRight, Menu, ShoppingBag, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const primaryNavigation = [
    { label: "Products", href: "/shop" },
    { label: "Capabilities", href: "/infrastructure" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
]

const additionalNavigation = [
    { label: "Materials & compliance", href: "/sustainability" },
    { label: "FAQ", href: "/faq" },
]

export function SiteHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const mobileNavItems = [
        ...primaryNavigation,
        ...additionalNavigation,
        { label: "Quote Deck", href: "/quote-deck" },
        { label: "Compare", href: "/compare" },
    ]

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsMenuOpen(false)
        }
        document.addEventListener("keydown", handleEscape)
        return () => document.removeEventListener("keydown", handleEscape)
    }, [])

    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-[#e3e2df]/80 bg-[#faf9f6]/95 shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-md print:hidden">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-4 sm:gap-6 sm:px-6">
                <Link
                    href="/"
                    className="flex shrink-0 items-center gap-3 leading-none"
                    aria-label="Akara home"
                >
                    <Image
                        src="/akara-logo.svg"
                        alt="Akara Denim & Apparel Mfg"
                        width={190}
                        height={44}
                        priority
                        style={{ height: "auto" }}
                        className="w-[148px] sm:w-[172px] lg:w-[190px]"
                    />
                </Link>

                <nav
                    className="hidden items-center gap-5 xl:flex"
                    aria-label="Primary navigation"
                >
                    {primaryNavigation.map(({ label, href }) => (
                        <Link
                            key={href}
                            href={href}
                            className="whitespace-nowrap text-sm font-medium text-[#44474c] transition-colors hover:text-[#4059aa]"
                        >
                            {label}
                        </Link>
                    ))}
                </nav>

                <div className="flex shrink-0 items-center gap-2 sm:gap-3">
                    <Link
                        href="/quote-deck"
                        className="hidden items-center gap-1.5 rounded bg-[#e9e8e5] px-3 py-2.5 text-xs font-semibold text-[#1a1c1a] transition-colors hover:bg-[#dbdad7] sm:inline-flex"
                        aria-label="Open quote deck"
                    >
                        <ShoppingBag className="h-3.5 w-3.5" />
                        <span className="hidden lg:inline">Quote deck</span>
                    </Link>
                    <Link
                        href="/contact"
                        className="hidden items-center gap-1.5 rounded bg-[#4059aa] px-3 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#0f1c2f] sm:inline-flex"
                        aria-label="Request a quote"
                    >
                        <span className="hidden lg:inline">
                            Request a quote
                        </span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                    <button
                        type="button"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="rounded p-2 text-[#44474c] transition-colors hover:bg-[#e9e8e5] hover:text-black xl:hidden"
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMenuOpen}
                        aria-controls="primary-mobile-navigation"
                    >
                        {isMenuOpen ? (
                            <X className="h-5 w-5" />
                        ) : (
                            <Menu className="h-5 w-5" />
                        )}
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="border-t border-[#e3e2df] bg-[#faf9f6] xl:hidden">
                    <nav
                        id="primary-mobile-navigation"
                        className="mx-auto grid max-w-7xl grid-cols-2 gap-2 px-4 py-4 sm:px-6 md:grid-cols-3"
                        aria-label="Mobile navigation"
                    >
                        {mobileNavItems.map(({ label, href }) => (
                            <Link
                                key={href}
                                href={href}
                                onClick={() => setIsMenuOpen(false)}
                                className="flex min-h-11 items-center rounded px-3 py-2 text-sm font-medium text-[#44474c] transition-colors hover:bg-[#e9e8e5] hover:text-[#4059aa]"
                            >
                                {label}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    )
}
