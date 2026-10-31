"use client"

import { ArrowRight, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { SiteFooter } from "@/components/footer"
import { SiteHeader } from "@/components/header"
import { readCompareSlugs, writeCompareSlugs } from "@/lib/catalog-storage"
import { getProductByIdentifier, type Product } from "@/lib/products"

type SpecKey = keyof Pick<
    Product,
    "weight" | "composition" | "wash" | "construction" | "moq"
>

const specLabels: Record<SpecKey, string> = {
    weight: "Weight",
    composition: "Composition",
    wash: "Wash Lab",
    construction: "Construction",
    moq: "Standard MOQ",
}

export default function ComparePage() {
    const [products, setProducts] = useState<Product[]>([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setProducts(
            readCompareSlugs()
                .map((slug) => getProductByIdentifier(slug))
                .filter((product): product is Product => product !== undefined),
        )
        setIsLoaded(true)
    }, [])

    const removeProduct = (slug: string) => {
        const updated = products.filter((p) => p.slug !== slug)
        setProducts(updated)
        writeCompareSlugs(updated.map((product) => product.slug))
    }

    const getSpecValue = (product: Product, key: SpecKey) => product[key]

    const hasDifference = (key: SpecKey) => {
        const values = products.map((p) => getSpecValue(p, key))
        return new Set(values).size > 1
    }

    if (!isLoaded) {
        return (
            <div className="min-h-screen bg-[#faf9f6] text-[#1a1c1a]">
                <SiteHeader />
                <main className="pt-20">
                    <p className="mx-auto max-w-3xl px-4 py-16 text-center text-[#44474c]">
                        Loading selected products…
                    </p>
                </main>
                <SiteFooter />
            </div>
        )
    }

    if (products.length === 0) {
        return (
            <div className="bg-[#faf9f6] text-[#1a1c1a]">
                <SiteHeader />
                <main className="pt-20">
                    <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
                        <h1 className="text-4xl font-bold uppercase text-black sm:text-5xl">
                            No Products to Compare
                        </h1>
                        <p className="mt-4 text-[#44474c]">
                            Select products from the catalog to compare their
                            specifications side-by-side. Unverified details are
                            confirmed per inquiry.
                        </p>
                        <Link
                            href="/shop"
                            className="mt-8 inline-flex items-center gap-2 rounded bg-black px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-[#4059aa]"
                        >
                            Browse Catalog
                        </Link>
                    </section>
                </main>
                <SiteFooter />
            </div>
        )
    }

    return (
        <div className="bg-[#faf9f6] text-[#1a1c1a]">
            <SiteHeader />
            <main className="pt-20">
                <section className="border-b border-[#e3e2df] bg-[#f4f3f0] px-4 py-3 sm:px-6">
                    <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#44474c]">
                        <div className="flex items-center gap-2">
                            <Link
                                href="/shop"
                                className="hover:text-black transition-colors"
                            >
                                Catalog
                            </Link>
                            <span className="text-[#c5c6cd]">/</span>
                            <span className="text-[#4059aa]">Compare</span>
                        </div>
                        <span className="px-2 py-0.5 rounded-full bg-[#e9e8e5] text-[#1a1c1a]">
                            {products.length} Products
                        </span>
                    </div>
                </section>

                <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:py-12">
                    <div className="mb-8">
                        <h1 className="text-4xl font-bold uppercase text-black sm:text-5xl">
                            Product Comparison
                        </h1>
                        <p className="mt-2 text-sm text-[#44474c]">
                            Compare specifications across selected products.
                            Highlighted rows indicate differences.
                        </p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border-b-2 border-[#e3e2df]">
                                    <th className="text-left py-4 px-4 text-[10px] font-semibold uppercase tracking-wider text-[#44474c] w-48">
                                        Specification
                                    </th>
                                    {products.map((product) => (
                                        <th
                                            key={product.slug}
                                            className="text-left py-4 px-4 w-80"
                                        >
                                            <div className="relative aspect-square w-full max-w-50 mx-auto mb-3 overflow-hidden rounded-lg bg-[#e9e8e5]">
                                                <Image
                                                    src={product.image}
                                                    alt={`${product.title} illustrative reference`}
                                                    fill
                                                    sizes="200px"
                                                    className="object-cover"
                                                />
                                            </div>
                                            <h3 className="text-sm font-bold uppercase text-black mt-1">
                                                {product.title}
                                            </h3>
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    removeProduct(product.slug)
                                                }
                                                className="mt-2 flex items-center gap-1 text-[10px] text-[#ba1a1a] hover:text-[#93000a] transition-colors"
                                            >
                                                <X className="h-3 w-3" />
                                                Remove
                                            </button>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {(Object.keys(specLabels) as SpecKey[]).map(
                                    (key) => (
                                        <tr
                                            key={key}
                                            className={`border-b border-[#e3e2df] ${hasDifference(key)
                                                    ? "bg-[#fff3cd]"
                                                    : "bg-white"
                                                }`}
                                        >
                                            <td className="py-4 px-4 text-[10px] font-semibold uppercase tracking-wider text-[#44474c]">
                                                {specLabels[key]}
                                                {hasDifference(key) && (
                                                    <span className="ml-2 text-[#c87d32]">
                                                        *
                                                    </span>
                                                )}
                                            </td>
                                            {products.map((product) => (
                                                <td
                                                    key={product.slug}
                                                    className="py-4 px-4 text-sm text-black"
                                                >
                                                    {getSpecValue(product, key)}
                                                </td>
                                            ))}
                                        </tr>
                                    ),
                                )}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-8 flex items-center justify-between">
                        <p className="text-xs text-[#44474c]">
                            * Highlighted rows indicate differences between
                            products
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded bg-black px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-[#4059aa]"
                        >
                            Request Quote for Compared Products
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </section>
            </main>
            <SiteFooter />
        </div>
    )
}
