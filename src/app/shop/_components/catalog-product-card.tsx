import { FileText, GitCompare, ShoppingBag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { catalogFilters, type Product } from "@/lib/products"

type CatalogProductCardProps = {
    product: Product
    priority: boolean
    inQuoteDeck: boolean
    inCompareList: boolean
    onToggleQuoteDeck: (productId: string) => void
    onToggleCompare: (productId: string) => void
}

export function CatalogProductCard({
    product,
    priority,
    inQuoteDeck,
    inCompareList,
    onToggleQuoteDeck,
    onToggleCompare,
}: CatalogProductCardProps) {
    const categoryLabel =
        catalogFilters.find((filter) => filter.value === product.category)
            ?.label ?? "Apparel"

    return (
        <article className="group flex flex-col overflow-hidden rounded-lg border border-[#e3e2df] bg-white transition duration-200 hover:-translate-y-0.5 hover:border-[#c5c6cd] hover:shadow-lg">
            <div className="relative aspect-[4/3] overflow-hidden bg-[#e9e8e5]">
                <Image
                    src={product.image}
                    alt={`${product.title} illustrative product reference`}
                    fill
                    sizes="(min-width: 1280px) 395px, (min-width: 1024px) 30vw, (min-width: 768px) 50vw, calc(100vw - 2rem)"
                    priority={priority}
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-x-3 top-3 flex items-start justify-between gap-2">
                    <span className="rounded bg-white/95 px-2.5 py-1 text-xs font-semibold text-[#0f1c2f] shadow-sm">
                        {categoryLabel}
                    </span>
                </div>
                <div className="absolute bottom-3 right-3">
                    <span className="rounded bg-[#0f1c2f]/90 px-2.5 py-1 text-xs font-medium text-white">
                        Illustrative image
                    </span>
                </div>
            </div>
            <div className="flex flex-1 flex-col p-5">
                <div>
                    <p className="font-mono text-xs text-[#737984]">
                        {product.id}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold leading-tight tracking-[-0.02em] text-[#0f1c2f] transition-colors group-hover:text-[#4059aa]">
                        {product.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#44474c]">
                        {product.detail}
                    </p>
                </div>
                <div className="mt-auto flex items-center gap-2 pt-5">
                    <Link
                        href={`/product/${product.slug}`}
                        className="flex min-h-11 flex-1 items-center justify-center gap-2 rounded bg-[#0f1c2f] px-3 py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-[#4059aa]"
                    >
                        <FileText className="h-4 w-4" />
                        View style
                    </Link>
                    <button
                        type="button"
                        onClick={() => onToggleQuoteDeck(product.id)}
                        className={`flex min-h-11 min-w-11 items-center justify-center rounded border transition-colors ${
                            inQuoteDeck
                                ? "border-[#4059aa] bg-[#4059aa] text-white"
                                : "border-[#d5d6d2] bg-white text-[#1a1c1a] hover:border-[#4059aa] hover:text-[#4059aa]"
                        }`}
                        title={
                            inQuoteDeck
                                ? "Remove from quote deck"
                                : "Add to quote deck"
                        }
                        aria-label={
                            inQuoteDeck
                                ? `Remove ${product.title} from Quote Deck`
                                : `Add ${product.title} to Quote Deck`
                        }
                        aria-pressed={inQuoteDeck}
                    >
                        <ShoppingBag className="h-4 w-4" />
                    </button>
                    <button
                        type="button"
                        onClick={() => onToggleCompare(product.id)}
                        className={`flex min-h-11 min-w-11 items-center justify-center rounded border transition-colors ${
                            inCompareList
                                ? "border-[#4059aa] bg-[#4059aa] text-white"
                                : "border-[#d5d6d2] bg-white text-[#1a1c1a] hover:border-[#4059aa] hover:text-[#4059aa]"
                        }`}
                        title={
                            inCompareList ? "In compare list" : "Add to compare"
                        }
                        aria-label={
                            inCompareList
                                ? `Remove ${product.title} from comparison`
                                : `Add ${product.title} to comparison`
                        }
                        aria-pressed={inCompareList}
                    >
                        <GitCompare className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </article>
    )
}
