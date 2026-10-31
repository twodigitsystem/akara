"use client"

export function PrintSheetButton() {
    return (
        <button
            type="button"
            onClick={() => window.print()}
            className="rounded bg-[#e9e8e5] px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#1a1c1a]"
        >
            Print sheet
        </button>
    )
}
