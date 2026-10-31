import { FileText, Phone } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"
import { SiteFooter } from "@/components/footer"
import { SiteHeader } from "@/components/header"

export const metadata: Metadata = {
    title: "Website Terms",
    description:
        "Terms for using the Akara Denim & Apparel product-reference catalog and inquiry tools.",
}

const sections = [
    {
        title: "1. About these website terms",
        paragraphs: [
            "These terms describe use of the Akara Denim & Apparel website associated with S.Archana Garments. By browsing or using the site's catalog, comparison tools, Quote Deck, or inquiry form, you agree to use them lawfully and in accordance with these terms.",
            "These website terms are not a manufacturing, supply, purchase, or distribution agreement. Any signed agreement, accepted purchase order, or transaction-specific written terms agreed by the parties govern the relevant commercial engagement and take precedence over general website descriptions where they conflict.",
        ],
    },
    {
        title: "2. Product references and images",
        paragraphs: [
            "Catalog entries and images are references to help describe a style or start a discussion. Some images are illustrative or generated references and may not depict an item made, held, or offered by S.Archana Garments.",
            "Images, colors, proportions, and descriptions may not show exact material, construction, finish, fit, or production options. Do not treat them as a sample, technical specification, certification, or guarantee that a particular product is available.",
            "Product specifications, materials, samples, testing, tolerances, packaging, labeling, compliance documentation, and production capability must be confirmed for the specific project in writing.",
        ],
    },
    {
        title: "3. Inquiries, quotations, and orders",
        paragraphs: [
            "Submitting an RFQ or adding an item to a Quote Deck is a request for discussion only. It is not an offer, purchase order, accepted order, or commitment by either party to proceed.",
            "Prices, taxes, minimums, quantities, availability, sample charges, production capacity, lead times, shipping, payment terms, and other commercial terms are not established by this website. They become applicable only when confirmed in a transaction-specific written quotation or agreement.",
            "An inquiry is received only when the website confirms successful delivery. If delivery fails or the form says online submission is unavailable, contact us by phone; do not assume the request was received.",
        ],
    },
    {
        title: "4. Samples and development",
        paragraphs: [
            "Sample availability, development scope, charges, timelines, ownership, approval process, and any production relationship must be agreed in writing for each project. A request for a sample does not itself create an obligation to produce or supply one.",
            "Before bulk production, the parties should document the approved reference sample, specification, testing criteria, tolerances, and sign-off process in the relevant written agreement.",
        ],
    },
    {
        title: "5. Product comparison and browser tools",
        paragraphs: [
            "The Quote Deck, comparison view, saved searches, and sorting or filtering controls are convenience tools. Their selections are stored in the browser and do not reserve products, create an order, or guarantee availability.",
            "The tools are provided for general reference. Verify quantities and all project details with the team before relying on them in a commercial decision.",
        ],
    },
    {
        title: "6. Your submissions and acceptable use",
        paragraphs: [
            "You are responsible for providing accurate contact details and information you are authorized to share. Do not submit another person's personal information without permission, unlawful content, malicious code, or material that infringes another party's rights.",
            "Do not attempt to disrupt, probe, scrape, reverse engineer, or gain unauthorized access to the site or its services. The site operator may restrict access where reasonably necessary to protect the site, its users, or its systems.",
            "Personal information submitted through the inquiry form is handled as described in our Privacy Policy.",
        ],
    },
    {
        title: "7. Website content and intellectual property",
        paragraphs: [
            "Unless stated otherwise, the website's text, branding, layout, and other original materials are owned by or used with permission by the relevant rights holder. Product images may be illustrative and may have separate rights holders.",
            "You may view and use the website for your own business inquiry. You may not reproduce, republish, commercially exploit, or remove ownership notices from site materials without permission from the relevant rights holder, except where applicable law permits.",
        ],
    },
    {
        title: "8. Availability and liability",
        paragraphs: [
            "The site and its tools may be changed, interrupted, or unavailable. Information is provided to support an initial inquiry and is not a substitute for project-specific written specifications or professional advice.",
            "To the extent permitted by applicable law, the site operator is not responsible for indirect or consequential loss arising solely from reliance on general website references, temporary service interruptions, or browser-stored selections. Nothing in these terms excludes liability that applicable law does not allow to be excluded.",
        ],
    },
    {
        title: "9. Changes and governing terms",
        paragraphs: [
            "These website terms may be updated as the site or its services change. The date at the top identifies the current version. Continued use after an update means the revised terms apply to future use, subject to applicable law.",
            "These website terms do not designate an exclusive governing-law jurisdiction or dispute forum. Applicable mandatory law continues to apply; any governing law, venue, dispute process, or additional risk allocation for a commercial order should be stated in the written agreement for that transaction.",
        ],
    },
]

export default function TermsPage() {
    return (
        <div className="bg-[#faf9f6] text-[#1a1c1a]">
            <SiteHeader />
            <main className="pt-20">
                <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:py-16">
                    <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-[#4059aa]">
                        <FileText aria-hidden="true" className="h-4 w-4" />
                        <span>Website terms</span>
                    </div>
                    <h1 className="text-4xl font-bold leading-tight tracking-[-0.04em] text-[#0f1c2f] sm:text-5xl">
                        Terms of use
                    </h1>
                    <p className="mt-4 text-sm text-[#596171]">
                        Last updated: October 31, 2026
                    </p>
                    <p className="mt-6 rounded-lg border border-[#d8dff8] bg-[#eef1ff] p-4 text-sm leading-6 text-[#303d69]">
                        These terms cover use of this informational catalog and
                        its inquiry tools. They are not a substitute for a
                        signed manufacturing or supply agreement. Have local
                        counsel review them before relying on them as a legal
                        contract.
                    </p>

                    <div className="mt-8 space-y-5">
                        {sections.map(({ title, paragraphs }) => (
                            <section
                                key={title}
                                className="rounded-lg border border-[#e3e2df] bg-white p-5 sm:p-6"
                            >
                                <h2 className="text-lg font-semibold tracking-tight text-[#0f1c2f]">
                                    {title}
                                </h2>
                                <div className="mt-3 space-y-3 text-sm leading-7 text-[#44474c]">
                                    {paragraphs.map((paragraph) => (
                                        <p key={paragraph}>{paragraph}</p>
                                    ))}
                                </div>
                            </section>
                        ))}
                        <section className="rounded-lg border border-[#e3e2df] bg-white p-5 sm:p-6">
                            <h2 className="text-lg font-semibold tracking-tight text-[#0f1c2f]">
                                Contact
                            </h2>
                            <p className="mt-3 text-sm leading-7 text-[#44474c]">
                                For questions about these website terms, use our{" "}
                                <Link
                                    href="/contact"
                                    className="font-medium text-[#4059aa] underline underline-offset-2"
                                >
                                    inquiry page
                                </Link>{" "}
                                or call{" "}
                                <a
                                    href="tel:+917817966192"
                                    className="inline-flex items-center gap-1 font-medium text-[#4059aa] underline underline-offset-2"
                                >
                                    <Phone
                                        aria-hidden="true"
                                        className="h-3.5 w-3.5"
                                    />
                                    +91 7817 966 192
                                </a>
                                .
                            </p>
                        </section>
                    </div>
                </article>
            </main>
            <SiteFooter />
        </div>
    )
}
