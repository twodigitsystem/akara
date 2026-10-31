"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"

const faqs = [
    {
        id: "moq",
        question: "What is your minimum order quantity (MOQ)?",
        answer: "Minimum order quantities depend on the product and requirements. Contact our team to confirm the applicable minimum for your inquiry.",
    },
    {
        id: "lead-time",
        question: "What is your typical lead time?",
        answer: "Sampling and production timelines depend on the requirements, materials, and order scope. Our team will confirm an estimated schedule for your inquiry.",
    },
    {
        id: "custom-fabric",
        question: "Do you offer custom fabric development?",
        answer: "Share your fabric and product requirements with our team to discuss development options and confirm what is available.",
    },
    {
        id: "certifications",
        question: "What certifications do you hold?",
        answer: "Please contact our team for current certification and compliance information. Any applicable documents can be confirmed for your inquiry.",
    },
    {
        id: "shipping",
        question: "Do you ship internationally?",
        answer: "Contact our team with your destination and order requirements to confirm available shipping options and documentation.",
    },
    {
        id: "swatches",
        question: "Can I request fabric swatches before ordering?",
        answer: "Contact our team to ask about swatch availability, timing, and shipping options for the materials you have in mind.",
    },
]

export function FAQAccordion() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <div className="mt-8 space-y-4">
            {faqs.map((faq, index) => (
                <div
                    key={faq.id}
                    className="bg-white rounded-xl shadow-sm overflow-hidden"
                >
                    <button
                        type="button"
                        onClick={() =>
                            setOpenIndex(openIndex === index ? null : index)
                        }
                        className="w-full flex items-center justify-between p-5 text-left hover:bg-[#f4f3f0] transition-colors"
                    >
                        <span className="text-sm font-semibold text-black">
                            {faq.question}
                        </span>
                        <ChevronDown
                            className={`h-5 w-5 text-[#44474c] transition-transform ${
                                openIndex === index ? "rotate-180" : ""
                            }`}
                        />
                    </button>
                    {openIndex === index && (
                        <div className="px-5 pb-5 pt-0 text-sm leading-6 text-[#44474c] border-t border-[#e3e2df] mt-0">
                            {faq.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}
