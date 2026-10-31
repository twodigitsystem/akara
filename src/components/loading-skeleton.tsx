export function ProductCardSkeleton() {
    return (
        <div className="flex flex-col overflow-hidden bg-white shadow-sm rounded-xl">
            <div className="aspect-[4/3] bg-[#e9e8e5] animate-pulse" />
            <div className="flex flex-1 flex-col gap-4 p-5">
                <div className="space-y-2">
                    <div className="h-4 w-20 bg-[#e9e8e5] rounded animate-pulse" />
                    <div className="h-6 w-3/4 bg-[#e9e8e5] rounded animate-pulse" />
                    <div className="h-4 w-full bg-[#e9e8e5] rounded animate-pulse" />
                </div>
                <div className="bg-[#f4f3f0] rounded p-3 grid grid-cols-2 gap-2">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="space-y-1">
                            <div className="h-3 w-full bg-[#e9e8e5] rounded animate-pulse" />
                            <div className="h-4 w-2/3 bg-[#e9e8e5] rounded animate-pulse" />
                        </div>
                    ))}
                </div>
                <div className="flex gap-2">
                    <div className="flex-1 h-10 bg-[#e9e8e5] rounded animate-pulse" />
                    <div className="w-10 h-10 bg-[#e9e8e5] rounded animate-pulse" />
                    <div className="w-10 h-10 bg-[#e9e8e5] rounded animate-pulse" />
                </div>
            </div>
        </div>
    )
}
