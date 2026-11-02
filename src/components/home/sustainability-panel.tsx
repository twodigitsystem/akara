import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const hardwareDetails = [
    {
        src: "/Professional macro product photography of heavy-duty copper denim rivets for akara bottom wear, stamped logo detail, on a dark slate background, studio lighting, high _converted.webp",
        alt: "Heavy-duty copper denim rivets with stamped logo",
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
    {
        src: "/macro_product_photography_of_custom_apparel_hardware_for_akara_bottom_wear_converted.webp",
        alt: "Custom apparel hardware for Akara bottom wear",
        label: "Custom hardware",
    },
]

export function SustainabilityPanel() {
    return (
        <>
            <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:py-10">
                <div className="mb-4 flex items-end justify-between">
                    <div>
                        <span className="text-xs font-semibold text-[#4059aa]">Garment hardware</span>
                        <h2 className="mt-1 text-2xl font-bold tracking-[-0.03em] text-black">Details that define quality</h2>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {hardwareDetails.map(({ src, alt, label }) => (
                        <div key={src} className="group relative aspect-square overflow-hidden rounded-xl bg-[#1a1c1a]">
                            <Image src={src} alt={alt} fill sizes="(min-width: 1280px) 290px, (min-width: 640px) 25vw, 50vw" className="object-cover opacity-90 transition duration-500 group-hover:scale-105 group-hover:opacity-100" />
                            <div className="absolute inset-x-3 bottom-3">
                                <span className="rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">{label}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:pb-12">
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
        </>
    )
}
