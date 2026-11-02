import {
    ArrowRight,
    CheckCircle,
    ClipboardList,
    MessageCircle,
} from "lucide-react"
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
                        <p className="mt-4 max-w-2xl text-base leading-7 text-[#44474c]">
                            Akara (S.Archana Garments) is a denim and apparel
                            manufacturer based in Ahmedabad, India. We work
                            with buyers across men's, women's, and kids' denim,
                            cotton trousers, jackets, and overshirts — from
                            sampling through to bulk production.
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
                                src="/cinematic_wide_fashion_catalog_lookbook_editorial_banner_fashionable_indian_converted.webp"
                                alt="Illustrative apparel collection reference"
                                fill
                                sizes="(min-width: 1024px) 42vw, 100vw"
                                className="object-cover"
                            />
                            <div className="absolute inset-x-3 bottom-3 rounded bg-[#0f1c2f]/90 p-3 text-sm font-medium text-white backdrop-blur-sm">
                                Illustrative collection reference
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mx-auto max-w-7xl px-4 pb-4 sm:px-6">
                    <div className="grid grid-cols-3 gap-3">
                        {[
                            {
                                src: "/professional_commercial_photography_of_a_modern_b2b_apparel_buyer_showroom_in_converted.webp",
                                alt: "Modern B2B apparel buyer showroom",
                                label: "Buyer showroom",
                            },
                            {
                                src: "/master_sample_tailoring_room_in_a_garment_manufacturing_plant_bespoke_sample_converted.webp",
                                alt: "Master sample tailoring room",
                                label: "Sample room",
                            },
                            {
                                src: "/industrial_commercial_photography_of_a_large_logistics_transport_truck_loading_converted.webp",
                                alt: "Garment export logistics and dispatch",
                                label: "Export & dispatch",
                            },
                        ].map(({ src, alt, label }) => (
                            <div key={src} className="group relative aspect-video overflow-hidden rounded-xl bg-[#e9e8e5]">
                                <Image src={src} alt={alt} fill sizes="(min-width: 1280px) 390px, (min-width: 640px) 33vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
                                <div className="absolute inset-x-3 bottom-3">
                                    <span className="rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">{label}</span>
                                </div>
                            </div>
                        ))}
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
                                    <div
                                        key={title}
                                        className="relative flex items-stretch gap-4"
                                    >
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

                <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6">
                    <div className="mb-4">
                        <span className="text-xs font-semibold text-[#44474c]">Craftsmanship details</span>
                        <h2 className="mt-1 text-2xl font-bold tracking-[-0.03em] text-black">Built into every garment</h2>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                        {[
                            {
                                src: "/Professional macro product photography of heavy-duty copper denim rivets for akara bottom wear, stamped logo detail, on a dark slate background, studio lighting, high _converted.webp",
                                alt: "Heavy-duty copper denim rivets with stamped logo detail",
                                label: "Copper rivets",
                            },
                            {
                                src: "/Professional macro product photography of an embossed genuine leather patch for akara denim and trouser waistbands, detailed texture, on a dark slate background, studi_converted.webp",
                                alt: "Embossed genuine leather patch for denim waistbands",
                                label: "Leather patch",
                            },
                            {
                                src: "/Professional macro product photography of a branded woven waistband label and tag for akara premium denim, clean typography, on a dark slate background, studio lightin_converted.webp",
                                alt: "Branded woven waistband label and tag",
                                label: "Woven label",
                            },
                        ].map(({ src, alt, label }) => (
                            <div key={src} className="group relative aspect-square overflow-hidden rounded-xl bg-[#1a1c1a]">
                                <Image src={src} alt={alt} fill sizes="(min-width: 1280px) 390px, (min-width: 640px) 33vw, 100vw" className="object-cover opacity-90 transition duration-500 group-hover:scale-105 group-hover:opacity-100" />
                                <div className="absolute inset-x-3 bottom-3">
                                    <span className="rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">{label}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
                    <div className="rounded-2xl bg-[#0d1a2d] px-8 py-12 text-center">
                        <h2 className="text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl">
                            Ready to start your inquiry?
                        </h2>
                        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-[#94a3b8]">
                            Share your brief and our team will confirm
                            specifications, minimums, and timelines for your
                            project.
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
