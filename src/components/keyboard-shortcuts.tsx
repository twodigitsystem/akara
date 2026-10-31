"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"

export function KeyboardShortcuts() {
    const router = useRouter()

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            const target = event.target
            if (
                target instanceof HTMLElement &&
                (target.isContentEditable ||
                    ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName))
            ) {
                return
            }

            if (
                !event.altKey ||
                !event.shiftKey ||
                event.ctrlKey ||
                event.metaKey ||
                event.repeat
            ) {
                return
            }

            const key = event.key.toLowerCase()
            if (key === "q") {
                event.preventDefault()
                router.push("/quote-deck")
            } else if (key === "m") {
                event.preventDefault()
                router.push("/compare")
            } else if (key === "k") {
                event.preventDefault()
                const searchInput = document.querySelector<HTMLInputElement>(
                    'input[name="search"]',
                )
                if (searchInput) searchInput.focus()
                else router.push("/shop")
            } else if (key === "enter") {
                const submitButton = document.querySelector<HTMLButtonElement>(
                    'form button[type="submit"]',
                )
                if (submitButton && !submitButton.disabled) {
                    event.preventDefault()
                    submitButton.click()
                }
            }
        }

        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [router])

    return null
}
