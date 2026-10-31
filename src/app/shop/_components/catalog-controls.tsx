"use client"

import { ChevronDown, Search, X } from "lucide-react"
import { catalogFilters, type ProductCategory, products } from "@/lib/products"

export type FilterPreset = {
    active: string
    searchQuery: string
    sortBy: string
}

type CatalogControlsProps = {
    active: "all" | ProductCategory
    searchQuery: string
    sortBy: string
    presets: Record<string, FilterPreset>
    presetName: string
    visibleCount: number
    onCategoryChange: (category: "all" | ProductCategory) => void
    onSearchChange: (query: string) => void
    onSortChange: (sortBy: string) => void
    onPresetNameChange: (name: string) => void
    onSavePreset: () => void
    onLoadPreset: (preset: FilterPreset) => void
    onDeletePreset: (name: string) => void
}

export function CatalogControls({
    active,
    searchQuery,
    sortBy,
    presets,
    presetName,
    visibleCount,
    onCategoryChange,
    onSearchChange,
    onSortChange,
    onPresetNameChange,
    onSavePreset,
    onLoadPreset,
    onDeletePreset,
}: CatalogControlsProps) {
    return (
        <>
            <section className="sticky top-20 z-30 border-b border-[#e3e2df] bg-[#faf9f6]/95 px-4 py-3 shadow-sm backdrop-blur-md sm:px-6">
                <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-x-3 gap-y-2 lg:grid-cols-[minmax(190px,240px)_minmax(0,1fr)_auto_auto] lg:gap-x-4">
                    <div className="relative min-w-0">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#596171]" />
                        <input
                            type="search"
                            name="search"
                            aria-label="Search products"
                            placeholder="Search styles"
                            value={searchQuery}
                            onChange={(event) =>
                                onSearchChange(event.target.value)
                            }
                            className="min-h-10 w-full rounded border border-[#c5c6cd] bg-white py-2 pl-10 pr-10 text-sm outline-none transition focus:border-[#4059aa] focus:ring-2 focus:ring-[#4059aa]/20"
                        />
                        {searchQuery && (
                            <button
                                type="button"
                                onClick={() => onSearchChange("")}
                                className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#596171] hover:text-black"
                                aria-label="Clear search"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        )}
                    </div>
                    <label className="flex shrink-0 items-center gap-2 text-sm text-[#44474c] lg:col-start-3">
                        <span className="sr-only">Sort products</span>
                        <select
                            className="min-h-10 w-full rounded border border-[#c5c6cd] bg-white px-2 py-2 text-sm text-[#1a1c1a] outline-none transition focus:border-[#4059aa] focus:ring-2 focus:ring-[#4059aa]/20 sm:w-auto"
                            id="sort-products"
                            value={sortBy}
                            onChange={(event) =>
                                onSortChange(event.target.value)
                            }
                        >
                            <option value="recommended">Recommended</option>
                            <option value="name">Name: A to Z</option>
                        </select>
                    </label>
                    <span
                        className="hidden text-sm text-[#596171] lg:col-start-4 lg:block lg:whitespace-nowrap"
                        aria-live="polite"
                    >
                        {visibleCount} of {products.length} references
                    </span>
                    <fieldset className="col-span-2 flex min-w-0 max-w-full items-center gap-2 overflow-x-auto border-0 p-0 pb-1 lg:col-span-1 lg:col-start-2 lg:row-start-1">
                        <legend className="sr-only">
                            Filter products by category
                        </legend>
                        {catalogFilters.map(({ value, label }) => (
                            <button
                                type="button"
                                key={value}
                                onClick={() => onCategoryChange(value)}
                                aria-pressed={active === value}
                                className={`min-h-9 shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4059aa] ${active === value ? "border-[#0f1c2f] bg-[#0f1c2f] text-white" : "border-[#d5d6d2] bg-white text-[#44474c] hover:border-[#4059aa] hover:text-[#4059aa]"}`}
                            >
                                {label}
                                <span className="ml-2 opacity-70">
                                    {value === "all"
                                        ? products.length
                                        : products.filter(
                                              (product) =>
                                                  product.category === value,
                                          ).length}
                                </span>
                            </button>
                        ))}
                    </fieldset>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 pt-5 sm:px-6">
                <details className="group rounded border border-[#e3e2df] bg-white px-4 py-3">
                    <summary className="flex min-h-8 cursor-pointer list-none items-center justify-between gap-3 text-sm font-medium text-[#44474c] marker:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4059aa]">
                        <span className="inline-flex items-center gap-2">
                            <span>Save this search</span>
                            {Object.keys(presets).length > 0 && (
                                <span className="rounded-full bg-[#f4f3f0] px-2 py-0.5 text-xs text-[#596171]">
                                    {Object.keys(presets).length} saved
                                </span>
                            )}
                        </span>
                        <ChevronDown
                            aria-hidden="true"
                            className="h-4 w-4 shrink-0 transition-transform group-open:rotate-180"
                        />
                    </summary>
                    <div className="mt-3 border-t border-[#e3e2df] pt-4">
                        <p className="mb-3 text-sm text-[#596171]">
                            Saved searches stay in this browser.
                        </p>
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <div className="flex items-center gap-2">
                                <input
                                    type="text"
                                    value={presetName}
                                    onChange={(event) =>
                                        onPresetNameChange(
                                            event.target.value.slice(0, 40),
                                        )
                                    }
                                    placeholder="Preset name"
                                    aria-label="Filter preset name"
                                    maxLength={40}
                                    className="min-h-11 w-full rounded border border-[#c5c6cd] px-3 py-2 text-sm focus:border-[#4059aa] focus:outline-none focus:ring-2 focus:ring-[#4059aa]/20 sm:w-56"
                                />
                                <button
                                    type="button"
                                    onClick={onSavePreset}
                                    disabled={!presetName.trim()}
                                    className="min-h-11 rounded bg-black px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#4059aa] disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    Save
                                </button>
                            </div>
                            {Object.keys(presets).length > 0 ? (
                                <div className="flex flex-wrap gap-2">
                                    {Object.entries(presets).map(
                                        ([name, preset]) => (
                                            <div
                                                key={name}
                                                className="flex items-center gap-2 rounded border border-[#c5c6cd] bg-white px-3 py-1.5 text-sm font-medium"
                                            >
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        onLoadPreset(preset)
                                                    }
                                                    className="text-[#4059aa] hover:underline"
                                                >
                                                    {name}
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        onDeletePreset(name)
                                                    }
                                                    className="text-[#ba1a1a] hover:text-[#93000a]"
                                                    aria-label={`Delete ${name} preset`}
                                                >
                                                    ×
                                                </button>
                                            </div>
                                        ),
                                    )}
                                </div>
                            ) : (
                                <p className="text-xs text-[#596171]">
                                    No saved searches yet.
                                </p>
                            )}
                        </div>
                    </div>
                </details>
            </section>
        </>
    )
}
