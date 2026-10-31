import Link from "next/link"
import { SiteFooter } from "@/components/footer"
import { SiteHeader } from "@/components/header"
import { CatalogBrowser } from "./catalog-browser"

export function CatalogPage() {
    return (
        <div className="bg-[#faf9f6] text-[#1a1c1a]">
            <SiteHeader />
            <main className="pt-20">
                <section className="overflow-hidden border-b border-[#e3e2df] bg-[#f4f3f0]">
                    <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-12 lg:py-16">
                        <div className="max-w-3xl">
                            <p className="text-sm font-semibold tracking-wide text-[#4059aa]">
                                Apparel references
                            </p>
                            <h1 className="mt-3 text-4xl font-bold leading-[1.05] tracking-[-0.045em] text-[#0f1c2f] sm:text-5xl lg:text-6xl">
                                Find a style to
                                <br className="hidden sm:block" /> start your
                                next brief.
                            </h1>
                            <p className="mt-5 max-w-2xl text-base leading-7 text-[#44474c] sm:text-lg sm:leading-8">
                                Explore denim and apparel references, then tell
                                us what you’d like to make. We’ll confirm
                                specifications, minimums, and timing for your
                                inquiry.
                            </p>
                        </div>
                        <div className="flex flex-wrap items-center gap-3 lg:justify-end">
                            <Link
                                href="/contact"
                                className="inline-flex min-h-12 items-center justify-center rounded bg-[#4059aa] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0f1c2f]"
                            >
                                Start an inquiry
                            </Link>
                            <Link
                                href="/quote-deck"
                                className="inline-flex min-h-12 items-center justify-center rounded border border-[#c5c6cd] bg-[#faf9f6] px-5 py-3 text-sm font-semibold text-[#1a1c1a] transition-colors hover:border-[#4059aa] hover:text-[#4059aa]"
                            >
                                View Quote Deck
                            </Link>
                        </div>
                    </div>
                </section>
                <CatalogBrowser />
            </main>
            <SiteFooter />
        </div>
    )
}
