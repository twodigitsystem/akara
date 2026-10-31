"use client"

import { Video } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

export function VirtualTourDialog() {
    const [open, setOpen] = useState(false)

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger
                render={
                    <button
                        type="button"
                        className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded bg-[#e9e8e5] px-5 py-3 text-sm font-semibold text-[#1a1c1a] transition hover:bg-[#dbdad7] sm:w-auto"
                    />
                }
            >
                <Video className="h-4 w-4 text-[#4059aa]" />
                Ask about a walkthrough
            </DialogTrigger>
            <DialogContent className="rounded-none bg-white sm:max-w-xl">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2 text-black">
                        <Video className="h-4 w-4 text-[#4059aa]" />
                        Ask about a virtual walkthrough
                    </DialogTitle>
                    <DialogDescription className="text-[#44474c]">
                        Contact our team to ask about arranging a virtual
                        walkthrough. Availability and format are confirmed
                        individually.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex justify-end gap-2">
                    <Button
                        type="button"
                        variant="ghost"
                        onClick={() => setOpen(false)}
                        className="text-[#44474c]"
                    >
                        Cancel
                    </Button>
                    <Link
                        href="/contact"
                        onClick={() => setOpen(false)}
                        className="inline-flex items-center rounded bg-black px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#4059aa]"
                    >
                        Ask about a walkthrough
                    </Link>
                </div>
            </DialogContent>
        </Dialog>
    )
}
