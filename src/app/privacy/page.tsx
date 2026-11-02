import { Phone, Shield } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"
import { SiteFooter } from "@/components/footer"
import { SiteHeader } from "@/components/header"

export const metadata: Metadata = {
    title: "Privacy Policy",
    description:
        "Learn what information the Akara website handles, how RFQ submissions are delivered, and what is stored in your browser.",
}

const sections = [
    {
        title: "1. Who this policy covers",
        paragraphs: [
            "This policy describes the information handled through the Akara Denim & Apparel website operated in connection with S.Archana Garments. It applies when you browse the site, use the catalog, or contact the team through the RFQ form.",
            "The site is intended for business inquiries. It is not designed to collect information directly from children.",
        ],
    },
    {
        title: "2. Information you choose to provide",
        paragraphs: [
            "The RFQ form asks for your name, work email address, product category, and optional project notes. If you include products from your Quote Deck, the form also sends the selected product references, requested quantities, and any notes attached to those products.",
            "Please do not include passwords, payment-card information, government identification numbers, or confidential information that is not needed to respond to your inquiry. File attachments are not currently supported.",
        ],
    },
    {
        title: "3. How RFQ delivery works",
        paragraphs: [
            "The website validates an RFQ and, only when online delivery is configured, forwards it to the HTTPS destination selected by the site operator. A submission is reported as delivered only after that destination accepts the request.",
            "The website application does not currently maintain its own persistent RFQ database. The receiving service may process or retain a delivered request under its own controls and terms. The destination and its location depend on the deployment configuration; contact us if you need to know the current recipient.",
            "If online delivery is not configured or the destination does not accept the request, the form reports an error and asks you to contact us by phone. Do not assume an unsuccessful submission reached the team.",
        ],
    },
    {
        title: "4. Browser storage",
        paragraphs: [
            "To support catalog features, this site stores your Quote Deck selections and product notes, Compare selections, and saved catalog filters in local storage in your browser. This lets those choices remain available on that browser between visits. These selections are not sent to the RFQ recipient unless you include the Quote Deck in a submitted inquiry.",
            "You can remove this information by clearing this site's browser storage or site data in your browser settings. Clearing it also removes your saved selections and filters.",
        ],
    },
    {
        title: "5. Why information is used",
        paragraphs: [
            "Information in an inquiry is used to review and respond to your product, sample, and manufacturing questions; prepare follow-up discussions; and operate and protect the inquiry service.",
            "The site does not currently use RFQ details for an automated marketing subscription or advertising campaign. If that changes, the site should explain the new use and obtain any consent required by applicable law.",
        ],
    },
    {
        title: "6. Service providers and technical data",
        paragraphs: [
            "Website hosting, network delivery, security, and the configured RFQ destination may involve service providers processing information on behalf of the site operator. Their identities, processing locations, and retention practices depend on the live deployment and are not all specified in the website source code.",
            "Like most websites, the hosting or network provider may process technical request data such as an IP address, browser or device details, requested pages, and timestamps in operational or security logs. The applicable provider determines its log settings and retention.",
            "Product and illustrative images may be requested from external image sources. When external assets are used, the relevant service may receive technical request information. The local images in the product gallery do not require a browser request to their original design-reference location.",
        ],
    },
    {
        title: "7. Cookies, analytics, and similar technologies",
        paragraphs: [
            "The application code currently stores catalog preferences in browser local storage and does not implement an advertising tracker or analytics platform. Hosting, security, or framework infrastructure may use technical mechanisms needed to deliver and protect the service. Check your browser settings to manage local storage and cookies.",
        ],
    },
    {
        title: "8. Retention, security, and transfers",
        paragraphs: [
            "Catalog data remains in your browser until you clear it or the browser removes it. RFQ retention is controlled by the receiving service and the business's handling of inquiries; the website code does not define a fixed retention period. The site operator should confirm the live recipient's retention and deletion process before relying on this policy as a complete operational notice.",
            "The RFQ endpoint requires HTTPS before forwarding a request. No internet transmission or storage method can be guaranteed completely secure; access and safeguards also depend on the hosting and receiving providers.",
            "If the configured RFQ recipient or a service provider processes data outside your country, cross-border handling may occur. The destination depends on deployment configuration and applicable law.",
        ],
    },
    {
        title: "9. Your choices and requests",
        paragraphs: [
            "You may choose not to submit an inquiry, omit optional project notes, or clear catalog data from your browser. Depending on the law that applies to you, you may also be entitled to request access to, correction of, or deletion of personal information, or to object to or restrict certain processing.",
            "To ask about an RFQ recipient, request help with a privacy matter, or exercise a right available under applicable law, contact us using the details below. We may need to verify your identity and coordinate with the receiving service before responding.",
        ],
    },
    {
        title: "10. Changes and contact",
        paragraphs: [
            "This policy may be updated when the site's data handling or legal requirements change. The date at the top indicates when this version was last revised.",
        ],
    },
]

export default function PrivacyPage() {
    return (
        <div className="bg-[#faf9f6] text-[#1a1c1a]">
            <SiteHeader />
            <main className="pt-20">
                <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:py-16">
                    <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-[#4059aa]">
                        <Shield aria-hidden="true" className="h-4 w-4" />
                        <span>Website policy</span>
                    </div>
                    <h1 className="text-4xl font-bold leading-tight tracking-[-0.04em] text-[#0f1c2f] sm:text-5xl">
                        Privacy policy
                    </h1>
                    <p className="mt-4 text-sm text-[#596171]">
                        Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
                    </p>
                    <p className="mt-6 rounded-lg border border-[#d8dff8] bg-[#eef1ff] p-4 text-sm leading-6 text-[#303d69]">
                        This policy describes the website behavior currently
                        implemented. The live RFQ recipient, hosting-provider
                        logs, and their retention settings depend on deployment
                        configuration and should be confirmed by the site
                        operator.
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
                                Contact about privacy
                            </h2>
                            <p className="mt-3 text-sm leading-7 text-[#44474c]">
                                Contact S.Archana Garments using our{" "}
                                <Link
                                    href="/contact"
                                    className="font-medium text-[#4059aa] underline underline-offset-2"
                                >
                                    inquiry page
                                </Link>{" "}
                                or call{" "}
                                <a
                                    href={`tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE}`}
                                    className="inline-flex items-center gap-1 font-medium text-[#4059aa] underline underline-offset-2"
                                >
                                    <Phone
                                        aria-hidden="true"
                                        className="h-3.5 w-3.5"
                                    />
                                    {process.env.NEXT_PUBLIC_CONTACT_PHONE}
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
