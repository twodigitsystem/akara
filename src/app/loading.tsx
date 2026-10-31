import Image from "next/image"

export default function Loading() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-[#faf9f6] px-6">
            <Image
                src="/akara-logo.svg"
                alt="Akara Denim & Apparel Mfg"
                width={190}
                height={44}
                priority
                className="h-auto w-[172px] sm:w-[190px] animate-pulse"
            />
            <div className="mt-8 flex flex-col items-center gap-4">
                <div className="flex items-center gap-2">
                    <span
                        className="h-2 w-2 rounded-full bg-[#4059aa] animate-bounce"
                        style={{ animationDelay: "0ms" }}
                    />
                    <span
                        className="h-2 w-2 rounded-full bg-[#4059aa] animate-bounce"
                        style={{ animationDelay: "150ms" }}
                    />
                    <span
                        className="h-2 w-2 rounded-full bg-[#4059aa] animate-bounce"
                        style={{ animationDelay: "300ms" }}
                    />
                </div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#44474c]">
                    Loading technical specifications…
                </p>
            </div>
        </div>
    )
}
