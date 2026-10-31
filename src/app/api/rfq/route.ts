import { type NextRequest, NextResponse } from "next/server"
import { getMinimumOrderQuantity, getProductByIdentifier } from "@/lib/products"

const VALID_CATEGORIES = new Set([
    "mens",
    "womens",
    "kids",
    "chinos",
    "jackets",
    "overshirt",
])
const MAX_BODY_LENGTH = 32_000
const MAX_PRODUCTS = 10

interface RfqProduct {
    productId: string
    quantity: number
    notes?: string
}

interface RfqPayload {
    category: string
    name: string
    email: string
    notes: string
    products: RfqProduct[]
}

function isRecord(value: unknown): value is Record<string, unknown> {
    return typeof value === "object" && value !== null && !Array.isArray(value)
}

function isValidEmail(email: string): boolean {
    return email.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function validatePayload(value: unknown): RfqPayload | string {
    if (!isRecord(value)) return "A valid RFQ request is required."

    const { category, name, email, notes, products: requestedProducts } = value
    if (typeof category !== "string" || !VALID_CATEGORIES.has(category)) {
        return "A valid product category is required."
    }
    if (
        typeof name !== "string" ||
        name.trim().length < 2 ||
        name.trim().length > 120
    ) {
        return "Name must be between 2 and 120 characters."
    }
    if (typeof email !== "string" || !isValidEmail(email.trim())) {
        return "A valid work email is required."
    }
    if (
        notes !== undefined &&
        (typeof notes !== "string" || notes.length > 5000)
    ) {
        return "Production notes must be 5,000 characters or fewer."
    }
    if (
        requestedProducts !== undefined &&
        (!Array.isArray(requestedProducts) ||
            requestedProducts.length > MAX_PRODUCTS)
    ) {
        return `A maximum of ${MAX_PRODUCTS} products can be included.`
    }

    const validatedProducts: RfqProduct[] = []
    const seenProducts = new Set<string>()
    for (const item of requestedProducts ?? []) {
        if (
            !isRecord(item) ||
            typeof item.productId !== "string" ||
            typeof item.quantity !== "number" ||
            !Number.isSafeInteger(item.quantity) ||
            item.quantity < 1 ||
            (item.notes !== undefined &&
                (typeof item.notes !== "string" || item.notes.length > 1000))
        ) {
            return "One or more product details are invalid."
        }

        const product = getProductByIdentifier(item.productId)
        if (!product || seenProducts.has(product.slug)) {
            return "One or more selected products are invalid."
        }
        if (item.quantity < getMinimumOrderQuantity(product)) {
            return `${product.title} requires a minimum order of ${product.moq}.`
        }

        seenProducts.add(product.slug)
        validatedProducts.push({
            productId: product.id,
            quantity: item.quantity,
            ...(typeof item.notes === "string" && item.notes.trim()
                ? { notes: item.notes.trim() }
                : {}),
        })
    }

    return {
        category,
        name: name.trim(),
        email: email.trim(),
        notes: typeof notes === "string" ? notes.trim() : "",
        products: validatedProducts,
    }
}

export async function POST(request: NextRequest) {
    const contentLength = Number(request.headers.get("content-length") ?? 0)
    if (contentLength > MAX_BODY_LENGTH) {
        return NextResponse.json(
            { error: "The RFQ request is too large." },
            { status: 413 },
        )
    }

    let rawBody: string
    try {
        rawBody = await request.text()
    } catch {
        return NextResponse.json(
            { error: "Could not read the RFQ request." },
            { status: 400 },
        )
    }
    if (rawBody.length > MAX_BODY_LENGTH) {
        return NextResponse.json(
            { error: "The RFQ request is too large." },
            { status: 413 },
        )
    }

    let parsedBody: unknown
    try {
        parsedBody = JSON.parse(rawBody)
    } catch {
        return NextResponse.json(
            { error: "Invalid JSON body." },
            { status: 400 },
        )
    }

    const payload = validatePayload(parsedBody)
    if (typeof payload === "string") {
        return NextResponse.json({ error: payload }, { status: 400 })
    }

    const webhookUrl = process.env.RFQ_WEBHOOK_URL
    if (!webhookUrl) {
        return NextResponse.json(
            {
                error: "Online RFQ delivery is not configured. Please call +91 7817 966 192 to submit your request.",
            },
            { status: 503 },
        )
    }

    let destination: URL
    try {
        destination = new URL(webhookUrl)
    } catch {
        return NextResponse.json(
            {
                error: "RFQ delivery is temporarily unavailable. Please call +91 7817 966 192.",
            },
            { status: 503 },
        )
    }
    if (destination.protocol !== "https:") {
        return NextResponse.json(
            {
                error: "RFQ delivery is temporarily unavailable. Please call +91 7817 966 192.",
            },
            { status: 503 },
        )
    }

    const reference = `RFQ-${crypto.randomUUID().slice(0, 8).toUpperCase()}`
    try {
        const delivery = await fetch(destination, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...payload, reference }),
            signal: AbortSignal.timeout(10_000),
            cache: "no-store",
        })
        if (!delivery.ok) {
            return NextResponse.json(
                {
                    error: "We could not deliver your RFQ right now. Please try again or call +91 7817 966 192.",
                },
                { status: 502 },
            )
        }
    } catch {
        return NextResponse.json(
            {
                error: "We could not deliver your RFQ right now. Please try again or call +91 7817 966 192.",
            },
            { status: 502 },
        )
    }

    return NextResponse.json({
        ok: true,
        reference,
        message: "Your RFQ was delivered successfully.",
    })
}
