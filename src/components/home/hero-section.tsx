import { ArrowRight, MessageCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projectPrompts = [
    "Product type",
    "Fit or size range",
    "Material and finish",
    "Expected quantity",
]

export function HeroSection() {
    return (
        <section className="relative w-full overflow-hidden bg-[#faf9f6] pb-8 pt-24 lg:pb-12 lg:pt-28">
            <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-[#f4f3f0] via-[#faf9f6] to-[#e9e8e5]/40" />
            <div
                className="pointer-events-none absolute right-0 top-0 h-full w-1/3 opacity-5 bg-repeat"
                style={{
                    backgroundImage:
                        "radial-gradient(#000000 1px, transparent 1px)",
                    backgroundSize: "16px 16px",
                }}
            />
            <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12">
                <div className="flex flex-col gap-5 lg:col-span-7">
                    <div className="space-y-2">
                        <span className="block text-xs font-semibold tracking-wide text-[#4059aa]">
                            Apparel product references
                        </span>
                        <h1 className="max-w-3xl text-4xl font-bold leading-[1.04] tracking-[-0.04em] text-black md:text-5xl lg:text-6xl">
                            Explore Denim & Apparel for Your Next Collection
                        </h1>
                    </div>

                    <p className="max-w-2xl text-base leading-7 text-[#44474c] md:text-lg">
                        Explore apparel references and share the materials, fit,
                        finish, and order requirements you have in mind. Product
                        specifications, availability, and production terms are
                        confirmed with our team.
                    </p>

                    <div className="flex flex-wrap items-center gap-3 pt-1">
                        <Link
                            href="/shop"
                            className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded bg-black px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#4059aa] sm:w-auto"
                        >
                            Browse products
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded bg-[#4059aa] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-black sm:w-auto"
                        >
                            <MessageCircle className="h-4 w-4" />
                            Discuss your requirements
                        </Link>
                    </div>

                    <div className="pt-2">
                        <p className="text-sm font-semibold text-[#1a1c1a]">
                            Helpful details to include
                        </p>
                        <ul className="mt-2 flex flex-wrap gap-2">
                            {projectPrompts.map((prompt) => (
                                <li
                                    key={prompt}
                                    className="rounded-full border border-[#d8d7d2] bg-white px-3 py-1.5 text-sm text-[#44474c]"
                                >
                                    {prompt}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="relative lg:col-span-5">
                    <div className="relative bg-white p-2 shadow-[0_14px_30px_rgba(15,19,28,0.12)]">
                        <div className="relative h-82.5 w-full overflow-hidden rounded-lg bg-[#efeeeb] sm:h-110">
                            <Image
                                src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1400&q=80"
                                alt="Illustrative apparel product reference"
                                fill
                                sizes="(min-width: 1280px) 500px, (min-width: 1024px) 42vw, 100vw"
                                priority
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
                            <div className="absolute left-4 top-4 rounded bg-white/90 px-3 py-2 text-xs font-medium text-[#1a1c1a] backdrop-blur-sm">
                                Illustrative product image
                            </div>
                        </div>
                        <div className="absolute inset-x-6 bottom-6 rounded bg-white/95 p-4 shadow-md backdrop-blur-sm">
                            <p className="text-sm font-semibold text-[#44474c]">
                                Denim · trousers · casual apparel
                            </p>
                            <p className="mt-1 text-xs text-[#596171]">
                                Product details confirmed per inquiry
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
