import { ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const segments = [
    {
        id: "segment-01",
        title: "Men's Denim",
        detail: "Share your preferred silhouette, fabric, finish, and other product requirements with our team.",
        image: "/commercial_apparel_lookbook_photography_of_an_indian_male_model_wearing_relaxed_converted.webp",
        href: "/shop?category=mens-denim",
    },
    {
        id: "segment-02",
        title: "Women's Denim",
        detail: "Discuss fit, material, finish, and design preferences for your collection.",
        image: "/high_fashion_commercial_catalog_photography_of_an_indian_female_model_wearing_converted.webp",
        href: "/shop?category=womens-denim",
    },
    {
        id: "segment-03",
        title: "Kids' Apparel",
        detail: "Share the age range, fit, fabric, and construction requirements for your product.",
        image: "/commercial_e_commerce_lifestyle_catalog_photography_of_cute_indian_children_boy_converted.webp",
        href: "/shop?category=kids-jeans",
    },
    {
        id: "segment-04",
        title: "Trousers & Chinos",
        detail: "Discuss silhouettes, fabric options, and finishing requirements for your program.",
        image: "/products/cotton-formal-trouser-reference.jpg",
        href: "/shop?category=cotton-apparels",
    },
    {
        id: "segment-05",
        title: "Jackets",
        detail: "Share your jacket silhouette, fabric, wash, and construction requirements.",
        image: "/cinematic_wide_commercial_banner_photography_for_akara_denim_and_apparel_converted.webp",
        href: "/shop?category=jackets",
    },
    {
        id: "segment-06",
        title: "Overshirts",
        detail: "Discuss overshirt styles, fabric options, and finishing details with our team.",
        image: "/cinematic_wide_fashion_catalog_lookbook_editorial_banner_fashionable_indian_converted.webp",
        href: "/shop?category=overshirts",
    },
]

export function SegmentGrid() {
    return (
        <section className="w-full bg-[#f4f3f0] py-10 lg:py-14">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="mb-7 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                    <div>
                        <div className="mb-2 text-sm font-semibold text-[#4059aa]">
                            Product categories
                        </div>
                        <h2 className="text-3xl font-bold leading-tight tracking-[-0.04em] text-black md:text-4xl">
                            Explore product references
                        </h2>
                    </div>
                    <p className="max-w-xl text-sm leading-6 text-[#4e5867] md:text-base">
                        These images are illustrative. Share a style you like
                        and tell us what you’d change.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {segments.map((segment) => (
                        <article
                            key={segment.id}
                            className="group overflow-hidden rounded-xl bg-white p-5 shadow-sm transition hover:shadow-xl"
                        >
                            <div className="relative h-56 w-full overflow-hidden rounded-lg bg-[#e9ece7] sm:h-64">
                                <Image
                                    src={segment.image}
                                    alt={`${segment.title} illustrative reference`}
                                    fill
                                    sizes="(min-width: 1280px) 600px, (min-width: 768px) 50vw, calc(100vw - 3rem)"
                                    className="object-cover transition duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-x-3 bottom-3 flex flex-wrap gap-1">
                                    <span className="rounded-full bg-white/95 px-3 py-1.5 text-xs font-medium text-[#2b3444]">
                                        Illustrative image
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-4 pt-5">
                                <h3 className="text-xl font-semibold leading-tight tracking-[-0.02em] text-black">
                                    {segment.title}
                                </h3>
                                <p className="text-sm leading-6 text-[#505968]">
                                    {segment.detail}
                                </p>

                                <div className="border-t border-[#e4e3de] pt-3">
                                    <Link
                                        href={segment.href}
                                        className="inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-[#2c4c86] transition hover:text-[#09172a]"
                                    >
                                        Browse {segment.title}{" "}
                                        <ChevronRight className="h-3.5 w-3.5" />
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
