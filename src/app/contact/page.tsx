import type { Metadata } from "next"
import { ContactPage } from "./_components/contact-page"

export const metadata: Metadata = {
    title: "B2B Quotation & Sample Development",
    description:
        "Request Akara product samples, wash developments, and wholesale production rates.",
}

export default function Page() {
    return <ContactPage />
}
