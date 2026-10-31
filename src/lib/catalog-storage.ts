import {
    getMinimumOrderQuantity,
    getProductByIdentifier,
    type Product,
} from "@/lib/products"

const QUOTE_DECK_KEY = "quoteDeck"
const QUOTE_DETAILS_KEY = "quoteDeckDetails"
const COMPARE_KEY = "compareProducts"

export interface QuoteDeckEntry {
    product: Product
    quantity: number
    notes: string
}

function readStringArray(key: string): string[] {
    const stored = localStorage.getItem(key)
    if (!stored) return []

    try {
        const value: unknown = JSON.parse(stored)
        if (
            !Array.isArray(value) ||
            !value.every((item) => typeof item === "string")
        ) {
            localStorage.removeItem(key)
            return []
        }
        return value
    } catch {
        localStorage.removeItem(key)
        return []
    }
}

function resolveProducts(values: string[]): Product[] {
    return [...new Set(values)]
        .map((value) => getProductByIdentifier(value))
        .filter((product): product is Product => product !== undefined)
}

export function readProductSlugs(key: typeof COMPARE_KEY): string[] {
    const products = resolveProducts(readStringArray(key))
    const slugs = products.map((product) => product.slug)
    localStorage.setItem(key, JSON.stringify(slugs))
    return slugs
}

export function readQuoteDeck(): QuoteDeckEntry[] {
    const details = localStorage.getItem(QUOTE_DETAILS_KEY)
    if (details) {
        try {
            const value: unknown = JSON.parse(details)
            if (Array.isArray(value)) {
                const entries = value.flatMap((item) => {
                    if (
                        typeof item !== "object" ||
                        item === null ||
                        !("slug" in item) ||
                        typeof item.slug !== "string"
                    ) {
                        return []
                    }

                    const product = getProductByIdentifier(item.slug)
                    if (!product) return []

                    const quantity =
                        "quantity" in item &&
                        typeof item.quantity === "number" &&
                        Number.isInteger(item.quantity)
                            ? Math.max(
                                  getMinimumOrderQuantity(product),
                                  item.quantity,
                              )
                            : getMinimumOrderQuantity(product)
                    const notes =
                        "notes" in item && typeof item.notes === "string"
                            ? item.notes.slice(0, 1000)
                            : ""

                    return [{ product, quantity, notes }]
                })

                writeQuoteDeck(entries)
                return entries
            }
            localStorage.removeItem(QUOTE_DETAILS_KEY)
        } catch {
            localStorage.removeItem(QUOTE_DETAILS_KEY)
        }
    }

    const entries = resolveProducts(readStringArray(QUOTE_DECK_KEY)).map(
        (product) => ({
            product,
            quantity: getMinimumOrderQuantity(product),
            notes: "",
        }),
    )
    writeQuoteDeck(entries)
    return entries
}

export function writeQuoteDeck(entries: QuoteDeckEntry[]): void {
    const uniqueEntries = [
        ...new Map(
            entries.map((entry) => [entry.product.slug, entry]),
        ).values(),
    ]
    localStorage.setItem(
        QUOTE_DECK_KEY,
        JSON.stringify(uniqueEntries.map((entry) => entry.product.slug)),
    )
    localStorage.setItem(
        QUOTE_DETAILS_KEY,
        JSON.stringify(
            uniqueEntries.map(({ product, quantity, notes }) => {
                const minimum = getMinimumOrderQuantity(product)
                return {
                    slug: product.slug,
                    quantity:
                        Number.isSafeInteger(quantity) && quantity >= minimum
                            ? quantity
                            : minimum,
                    notes: notes.slice(0, 1000),
                }
            }),
        ),
    )
}

export function readCompareSlugs(): string[] {
    const slugs = readProductSlugs(COMPARE_KEY).slice(0, 4)
    writeCompareSlugs(slugs)
    return slugs
}

export function writeCompareSlugs(slugs: string[]): void {
    const products = resolveProducts(slugs).slice(0, 4)
    localStorage.setItem(
        COMPARE_KEY,
        JSON.stringify(products.map((product) => product.slug)),
    )
}

export function clearQuoteDeck(): void {
    localStorage.removeItem(QUOTE_DECK_KEY)
    localStorage.removeItem(QUOTE_DETAILS_KEY)
}
