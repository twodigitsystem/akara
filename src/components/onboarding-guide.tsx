"use client"

import { ArrowRight, HelpCircle, X } from "lucide-react"
import { useEffect, useState } from "react"

const steps = [
    {
        title: "Browse Our Catalog",
        description:
            "Explore our premium denim and cotton trousers. Use filters to find the perfect match for your needs.",
    },
    {
        title: "Add to Quote Deck",
        description:
            "Use the shopping bag control on a product card to add or remove it from your quote deck.",
    },
    {
        title: "Compare Products",
        description:
            "Use the compare feature to view specifications side-by-side. Select up to 4 products to compare.",
    },
    {
        title: "Request Swatches",
        description:
            "Use the product inquiry form to tell our team what samples or wash development you need.",
    },
    {
        title: "Submit RFQ",
        description:
            "Submit your requirements through the Request for Quote form. A confirmation appears only after successful delivery.",
    },
]

export function OnboardingGuide() {
    const [isOpen, setIsOpen] = useState(false)
    const [currentStep, setCurrentStep] = useState(0)

    useEffect(() => {
        const closeOnEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") setIsOpen(false)
        }
        window.addEventListener("keydown", closeOnEscape)
        return () => window.removeEventListener("keydown", closeOnEscape)
    }, [])

    const dismiss = () => {
        setIsOpen(false)
    }

    const nextStep = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1)
        } else {
            dismiss()
        }
    }

    if (!isOpen) {
        return (
            <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-[#0f1c2f] px-4 py-3 text-xs font-semibold text-white shadow-lg transition hover:bg-[#4059aa]"
            >
                <HelpCircle className="h-4 w-4" />
                Site guide
            </button>
        )
    }

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="site-guide-title"
            className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
        >
            <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-6 animate-scale-in">
                <div className="flex items-center justify-between mb-4">
                    <h2
                        id="site-guide-title"
                        className="text-lg font-bold uppercase text-black"
                    >
                        Welcome to Akara
                    </h2>
                    <button
                        type="button"
                        onClick={dismiss}
                        className="p-2 text-[#44474c] hover:text-black transition-colors"
                        aria-label="Close site guide"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                <div className="mb-6">
                    <div className="flex gap-2 mb-4">
                        {steps.map((step, index) => (
                            <div
                                key={step.title}
                                className={`h-1 flex-1 rounded ${
                                    index <= currentStep
                                        ? "bg-[#4059aa]"
                                        : "bg-[#e9e8e5]"
                                }`}
                            />
                        ))}
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4059aa] text-sm font-bold text-white">
                                {currentStep + 1}
                            </div>
                            <div>
                                <h3 className="font-bold text-black">
                                    {steps[currentStep].title}
                                </h3>
                                <p className="text-sm text-[#44474c] mt-1">
                                    {steps[currentStep].description}
                                </p>
                                {currentStep === steps.length - 1 && (
                                    <p className="mt-3 text-xs leading-5 text-[#44474c]">
                                        Shortcuts: Alt+Shift+Q opens Quote Deck,
                                        Alt+Shift+M opens Compare, and
                                        Alt+Shift+K focuses catalog search.
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <button
                        type="button"
                        onClick={dismiss}
                        className="text-xs font-semibold text-[#44474c] hover:text-black transition-colors"
                    >
                        Skip tour
                    </button>
                    <button
                        type="button"
                        onClick={nextStep}
                        className="inline-flex items-center gap-2 rounded bg-black px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white hover:bg-[#4059aa] transition-colors"
                    >
                        {currentStep === steps.length - 1
                            ? "Get Started"
                            : "Next"}
                        <ArrowRight className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </div>
    )
}
