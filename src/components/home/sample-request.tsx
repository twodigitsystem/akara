import Image from "next/image"
import Link from "next/link"

export function SampleRequest() {
    return (
        <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:py-10">
            <div className="rounded-4xl border border-[#dfe3db] bg-[#f9f7f4] p-6 md:p-8">
                <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                    <div>
                        <div className="text-sm font-semibold text-[#4059aa]">
                            Product samples
                        </div>
                        <h2 className="mt-2 text-3xl font-bold leading-tight tracking-[-0.04em] text-[#0d1a2d] sm:text-4xl">
                            Ask about product samples
                        </h2>
                        <p className="mt-4 max-w-lg text-base leading-7 text-[#4b5364]">
                            Contact our team to ask about sample availability,
                            formats, and timing for your requirements.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <Link
                                href="/contact"
                                className="inline-flex min-h-11 items-center rounded bg-[#0d1a2d] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1d2d46]"
                            >
                                Ask About Samples
                            </Link>
                            <a
                                href={`tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE}`}
                                className="inline-flex min-h-11 items-center rounded border border-[#c7c8c3] px-5 py-3 text-sm font-semibold text-[#1b2433] transition hover:border-[#586a87] hover:text-[#0d1a2d]"
                            >
                                {process.env.NEXT_PUBLIC_CONTACT_PHONE}
                            </a>
                        </div>
                    </div>

                    <div>
                        <p className="mb-3 text-sm text-[#5d6575]">
                            Illustrative product references only. Use them to
                            show the style or detail you want to discuss.
                        </p>
                        <div className="grid gap-4 sm:grid-cols-2">
                            {[
                                {
                                    image: "/products/mens-selvedge-denim-reference.jpg",
                                    alt: "Illustrative men's denim product reference",
                                },
                                {
                                    image: "/products/mens-denim-selvedge-detail.jpg",
                                    alt: "Illustrative denim fabric construction detail",
                                },
                                {
                                    image: "/products/cotton-formal-trouser-reference.jpg",
                                    alt: "Illustrative trouser product reference",
                                },
                                {
                                    image: "/products/cotton-trouser-construction-detail.jpg",
                                    alt: "Illustrative trouser construction detail",
                                },
                            ].map(({ image, alt }) => (
                                <div
                                    key={image}
                                    className="relative h-36 overflow-hidden rounded-xl bg-[#e9e8e5] sm:h-40"
                                >
                                    <Image
                                        src={image}
                                        alt={alt}
                                        fill
                                        sizes="(min-width: 1280px) 310px, (min-width: 1024px) 27vw, (min-width: 640px) 45vw, calc(100vw - 2rem)"
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
