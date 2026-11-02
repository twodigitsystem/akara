"use client"

import jsPDF from "jspdf"
import { ArrowRight, Copy, Download, Trash2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { SiteFooter } from "@/components/footer"
import { SiteHeader } from "@/components/header"
import { toast } from "@/components/ui/toast"
import {
    clearQuoteDeck,
    type QuoteDeckEntry,
    readQuoteDeck,
    writeQuoteDeck,
} from "@/lib/catalog-storage"
import { getMinimumOrderQuantity } from "@/lib/products"

export default function QuoteDeckPage() {
    const [quoteItems, setQuoteItems] = useState<QuoteDeckEntry[]>([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [removeConfirmIndex, setRemoveConfirmIndex] = useState<number | null>(
        null,
    )

    useEffect(() => {
        setQuoteItems(readQuoteDeck())
        setIsLoaded(true)
    }, [])

    const updateNotes = (index: number, notes: string) => {
        const updated = quoteItems.map((item, itemIndex) =>
            itemIndex === index ? { ...item, notes } : item,
        )
        setQuoteItems(updated)
        writeQuoteDeck(updated)
    }

    const updateQuantity = (index: number, quantity: number) => {
        const updated = quoteItems.map((item, itemIndex) =>
            itemIndex === index
                ? {
                      ...item,
                      quantity: Math.max(
                          getMinimumOrderQuantity(item.product),
                          quantity,
                      ),
                  }
                : item,
        )
        setQuoteItems(updated)
        writeQuoteDeck(updated)
    }

    const confirmRemoveItem = (index: number) => {
        setRemoveConfirmIndex(index)
    }

    const cancelRemoveItem = () => {
        setRemoveConfirmIndex(null)
    }

    const removeItem = (index: number) => {
        const removedItem = quoteItems[index]
        const updated = quoteItems.filter((_, itemIndex) => itemIndex !== index)
        setQuoteItems(updated)
        if (updated.length === 0) clearQuoteDeck()
        else writeQuoteDeck(updated)
        if (removedItem) {
            toast.add({
                title: "Removed from Quote Deck",
                description: `${removedItem.product.title} was removed.`,
            })
        }
        setRemoveConfirmIndex(null)
    }

    const exportToPDF = () => {
        try {
            const pdf = new jsPDF("p", "mm", "a4")
            const pageWidth = pdf.internal.pageSize.getWidth()
            const pageHeight = pdf.internal.pageSize.getHeight()
            const margin = 18
            const contentWidth = pageWidth - margin * 2
            let y = margin
            const ensureSpace = (height: number) => {
                if (y + height > pageHeight - margin) {
                    pdf.addPage()
                    y = margin
                }
            }

            pdf.setFont("helvetica", "bold")
            pdf.setFontSize(18)
            pdf.text("RFQ Product Request", margin, y)
            y += 9
            pdf.setFont("helvetica", "normal")
            pdf.setFontSize(10)
            pdf.text(
                `Prepared ${new Date().toLocaleDateString()}  |  ${quoteItems.length} products  |  ${summary.totalQuantity} units`,
                margin,
                y,
            )
            y += 12

            for (const item of quoteItems) {
                const titleLines = pdf.splitTextToSize(
                    item.product.title,
                    contentWidth - 10,
                )
                const detailLines = pdf.splitTextToSize(
                    `Requested quantity: ${item.quantity} units  |  Minimum order confirmed per inquiry`,
                    contentWidth - 10,
                )
                const noteLines = item.notes.trim()
                    ? pdf.splitTextToSize(
                          `Notes: ${item.notes.trim()}`,
                          contentWidth - 10,
                      )
                    : []
                const cardHeight =
                    10 +
                    titleLines.length * 5 +
                    detailLines.length * 5 +
                    noteLines.length * 5

                ensureSpace(cardHeight + 6)
                pdf.setDrawColor(220, 220, 220)
                pdf.roundedRect(margin, y, contentWidth, cardHeight, 2, 2)
                let textY = y + 7
                pdf.setFont("helvetica", "bold")
                pdf.setFontSize(11)
                pdf.text(titleLines, margin + 5, textY)
                textY += titleLines.length * 5
                pdf.setFont("helvetica", "normal")
                pdf.setFontSize(9)
                for (const lines of [detailLines, noteLines]) {
                    if (lines.length > 0) {
                        pdf.text(lines, margin + 5, textY)
                        textY += lines.length * 5
                    }
                }
                y += cardHeight + 6
            }

            const totalPages = pdf.getNumberOfPages()
            for (let page = 1; page <= totalPages; page++) {
                pdf.setPage(page)
                pdf.setFont("helvetica", "normal")
                pdf.setFontSize(8)
                pdf.text(
                    `Page ${page} of ${totalPages}`,
                    pageWidth - margin,
                    pageHeight - 8,
                    { align: "right" },
                )
            }
            pdf.save(`quote-deck-${new Date().toISOString().slice(0, 10)}.pdf`)
            toast.add({
                title: "PDF Exported",
                description: "Your quote deck has been downloaded.",
            })
        } catch (err) {
            console.error("PDF export failed", err)
            toast.add({
                title: "PDF Export Failed",
                description: "Could not generate PDF. Try printing instead.",
            })
            window.print()
        }
    }

    const copyRFQSummary = async () => {
        const lines = [
            "Akara RFQ product request",
            "",
            ...quoteItems.flatMap(({ product, quantity, notes }) => [
                `${product.title} — requested quantity: ${quantity} units; minimum order confirmed per inquiry`,
                ...(notes.trim() ? [`Notes: ${notes.trim()}`] : []),
            ]),
        ]

        try {
            await navigator.clipboard.writeText(lines.join("\n"))
            toast.add({
                title: "RFQ Summary Copied",
                description: "Paste it into an email or message to share.",
            })
        } catch (error) {
            console.error("RFQ summary copy failed", error)
            toast.add({
                title: "Could Not Copy Summary",
                description: "Check clipboard permissions and try again.",
            })
        }
    }

    const summary = {
        totalProducts: quoteItems.length,
        totalQuantity: quoteItems.reduce((sum, item) => sum + item.quantity, 0),
        categories: [
            ...new Set(quoteItems.map((item) => item.product.category)),
        ],
    }

    if (!isLoaded) {
        return (
            <div className="min-h-screen bg-[#faf9f6] text-[#1a1c1a]">
                <SiteHeader />
                <main className="pt-20">
                    <p className="mx-auto max-w-3xl px-4 py-16 text-center text-[#44474c]">
                        Loading your quote deck…
                    </p>
                </main>
                <SiteFooter />
            </div>
        )
    }

    if (quoteItems.length === 0) {
        return (
            <div className="bg-[#faf9f6] text-[#1a1c1a]">
                <SiteHeader />
                <main className="pt-20">
                    <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
                        <h1 className="text-4xl font-bold text-black sm:text-5xl">
                            Your quote deck is empty
                        </h1>
                        <p className="mt-4 text-[#44474c]">
                            Browse our catalog and add products to build your
                            quote request.
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
                            <span className="text-[#4059aa]">Quote Deck</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="px-2 py-0.5 rounded-full bg-[#e9e8e5] text-[#1a1c1a]">
                                {quoteItems.length} Products
                            </span>
                            <span className="px-2 py-0.5 rounded-full bg-[#c87d32] text-white">
                                {summary.totalQuantity} Units
                            </span>
                        </div>
                    </div>
                </section>

                <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:py-12">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6">
                        <div>
                            <h1 className="text-4xl font-bold uppercase text-black sm:text-5xl">
                                Quote Deck
                            </h1>
                            <p className="mt-2 text-sm text-[#44474c]">
                                Review your selected products, add notes, and
                                submit your RFQ.
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                type="button"
                                onClick={copyRFQSummary}
                                className="inline-flex items-center gap-2 rounded bg-[#e9e8e5] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#1a1c1a] hover:bg-[#dbdad7] transition-colors"
                            >
                                <Copy className="h-4 w-4" />
                                Copy Summary
                            </button>
                            <button
                                type="button"
                                onClick={exportToPDF}
                                className="inline-flex items-center gap-2 rounded bg-[#e9e8e5] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#1a1c1a] hover:bg-[#dbdad7] transition-colors"
                            >
                                <Download className="h-4 w-4" />
                                Export PDF
                            </button>
                            <Link
                                href="/contact?source=quote-deck"
                                className="inline-flex items-center gap-2 rounded bg-[#4059aa] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-white hover:bg-[#0f1c2f] transition-colors"
                            >
                                Submit RFQ
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {quoteItems.map((item, index) => (
                            <div
                                key={item.product.slug}
                                className="bg-white rounded-xl p-6 shadow-sm print:break-inside-avoid"
                            >
                                <div className="flex gap-4 lg:gap-6">
                                    <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-[#e9e8e5]">
                                        <Image
                                            src={item.product.image}
                                            alt={`${item.product.title} illustrative reference`}
                                            fill
                                            sizes="96px"
                                            className="object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-start justify-between gap-4">
                                            <div>
                                                <h3 className="text-lg font-bold uppercase text-black">
                                                    {item.product.title}
                                                </h3>
                                                <p className="text-xs text-[#44474c] mt-1">
                                                    Product specifications and
                                                    minimum order confirmed per
                                                    inquiry.
                                                </p>
                                            </div>
                                            {removeConfirmIndex === index ? (
                                                <div className="flex items-center gap-2 p-2 border border-[#c5c6cd] rounded bg-white">
                                                    <span className="text-xs text-[#93000a] font-medium">
                                                        Remove?
                                                    </span>
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            removeItem(index)
                                                        }
                                                        className="p-1 text-xs text-[#ba1a1a] hover:bg-[#ffdad6] rounded transition-colors"
                                                    >
                                                        Yes
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={
                                                            cancelRemoveItem
                                                        }
                                                        className="p-1 text-xs text-[#44474c] hover:bg-[#e9e8e5] rounded transition-colors"
                                                    >
                                                        No
                                                    </button>
                                                </div>
                                            ) : (
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        confirmRemoveItem(index)
                                                    }
                                                    className="p-2 text-[#44474c] hover:text-[#ba1a1a] transition-colors"
                                                    aria-label="Remove item"
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </button>
                                            )}
                                        </div>
                                        <div className="mt-4 grid gap-4 sm:grid-cols-2">
                                            <div>
                                                <label
                                                    htmlFor={`quote-quantity-${item.product.slug}`}
                                                    className="text-sm font-semibold uppercase tracking-[0.14em] text-[#44474c] block mb-1"
                                                >
                                                    Requested quantity
                                                </label>
                                                <input
                                                    id={`quote-quantity-${item.product.slug}`}
                                                    type="number"
                                                    min={getMinimumOrderQuantity(
                                                        item.product,
                                                    )}
                                                    max={
                                                        Number.MAX_SAFE_INTEGER
                                                    }
                                                    step={1}
                                                    value={item.quantity}
                                                    onChange={(e) =>
                                                        updateQuantity(
                                                            index,
                                                            parseInt(
                                                                e.target.value,
                                                                10,
                                                            ) ||
                                                                getMinimumOrderQuantity(
                                                                    item.product,
                                                                ),
                                                        )
                                                    }
                                                    className="w-full px-3 py-2 rounded text-sm border border-[#c5c6cd] bg-[#faf9f6] focus:outline-none focus:border-[#4059aa]"
                                                />
                                                <p className="mt-1 text-xs text-[#596171]">
                                                    Commercial minimum confirmed
                                                    per inquiry.
                                                </p>
                                            </div>
                                            <div>
                                                <label
                                                    htmlFor={`quote-notes-${item.product.slug}`}
                                                    className="text-sm font-semibold uppercase tracking-[0.14em] text-[#44474c] block mb-1"
                                                >
                                                    Notes
                                                </label>
                                                <textarea
                                                    id={`quote-notes-${item.product.slug}`}
                                                    rows={2}
                                                    placeholder="Color, size, wash notes..."
                                                    maxLength={1000}
                                                    value={item.notes}
                                                    onChange={(e) =>
                                                        updateNotes(
                                                            index,
                                                            e.target.value,
                                                        )
                                                    }
                                                    className="w-full resize-y rounded border border-[#c5c6cd] bg-[#faf9f6] px-3 py-2 text-sm focus:border-[#4059aa] focus:outline-none"
                                                />
                                                <p className="mt-1 text-right text-xs text-[#596171]">
                                                    {item.notes.length}/1000
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 bg-[#0f1c2f] rounded-xl p-6 text-white">
                        <h3 className="text-lg font-bold uppercase mb-4">
                            RFQ Summary
                        </h3>
                        <div className="grid gap-3 sm:grid-cols-3">
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-wider text-[#ffdcc1]">
                                    Total Products
                                </p>
                                <p className="text-2xl font-bold">
                                    {summary.totalProducts}
                                </p>
                            </div>
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-wider text-[#ffdcc1]">
                                    Total Quantity
                                </p>
                                <p className="text-2xl font-bold">
                                    {summary.totalQuantity}
                                </p>
                            </div>
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-wider text-[#ffdcc1]">
                                    Categories
                                </p>
                                <p className="text-2xl font-bold">
                                    {summary.categories.length}
                                </p>
                            </div>
                        </div>
                        <Link
                            href="/contact?source=quote-deck"
                            className="mt-6 inline-flex items-center gap-2 rounded bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-black transition hover:bg-[#ffdcc1]"
                        >
                            Submit Complete RFQ
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </section>
            </main>
            <SiteFooter />
        </div>
    )
}
