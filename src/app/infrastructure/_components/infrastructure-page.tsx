import { Building2, ClipboardCheck, Factory, Settings } from "lucide-react"
import Link from "next/link"
import { SiteFooter } from "@/components/footer"
import { SiteHeader } from "@/components/header"

const topics = [
    {
        title: "Facility details",
        detail: "Ask which locations and operations are relevant to your product.",
        icon: Building2,
    },
    {
        title: "Processes",
        detail: "Discuss the processes and equipment required for your specification.",
        icon: Settings,
    },
    {
        title: "Capacity & timing",
        detail: "Confirm current capacity and a production schedule for your order.",
        icon: Factory,
    },
    {
        title: "Quality & compliance",
        detail: "Agree inspection criteria and request current supporting documents.",
        icon: ClipboardCheck,
    },
]

export function InfrastructurePage() {
    return (
        <div className="bg-[#faf9f6] text-[#1a1c1a]">
            <SiteHeader />
            <main className="pt-20">
                <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
                    <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#4059aa]">
                        Manufacturing & operations
                    </div>
                    <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
                        <div className="lg:col-span-8">
                            <h1 className="text-4xl font-bold leading-tight tracking-[-0.04em] text-black sm:text-5xl">
                                Production details for your project
                            </h1>
                            <p className="mt-5 max-w-3xl text-base leading-7 text-[#44474c]">
                                Facility information, processes, equipment,
                                capacity, quality requirements, and timing can
                                vary by product and order. Contact our team to
                                confirm details relevant to your inquiry.
                            </p>
                        </div>
                        <Link
                            href="/contact"
                            className="inline-flex min-h-11 w-fit items-center rounded bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#4059aa] lg:col-span-4"
                        >
                            Discuss your requirements
                        </Link>
                    </div>
                </section>

                <section className="bg-[#f4f3f0] px-4 py-12 sm:px-6">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-7">
                            <span className="text-xs font-semibold text-[#44474c]">
                                Confirm details before planning
                            </span>
                            <h2 className="mt-2 text-3xl font-bold tracking-[-0.04em] text-black sm:text-4xl">
                                The details buyers usually need
                            </h2>
                        </div>
                        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                            {topics.map(({ title, detail, icon: Icon }) => (
                                <article
                                    key={title}
                                    className="flex min-h-48 flex-col justify-between rounded-xl bg-white p-5 shadow-sm"
                                >
                                    <Icon className="h-6 w-6 text-[#4059aa]" />
                                    <div>
                                        <h3 className="text-base font-semibold text-black">
                                            {title}
                                        </h3>
                                        <p className="mt-2 text-xs leading-5 text-[#44474c]">
                                            {detail}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
                    <div className="flex flex-col gap-4 rounded-xl bg-[#0f1c2f] p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
                        <div>
                            <h2 className="text-2xl font-semibold">
                                Need facility or capacity details?
                            </h2>
                            <p className="mt-2 text-sm leading-6 text-[#d4d8e0]">
                                Share your product and target order so our team
                                can confirm what applies.
                            </p>
                        </div>
                        <Link
                            href="/contact"
                            className="inline-flex min-h-11 w-fit shrink-0 items-center rounded bg-white px-5 py-3 text-sm font-semibold text-[#0f1c2f] transition hover:bg-[#e9e8e5]"
                        >
                            Discuss a project
                        </Link>
                    </div>
                </section>
            </main>
            <SiteFooter />
        </div>
    )
}
