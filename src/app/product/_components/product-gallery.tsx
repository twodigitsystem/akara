"use client"

import { ArrowRight, X, ZoomIn } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { SiteFooter } from "@/components/footer"
import { SiteHeader } from "@/components/header"
import type { Product } from "@/lib/products"
import { PrintSheetButton } from "./print-sheet-button"

export function ProductGallery({ product }: { product: Product }) {
    const [selectedImage, setSelectedImage] = useState(0)
    const [isLightboxOpen, setIsLightboxOpen] = useState(false)

    const images = (product.images ?? [product.image]).map((src, index) => ({
        id: index === 0 ? "main" : `view-${index + 1}`,
        src,
        alt:
            index === 0
                ? `${product.title} illustrative product reference`
                : `${product.title} illustrative detail view ${index + 1}`,
    }))

    const specs: [string, string][] = [
        ["Weight", "Confirmed per inquiry"],
        ["Composition", "Confirmed per inquiry"],
        ["Wash & finish", "Confirmed per inquiry"],
        ["Construction", "Confirmed per inquiry"],
        ["Minimum order", "Confirmed per inquiry"],
        ["Quality requirements", "Agreed per inquiry"],
    ]

    return (
        <div className="bg-[#faf9f6] text-[#1a1c1a]">
            <SiteHeader />
            <main className="pt-20">
                <div className="bg-[#f4f3f0] px-4 py-3 shadow-sm">
                    <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#44474c]">
                        <div className="flex items-center gap-2">
                            <Link
                                href="/shop"
                                className="hover:text-black transition-colors"
                            >
                                Catalog
                            </Link>
                            <span className="text-[#c5c6cd]">/</span>
                            <span className="text-[#1a1c1a]">
                                Product reference
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="px-2 py-0.5 rounded-full bg-[#e9e8e5] text-[#1a1c1a]">
                                Minimum confirmed per inquiry
                            </span>
                        </div>
                    </div>
                </div>
                <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:py-12">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-6">
                        <div className="space-y-2">
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="px-2 py-0.5 rounded bg-[#e9e8e5] text-[10px] font-semibold uppercase tracking-widest text-[#1a1c1a]">
                                    {product.category.replaceAll("-", " ")}
                                </span>
                            </div>
                            <h1 className="text-4xl font-bold uppercase leading-[0.98] tracking-[-0.055em] text-black sm:text-5xl">
                                {product.title}
                            </h1>
                        </div>
                        <div className="flex items-center gap-2">
                            <Link
                                href={`/contact?product=${product.slug}`}
                                className="inline-flex items-center gap-2 rounded bg-black px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-white hover:bg-[#4059aa] transition-colors"
                            >
                                Ask About This Style
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                            <PrintSheetButton />
                        </div>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
                        <div className="lg:col-span-8">
                            <button
                                type="button"
                                className="relative aspect-16/10 overflow-hidden bg-white rounded-xl shadow-lg cursor-zoom-in w-full"
                                onClick={() => setIsLightboxOpen(true)}
                                aria-label="Open lightbox"
                            >
                                <Image
                                    src={images[selectedImage].src}
                                    alt={images[selectedImage].alt}
                                    fill
                                    sizes="(min-width: 1280px) 800px, (min-width: 1024px) 66vw, calc(100vw - 2rem)"
                                    priority
                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute top-4 right-4 flex items-center gap-2 pointer-events-none">
                                    <span className="p-2 rounded bg-white/90 backdrop-blur-sm shadow">
                                        <ZoomIn className="h-4 w-4 text-[#4059aa]" />
                                    </span>
                                </div>
                            </button>
                            <div className="mt-4 grid grid-cols-5 gap-2">
                                {images.map((img, i) => (
                                    <button
                                        key={img.id}
                                        type="button"
                                        className={`aspect-square rounded-lg overflow-hidden border-2 cursor-pointer transition-colors bg-[#e9e8e5] relative ${selectedImage === i
                                            ? "border-[#4059aa]"
                                            : "border-transparent hover:border-[#4059aa]"
                                            }`}
                                        onClick={() => setSelectedImage(i)}
                                        aria-label={`View ${i + 1}`}
                                    >
                                        <Image
                                            src={img.src}
                                            alt={img.alt}
                                            fill
                                            sizes="(min-width: 1280px) 150px, (min-width: 1024px) 14vw, 20vw"
                                            className="object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-4">
                            <div className="bg-white rounded-xl p-6 shadow-sm">
                                <p className="text-sm leading-6 text-[#44474c] mb-6">
                                    {product.description}
                                </p>
                                <div className="space-y-3">
                                    {specs.map(([label, value]) => (
                                        <div
                                            key={label}
                                            className="flex justify-between items-center py-2 border-b border-[#e3e2df] last:border-0"
                                        >
                                            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#44474c]">
                                                {label}
                                            </span>
                                            <span className="text-sm font-semibold text-black">
                                                {value}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-4 text-xs leading-5 text-[#596171]">
                                    Images are illustrative references. Final
                                    product details are agreed during inquiry.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-[#0f1c2f] px-4 py-10 text-white sm:px-6 print:hidden">
                    <div className="mx-auto max-w-7xl">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#ffdcc1]">
                            Production readiness
                        </span>
                        <h2 className="mt-2 text-2xl font-bold uppercase">
                            Confirm technical details with our team.
                        </h2>
                    </div>
                </section>

                {isLightboxOpen && (
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-label="Image lightbox"
                        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                        onClick={() => setIsLightboxOpen(false)}
                        onKeyDown={(e) => {
                            if (e.key === "Escape") setIsLightboxOpen(false)
                        }}
                    >
                        <button
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation()
                                setIsLightboxOpen(false)
                            }}
                            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                            aria-label="Close lightbox"
                        >
                            <X className="h-6 w-6 text-white" />
                        </button>
                        <div className="relative max-w-5xl max-h-[90vh] aspect-16/10">
                            <Image
                                src={images[selectedImage].src}
                                alt={images[selectedImage].alt}
                                fill
                                sizes="(min-width: 1024px) 1024px, 100vw"
                                className="object-contain"
                            />
                        </div>
                    </div>
                )}
            </main>
            <SiteFooter />
        </div>
    )
}
