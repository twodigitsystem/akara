import Image from "next/image"
import { SiteFooter } from "@/components/footer"
import { SiteHeader } from "@/components/header"
import { RfqForm } from "./rfq-form"

const categories: [string, string, string][] = [
    ["mens", "Men's Denim", "Jeans and denim apparel"],
    ["womens", "Women's Denim", "Jeans and denim apparel"],
    ["kids", "Kids & Youth", "Children's apparel"],
    ["chinos", "Chinos & Formal", "Trousers and chinos"],
    ["jackets", "Jackets", "Jacket styles"],
    ["overshirt", "Overshirts", "Overshirt styles"],
]

export function ContactPage() {
    return (
        <div className="bg-[#faf9f6] text-[#1a1c1a]">
            <SiteHeader />
            <main className="pt-20">
                <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
                    <div className="flex flex-col gap-4 mb-8">
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="rounded bg-[#0f1c2f] px-2 py-1 text-xs font-medium text-white">
                                Request for Quote
                            </span>
                            <span className="text-xs font-medium text-[#4059aa]">
                                Product inquiry
                            </span>
                        </div>
                        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
                            <div>
                                <h1 className="text-4xl font-bold leading-tight tracking-[-0.04em] text-black sm:text-5xl">
                                    Product Inquiry & Quotation
                                </h1>
                                <p className="mt-4 max-w-3xl text-base leading-7 text-[#44474c]">
                                    Tell us about your product, quantity, and
                                    requirements. We will confirm the next steps
                                    after your request is received.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
                        <div className="lg:col-span-5">
                            <div className="space-y-3 border-l-2 border-[#4059aa] pl-4 text-sm text-[#44474c]">
                                <p>
                                    <strong className="text-black">
                                        Submission:
                                    </strong>{" "}
                                    we show whether your request was delivered
                                </p>
                                <p>
                                    <strong className="text-black">
                                        Sampling:
                                    </strong>{" "}
                                    ask about sample availability and product
                                    requirements
                                </p>
                                <p>
                                    <strong className="text-black">
                                        Direct desk:
                                    </strong>{" "}
                                    +91 7817 966 192
                                </p>
                            </div>
                            <div className="relative mt-8 h-56 overflow-hidden bg-white p-2 shadow-lg">
                                <Image
                                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1000&q=80"
                                    alt="Illustrative textile and apparel reference"
                                    fill
                                    sizes="(min-width: 1280px) 500px, (min-width: 1024px) 40vw, calc(100vw - 2rem)"
                                    className="object-cover p-2"
                                />
                            </div>
                        </div>
                        <RfqForm categories={categories} />
                    </div>
                </section>
            </main>
            <SiteFooter />
        </div>
    )
}
