import {
    ArrowRight,
    ClipboardCheck,
    Droplets,
    Leaf,
    Sprout,
} from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"
import { SiteFooter } from "@/components/footer"
import { SiteHeader } from "@/components/header"

export const metadata: Metadata = {
    title: "Materials & Compliance",
    description:
        "Discuss materials, processing options, environmental practices, and compliance documentation with Akara.",
}

const topics = [
    {
        title: "Materials",
        detail: "Ask about the fibers and material specifications available for your product.",
        icon: Sprout,
    },
    {
        title: "Processing",
        detail: "Confirm the finishing and processing methods relevant to your product.",
        icon: Droplets,
    },
    {
        title: "Environmental practices",
        detail: "Request current information and evidence for the applicable facility or process.",
        icon: Leaf,
    },
    {
        title: "Compliance documents",
        detail: "Confirm the scope, validity, and product relevance of any supporting documents.",
        icon: ClipboardCheck,
    },
]

export default function SustainabilityPage() {
    return (
        <div className="bg-[#faf9f6] text-[#1a1c1a]">
            <SiteHeader />
            <main className="pt-20">
                <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
                    <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#4059aa] mb-3">
                        <span className="h-2 w-2 rounded-full bg-[#4059aa]" />
                        <span>Materials & compliance</span>
                    </div>
                    <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-[-0.04em] text-black sm:text-5xl">
                        Materials and compliance, verified per project
                    </h1>
                    <p className="mt-5 max-w-3xl text-base leading-7 text-[#44474c]">
                        Product materials, processing methods, environmental
                        practices, and certifications vary by product and
                        project. Contact our team to confirm the options and
                        documentation relevant to your inquiry.
                    </p>
                    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {topics.map(({ title, detail, icon: Icon }) => (
                            <div
                                key={title}
                                className="flex min-h-52 flex-col rounded-xl bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
                            >
                                <Icon className="h-6 w-6 text-[#4059aa]" />
                                <h2 className="mt-8 text-base font-semibold text-black">
                                    {title}
                                </h2>
                                <p className="mt-2 text-sm leading-6 text-[#44474c]">
                                    {detail}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
                    <div className="flex flex-col gap-5 rounded-xl bg-[#0f1c2f] p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
                        <div className="max-w-2xl">
                            <h2 className="text-2xl font-semibold">
                                Ask for evidence before making a claim
                            </h2>
                            <p className="mt-2 text-sm leading-6 text-[#d4d8e0]">
                                Confirm document scope, validity, and relevance
                                to your specific product or facility.
                            </p>
                        </div>
                        <Link
                            href="/contact"
                            className="inline-flex min-h-11 w-fit shrink-0 items-center gap-2 rounded bg-white px-5 py-3 text-sm font-semibold text-[#0f1c2f] transition hover:bg-[#e9e8e5]"
                        >
                            Contact our team
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </section>
            </main>
            <SiteFooter />
        </div>
    )
}
