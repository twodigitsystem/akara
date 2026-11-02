import { AlertTriangle, Home, Package } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-[#faf9f6] px-6 text-center">
            <Image
                src="/akara-logo.svg"
                alt="Akara Denim & Apparel Mfg"
                width={190}
                height={44}
                priority
                style={{ height: "auto" }}
                className="w-[172px] sm:w-[190px]"
            />
            <div className="relative mt-8 h-40 w-full max-w-sm overflow-hidden rounded-xl bg-[#e9e8e5]">
                <Image
                    src="/cinematic_wide_commercial_banner_photography_for_akara_denim_and_apparel_converted.webp"
                    alt="Akara denim and apparel collection"
                    fill
                    sizes="384px"
                    className="object-cover opacity-60"
                />
            </div>
            <div className="mt-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#e9e8e5]">
                <AlertTriangle className="h-4 w-4 text-[#c87d32]" />
                <span className="font-mono text-xs font-bold text-[#1a1c1a] uppercase">
                    ERROR 404
                </span>
            </div>
            <h1 className="mt-6 text-4xl font-bold uppercase tracking-[-0.05em] text-black sm:text-5xl">
                Page not found
            </h1>
            <p className="mt-4 max-w-md text-sm leading-6 text-[#44474c]">
                The technical specification or page you are looking for does not
                exist or has been moved to a new registry.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                    href="/shop"
                    className="inline-flex items-center gap-2 rounded bg-black px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-[#4059aa]"
                >
                    <Package className="h-4 w-4" />
                    Browse catalog
                </Link>
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
