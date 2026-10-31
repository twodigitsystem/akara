"use client"

import { AlertCircle, Home, RefreshCw } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"

export default function RouteError({
    error,
    retry,
}: {
    error: Error & { digest?: string }
    retry: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-[#faf9f6] px-6 text-center">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#e9e8e5]">
                <AlertCircle className="h-4 w-4 text-[#ba1a1a]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1a1c1a]">
                    System Fault
                </span>
            </div>
            <h1 className="mt-6 text-4xl font-bold uppercase tracking-[-0.05em] text-black sm:text-5xl">
                Something went wrong
            </h1>
            <p className="mt-4 max-w-md text-sm leading-6 text-[#44474c]">
                An unexpected error occurred while processing this page. You can
                retry, or return to the home page.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
                <button
                    type="button"
                    onClick={() => retry()}
                    className="inline-flex items-center gap-2 rounded bg-black px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-[#4059aa]"
                >
                    <RefreshCw className="h-4 w-4" />
                    Try again
                </button>
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 rounded bg-[#e9e8e5] px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#1a1c1a] transition hover:bg-[#dbdad7]"
                >
                    <Home className="h-4 w-4" />
                    Return home
                </Link>
            </div>
        </div>
    )
}
