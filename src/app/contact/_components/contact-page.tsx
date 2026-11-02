import Image from "next/image"
import { SiteFooter } from "@/components/footer"
import { SiteHeader } from "@/components/header"
import { RfqForm } from "./rfq-form"

const categories: [string, string, string][] = [
    ["mens", "Men's Denim", "Jeans and denim apparel"],
    ["womens", "Women's Denim", "Jeans and denim apparel"],
    ["kids", "Kids & Youth", "Children's apparel"],
    ["chinos", "Chinos & Formal", "Trousers and chinos"],
    ["jackets", "Jackets", "Denim and casual jackets"],
    ["overshirts", "Overshirts", "Overshirt styles"],
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
                                    {process.env.NEXT_PUBLIC_CONTACT_PHONE}
                                </p>
                                <p>
                                    <strong className="text-black">
                                        Email:
                                    </strong>{" "}
                                    <a
                                        href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
                                        className="text-[#4059aa] underline underline-offset-2"
                                    >
                                        {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
                                    </a>
                                </p>
                            </div>
                            <div className="mt-8 grid grid-cols-2 gap-3">
                                {[
                                    {
                                        src: "/cinematic_wide_b2b_apparel_wholesale_showroom_banner_modern_executive_meeting_converted.webp",
                                        alt: "Modern B2B apparel wholesale showroom",
                                        label: "Buyer showroom",
                                        span: "col-span-2",
                                    },
                                    {
                                        src: "/modern_apparel_cad_pattern_grading_workstation_large_computer_monitor_converted.webp",
                                        alt: "Apparel CAD pattern grading workstation",
                                        label: "Pattern & grading",
                                        span: "",
                                    },
                                    {
                                        src: "/high_end_studio_product_photography_of_branded_garment_packaging_and_wholesale_converted.webp",
                                        alt: "Branded garment packaging and wholesale dispatch",
                                        label: "Packaging",
                                        span: "",
                                    },
                                ].map(({ src, alt, label, span }) => (
                                    <div key={src} className={`group relative aspect-video overflow-hidden rounded-xl bg-[#e9e8e5] ${span}`}>
                                        <Image src={src} alt={alt} fill sizes="(min-width: 1280px) 500px, (min-width: 1024px) 40vw, calc(100vw - 2rem)" className="object-cover transition duration-500 group-hover:scale-105" />
                                        <div className="absolute inset-x-3 bottom-3">
                                            <span className="rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">{label}</span>
                                        </div>
                                    </div>
                                ))}
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
