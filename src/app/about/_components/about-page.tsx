import { ArrowRight, CheckCircle, ClipboardList, MessageCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { SiteFooter } from "@/components/footer"
import { SiteHeader } from "@/components/header"

const projectSteps = [
    {
        title: "Share your brief",
        detail: "Tell us about the product, fit, materials, and intended order.",
        icon: ClipboardList,
    },
    {
        title: "Confirm the details",
        detail: "Discuss specifications, availability, minimums, and timing with our team.",
        icon: MessageCircle,
    },
    {
        title: "Agree the scope",
        detail: "Proceed once requirements, applicable documents, and commercial terms are confirmed.",
        icon: CheckCircle,
    },
]

export function AboutPage() {
    return (
        <div className="bg-[#faf9f6] text-[#1a1c1a]">
            <SiteHeader />
            <main className="pt-20">
                <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-12 lg:py-16">
                    <div className="lg:col-span-7">
                        <div className="mb-4 inline-flex items-center gap-2 rounded bg-[#e9e8e5] px-3 py-1.5 text-xs font-semibold text-[#4059aa]">
                            Denim & apparel
                        </div>
                        <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-[-0.04em] text-black sm:text-5xl">
                            Apparel development shaped around your brief
                        </h1>
                        <p className="mt-6 max-w-2xl text-base leading-7 text-[#44474c]">
                            Explore product references and share what you are
                            looking to make. Product specifications, materials,
                            production capabilities, minimums, timelines, and
                            compliance information are confirmed with our team
                            for each inquiry.
                        </p>
                        <div className="mt-7 flex flex-wrap items-center gap-3">
                            <Link
                                href="/shop"
                                className="inline-flex min-h-11 items-center gap-2 rounded bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#4059aa]"
                            >
                                Explore product references
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex min-h-11 items-center gap-2 rounded bg-[#e9e8e5] px-5 py-3 text-sm font-semibold text-[#1a1c1a] transition hover:bg-[#dbdad7]"
                            >
                                Contact our team
                            </Link>
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="relative aspect-4/5 overflow-hidden rounded-xl bg-[#e9e8e5] shadow-lg">
                            <Image
                                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80"
                                alt="Illustrative apparel product reference"
                                fill
                                sizes="(min-width: 1024px) 42vw, 100vw"
                                className="object-cover"
                            />
                            <div className="absolute inset-x-3 bottom-3 rounded bg-[#0f1c2f]/90 p-3 text-sm font-medium text-white backdrop-blur-sm">
                                Illustrative reference image
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-[#f4f3f0] px-4 py-12 sm:px-6 lg:py-16">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-8 max-w-2xl">
                            <span className="text-xs font-semibold text-[#4059aa]">
                                A clear project process
                            </span>
                            <h2 className="mt-2 text-3xl font-bold tracking-[-0.04em] text-black sm:text-4xl">
                                Confirm the facts before you commit
                            </h2>
                        </div>
                        <div className="grid gap-4 md:grid-cols-3">
                            {projectSteps.map(
                                ({ title, detail, icon: Icon }, index) => (
                                    <div key={title} className="relative flex items-stretch gap-4">
                                        <article className="flex min-h-56 flex-1 flex-col bg-white p-5 shadow-sm">
                                            <div className="flex items-center justify-between">
                                                <Icon className="h-6 w-6 text-[#4059aa]" />
                                                <span className="font-mono text-xs font-semibold text-[#596171]">
                                                    0{index + 1}
                                                </span>
                                            </div>
                                            <h3 className="mt-8 text-lg font-semibold text-black">
                                                {title}
                                            </h3>
                                            <p className="mt-2 text-sm leading-6 text-[#44474c]">
                                                {detail}
                                            </p>
                                        </article>
                                        {index < projectSteps.length - 1 && (
                                            <div className="hidden items-center md:flex">
                                                <ArrowRight className="h-5 w-5 shrink-0 text-[#c0bfba]" />
                                            </div>
                                        )}
                                    </div>
                                ),
                            )}
                        </div>
                    </div>
                </section>

                <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
                    <div className="rounded-2xl bg-[#0d1a2d] px-8 py-12 text-center">
                        <h2 className="text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl">
                            Ready to start your inquiry?
                        </h2>
                        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-[#94a3b8]">
                            Share your brief and our team will confirm specifications, minimums, and timelines for your project.
                        </p>
                        <div className="mt-8 flex flex-wrap justify-center gap-3">
                            <Link
                                href="/contact"
                                className="inline-flex min-h-11 items-center gap-2 rounded bg-[#4059aa] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#334d8f]"
                            >
                                Request a quote
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                            <Link
                                href="/shop"
                                className="inline-flex min-h-11 items-center gap-2 rounded bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                            >
                                Browse products
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <SiteFooter />
        </div>
    )
}
