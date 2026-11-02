"use client"

import { CheckCircle, Loader2, Mail, MessageSquare, User } from "lucide-react"
import { useEffect, useState } from "react"
import {
    clearQuoteDeck,
    type QuoteDeckEntry,
    readQuoteDeck,
} from "@/lib/catalog-storage"
import { getMinimumOrderQuantity, getProductBySlug } from "@/lib/products"

type Category = [string, string, string]

type FormStatus =
    | { state: "idle" }
    | { state: "submitting" }
    | { state: "success"; reference: string }
    | { state: "error"; message: string }

type ValidationError = {
    name?: string
    email?: string
}

export function RfqForm({ categories }: { categories: Category[] }) {
    const [status, setStatus] = useState<FormStatus>({ state: "idle" })
    const [selected, setSelected] = useState("mens")
    const [selectedProducts, setSelectedProducts] = useState<QuoteDeckEntry[]>(
        [],
    )
    const [errors, setErrors] = useState<ValidationError>({})

    useEffect(() => {
        const params = new URLSearchParams(window.location.search)
        const product = getProductBySlug(params.get("product") ?? "")
        const quoteItems =
            params.get("source") === "quote-deck"
                ? readQuoteDeck()
                : product
                    ? [
                        {
                            product,
                            quantity: getMinimumOrderQuantity(product),
                            notes: "",
                        },
                    ]
                    : []
        setSelectedProducts(quoteItems)
        const categoryByProductCategory: Record<string, string> = {
            "mens-denim": "mens",
            "womens-denim": "womens",
            "kids-jeans": "kids",
            "cotton-apparels": "chinos",
            "jackets": "jackets",
            "overshirts": "overshirts",
        }
        const category = quoteItems[0]
            ? categoryByProductCategory[quoteItems[0].product.category]
            : undefined
        if (category && categories.some(([value]) => value === category)) {
            setSelected(category)
        }
    }, [categories])

    const validateEmail = (email: string): boolean => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }

    const validateForm = (formData: FormData): ValidationError => {
        const newErrors: ValidationError = {}
        const name = formData.get("name") as string
        const email = formData.get("email") as string

        if (!name || name.trim().length < 2) {
            newErrors.name = "Name must be at least 2 characters"
        }
        if (!email || !validateEmail(email)) {
            newErrors.email = "Please enter a valid email address"
        }

        return newErrors
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const form = event.currentTarget
        const formData = new FormData(form)

        const validationErrors = validateForm(formData)
        setErrors(validationErrors)

        if (Object.keys(validationErrors).length > 0) {
            return
        }

        const payload = {
            category: selected,
            name: formData.get("name"),
            email: formData.get("email"),
            notes: formData.get("notes"),
            products: selectedProducts.map(({ product, quantity, notes }) => ({
                productId: product.id,
                quantity,
                notes,
            })),
        }

        setStatus({ state: "submitting" })
        try {
            const response = await fetch("/api/rfq", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            })
            const data: { error?: string; reference?: string } =
                await response.json()
            if (!response.ok) {
                setStatus({
                    state: "error",
                    message:
                        data.error ?? "Something went wrong. Please try again.",
                })
                return
            }
            if (!data.reference) {
                setStatus({
                    state: "error",
                    message:
                        "The request was delivered, but no reference code was returned. Please contact us by phone.",
                })
                return
            }
            form.reset()
            if (selectedProducts.length > 0) {
                clearQuoteDeck()
                setSelectedProducts([])
            }
            setStatus({ state: "success", reference: data.reference })
        } catch {
            setStatus({
                state: "error",
                message:
                    "Network error. Please try again or contact us directly.",
            })
        }
    }

    if (status.state === "success") {
        return (
            <div className="flex min-h-130 flex-col items-center justify-center bg-white p-5 text-center shadow-lg sm:p-7 lg:col-span-7">
                <CheckCircle className="h-12 w-12 text-[#4059aa]" />
                <h2 className="mt-4 text-3xl font-bold uppercase text-black">
                    Request received.
                </h2>
                <p className="mt-3 max-w-md text-sm leading-6 text-[#44474c]">
                    Your RFQ was delivered to our team. Reference this code if
                    you contact us about your request.
                </p>
                <p className="mt-2 font-mono text-xs text-[#4059aa]">
                    Reference: {status.reference}
                </p>
                <button
                    type="button"
                    onClick={() => setStatus({ state: "idle" })}
                    className="mt-6 bg-[#e9e8e5] px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em]"
                >
                    Send another request
                </button>
            </div>
        )
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 lg:col-span-7"
        >
            <div className="rounded-lg border border-[#e3e2df] bg-white px-4 py-3">
                <p className="text-sm leading-6 text-[#44474c]">
                    Choose a product category, add your contact details, and
                    include any requirements you already know. We’ll confirm
                    specifications, minimums, and timing with you.
                </p>
            </div>

            <div className="bg-white p-6 shadow-sm rounded-xl">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold bg-[#e9e8e5] px-2 py-0.5 rounded text-black">
                            01
                        </span>
                        <span className="text-base font-semibold text-black">
                            What are you looking for?
                        </span>
                    </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {categories.map(([value, title, detail]) => (
                        <button
                            type="button"
                            key={value}
                            onClick={() => setSelected(value)}
                            aria-pressed={selected === value}
                            className={`min-h-24 rounded-lg p-3 text-left transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4059aa] ${selected === value ? "bg-[#dce1ff] ring-1 ring-[#4059aa]" : "bg-[#f4f3f0] hover:bg-[#e9e8e5]"}`}
                        >
                            <span className="block text-sm font-semibold text-black">
                                {title}
                            </span>
                            <span className="mt-1 block text-xs leading-5 text-[#44474c]">
                                {detail}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {selectedProducts.length > 0 && (
                <section
                    aria-label="Products included in your RFQ"
                    className="bg-[#e9e8e5] p-5 rounded-xl"
                >
                    <h2 className="text-sm font-bold uppercase text-black">
                        Products in this request
                    </h2>
                    <ul className="mt-3 space-y-2 text-sm text-[#44474c]">
                        {selectedProducts.map(
                            ({ product, quantity, notes }) => (
                                <li key={product.slug}>
                                    <span className="font-semibold text-black">
                                        {product.title}
                                    </span>{" "}
                                    — {quantity} units
                                    {notes ? ` — ${notes}` : ""}
                                </li>
                            ),
                        )}
                    </ul>
                </section>
            )}

            <div className="bg-white p-6 shadow-sm rounded-xl">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold bg-[#e9e8e5] px-2 py-0.5 rounded text-black">
                            02
                        </span>
                        <span className="text-base font-semibold text-black">
                            How can we reach you?
                        </span>
                    </div>
                    <span className="text-xs text-[#596171]">
                        Required fields marked *
                    </span>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                    <label className="text-sm font-medium text-[#44474c]">
                        Name *
                        <div className="relative mt-2">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#44474c]" />
                            <input
                                required
                                name="name"
                                autoComplete="name"
                                aria-invalid={Boolean(errors.name)}
                                aria-describedby={
                                    errors.name ? "name-error" : undefined
                                }
                                className={`h-11 w-full border bg-[#faf9f6] pl-10 pr-3 text-sm outline-none focus:ring-1 ${errors.name ? "border-[#ba1a1a] focus:border-[#ba1a1a] focus:ring-[#ba1a1a]" : "border-[#c5c6cd] focus:border-[#4059aa] focus:ring-[#4059aa]"}`}
                            />
                        </div>
                        {errors.name && (
                            <p
                                id="name-error"
                                className="mt-1 text-xs text-[#93000a]"
                            >
                                {errors.name}
                            </p>
                        )}
                    </label>
                    <label className="text-sm font-medium text-[#44474c]">
                        Work email *
                        <div className="relative mt-2">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#44474c]" />
                            <input
                                required
                                type="email"
                                name="email"
                                autoComplete="email"
                                aria-invalid={Boolean(errors.email)}
                                aria-describedby={
                                    errors.email ? "email-error" : undefined
                                }
                                className={`h-11 w-full border bg-[#faf9f6] pl-10 pr-3 text-sm outline-none focus:ring-1 ${errors.email ? "border-[#ba1a1a] focus:border-[#ba1a1a] focus:ring-[#ba1a1a]" : "border-[#c5c6cd] focus:border-[#4059aa] focus:ring-[#4059aa]"}`}
                            />
                        </div>
                        {errors.email && (
                            <p
                                id="email-error"
                                className="mt-1 text-xs text-[#93000a]"
                            >
                                {errors.email}
                            </p>
                        )}
                    </label>
                </div>
            </div>

            <div className="bg-white p-6 shadow-sm rounded-xl">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold bg-[#e9e8e5] px-2 py-0.5 rounded text-black">
                            03
                        </span>
                        <span className="text-base font-semibold text-black">
                            Project details
                        </span>
                    </div>
                    <span className="text-xs text-[#596171]">Optional</span>
                </div>
                <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-[#44474c]" />
                    <textarea
                        name="notes"
                        rows={4}
                        maxLength={5000}
                        className="w-full border border-[#c5c6cd] bg-[#faf9f6] pl-10 pr-3 pt-3 text-sm outline-none focus:border-[#4059aa] focus:ring-1 focus:ring-[#4059aa]"
                        placeholder="For example: fit, fabric, finish, estimated quantity, or delivery destination"
                    />
                </div>
            </div>

            {status.state === "error" && (
                <p
                    role="alert"
                    className="border-l-2 border-[#ba1a1a] bg-[#ffdad6]/40 px-3 py-2 text-xs text-[#93000a]"
                >
                    {status.message}
                </p>
            )}
            <button
                type="submit"
                disabled={status.state === "submitting"}
                className="w-full bg-black px-5 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-[#4059aa] disabled:opacity-60 rounded-xl flex items-center justify-center gap-2"
            >
                {status.state === "submitting" ? (
                    <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Submitting…
                    </>
                ) : (
                    <>
                        Submit RFQ Brief
                        <CheckCircle className="h-4 w-4" />
                    </>
                )}
            </button>
        </form>
    )
}
