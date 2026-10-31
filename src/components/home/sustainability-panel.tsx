import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function SustainabilityPanel() {
    return (
        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:py-12">
            <div className="flex flex-col gap-5 rounded-2xl border border-[#dfe3de] bg-white p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
                <div className="max-w-2xl">
                    <p className="text-sm font-semibold text-[#4059aa]">
                        Materials & compliance
                    </p>
                    <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#0d1a2d] sm:text-3xl">
                        Need documentation for your product?
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-[#525d69]">
                        Ask about available materials, processing options, and
                        current documents relevant to your order.
                    </p>
                </div>
                <Link
                    href="/sustainability"
                    className="inline-flex min-h-11 w-fit shrink-0 items-center gap-2 rounded bg-[#0d1a2d] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#4059aa]"
                >
                    View materials & certifications
                    <ArrowRight className="h-4 w-4" />
                </Link>
            </div>
        </section>
    )
}
