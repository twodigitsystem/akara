import { HelpCircle } from "lucide-react"
import type { Metadata } from "next"
import { SiteFooter } from "@/components/footer"
import { SiteHeader } from "@/components/header"
import { FAQAccordion } from "./_components/faq-accordion"

export const metadata: Metadata = {
    title: "FAQ",
    description:
        "Answers to common questions about product requirements, order minimums, timing, and documentation.",
}

export default function FAQPage() {
    return (
        <div className="bg-[#faf9f6] text-[#1a1c1a]">
            <SiteHeader />
            <main className="pt-20">
                <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:py-16">
                    <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#4059aa] mb-3">
                        <HelpCircle className="h-4 w-4" />
                        <span>Support</span>
                    </div>
                    <h1 className="text-4xl font-bold uppercase leading-[0.98] tracking-[-0.055em] text-black sm:text-5xl">
                        Frequently Asked Questions
                    </h1>
                    <p className="mt-4 text-base leading-7 text-[#44474c]">
                        General answers about product inquiries. Exact
                        specifications, minimums, timelines, and documentation
                        are confirmed for each project.
                    </p>
                    <FAQAccordion />
                </section>
            </main>
            <SiteFooter />
        </div>
    )
}
