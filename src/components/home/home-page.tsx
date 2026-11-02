import Image from "next/image"
import Link from "next/link"
import { HeroSection } from "./hero-section"
import { SampleRequest } from "./sample-request"
import { SegmentGrid } from "./segment-grid"
import { SustainabilityPanel } from "./sustainability-panel"

const facilityStrip = [
    {
        src: "/professional_commercial_photography_of_modern_garment_manufacturing_facility_in_converted.webp",
        alt: "Modern garment manufacturing facility",
        label: "Manufacturing facility",
    },
    {
        src: "/close_up_macro_industrial_photography_of_heavy_duty_computerized_bar_tack_converted.webp",
        alt: "Heavy-duty computerized bar tack stitching machine",
        label: "Bar tack stitching",
    },
    {
        src: "/close_up_commercial_product_shot_of_industrial_garment_washing_and_denim_converted.webp",
        alt: "Industrial garment washing and denim finishing",
        label: "Garment washing",
    },
    {
        src: "/cinematic_wide_b2b_textile_quality_control_laboratory_banner_modern_testing_converted.webp",
        alt: "B2B textile quality control laboratory",
        label: "QC laboratory",
    },
]

export function HomePage() {
    return (
        <main className="w-full">
            <HeroSection />
            <SegmentGrid />

            <section className="bg-[#0f1c2f] py-10 lg:py-14">
                <div className="mx-auto max-w-7xl px-4 sm:px-6">
                    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <span className="text-xs font-semibold text-[#7b9ccc]">Manufacturing capability</span>
                            <h2 className="mt-1 text-2xl font-bold tracking-[-0.03em] text-white sm:text-3xl">Built for production at scale</h2>
                        </div>
                        <Link href="/infrastructure" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#7b9ccc] transition hover:text-white">
                            View all capabilities →
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                        {facilityStrip.map(({ src, alt, label }) => (
                            <div key={src} className="group relative aspect-video overflow-hidden rounded-xl bg-[#1a2a3a]">
                                <Image src={src} alt={alt} fill sizes="(min-width: 1280px) 290px, (min-width: 640px) 25vw, 50vw" className="object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100" />
                                <div className="absolute inset-x-3 bottom-3">
                                    <span className="rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">{label}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <SustainabilityPanel />
            <SampleRequest />
        </main>
    )
}
