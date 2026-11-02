"use client"

import { GitCompare, Search, ShoppingBag, X } from "lucide-react"
import Link from "next/link"
import { Suspense, useEffect, useMemo, useState } from "react"
import { useSearchParams } from "next/navigation"
import { toast } from "@/components/ui/toast"
import {
    clearQuoteDeck,
    readCompareSlugs,
    readQuoteDeck,
    writeCompareSlugs,
    writeQuoteDeck,
} from "@/lib/catalog-storage"
import {
    catalogFilters,
    getMinimumOrderQuantity,
    type ProductCategory,
    products,
} from "@/lib/products"
import { CatalogControls, type FilterPreset } from "./catalog-controls"
import { CatalogProductCard } from "./catalog-product-card"

function isRecord(value: unknown): value is Record<string, unknown> {
    return typeof value === "object" && value !== null && !Array.isArray(value)
}

export function CatalogBrowser() {
    const searchParams = useSearchParams()
    const categoryParam = searchParams.get("category")
    const initialCategory: "all" | ProductCategory =
        catalogFilters.find((f) => f.value === categoryParam)?.value ?? "all"

    const [active, setActive] = useState<"all" | ProductCategory>(initialCategory)
    const [searchQuery, setSearchQuery] = useState("")
    const [quoteDeck, setQuoteDeck] = useState<string[]>([])
    const [compareList, setCompareList] = useState<string[]>([])
    const [sortBy, setSortBy] = useState("recommended")
    const [presets, setPresets] = useState<Record<string, FilterPreset>>({})
    const [presetName, setPresetName] = useState("")

    useEffect(() => {
        const quoteItems = readQuoteDeck()
        setQuoteDeck(quoteItems.map((item) => item.product.slug))
        setCompareList(readCompareSlugs())

        const savedPresets = localStorage.getItem("catalogFilterPresets")
        if (!savedPresets) return

        try {
            const parsed: unknown = JSON.parse(savedPresets)
            if (!isRecord(parsed)) {
                localStorage.removeItem("catalogFilterPresets")
                return
            }

            const validPresets = Object.fromEntries(
                Object.entries(parsed).flatMap(([name, value]) => {
                    if (
                        !isRecord(value) ||
                        typeof value.active !== "string" ||
                        typeof value.searchQuery !== "string" ||
                        (value.sortBy !== undefined &&
                            typeof value.sortBy !== "string")
                    ) {
                        return []
                    }

                    return [
                        [
                            name,
                            {
                                active: value.active,
                                searchQuery: value.searchQuery,
                                sortBy: value.sortBy ?? "recommended",
                            },
                        ],
                    ]
                }),
            )
            setPresets(validPresets)
        } catch {
            localStorage.removeItem("catalogFilterPresets")
        }
    }, [])

    const savePreset = () => {
        const name = presetName.trim()
        if (!name) return

        const next = {
            ...presets,
            [name]: { active, searchQuery, sortBy },
        }
        localStorage.setItem("catalogFilterPresets", JSON.stringify(next))
        setPresets(next)
        setPresetName("")
    }

    const loadPreset = (preset: FilterPreset) => {
        setActive(
            catalogFilters.find((filter) => filter.value === preset.active)
                ?.value ?? "all",
        )
        setSearchQuery(preset.searchQuery)
        setSortBy(
            ["recommended", "name"].includes(preset.sortBy)
                ? preset.sortBy
                : "recommended",
        )
    }

    const deletePreset = (name: string) => {
        const next = { ...presets }
        delete next[name]
        localStorage.setItem("catalogFilterPresets", JSON.stringify(next))
        setPresets(next)
    }

    const addToQuoteDeck = (productId: string) => {
        const product = products.find((item) => item.id === productId)
        if (!product || quoteDeck.includes(product.slug)) return

        const entries = readQuoteDeck()
        writeQuoteDeck([
            ...entries,
            {
                product,
                quantity: getMinimumOrderQuantity(product),
                notes: "",
            },
        ])
        setQuoteDeck((current) => [...current, product.slug])
    }

    const removeFromQuoteDeck = (productId: string) => {
        const updated = readQuoteDeck().filter(
            (entry) => entry.product.id !== productId,
        )
        if (updated.length === 0) clearQuoteDeck()
        else writeQuoteDeck(updated)
        setQuoteDeck(updated.map((entry) => entry.product.slug))
    }

    const toggleQuoteDeck = (productId: string) => {
        const product = products.find((item) => item.id === productId)
        if (!product) return

        if (quoteDeck.includes(product.slug)) removeFromQuoteDeck(product.id)
        else addToQuoteDeck(product.id)
    }

    const toggleCompare = (productId: string) => {
        const product = products.find((item) => item.id === productId)
        if (!product) return

        if (compareList.includes(product.slug)) {
            const updated = compareList.filter((slug) => slug !== product.slug)
            setCompareList(updated)
            writeCompareSlugs(updated)
            return
        }

        if (compareList.length >= 4) {
            toast.add({
                title: "Compare list is full",
                description: "Remove a product before adding another.",
            })
            return
        }

        const updated = [...compareList, product.slug]
        setCompareList(updated)
        writeCompareSlugs(updated)
    }

    const visible = useMemo(() => {
        let filtered =
            active === "all"
                ? products
                : products.filter((product) => product.category === active)

        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase()
            filtered = filtered.filter(
                (product) =>
                    product.title.toLowerCase().includes(query) ||
                    product.detail.toLowerCase().includes(query) ||
                    product.category.toLowerCase().includes(query),
            )
        }

        const sorted = [...filtered]
        if (sortBy === "name") {
            sorted.sort((a, b) => a.title.localeCompare(b.title))
        }
        return sorted
    }, [active, searchQuery, sortBy])

    const hasActiveFilters =
        active !== "all" ||
        searchQuery.trim() !== "" ||
        sortBy !== "recommended"

    const clearFilters = () => {
        setSearchQuery("")
        setActive("all")
        setSortBy("recommended")
    }

    const addAllMatchingToQuoteDeck = () => {
        const existing = readQuoteDeck()
        const existingSlugs = new Set(
            existing.map((entry) => entry.product.slug),
        )
        const additions = visible
            .filter((product) => !existingSlugs.has(product.slug))
            .map((product) => ({
                product,
                quantity: getMinimumOrderQuantity(product),
                notes: "",
            }))
        const updated = [...existing, ...additions]
        writeQuoteDeck(updated)
        setQuoteDeck(updated.map((entry) => entry.product.slug))
    }

    return (
        <>
            <CatalogControls
                active={active}
                searchQuery={searchQuery}
                sortBy={sortBy}
                presets={presets}
                presetName={presetName}
                visibleCount={visible.length}
                onCategoryChange={setActive}
                onSearchChange={setSearchQuery}
                onSortChange={setSortBy}
                onPresetNameChange={setPresetName}
                onSavePreset={savePreset}
                onLoadPreset={loadPreset}
                onDeletePreset={deletePreset}
            />

            <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10">
                {visible.length > 0 && (
                    <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                        <div>
                            <h2 className="text-xl font-semibold tracking-tight text-[#0f1c2f]">
                                Product references
                            </h2>
                            <p
                                className="mt-1 text-sm text-[#596171]"
                                aria-live="polite"
                            >
                                Showing {visible.length} of {products.length}{" "}
                                styles
                            </p>
                        </div>
                        <div className="flex flex-wrap items-center gap-3">
                            {hasActiveFilters && (
                                <button
                                    type="button"
                                    onClick={clearFilters}
                                    className="min-h-10 text-sm font-medium text-[#4059aa] underline underline-offset-2"
                                >
                                    Clear filters
                                </button>
                            )}
                            {visible.some(
                                (product) => !quoteDeck.includes(product.slug),
                            ) && (
                                <button
                                    type="button"
                                    onClick={addAllMatchingToQuoteDeck}
                                    className="inline-flex min-h-11 items-center gap-2 rounded border border-[#c5c6cd] bg-white px-4 py-2 text-sm font-semibold text-[#1a1c1a] transition-colors hover:border-[#4059aa] hover:text-[#4059aa]"
                                >
                                    <ShoppingBag className="h-4 w-4" />
                                    Add matching to Quote Deck
                                </button>
                            )}
                        </div>
                    </div>
                )}

                {visible.length === 0 ? (
                    <div className="py-16 text-center">
                        <Search className="mx-auto mb-4 h-12 w-12 text-[#44474c]" />
                        <h3 className="mb-2 text-xl font-bold text-black">
                            No products found
                        </h3>
                        <p className="mb-4 text-sm text-[#44474c]">
                            Try adjusting your search or filters
                        </p>
                        <button
                            type="button"
                            onClick={clearFilters}
                            className="inline-flex min-h-11 items-center gap-2 rounded bg-black px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#4059aa]"
                        >
                            <X className="h-4 w-4" />
                            Clear all filters
                        </button>
                    </div>
                ) : (
                    <Suspense
                        fallback={
                            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                                {[1, 2, 3, 4, 5, 6].map((i) => (
                                    <div key={i} className="flex flex-col overflow-hidden bg-white shadow-sm rounded-xl">
                                        <div className="aspect-[4/3] bg-[#e9e8e5] animate-pulse" />
                                        <div className="flex flex-1 flex-col gap-4 p-5">
                                            <div className="space-y-2">
                                                <div className="h-4 w-20 bg-[#e9e8e5] rounded animate-pulse" />
                                                <div className="h-6 w-3/4 bg-[#e9e8e5] rounded animate-pulse" />
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="flex-1 h-10 bg-[#e9e8e5] rounded animate-pulse" />
                                                <div className="w-10 h-10 bg-[#e9e8e5] rounded animate-pulse" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        }
                    >
                        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                            {visible.map((product, index) => (
                                <CatalogProductCard
                                    key={product.id}
                                    product={product}
                                    priority={index === 0}
                                    inQuoteDeck={quoteDeck.includes(
                                        product.slug,
                                    )}
                                    inCompareList={compareList.includes(
                                        product.slug,
                                    )}
                                    onToggleQuoteDeck={toggleQuoteDeck}
                                    onToggleCompare={toggleCompare}
                                />
                            ))}
                        </div>
                    </Suspense>
                )}
            </section>

            {quoteDeck.length > 0 && (
                <div className="fixed bottom-4 right-4 z-40 sm:bottom-6 sm:right-6">
                    <Link
                        href="/quote-deck"
                        className="flex items-center gap-2 rounded-full bg-black px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-white shadow-lg transition-colors hover:bg-[#4059aa]"
                    >
                        <ShoppingBag className="h-4 w-4" />
                        Quote Deck ({quoteDeck.length})
                    </Link>
                </div>
            )}
            {compareList.length > 0 && (
                <div className="fixed bottom-17 right-4 z-40 sm:bottom-6 sm:left-6 sm:right-auto">
                    <Link
                        href="/compare"
                        className="flex items-center gap-2 rounded-full bg-[#c87d32] px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-white shadow-lg transition-colors hover:bg-[#a65e26]"
                    >
                        <GitCompare className="h-4 w-4" />
                        Compare ({compareList.length})
                    </Link>
                </div>
            )}
        </>
    )
}
