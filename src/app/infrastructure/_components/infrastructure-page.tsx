import { Building2, ClipboardCheck, Factory, Settings } from "lucide-react"
import Image from "next/image"
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

const facilityImages = [
    {
        src: "/busy_industrial_garment_stitching_floor_in_an_indian_apparel_manufacturing_converted.webp",
        alt: "Industrial garment stitching floor",
        label: "Stitching floor",
    },
    {
        src: "/high_precision_fabric_cutting_table_in_an_apparel_factory_large_multi_ply_converted.webp",
        alt: "Fabric cutting table in apparel factory",
        label: "Fabric cutting",
    },
    {
        src: "/high_precision_automated_cnc_fabric_spreading_and_multi_ply_cutting_machine_in_converted.webp",
        alt: "Automated CNC fabric spreading and multi-ply cutting machine",
        label: "CNC spreading & cutting",
    },
    {
        src: "/advanced_commercial_garment_finishing_and_steam_pressing_station_in_a_garment_converted.webp",
        alt: "Garment finishing and steam pressing station",
        label: "Finishing & pressing",
    },
    {
        src: "/industrial_commercial_photography_of_an_advanced_computerized_laser_denim_converted.webp",
        alt: "Advanced computerized laser denim finishing machine",
        label: "Laser denim finishing",
    },
    {
        src: "/professional_industrial_photography_of_an_apparel_testing_and_quality_control_converted.webp",
        alt: "Apparel testing and quality control station",
        label: "Quality control",
    },
    {
        src: "/industrial_photography_of_textile_raw_material_fabric_roll_inventory_warehouse._converted.webp",
        alt: "Textile fabric roll inventory warehouse",
        label: "Fabric warehouse",
    },
    {
        src: "/commercial_b2b_apparel_wholesale_packing_and_dispatch_zone_branded_akara_and_converted.webp",
        alt: "Apparel wholesale packing and dispatch zone",
        label: "Packing & dispatch",
    },
    {
        src: "/industrial_environmental_photography_of_a_modern_zero_liquid_discharge_zld_converted.webp",
        alt: "Zero liquid discharge water treatment plant",
        label: "ZLD water treatment",
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

                <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6">
                    <div className="mb-5">
                        <span className="text-xs font-semibold text-[#4059aa]">Facility overview</span>
                        <h2 className="mt-1 text-2xl font-bold tracking-[-0.03em] text-black">
                            Inside the facility
                        </h2>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {facilityImages.map(({ src, alt, label }) => (
                            <div key={src} className="group relative aspect-video overflow-hidden rounded-xl bg-[#e9e8e5]">
                                <Image
                                    src={src}
                                    alt={alt}
                                    fill
                                    sizes="(min-width: 1280px) 420px, (min-width: 640px) 50vw, 100vw"
                                    className="object-cover transition duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-x-3 bottom-3">
                                    <span className="rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                                        {label}
                                    </span>
                                </div>
                            </div>
                        ))}
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
